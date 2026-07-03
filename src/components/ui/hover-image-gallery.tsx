"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HoverImageGalleryProps {
  images?: string[];
}

const defaultImages = [
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-copy/andy-warhol-screenprint-marilyn-30-for-sale-not-ours-550x547.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-fs30/warholmarilynfs30-548x550.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-8/andy-warhol-screenprint-marilyn-monroe-for-sale-use-548x550.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-3/warhol-screenprint-marilyn-monroe-marilyn-1967-for-sale-543x550.jpg",
  "https://images.masterworksfineart.com/warhol-screenprint-marilyn-monroe-marilyn-1967-for-sale-3-550x550.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-5/andy-warhol-screenprint-warhol-marilyn-monroe-for-sale-550x550.jpeg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-4/warhol-screenprint-marilyn-monroe-marilyn-1967-for-sale-550x550.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-10/marilyn-28-550x527.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-9/warhol-screenprint-marilyn-monroe-marilyn-1967-fs-22-for-sale-550x550.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-1-2/andy-warhol-screenprint-marilyn-monroe-marilyn-1967-for-sale-2-547x550.jpg",
  "https://images.masterworksfineart.com/product/marilyn-monroe-marilyn-1967-12/warholmary1-1-547x550.jpg",
];

export function HoverImageGallery({ images = defaultImages }: HoverImageGalleryProps) {
  const safeImages = images.length ? images : defaultImages;
  const displayImages =
    safeImages.length === 1
      ? Array.from({ length: 11 }, () => safeImages[0])
      : safeImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({ width: 1, height: 1 });
  const [isHovering, setIsHovering] = useState(false);
  const isSingleImageScrub = safeImages.length === 1;
  const frameProgress =
    displayImages.length > 1 ? currentImageIndex / (displayImages.length - 1) : 0.5;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;

    setMousePosition({ x, y });
    setBounds({ width: rect.width || 1, height: rect.height || 1 });

    const imageIndex = Math.floor((x / width) * displayImages.length);
    const clampedIndex = Math.max(0, Math.min(displayImages.length - 1, imageIndex));

    setCurrentImageIndex(clampedIndex);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const spotlightStyle = {
    "--mouse-x": `${mousePosition.x}px`,
    "--mouse-y": `${mousePosition.y}px`,
  } as CSSProperties;

  const imageX = isHovering ? (0.5 - mousePosition.x / bounds.width) * 18 : 0;
  const imageY = isHovering ? (0.5 - mousePosition.y / bounds.height) * 18 : 0;
  const scrubX = isSingleImageScrub ? (0.5 - frameProgress) * 36 : 0;
  const scrubY = isSingleImageScrub ? Math.sin(frameProgress * Math.PI) * -10 : 0;
  const objectPosition = isSingleImageScrub
    ? `${30 + frameProgress * 40}% ${44 + Math.sin(frameProgress * Math.PI) * 9}%`
    : "center";

  return (
    <div className="relative group w-full max-w-[550px]">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg cursor-none bg-black"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={spotlightStyle}
      >
        <img
          src={displayImages[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-200 ease-out will-change-transform"
          style={{
            objectPosition,
            transform: `scale(${isHovering ? (isSingleImageScrub ? 1.16 : 1.06) : 1.02}) translate3d(${imageX + scrubX}px, ${imageY + scrubY}px, 0)`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.16),transparent_22rem)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        {displayImages.length > 1 ? (
          <div className="absolute bottom-3 left-3 right-3 pointer-events-none flex gap-1">
            {displayImages.map((image, index) => (
              <span
                key={`${image}-${index}`}
                className={`h-1 flex-1 rounded-full transition-all duration-150 ${
                  index === currentImageIndex ? "bg-white" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        ) : null}

        {isHovering && (
          <div
            className="absolute pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/30 w-12 h-12 flex items-center justify-center ring-1 ring-white/20">
              <div className="flex items-center space-x-1">
                <ChevronLeft className="w-3 h-3 text-white" strokeWidth={2} />
                <ChevronRight className="w-3 h-3 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
