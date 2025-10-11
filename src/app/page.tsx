"use client";

// src/app/page.tsx — homepage without its own header (global header comes from layout)
import { useState } from "react";
import Link from "next/link";
import LeadFormModal from "@/components/LeadFormModal";
import ProductSection from "@/components/ProductSelection";

import type { LeadPlan } from "@/components/LeadFormModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected, setPlanSelected] = useState<LeadPlan>("monthly");

  // Bonus Levels lightbox
  const [bonusOpen, setBonusOpen] = useState(false);
  const [bonusSrc, setBonusSrc] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <main>
        <section className="hero" id="hero">
          <div className="hero__copy">
            <h1 className="hero__title">
              The modern sales board for dealerships.
              <span className="hero__accent">
                Real-time deals and sales performance — built by operators.
                Built for managers.
              </span>
            </h1>

            <p className="hero__sub">
              Board deals in seconds. <strong>Board It!</strong> with one click
              and see real-time sales boards, KPI dashboards, and leaderboards
              across all your stores.
            </p>

            <div className="hero__cta">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPlanSelected("demo");
                  setIsOpen(true);
                }}
              >
                Book a demo
              </button>
              <Link href="/pricing" className="btn btn-outline">
                See pricing
              </Link>
            </div>
          </div>

          <div className="hero__media" aria-label="Product preview">
            <video
              className="hero__video"
              playsInline
              muted
              autoPlay
              loop
              preload="metadata"
              poster="/images/hero_poster.png"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Product + How placeholders (wire later) */}
        <section id="product" className="section-pad">
          <div className="section-max">
            <h2 className="section-title">Main Levels</h2>
            <p className="section-sub">Click a tile to watch a quick demo.</p>
            <ProductSection />
          </div>
        </section>

        <section id="how" className="section-pad">
          <div className="section-max">
            <h2 className="section-title">Bonus Levels</h2>
            <p className="section-sub">Extra demos beyond the main tiles.</p>

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

      <footer className="footer">© 2025 Dealer Board It LLC</footer>

      <LeadFormModal
        open={isOpen}
        planSelected={planSelected}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
