"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Dealer Board It — Home">
          <Image
            src="/logonobackround.png"
            alt="Dealer Board It"
            width={44}
            height={44}
            className="brand__logo"
            priority
          />
          <span className="brand__name">Dealer Board It</span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          <Link href="/#product" className="nav-link">
            Product
          </Link>
          <Link href="/#how" className="nav-link">
            How it works
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
        </nav>

        <div className="actions">
          <Link href="/#hero" className="btn btn-primary">
            Book a demo
          </Link>
          <a
            href="https://app.dealerboardit.com/auth/login"
            className="btn btn-ghost"
          >
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}
