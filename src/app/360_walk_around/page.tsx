"use client";

import { useState } from "react";
import ProductSection from "@/components/ProductSelection";

export default function WalkAround() {
  // Bonus Levels lightbox
  const [bonusOpen, setBonusOpen] = useState(false);
  const [bonusSrc, setBonusSrc] = useState<string | null>(null);

  return (
    <main>
      {/* Header */}
      <section className="section-pad">
        <div className="section-max" style={{ textAlign: "center" }}>
          <h1 className="section-title">360 Walk-Around</h1>
          <p className="section-sub">
            Board deals in seconds. <strong>Board It!</strong> with one click
            and see your real-time{" "}
            <span style={{ color: "var(--btn-ghost-color, #00FF7F)" }}>
              Sales Board
            </span>
            , Performance{" "}
            <span style={{ color: "var(--neon-pink, #FF38F2)" }}>
              Dashboards
            </span>
            , and live{" "}
            <span style={{ color: "var(--neon-blue, #00E5FF)" }}>
              Leaderboards
            </span>
            .
          </p>
        </div>
      </section>

      {/* Main Levels */}
      <section id="product" className="section-pad">
        <div className="section-max">
          <h2 className="section-title">Main Boards - Dominate</h2>
          <p className="section-sub">No clickbait.</p>
          <ProductSection />
        </div>
      </section>

      {/* Bonus Levels */}
      <section id="bonus" className="section-pad">
        <div className="section-max">
          <h2 className="section-title">Bonus Boards- Level Up</h2>
          <p className="section-sub">No leadgate.</p>

          <div className="product__grid">
            {/* RDR Warning */}
            <button
              className="product__tile"
              onClick={() => {
                setBonusSrc("/videos/rdrwarning1.mp4");
                setBonusOpen(true);
              }}
              aria-label="Play RDR Warning demo"
            >
              <div className="product__media">
                <video
                  className="product__img"
                  playsInline
                  muted
                  autoPlay
                  loop
                  preload="metadata"
                >
                  <source src="/videos/rdrwarning1.mp4" type="video/mp4" />
                </video>
                <span className="product__play">▶</span>
              </div>
              <div className="product__copy">
                <h3 className="product__title">RDR Warning</h3>
                <p className="product__caption">How the RDR alert works.</p>
              </div>
            </button>

            {/* BVA Log */}
            <button
              className="product__tile"
              onClick={() => {
                setBonusSrc("/videos/bva1.mp4");
                setBonusOpen(true);
              }}
              aria-label="Play BVA demo"
            >
              <div className="product__media">
                <video
                  className="product__img"
                  playsInline
                  muted
                  autoPlay
                  loop
                  preload="metadata"
                >
                  <source src="/videos/bva1.mp4" type="video/mp4" />
                </video>
                <span className="product__play">▶</span>
              </div>
              <div className="product__copy">
                <h3 className="product__title">BVA Log</h3>
                <p className="product__caption">
                  Borrowed Vehicle Agreement tracking.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Bonus Levels Lightbox */}
      {bonusOpen && bonusSrc && (
        <div
          className="lb__backdrop"
          onClick={() => {
            setBonusOpen(false);
            setBonusSrc(null);
          }}
        >
          <div
            className="lb__panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="lb__close"
              aria-label="Close video"
              onClick={() => {
                setBonusOpen(false);
                setBonusSrc(null);
              }}
            >
              ×
            </button>
            <video className="lb__video" controls autoPlay playsInline>
              <source src={bonusSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </main>
  );
}
