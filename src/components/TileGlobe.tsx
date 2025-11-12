"use client";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";

type Tile = {
  id: string;
  title: string;
  imgSrc: string; // /tiles/filename.webp
  videoSrc?: string; // optional
  poster?: string; // optional
};

type Props = {
  tiles: Tile[];
  radius?: number; // px, default 420
};

export default function TileGlobe({ tiles, radius = 560 }: Props) {
  const [index, setIndex] = useState(0); // active, centered

  const containerRef = useRef<HTMLDivElement | null>(null);
  const angle = useMemo(
    () => (tiles.length ? 360 / tiles.length : 0),
    [tiles.length]
  );

  // drag/swipe
  const drag = useRef<{ startX: number; startIndex: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { startX: e.clientX, startIndex: index };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const delta = e.clientX - drag.current.startX;
    const perIndex = (radius * Math.PI * 2) / tiles.length / 2; // heuristics
    const shift = Math.round(-delta / perIndex);
    setIndex(mod(drag.current.startIndex + shift, tiles.length));
  };
  const onPointerUp = (e: React.PointerEvent) => {
    drag.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setIndex((i) => mod(i + 1, tiles.length));
    if (e.key === "ArrowLeft") setIndex((i) => mod(i - 1, tiles.length));
  };

  const rotation = -index * angle;

  const renderTile = (t: Tile, i: number, isActive: boolean) => {
    const rot = i * angle;
    const dist = circularDistance(i, index, tiles.length);
    const zIndex = 1000 + (tiles.length - dist); // keep a sensible z order

    return (
      <button
        key={t.id + (isActive ? "-active" : "")}
        className="absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/30 shadow-[0_20px_50px_rgba(0,0,0,.45)] backdrop-blur-sm outline-none overflow-hidden"
        style={{
          transform: `rotateY(${rot}deg) translateZ(${
            radius + (isActive ? 160 : 0)
          }px)`,
          zIndex,
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
        aria-label={t.title}
        onClick={() => {}}
      >
        {/* image only (no caption inside tile) */}
        <div
          className={`relative w-full h-full ${
            isActive ? "opacity-100" : "opacity-80"
          }`}
        >
          <Image
            src={t.imgSrc}
            alt={t.title}
            fill
            sizes="640px"
            className={`${
              t.id === "dbilogo"
                ? "object-contain p-6 bg-black"
                : "object-cover"
            } transition-transform ${
              isActive ? "scale-[1.0]" : "scale-[0.985]"
            }`}
            priority={i < 3}
          />
        </div>
      </button>
    );
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative mx-auto my-0 h-[640px] w-full max-w-[1200px] touch-pan-x select-none"
        style={{ perspective: "1400px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Spin the boards"
      >
        <div
          className="absolute inset-0 overflow-visible"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
            transition: drag.current
              ? "none"
              : "transform 350ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {/* Non-active tiles first */}
          {tiles.map((t, i) => (i !== index ? renderTile(t, i, false) : null))}

          {/* Active tile LAST so it always paints on top */}
          {tiles[index] ? renderTile(tiles[index], index, true) : null}
        </div>

        {/* controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
          <div className="pointer-events-auto pl-2">
            <button
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white/80 hover:bg-black/50"
              onClick={() => setIndex((i) => mod(i - 1, tiles.length))}
              aria-label="Previous"
            >
              ◀
            </button>
          </div>
          <div className="pointer-events-auto pr-2">
            <button
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white/80 hover:bg-black/50"
              onClick={() => setIndex((i) => mod(i + 1, tiles.length))}
              aria-label="Next"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function circularDistance(a: number, b: number, n: number) {
  const d = Math.abs(a - b) % n;
  return Math.min(d, n - d);
}
