"use client";

import React, { useEffect, useRef } from 'react';
import type * as ThreeModule from 'three';

interface LiquidGradientProps {
  title?: string;
  showPauseButton?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  accent?: string;
}

interface FlowGradientTextureProps {
  className?: string;
  accent?: string;
  intensity?: number;
}

function cssColorToVector(THREE: typeof ThreeModule, color?: string) {
  const fallback = new THREE.Color('#d4a853');

  if (!color || typeof window === 'undefined') return fallback;
  const probe = document.createElement('span');
  probe.style.color = color;
  probe.style.position = 'absolute';
  probe.style.pointerEvents = 'none';
  probe.style.opacity = '0';
  document.body.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  probe.remove();

  const match = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return fallback;

  return new THREE.Color(
    Number(match[1]) / 255,
    Number(match[2]) / 255,
    Number(match[3]) / 255
  );
}

export function FlowGradientTexture({ className = '', accent, intensity = 1.45 }: FlowGradientTextureProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<{
    dispose: () => void;
    setAccent: (value?: string) => void;
  } | null>(null);
  const threeRef = useRef<typeof ThreeModule | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let disposeApp: (() => void) | null = null;

    import('three').then((THREE) => {
      if (disposed || !mount.isConnected) return;
      threeRef.current = THREE;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearAlpha(0);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.style.display = 'block';
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uAccent: { value: cssColorToVector(THREE, accent) },
      uNavy: { value: new THREE.Color('#0a0e27') },
      uCharcoal: { value: new THREE.Color('#101010') },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uPointerStrength: { value: 0 },
      uIntensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: false,
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uAccent;
        uniform vec3 uNavy;
        uniform vec3 uCharcoal;
        uniform vec2 uPointer;
        uniform float uPointerStrength;
        uniform float uIntensity;
        varying vec2 vUv;

        float grain(vec2 uv, float t) {
          return fract(sin(dot(uv * uResolution + t, vec2(12.9898, 78.233))) * 43758.5453);
        }

        float blob(vec2 uv, vec2 center, float radius) {
          return 1.0 - smoothstep(0.0, radius, length(uv - center));
        }

        void main() {
          vec2 uv = vUv;
          float t = uTime * 0.18;
          float aspect = max(uResolution.x / max(uResolution.y, 1.0), 0.5);
          vec2 flowUv = vec2((uv.x - 0.5) * aspect + 0.5, uv.y);

          float touch = blob(flowUv, vec2((uPointer.x - 0.5) * aspect + 0.5, uPointer.y), 0.38) * uPointerStrength;
          float ripple = sin(length(flowUv - vec2(0.5)) * 24.0 - uTime * 2.6) * 0.025 * touch;
          flowUv += vec2(ripple, ripple * 0.55);

          vec2 c1 = vec2(0.46 + sin(t * 1.7) * 0.36, 0.42 + cos(t * 1.2) * 0.34);
          vec2 c2 = vec2(0.58 + cos(t * 1.1) * 0.48, 0.54 + sin(t * 1.45) * 0.36);
          vec2 c3 = vec2(0.48 + sin(t * 0.9 + 1.6) * 0.42, 0.62 + cos(t * 1.6) * 0.32);
          vec2 c4 = vec2(0.36 + cos(t * 1.4 + 2.2) * 0.42, 0.48 + sin(t * 1.1) * 0.38);

          float a = blob(flowUv, c1, 0.58);
          float b = blob(flowUv, c2, 0.52);
          float c = blob(flowUv, c3, 0.46);
          float d = blob(flowUv, c4, 0.5);

          vec3 blue = vec3(0.055, 0.105, 0.26);
          vec3 orange = mix(uAccent, vec3(0.945, 0.353, 0.133), 0.52);
          vec3 color = mix(uCharcoal, uNavy, 0.68);
          color = mix(color, orange, clamp(a * 0.7 + c * 0.38 + touch * 0.42, 0.0, 1.0));
          color = mix(color, blue, clamp(b * 0.84 + d * 0.42, 0.0, 1.0));
          color += orange * c * 0.2;
          color += vec3(grain(uv, uTime) - 0.5) * 0.09;
          color = clamp(color * uIntensity, 0.0, 1.0);

          float vignette = smoothstep(0.9, 0.18, length(uv - vec2(0.5)));
          float alpha = 0.58 + vignette * 0.34;
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      uniforms.uPointer.value.set(
        (event.clientX - rect.left) / Math.max(rect.width, 1),
        1 - (event.clientY - rect.top) / Math.max(rect.height, 1)
      );
      uniforms.uPointerStrength.value = 1;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    mount.addEventListener('pointermove', onPointerMove);
    resize();

    let frame = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const delta = Math.min(clock.getDelta(), 0.08);
      if (!reduceMotion) {
        uniforms.uTime.value += delta;
        uniforms.uPointerStrength.value *= 0.94;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    appRef.current = {
      setAccent: (value?: string) => {
        uniforms.uAccent.value.copy(cssColorToVector(THREE, value));
      },
      dispose: () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        mount.removeEventListener('pointermove', onPointerMove);
        material.dispose();
        mesh.geometry.dispose();
        renderer.dispose();
        if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
      },
    };

      disposeApp = appRef.current.dispose;
    });

    return () => {
      disposed = true;
      disposeApp?.();
      appRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!threeRef.current) return;
    appRef.current?.setAccent(accent);
  }, [accent]);

  return <div ref={mountRef} className={`flow-gradient-texture ${className}`} aria-hidden="true" />;
}

export default function LiquidGradient({
  title = 'Liquid Gradient',
  showPauseButton = false,
  ctaText = 'Explore More',
  onCtaClick,
  className = '',
  accent,
}: LiquidGradientProps) {
  return (
    <div className={`liquid-container ${className}`}>
      <FlowGradientTexture accent={accent} className="liquid-canvas-wrapper" />
      <h1 className="title-main dark">{title}</h1>
      {ctaText ? (
        <button className="cta-btn dark" onClick={onCtaClick}>
          {ctaText}
        </button>
      ) : null}
      {showPauseButton ? null : null}
    </div>
  );
}

export { LiquidGradient as Component };
