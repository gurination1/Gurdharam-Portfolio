"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-10 w-[120px] md:w-[140px] flex-shrink-0 items-center justify-center px-4">
      <img
        alt={logo.alt}
        src={logo.src}
        loading="lazy"
        className="pointer-events-none max-h-6 md:max-h-7 max-w-[100px] md:max-w-[115px] select-none object-contain opacity-80 hover:opacity-100 transition-opacity filter brightness-0 invert"
      />
    </div>
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
}: {
  logos: Logo[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-7xl mx-auto overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="logo-marquee-track">
        <div className="flex flex-nowrap items-center">
          {logos.map((logo, i) => (
            <LogoImage key={`${logo.alt}-${i}`} logo={logo} />
          ))}
        </div>
        <div className="flex flex-nowrap items-center" aria-hidden="true">
          {logos.map((logo, i) => (
            <LogoImage key={`dup-${logo.alt}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;
