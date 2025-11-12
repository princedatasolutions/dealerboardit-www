"use client";

// src/app/page.tsx — homepage without its own header (global header comes from layout)
import { useState } from "react";

import LeadFormModal from "@/components/LeadFormModal";

import type { LeadPlan } from "@/components/LeadFormModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected] = useState(/* ... */);

  // Bonus Levels lightbox
  const [bonusOpen, setBonusOpen] = useState(false);
  const [bonusSrc, setBonusSrc] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <main>
        <section
          className="hero"
          id="hero"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4rem",
            minHeight: "calc(100vh - 160px)", // header + footer breathing room
          }}
        >
          <div
            className="hero__copy"
            style={{ textAlign: "center", maxWidth: 720 }}
          >
            <h1 className="hero__title">
              A board-centric system built for the modern sales tower.
              <br />
              <br />
              <span>
                Real-time <span style={{ color: "#00cc66" }}>deals</span>.
                Real-time <span style={{ color: "#00cc66" }}>sales</span>.
                Real-time <span style={{ color: "#00cc66" }}>performance</span>.
                <br />
                <br />
                For dealers — by dealers.
              </span>
            </h1>
          </div>

          <div
            className="hero__media"
            aria-label="Product preview"
            style={{ display: "flex", justifyContent: "center" }}
          >
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
