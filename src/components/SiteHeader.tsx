"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
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

        <nav
          className="main-nav"
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
          <Link href="/appfax" className="nav-link">
            Appfax
          </Link>

          <Link href="/360_walk_around" className="nav-link">
            360 Walk-Around
          </Link>

          <Link href="/pricing" className="nav-link">
            4-Square Flexpay
          </Link>
        </nav>

        <div
          className="actions"
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
    </header>
  );
}
