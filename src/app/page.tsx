// src/app/page.tsx
import Image from "next/image";

export default function Home() {
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
          {/* Sized by width/height + CSS (not fill) */}
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
            <div className="fs-tile">
              <span className="fs-accent fs-accent--white fs-amount">$0</span>
              <span className="fs-note">Start-up Fees</span>
            </div>

            {/* TR */}
            <div className="fs-tile">
              <span className="fs-accent fs-amount">$369</span>
              <span className="fs-note">Monthly</span>
            </div>

            {/* BL */}
            <div className="fs-tile">
              <span className="fs-accent fs-amount">$36.9</span>
              <span className="fs-note">
                Monthly Discount
                <br />
                with Multi-Stores
              </span>
            </div>

            {/* BR */}
            <div className="fs-tile">
              <span className="fs-accent fs-amount">$3,690</span>
              <span className="fs-note">
                Yearly
                <br />2 Months FREE!
              </span>
            </div>

            {/* grid crosshair lines (pure CSS) */}
            <div className="fs-divider" aria-hidden="true" />
          </div>
        </aside>
      </main>

      <footer className="footer">© 2025 Dealerboardit</footer>
    </>
  );
}
