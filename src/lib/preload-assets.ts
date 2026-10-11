/**
 * Real asset preloader for 3D Spline scene, WebGL runtime, fonts, and critical media.
 * Reports actual byte-level & resource progress (0 - 100%) to power the functional preloader.
 */
export function preloadInitialAssets(onProgress: (percent: number) => void): Promise<void> {
  return new Promise((resolve) => {
    let splineProgress = 0;
    let handshakeProgress = 0;
    let fontsDone = false;
    let splineLibraryDone = false;
    let mediaDone = false;
    let resolved = false;

    const calcCombined = () => {
      // Spline 3D binary scene: 60% of total loading weight
      // Spline React/WebGL runtime: 20%
      // Web typography fonts: 10%
      // Key video posters: 10%
      const effectiveSpline = Math.max(splineProgress, handshakeProgress);
      const total =
        effectiveSpline * 0.6 +
        (splineLibraryDone ? 20 : 0) +
        (fontsDone ? 10 : 0) +
        (mediaDone ? 10 : 0);
      return Math.min(100, Math.round(total));
    };

    const update = () => {
      const p = calcCombined();
      onProgress(p);
      if (p >= 100 && !resolved) {
        resolved = true;
        resolve();
      }
    };

    // Smooth handshake ramp while network establishes connection (0 -> 24%)
    const handshakeTimer = setInterval(() => {
      if (splineProgress > 0 || resolved) {
        clearInterval(handshakeTimer);
        return;
      }
      handshakeProgress = Math.min(24, handshakeProgress + 2);
      update();
    }, 60);

    // 1. Fetch Spline 3D scene (.splinecode) with real chunk byte tracking
    const splineSceneUrl = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
    fetch(splineSceneUrl)
      .then(async (response) => {
        clearInterval(handshakeTimer);
        if (!response.ok) {
          splineProgress = 100;
          update();
          return;
        }
        const totalBytes = parseInt(response.headers.get('content-length') || '1349622', 10);
        const reader = response.body?.getReader();
        if (!reader) {
          splineProgress = 100;
          update();
          return;
        }
        let receivedBytes = 0;
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          receivedBytes += value.length;
          splineProgress = Math.min(100, (receivedBytes / totalBytes) * 100);
          update();
        }
        splineProgress = 100;
        update();
      })
      .catch((err) => {
        clearInterval(handshakeTimer);
        console.warn('Spline 3D preload fallback:', err);
        splineProgress = 100;
        update();
      });

    // 2. Pre-import Spline React runtime
    import('@splinetool/react-spline')
      .then(() => {
        splineLibraryDone = true;
        update();
      })
      .catch(() => {
        splineLibraryDone = true;
        update();
      });

    // 3. Document fonts ready
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          fontsDone = true;
          update();
        })
        .catch(() => {
          fontsDone = true;
          update();
        });
    } else {
      fontsDone = true;
      update();
    }

    // 4. Critical video posters
    const posters = [
      '/assets/portfolio/calling-agent-poster.jpg',
      '/assets/portfolio/whatsapp-bot-poster.jpg',
      '/assets/portfolio/cow-video-poster.jpg',
    ];
    let loadedPosters = 0;
    posters.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedPosters++;
        if (loadedPosters >= posters.length) {
          mediaDone = true;
          update();
        }
      };
      img.src = src;
    });

    // 5. Hard safety timeout (3.5s) to guarantee site always proceeds smoothly
    setTimeout(() => {
      clearInterval(handshakeTimer);
      splineProgress = 100;
      splineLibraryDone = fontsDone = mediaDone = true;
      onProgress(100);
      if (!resolved) {
        resolved = true;
        resolve();
      }
    }, 3500);
  });
}
