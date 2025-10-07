"use client";

// src/app/page.tsx — homepage without its own header (global header comes from layout)
import { useState } from "react";
import Link from "next/link";
import LeadFormModal from "@/components/LeadFormModal";
import ProductSection from "@/components/ProductSelection";

type LeadPlan = "monthly" | "yearly" | "multi_store";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected, setPlanSelected] = useState<LeadPlan>("monthly");

  return (
    <>
      {/* Hero */}
      <main>
        <section className="hero" id="hero">
          <div className="hero__copy">
            <h1 className="hero__title">
              Modern sales boards for dealerships—
              <span className="hero__accent"> fast, neon-clean, fun.</span>
            </h1>
            <p className="hero__sub">
              Log deals in seconds, <strong>Board It!</strong> with one click,
              and see real-time snapshots across stores.
            </p>

            <div className="hero__cta">
              <button
                className="btn btn-primary"
                onClick={() => setIsOpen(true)}
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
            <h2 className="section-title">Product</h2>
            <p className="section-sub">Click a tile to watch a quick demo.</p>
            <ProductSection />
          </div>
        </section>

        <section id="how" className="section-pad">
          <div className="section-max">
            <h2 className="section-title">Bonus Levels</h2>

            <p className="section-sub">Coming Soon</p>
          </div>
        </section>
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
