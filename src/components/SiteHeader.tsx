"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{ height: "140px", position: "relative" }}
    >
      <div
        className="site-header__inner"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <Link
          href="/"
          className="brand"
          aria-label="Dealer Board It — Home"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          <Image
            src="/logonobackround.png"
            alt="Dealer Board It!"
            width={90}
            height={90}
            priority
            style={{
              width: 120,
              height: 120,
              maxWidth: "none",
              maxHeight: "none",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="main-nav hidden md:flex"
          aria-label="Primary"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: "48px",
            fontSize: "1rem",
            whiteSpace: "nowrap",
          }}
        >
          <Link href="/360_walk_around" className="nav-link">
            360 Walk-Around
          </Link>
          <Link href="/features_benefits" className="nav-link">
            Features & Benefits
          </Link>
          <Link href="/pricing" className="nav-link">
            4-Square
          </Link>
          <Link href="/appfax" className="nav-link">
            Appfax
          </Link>
        </nav>

        {/* Mobile Menu Icon (right side) */}
        <div
          className="mobile-trigger"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            {/* simple filter icon (inline SVG, no extra deps) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 5h18M6 12h12M10 19h4" />
            </svg>
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black flex flex-col">
            {/* Top bar with safe-area padding and close button */}
            <div
              className="flex justify-end px-4"
              style={{ paddingTop: "env(safe-area-inset-top)", height: "56px" }}
            >
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="self-center p-2 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Centered menu */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="menu-panel w-full max-w-sm">
                <nav className="flex flex-col items-center text-2xl w-full">
                  <Link
                    href="/360_walk_around"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3"
                  >
                    360 Walk-Around
                  </Link>
                  <hr className="w-full opacity-20" />
                  <Link
                    href="/features_benefits"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3"
                  >
                    Features & Benefits
                  </Link>
                  <hr className="w-full opacity-20" />
                  <Link
                    href="/pricing"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3"
                  >
                    4-Square Flexpay
                  </Link>
                  <hr className="w-full opacity-20" />
                  <Link
                    href="/appfax"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3"
                  >
                    Appfax
                  </Link>
                  <hr className="w-full opacity-20" />

                  <Link
                    href="https://app.dealerboardit.com/auth/login"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3"
                  >
                    Board It! (Sign in)
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}

        <div
          className="actions hidden md:block"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <a
            href="https://app.dealerboardit.com/auth/login"
            className="btn btn-ghost"
          >
            Board It!
          </a>
        </div>
      </div>
      <style jsx>{`
        /* Default: show desktop bits, hide mobile trigger */
        .mobile-trigger {
          display: none;
        }
        /* Mobile rules */
        @media (max-width: 768px) {
          .main-nav {
            display: none !important;
          }
          .actions {
            display: none !important;
          }
          .mobile-trigger {
            display: block;
          }
        }
      `}</style>
      <style jsx>{`
        .menu-panel {
          background: #0b0b0b;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 12px;
          padding: 12px 0;
          box-shadow: 0 0 22px rgba(0, 255, 153, 0.25),
            /* soft neon glow */ 0 0 1px rgba(255, 255, 255, 0.5) inset; /* subtle inner line */
        }
      `}</style>
    </header>
  );
}
