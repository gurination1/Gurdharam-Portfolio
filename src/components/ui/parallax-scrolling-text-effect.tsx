import {
  motion,
  MotionValue,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { createContext, useContext } from "react";

type VelocityTextProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
};

interface VelocityContextValue {
  skewX: MotionValue<string>;
  x: MotionValue<number>;
}

const VelocityContext = createContext<VelocityContextValue | null>(null);

/**
 * Wrap a group of VelocityText components with this provider so they all
 * share ONE useScroll/useVelocity/useSpring chain instead of each creating their own.
 * Reduces 40+ scroll listeners to 1.
 */
export function VelocityTextProvider({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const skewXRaw = useTransform(scrollVelocity, [-1800, 1800], ["8deg", "-8deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollVelocity, [-1800, 1800], [-16, 16]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <VelocityContext.Provider value={{ skewX, x }}>
      {children}
    </VelocityContext.Provider>
  );
}

/** Standalone component used when not wrapped in a provider (for backward compatibility) */
function StandaloneVelocityText({ text, children, className = "" }: VelocityTextProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewXRaw = useTransform(scrollVelocity, [-1800, 1800], ["8deg", "-8deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  const xRaw = useTransform(scrollVelocity, [-1800, 1800], [-16, 16]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  const defaultText =
    "Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On!' has solved and always will solve the problems of the human race.";

  return (
    <motion.span
      style={{ skewX, x }}
      className={`inline-block origin-bottom-left whitespace-nowrap ${className}`}
    >
      {children ?? text ?? defaultText}
    </motion.span>
  );
}

export const VelocityText = ({ text, children, className = "" }: VelocityTextProps) => {
  const ctx = useContext(VelocityContext);
  if (ctx) {
    return (
      <motion.span
        style={{ skewX: ctx.skewX, x: ctx.x }}
        className={`inline-block origin-bottom-left whitespace-nowrap ${className}`}
      >
        {children ?? text}
      </motion.span>
    );
  }
  return <StandaloneVelocityText text={text} className={className}>{children}</StandaloneVelocityText>;
};
