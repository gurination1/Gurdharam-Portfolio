import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { TextArc } from './text-arc-effect';

const PIXELS = [
  1, 1.5, 2, 2.5, 3, 1, 1.5, 2, 2.5, 3, 3.5, 4, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6,
  3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 20, 100,
].map((v) => v / 100);

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec3 uFillColor;
  uniform float uProgress;
  uniform float uType;
  uniform float uPixels[36];
  uniform vec2 uTextureSize;
  uniform vec2 uElementSize;
  uniform sampler2D uTexture;
  varying vec2 vUv;

  vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
  }
  
  vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
  }

  float hashwithoutsine12(vec2 p){
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  // Classic Perlin 2D Noise
  vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  
  float cnoise(vec2 P){
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x, gy.x);
    vec2 g10 = vec2(gx.y, gy.y);
    vec2 g01 = vec2(gx.z, gy.z);
    vec2 g11 = vec2(gx.w, gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * 
      vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
  }

  float PristineGrid(vec2 uv, vec2 lineWidth){
    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));
    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));
    bool invertLine = lineWidth.x > 0.5;
    vec2 targetWidth = invertLine ? vec2(1.0) - lineWidth : lineWidth;
    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));
    vec2 lineAA = max(uvDeriv, 0.000001) * 5.5;
    vec2 gridUV = abs(fract(uv) * 2.0 - 1.0);
    gridUV = invertLine ? gridUV : 1.0 - gridUV;
    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);
    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);
    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - vec2(1.0), vec2(0.0), vec2(1.0)));
    grid2 = invertLine ? 1.0 - grid2 : grid2;
    return mix(grid2.x, 1.0, grid2.y);
  }

  float cubicOut(float t) {
    float f = t - 1.0;
    return f * f * f + 1.0;
  }
  float quadraticOut(float t) {
    return -t * (t - 2.0);
  }
  float mapVal(float value, float min1, float max1, float min2, float max2) {
    float val = min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    return clamp(val, min2, max2);
  }
  float cubicInOut(float t) {
    return t < 0.5
      ? 4.0 * t * t * t
      : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
  }
  float quadraticInOut(float t) {
    float p = 2.0 * t * t;
    return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
  }
  float parabola(float x, float k) {
    return pow(4.0 * x * (1.0 - x), k);
  }

  void main() {
    vec2 uv = vUv - vec2(0.5);
    float aspect1 = uTextureSize.x / max(uTextureSize.y, 1.0);
    float aspect2 = uElementSize.x / max(uElementSize.y, 1.0);
    if(aspect1 > aspect2) {
      uv *= vec2(aspect2 / aspect1, 1.0);
    } else {
      uv *= vec2(1.0, aspect1 / aspect2);
    }
    uv += vec2(0.5);
    float uAspect = uElementSize.x / max(uElementSize.y, 1.0);
    float imageAspect = uTextureSize.x / max(uTextureSize.y, 1.0);

    vec4 defaultColor = texture2D(uTexture, uv);

    if(uType == 0.0) {
      float pixelateProgress = mapVal(uProgress, 0.3, 1.0, 0.0, 1.0);
      pixelateProgress = floor(pixelateProgress * 12.0) / 12.0;
      float s = floor(mix(11.0, 50.0, quadraticOut(pixelateProgress)));
      vec2 gridSize = vec2(s, floor(s / max(uAspect, 0.1)));

      vec2 newUV = floor(vUv * gridSize) / gridSize + 0.5 / gridSize;
      vec4 color = texture2D(uTexture, newUV);
      float finalProgress = mapVal(uProgress, 0.75, 1.0, 0.0, 1.0);
      color = mix(color, defaultColor, finalProgress);

      float lines = PristineGrid(vUv * gridSize, vec2(0.2 * (1.0 - uProgress)));

      float discardProgress = mapVal(uProgress, 0.0, 0.8, 0.0, 1.0);
      if(vUv.x > cubicOut(discardProgress)) discard;

      vec3 fillColor = uFillColor;
      float gradWidth = mix(0.4, 0.2, uProgress);
      float customProg = mapVal(cubicInOut(uProgress), 0.0, 1.0, -gradWidth, 1.0 - gradWidth);
      float fillGradient = smoothstep(customProg, customProg + gradWidth, vUv.x);

      gl_FragColor.a = 1.0;
      gl_FragColor.rgb = blendNormal(vec3(1.0 - lines), color.rgb, 0.9);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, fillColor, fillGradient);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, defaultColor.rgb, finalProgress);

    } else if(uType == 1.0) {
      float hash = hashwithoutsine12(vUv * 1000.0 + floor(uTime * 3.0) * 0.1);
      vec3 fillColor = uFillColor;
      fillColor += (vec3(hash) - vec3(0.5)) * 0.2;

      float n = (cnoise(vUv * vec2(35.0, 1.0)) + 1.0) * 0.5;
      float dt = parabola(cubicInOut(uProgress), 1.0);
      vec2 distUV = uv;
      distUV.y = 1.0 - (1.0 - uv.y) * (1.0 - dt * 0.3);
      defaultColor = texture2D(uTexture, distUV);
      float width = 1.0;
      float w = width * dt;

      float maskvalue = smoothstep(1.0 - w, 1.0, vUv.y + mix(-w / 2.0, 1.0 - w / 2.0, cubicInOut(uProgress)));
      float mask = maskvalue + maskvalue * n;
      float final = smoothstep(1.0, 1.01, mask);
      float dist = -0.5;
      float final1 = smoothstep(1.0, 1.01, mask - dist);
      if(final1 == 0.0) discard;

      vec3 finalColor = mix(fillColor, defaultColor.rgb, final);
      gl_FragColor = vec4(finalColor, 1.0);

    } else if(uType == 2.0) {
      float s = 120.0;
      vec2 gridSize = vec2(s, floor(s / max(uAspect, 0.1)));
      vec2 newUV = floor(vUv * gridSize);
      float pattern = hashwithoutsine12(newUV);

      float w = 0.5;
      float p0 = clamp((uProgress - 0.0) / 0.8, 0.0, 1.0);
      float p1 = clamp((uProgress - 0.2) / 0.8, 0.0, 1.0);

      p0 = mapVal(p0, 0.0, 1.0, -w, 1.0);
      p0 = smoothstep(p0, p0 + w, 1.0 - vUv.y);
      float p0_ = clamp(1.0 - 2.0 * p0 + pattern, 0.0, 1.0);

      p1 = mapVal(p1, 0.0, 1.0, -w, 1.0);
      p1 = smoothstep(p1, p1 + w, 1.0 - vUv.y);
      float p1_ = clamp(1.0 - 2.0 * p1 + pattern, 0.0, 1.0);

      vec3 finalColor = mix(uFillColor, defaultColor.rgb, p1_);
      gl_FragColor = vec4(finalColor, p0_);

    } else if(uType == 3.0) {
      float progress = quadraticInOut(1.0 - uProgress);
      float s = 50.0;
      vec2 gridSize = vec2(s, floor(s / max(imageAspect, 0.1)));

      float v = smoothstep(0.0, 1.0, vUv.y + sin(vUv.x * 4.0 + progress * 6.0) * mix(0.3, 0.1, abs(0.5 - vUv.x)) * 0.5 * smoothstep(0.0, 0.2, progress) + (1.0 - progress * 2.0));
      float mixnewUV = (vUv.x * 3.0 + (1.0 - v) * 50.0) * progress;
      vec2 subUv = mix(uv, floor(uv * gridSize) / gridSize, mixnewUV);

      vec4 color = texture2D(uTexture, subUv);
      color.a = pow(v, 1.0);
      color.rgb = mix(color.rgb, uFillColor, smoothstep(0.5, 0.0, abs(0.5 - color.a)) * progress);
      gl_FragColor = color;

    } else {
      int indexProgress = int(clamp(uProgress * 35.0, 0.0, 35.0));
      float pixFactor = uPixels[indexProgress];
      float pixellation = max(6.0, floor(uElementSize.x * pixFactor));

      vec2 gridSize = vec2(pixellation, floor(pixellation / max(imageAspect, 0.1)));
      vec2 newUV = floor(uv * gridSize) / gridSize + 0.5 / gridSize;
      vec4 color = texture2D(uTexture, newUV);
      float reveal = smoothstep(0.0, 0.12, uProgress);
      gl_FragColor = vec4(mix(uFillColor, color.rgb, reveal), 1.0);
    }

    gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(1.0 / 2.2));
  }
