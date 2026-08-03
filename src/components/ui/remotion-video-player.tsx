import React from 'react';
import { Player } from '@remotion/player';

export interface RemotionCompositionProps {
  title?: string;
  subtitle?: string;
}

export const VideoGenComposition: React.FC<RemotionCompositionProps> = ({
  title = "VideoGen AI Pipeline",
  subtitle = "Zero API Cost • Local Prompt-to-MP4 Engine",
}) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center border border-[rgba(212,168,83,0.2)] rounded-xl shadow-2xl">
      <div className="w-16 h-16 rounded-full bg-[rgba(212,168,83,0.15)] border border-[var(--accent-gold)] flex items-center justify-center mb-4 animate-pulse">
        <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase font-mono mb-2 drop-shadow-[0_0_12px_rgba(212,168,83,0.3)]">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-300 font-mono tracking-wider">
        {subtitle}
      </p>
      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(56,189,248,0.1)] border border-sky-400/30 text-sky-400 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
        REMOTION REACT VIDEO ENGINE
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
