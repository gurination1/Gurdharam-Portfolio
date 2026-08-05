import React from 'react';
import { Player } from '@remotion/player';
import { useCurrentFrame, interpolate, spring } from 'remotion';

export interface SceneData {
  id: number;
  title: string;
  subtitle: string;
  caption: string;
  badge: string;
}

export const SCENES: SceneData[] = [
  { id: 1, title: "01 // SCRIPT & PROMPT PARSER", subtitle: "LLM Parsing → Keyframe Scene Specs", caption: "Input prompt split into 4 clip specs in 42ms.", badge: "PARSING OK" },
  { id: 2, title: "02 // LOCAL ASSET SYNTHESIS", subtitle: "ComfyUI + Whisper Offline Pipelines", caption: "Generating 1080p keyframes & voiceover ($0.00 API).", badge: "100% LOCAL GPU" },
  { id: 3, title: "03 // REMOTION REACT VIDEO STACK", subtitle: "Programmatic Keyframes & Spring Physics", caption: "Applying kinetic typography & audio spectrum visualizer.", badge: "60 FPS CANVAS" },
  { id: 4, title: "04 // NVENC MP4 ENCODING", subtitle: "FFmpeg Hardware Acceleration", caption: "Video compiled: 1080x1920 MP4 rendered in 1.4s.", badge: "RENDER COMPLETE" }
];

export const VideoGenComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const sceneIndex = Math.min(Math.floor(frame / 30), SCENES.length - 1);
  const activeScene = SCENES[sceneIndex];

  const opacity = spring({ frame: frame % 30, fps, config: { damping: 12 } });
  const scale = interpolate(frame % 30, [0, 15, 30], [0.95, 1, 0.98]);

  return (
    <div className="relative w-full h-full bg-slate-950 text-white flex flex-col justify-between p-4 md:p-6 overflow-hidden border border-sky-500/20 rounded-2xl shadow-2xl font-mono">
      {/* HUD Header */}
      <div className="flex items-center justify-between z-10 text-[10px] md:text-xs">
        <div className="flex items-center gap-2 px-2.5 py-1 bg-sky-500/10 border border-sky-400/30 rounded-full text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          {activeScene.badge}
        </div>
        <span className="text-slate-400 font-semibold">[REC ●] {frame}/120 F</span>
      </div>

      {/* Main Content Scene */}
      <div style={{ opacity, transform: `scale(${scale})` }} className="my-auto text-center z-10">
        <h3 className="text-base md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-amber-300 uppercase tracking-wider mb-1">
          {activeScene.title}
        </h3>
        <p className="text-[10px] md:text-xs text-sky-200/80 mb-3">{activeScene.subtitle}</p>
        <div className="inline-block px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg text-xs text-amber-300 shadow-lg">
          "{activeScene.caption}"
        </div>
      </div>

      {/* Footer Stats & Audio Wave Visualizer */}
      <div className="flex items-end justify-between z-10 text-[10px] text-slate-400 border-t border-slate-800 pt-2">
        <div>
          <div>RENDER TIME: <span className="text-sky-400 font-bold">1.4s</span></div>
          <div>API COST: <span className="text-amber-400 font-bold">$0.00</span></div>
        </div>
        <div className="flex items-end gap-1 h-4">
          {[0.6, 1.2, 0.8, 1.5, 0.9, 1.1, 0.7, 1.3].map((heightFactor, i) => (
            <span
              key={i}
              className="w-1 bg-sky-400/80 rounded-t"
              style={{ height: `${Math.abs(Math.sin((frame + i * 5) * 0.15)) * heightFactor * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const RemotionVideoPlayer: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-[rgba(240,237,230,0.12)] shadow-2xl bg-[#080808]">
      <Player
        component={VideoGenComposition}
        durationInFrames={120}
        compositionWidth={640}
        compositionHeight={360}
        fps={30}
        controls
        loop
        autoPlay
        style={{
          width: '100%',
          aspectRatio: '16/9',
        }}
      />
    </div>
  );
};

export default RemotionVideoPlayer;

