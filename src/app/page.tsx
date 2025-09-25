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
              The simple, real-time sales board for dealerships. Track deals in
              a clean 23-column grid, open the “Board It!” modal to edit, and
              see instant KPIs across Store → Complex → Region → Group.
            </p>
            <ul>
              <li>Snapshot tiles for Units · FEG · BEG · Trades · Team</li>
              <li>BVA log + RDR tracking (open/closed, age, audit-friendly)</li>
              <li>VIN decoding (NHTSA) with future inventory API sync</li>
              <li>Permission tiers + location filters by access tier</li>
            </ul>
          </section>

          <section className="section" id="seo">
            <h2>SEO</h2>
            <ul>
              <li>Fast Next.js site with clean metadata & OpenGraph</li>
              <li>Optional public pages per store/complex/region/group</li>
              <li>Schema-ready copy blocks for search clarity</li>
            </ul>
          </section>

          <section className="section" id="geo">
            <h2>GEO</h2>
            <ul>
              <li>Multi-store hierarchy: Group → Region → Complex → Store</li>
              <li>Filter down (or up) based on user access level</li>
              <li>Roll-up KPIs by any tier in one click</li>
            </ul>
          </section>

          <section className="section" id="screenshots">
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
