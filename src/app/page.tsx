"use client";

// src/app/page.tsx
import { useState } from "react";
import Image from "next/image";
import LeadFormModal from "@/components/LeadFormModal";

type LeadPlan = "monthly" | "yearly" | "multi_store";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected, setPlanSelected] = useState<LeadPlan>("monthly");

  function openModal(plan: LeadPlan) {
    setPlanSelected(plan);
    setIsOpen(true);
  }

  return (
    <>
      {/* Top bar with SIGN IN */}
      <header className="topbar">
        <a
          href="https://app.dealerboardit.com/auth/login"
          className="rounded-full px-5 py-2.5 border border-white/30 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition"
        >
          SIGN IN
        </a>
      </header>

      <main className="shell">
        {/* Left: Logo */}
        <section className="left">
          <Image
            src="/logonobackround.png"
            alt="Dealerboardit"
            width={1200}
            height={1200}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="logo"
            priority
          />
        </section>

        {/* Right: Four-Square */}
        <aside className="right">
          <div className="fs-grid" role="group" aria-label="Pricing overview">
            {/* TL */}
            <button
              type="button"
              className="fs-tile"
              onClick={() => openModal("monthly")}
              aria-label="$0 start-up fees"
            >
              <span className="fs-accent fs-accent--white fs-amount">$0</span>
              <span className="fs-note">Start-up Fees</span>
            </button>

            {/* TR */}
            <button
              type="button"
              className="fs-tile"
              onClick={() => openModal("monthly")}
              aria-label="Monthly plan"
            >
              <span className="fs-accent fs-amount">$369</span>
              <span className="fs-note">
                Monthly
                <br />
                <small className="opacity-70">(Single Store)</small>
              </span>
            </button>

            {/* BL */}
            <button
              type="button"
              className="fs-tile"
              onClick={() => openModal("multi_store")}
              aria-label="Monthly discount with multi-stores"
            >
              <span className="fs-accent fs-amount">$36.9</span>
              <span className="fs-note">
                Monthly Discount
                <br />
                with Multi-Stores
              </span>
            </button>

            {/* BR */}
            <button
              type="button"
              className="fs-tile"
              onClick={() => openModal("yearly")}
              aria-label="Yearly plan - 2 months free"
            >
              <span className="fs-accent fs-amount">$3,690</span>
              <span className="fs-note">
                Yearly
                <br />2 Months FREE!
                <br />
                <small className="opacity-70">(Single Store)</small>
              </span>
            </button>

            {/* grid crosshair lines (pure CSS) */}
            <div className="fs-divider" aria-hidden="true" />
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            (Select Your Payment Plan)
          </p>
        </aside>
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
