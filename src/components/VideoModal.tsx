"use client";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  videoSrc?: string;
  poster?: string;
};

export default function VideoModal({
  open,
  onClose,
  title,
  videoSrc,
  poster,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video"}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-neutral-900 p-3 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-2 pb-2">
          <h3 className="text-base text-white/90">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-sm text-white/70 hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        {videoSrc ? (
          <video
            className="h-auto w-full rounded-xl"
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="flex h-64 items-center justify-center rounded-xl border border-white/10 text-white/60">
            No video yet.
          </div>
        )}
        <div className="mt-3 flex justify-end gap-2 px-2">
          <a
            href="/#book-demo"
            className="rounded-xl bg-white/90 px-3 py-2 text-sm text-black hover:bg-white"
          >
            Book a demo
          </a>
        </div>
      </div>
    </div>
  );
}
