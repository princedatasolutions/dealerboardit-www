"use client";

// src/app/page.tsx — homepage without its own header (global header comes from layout)
import { useState } from "react";

import LeadFormModal from "@/components/LeadFormModal";

import type { LeadPlan } from "@/components/LeadFormModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected] = useState<LeadPlan>("monthly");

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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            minHeight: "calc(100vh - 160px)", // header + footer breathing room
          }}
        >
          <div
            className="hero__copy"
            style={{ textAlign: "center", maxWidth: 1100 }}
          >
            <h1 className="hero__title">
              A board-centric system built for the sales tower.
            </h1>

            <p
              className="hero__subtitle"
              style={{ marginTop: "1.5rem", fontSize: "1.25rem" }}
            >
              For dealers — by dealers.
            </p>

            <div
              style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3.5rem",
                flexWrap: "wrap",
                fontSize: "1.6rem",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                Real-time <span style={{ color: "#00cc66" }}>deals</span>
              </span>
              <span style={{ whiteSpace: "nowrap" }}>
                Real-time <span style={{ color: "#00cc66" }}>recon</span>
              </span>
              <span style={{ whiteSpace: "nowrap" }}>
                Real-time <span style={{ color: "#00cc66" }}>performance</span>
              </span>
            </div>
          </div>

          {/* hero media removed – static hero only */}
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
