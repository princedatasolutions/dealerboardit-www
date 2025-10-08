"use client";

// src/app/page.tsx
import { useState } from "react";
import Image from "next/image";
import LeadFormModal from "@/components/LeadFormModal";

import type { LeadPlan } from "@/components/LeadFormModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [planSelected, setPlanSelected] = useState<LeadPlan>("monthly");

  function openModal(plan: LeadPlan) {
    setPlanSelected(plan);
    setIsOpen(true);
  }

  return (
    <>
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
        <aside className="right flex justify-center">
          {/* constrain + center on mobile, full on larger screens */}
          <div className="flex w-full max-w-[520px] flex-col items-center px-4 sm:max-w-[620px] lg:max-w-none">
            <div
              className="fs-grid mx-auto"
              role="group"
              aria-label="Pricing overview"
            >
              {/* TL */}
              <button
                type="button"
                className="fs-tile"
                onClick={() => openModal("demo")}
                aria-label="Book Demo"
              >
                <span className="fs-accent fs-accent--white fs-amount">$0</span>
                <span className="fs-note">
                  Book Demo
                  <br />
                  <small className="opacity-70">(Just kickin' tires)</small>
                </span>
              </button>

              {/* TR */}
              <button
                type="button"
                className="fs-tile"
                onClick={() => openModal("demo")}
                aria-label="Book Demo"
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
                  <small className="opacity-70">(Multi-store)</small>
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
              (Choose Your Payment)
            </p>
          </div>
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
