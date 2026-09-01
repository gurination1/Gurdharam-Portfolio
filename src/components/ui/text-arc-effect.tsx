import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TextArcProps {
  text: string;
  diameter?: number;
  className?: string;
  textClassName?: string;
}

/**
 * Renders text characters in an animated circular arc.
 */
export const TextArc: React.FC<TextArcProps> = ({ 
  text, 
  diameter = 280, 
  className = '',
  textClassName = 'text-xs md:text-sm font-bold font-mono tracking-widest text-[#d4a853]'
}) => {
  const characters = text.split('');
  const radius = diameter / 2;
  const angleStep = 360 / Math.max(characters.length, 1);

  return (
    <div 
      className={`relative select-none pointer-events-none ${className}`} 
      style={{ width: `${diameter}px`, height: `${diameter}px` }}
    >
      {characters.map((char, index) => {
        const angle = angleStep * index;
        const charStyle: React.CSSProperties = {
          position: 'absolute',
          height: `${radius}px`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'bottom center',
          top: 0,
          left: '50%',
          marginLeft: '-0.5em',
        };

        return (
          <div key={index} style={charStyle}>
            <span className={textClassName}>
              {char}
            </span>
          </div>
        );
      })}
    </div>
  );
};

interface TextArcEffectProps {
  text?: string;
  diameter?: number;
  duration?: number;
  children?: React.ReactNode;
  className?: string;
}

export function TextArcEffect({
  text = "• GURDHARAM JEET SINGH • AI & WEB ARCHITECT •",
  diameter: customDiameter,
  duration = 20,
  children,
  className = '',
}: TextArcEffectProps) {
  const [diameter, setDiameter] = useState(customDiameter || 310);

  useEffect(() => {
    if (customDiameter) {
      setDiameter(customDiameter);
      return;
    }

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
  }, [customDiameter]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Animated Rotating Arc Text around the picture */}
      <motion.div
        className="absolute pointer-events-none z-10"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration,
          ease: 'linear',
        }}
      >
        <TextArc text={text} diameter={diameter} />
      </motion.div>

      {/* Central Picture / Component */}
      <div className="relative z-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// Standalone Component for shadcn / demo compatibility
export function Component() {
  return (
    <TextArcEffect text="• THANK YOU • FOR VISITING •" diameter={260}>
      <img
        src="https://vucvdpamtrjkzmubwlts.supabase.co/storage/v1/object/public/users/user_2zMtrqo9RMaaIn4f8F2z3oeY497/avatar.png"
        alt="Logo"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
        onError={(e: any) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/27272a/ffffff?text=Logo'; }}
      />
    </TextArcEffect>
  );
}

export default TextArcEffect;
