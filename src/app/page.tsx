export default function Home() {
  return (
    <main>
      <section className="container hero">
        <img src="/logo.svg" alt="Board It!" className="logo" />
        <span className="badge">MVP is live</span>
        <h1 className="title">The dealership sales board your team actually uses.</h1>
        <p className="lead">
          Board It! gives your stores a fast, no-nonsense sales log with VIN decoding,
          simple filters, and roll-up KPIs across store, complex, region, and group.
        </p>
        <div className="ctaRow">
          <a className="button primary" href="https://app.dealerboardit.com/auth/login">Sales Board Login</a>
          <a className="button" href="mailto:hello@dealerboardit.com?subject=Board%20It!%20Demo">Request a demo</a>
        </div>
        <div className="features">
          <div className="card"><h3>Real-time Sales Log</h3><p>Clean statuses, instant totals, and inline edits.</p></div>
          <div className="card"><h3>VIN Decoding</h3><p>Accurate YMMT via NHTSA decoding.</p></div>
          <div className="card"><h3>Roll-up Reporting</h3><p>Store → Complex → Region → Group; Today/Week/Month filters.</p></div>
        </div>
        <footer className="footer">
          <span>© {new Date().getFullYear()} Board It!</span>
          <span>
            <a href="mailto:hello@dealerboardit.com" style={{color:'inherit',textDecoration:'none'}}>Contact</a>{' • '}
            <a href="https://app.dealerboardit.com/auth/login" style={{color:'inherit',textDecoration:'none'}}>Sign in</a>
          </span>
        </footer>
      </section>
    </main>
  );
}
