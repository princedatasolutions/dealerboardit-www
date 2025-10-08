"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxVideoModal from "@/components/LightboxVideoModal";

type Tile = {
  key: string;
  title: string;
  caption: string;
  poster: string; // image under the tile
  video: string; // mp4 to play
};

const TILES: Tile[] = [
  {
    key: "adddeal",
    title: "Board your deal in seconds",
    caption: "One click to Board It!",
    poster: "/images/add_new_deal.png",
    video: "/videos/adddeal1.mp4",
  },
  {
    key: "filterbar",
    title: "Filters that move your board",
    caption: "Today • Week • Month • My deals",
    poster: "/images/salesboard.png",
    video: "/videos/filterbar_short1.mp4",
  },
  {
    key: "snapshot",
    title: "Salesboard, Dashboard, Leaderboard",
    caption: "Units • FEG • BEG • Trades • Team",
    poster: "/images/dashboard.png",
    video: "/videos/sales_dash_leader_boards1.mp4",
  },
];

export default function ProductSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const active = TILES.find((t) => t.key === openKey);

  return (
    <>
      <div className="product__grid">
        {TILES.map((t) => (
          <button
            key={t.key}
            className="product__tile"
            onClick={() => setOpenKey(t.key)}
            aria-label={`${t.title} — play demo`}
          >
            <div className="product__media">
              <Image
                src={t.poster}
                alt={t.title}
                width={640}
                height={360}
                className="product__img"
                priority={false}
              />
              <span className="product__play">▶</span>
            </div>
            <div className="product__copy">
              <h3 className="product__title">{t.title}</h3>
              <p className="product__caption">{t.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <LightboxVideoModal
        open={!!active}
        onClose={() => setOpenKey(null)}
        src={active?.video ?? ""}
        title={active?.title ?? "Product demo"}
      />
    </>
  );
}
