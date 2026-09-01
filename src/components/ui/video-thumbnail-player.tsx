import * as React from "react";
import { cn } from "../../lib/utils";
import { Play, X } from "lucide-react";

// Interface for component props
export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl?: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16";
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    ref
  ) => {
    // State to manage the visibility of the video modal
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const isDirectVideo = videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.startsWith('/assets/');

    // Effect to handle the 'Escape' key press for closing the modal
    React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isModalOpen]);

    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black/40",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:ring-offset-2",
            className
          )}
          style={{ aspectRatio }}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          {...props}
        >
          {/* Thumbnail or Preview Video */}
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : isDirectVideo ? (
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              onMouseEnter={() => videoRef.current?.play()}
              onMouseLeave={() => videoRef.current?.pause()}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="h-6 w-6 fill-white text-white translate-x-0.5" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-0 left-0 p-5 z-10">
            <h3 className="text-lg font-bold text-white leading-snug drop-shadow-md">{title}</h3>
            {description && (
              <p className="mt-1 text-xs text-white/80 line-clamp-2 drop-shadow-sm">{description}</p>
            )}
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-in fade-in-0 duration-200"
            aria-modal="true"
            role="dialog"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 border border-white/20"
              aria-label="Close video player"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Container */}
            <div
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.9)] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {isDirectVideo ? (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              ) : (
                <iframe
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              )}
            </div>
          </div>
        )}
      </>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