`;

interface CodropsEmergingImageProps {
  src?: string;
  cutoutSrc?: string;
  arcText?: string;
  fillColor?: string;
  className?: string;
  type?: number;
}

export default function CodropsEmergingImage({
  src = '/assets/gurdharam-portrait-bg.jpg',
  cutoutSrc = '/assets/gurdharam-cutout.png',
  arcText = '• GURDHARAM ENTERPRISE STUDIO • AI & WEB ARCHITECTURE •',
  fillColor = '#d4a853',
  className = '',
  type = 0,
}: CodropsEmergingImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fallbackMode, setFallbackMode] = useState<boolean>(false);
  const [diameter, setDiameter] = useState<number>(310);

  const threeRefs = useRef<{
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    material: THREE.ShaderMaterial | null;
    mesh: THREE.Mesh | null;
    texture: THREE.Texture | null;
    animTween: gsap.core.Tween | null;
    reqId: number | null;
    clock: THREE.Clock;
    isIntersecting: boolean;
  }>({
    renderer: null,
    scene: null,
    camera: null,
    material: null,
    mesh: null,
    texture: null,
    animTween: null,
    reqId: null,
    clock: new THREE.Clock(),
    isIntersecting: false,
  });

  const triggerEmerge = useCallback(() => {
    const refs = threeRefs.current;
    if (!refs.material) return;

    if (refs.animTween) {
      refs.animTween.kill();
    }

    refs.material.uniforms.uProgress.value = 0;

    refs.animTween = gsap.to(refs.material.uniforms.uProgress, {
      value: 1,
      duration: 1.5,
      ease: 'power2.out',
      overwrite: true,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDiameter(260);
      } else {
        setDiameter(310);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const refs = threeRefs.current;
    let isDisposed = false;

    try {
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2));
      refs.renderer = renderer;

      const scene = new THREE.Scene();
      refs.scene = scene;

      const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
      camera.position.z = 1;
      refs.camera = camera;

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        src,
        (tex) => {
          if (isDisposed) return;
          tex.generateMipmaps = true;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          refs.texture = tex;

          const rect = container.getBoundingClientRect();
          const width = Math.max(1, rect.width);
          const height = Math.max(1, rect.height);

          renderer.setSize(width, height, false);

          const uniforms = {
            uTime: { value: 0 },
            uFillColor: { value: new THREE.Color(fillColor) },
            uProgress: { value: 0 },
            uType: { value: type },
            uPixels: { value: PIXELS },
            uTexture: { value: tex },
            uTextureSize: {
              value: new THREE.Vector2(tex.image.width || 1024, tex.image.height || 1024),
            },
            uElementSize: { value: new THREE.Vector2(width, height) },
          };

          const material = new THREE.ShaderMaterial({
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
            uniforms,
            transparent: true,
            depthTest: false,
            depthWrite: false,
          });
          refs.material = material;

          const geometry = new THREE.PlaneGeometry(1, 1);
          const mesh = new THREE.Mesh(geometry, material);
          refs.mesh = mesh;
          scene.add(mesh);

          setIsLoaded(true);

          if (refs.isIntersecting) {
            triggerEmerge();
          }
        },
        undefined,
        (err) => {
          console.warn('Fallback: texture loading fallback active.', err);
          setFallbackMode(true);
          setIsLoaded(true);
        }
      );

      // Animation Loop
      let running = true;
      const animate = () => {
        if (!running || isDisposed) return;
        if (refs.material) {
          refs.material.uniforms.uTime.value = refs.clock.getElapsedTime();
        }
        if (refs.renderer && refs.scene && refs.camera) {
          refs.renderer.render(refs.scene, refs.camera);
        }
        refs.reqId = requestAnimationFrame(animate);
      };
      refs.reqId = requestAnimationFrame(animate);

      // Resize observer
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (width > 0 && height > 0 && refs.renderer && refs.material) {
            refs.renderer.setSize(width, height, false);
            refs.material.uniforms.uElementSize.value.set(width, height);
          }
        }
      });
      resizeObserver.observe(container);

      // Scroll-triggered IntersectionObserver
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          refs.isIntersecting = entry.isIntersecting;
          if (entry.isIntersecting) {
            triggerEmerge();
          }
        },
        { threshold: 0.15 }
      );
      intersectionObserver.observe(container);

      return () => {
        isDisposed = true;
        running = false;
        if (refs.reqId !== null) cancelAnimationFrame(refs.reqId);
        if (refs.animTween) refs.animTween.kill();
        resizeObserver.disconnect();
        intersectionObserver.disconnect();

        if (refs.mesh) {
          refs.mesh.geometry.dispose();
          scene.remove(refs.mesh);
        }
        if (refs.material) refs.material.dispose();
        if (refs.texture) refs.texture.dispose();
        if (refs.renderer) refs.renderer.dispose();
      };
    } catch (e) {
      console.warn('WebGL not available; fallback 2D active.', e);
      setFallbackMode(true);
      setIsLoaded(true);
      return () => {
        isDisposed = true;
      };
    }
  }, [src, fillColor, type, triggerEmerge]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center aspect-[4/5] w-full max-w-[320px] rounded-2xl border border-white/10 bg-[#0d0d0d]/70 shadow-2xl backdrop-blur-sm group transition-all duration-300 hover:border-[#d4a853]/40 ${className}`}
      onMouseEnter={triggerEmerge}
    >
      {/* 1. Base Layer (z-0): WebGL Emerging Background Image */}
      <div className="relative z-0 h-full w-full overflow-hidden rounded-2xl">
        {!fallbackMode ? (
          <canvas ref={canvasRef} className="h-full w-full block object-cover" />
        ) : (
          <img
            src={src}
            alt="Gurdharam Portrait Background"
            className="h-full w-full object-cover"
          />
        )}

        {!isLoaded && !fallbackMode && (
          <img
            src={src}
            alt="Gurdharam Portrait Background"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}
      </div>

      {/* 2. Middle Layer (z-10): Rotating Text Arc Animation (BEHIND foreground cutout) */}
      {arcText && (
        <motion.div
          className="absolute pointer-events-none z-10 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          <TextArc 
            text={arcText} 
            diameter={diameter} 
            textClassName="text-[0.72rem] md:text-[0.82rem] font-bold font-mono tracking-widest text-[#d4a853] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          />
        </motion.div>
      )}

      {/* 3. Top Layer (z-20): Cutout PNG on TOP of the text animation */}
      {cutoutSrc && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center overflow-hidden rounded-2xl">
          <img
            src={cutoutSrc}
            alt="Gurdharam Jeet Singh Foreground"
            className="h-full w-full object-cover object-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}
