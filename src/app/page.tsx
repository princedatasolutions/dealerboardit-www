// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Top bar with SIGN IN */}
      <header className="topbar">
        <a href="https://app.dealerboardit.com/auth/login" className="sign-in">
          SIGN IN
        </a>
      </header>

      <main className="shell">
        {/* Left: Logo */}
        <section className="left">
          {/* Logo */}
          <Image
            src="/logonobackround.png"
            alt="Dealerboardit"
            width={1200}
            height={1200}
            sizes="(min-width: 1024px) 420px, 90vw"
            className="logo"
            priority
          />

          {/* Four-Square (moved under logo) */}
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
        </section>

        {/* Right: About / SEO / GEO / Screenshots (scrolling column) */}
        <aside className="right">
          <section className="section" id="about">
            <h2 className="text-neon-pink">About Board It!</h2>

            <p>
              <strong>Dealer Board It!</strong> is the modern sales board
              software for dealerships. We replace dry erase boards and clunky
              spreadsheets with a clean, cloud-based platform built for speed,
              accuracy, and celebration.
            </p>

            <p>Dealers use Board It! to:</p>
            <ul>
              <li>Track deals in real time with instant KPIs</li>
              <li>Give managers and GMs clear dashboards at every level</li>
              <li>
                Eliminate outdated dealership sales logs and manual reports
              </li>
              <li>
                Provide tiered access from Groups → Regions → Complexes → Stores
              </li>
            </ul>

            <p>
              Beyond your sales board, Board It! also streamlines dealership
              pain points with built-in <strong>BVA logging</strong> and{" "}
              <strong>RDR tracking</strong>, giving managers clarity on vehicles
              in circulation and deliveries reported.
            </p>

            <p>
              <em>
                Our mission is simple: help automotive retailers make smarter
                decisions, move inventory faster, and celebrate every win.
              </em>
            </p>
          </section>

          <section
            className="section wide"
            id="screenshots"
            style={{ marginTop: "12px" }}
          >
            <h2>Screenshots</h2>
            <div className="shots">
              <div className="shot">
                <span>Dashboard</span>
              </div>
              <div className="shot">
                <span>Sales Board</span>
              </div>
              <div className="shot">
                <span>BVA Log</span>
              </div>
              <div className="shot">
                <span>Profile / Admin</span>
              </div>
            </div>
          </section>
        </aside>
      </main>

      <footer className="footer">© 2025 Dealerboardit</footer>
    </>
  );
}
