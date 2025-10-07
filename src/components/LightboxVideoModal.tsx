"use client";

import { useEffect } from "react";

export default function LightboxVideoModal({
  open,
  onClose,
  src,
  title,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
}) {
  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lb__backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div className="lb__panel" onClick={(e) => e.stopPropagation()}>
        <video
          className="lb__video"
          controls
          autoPlay
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>

        <button className="lb__close" onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}
