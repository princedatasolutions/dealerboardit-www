export default function Home() {
  return (
    <>
      <header className="topbar">
        <a href="https://app.dealerboardit.com/auth/login">Sign in</a>
      </header>

      <main className="main-centered">
        {/* Make sure /public/logo.png exists (root-level /public) */}
        <img src="/logo.png" alt="Dealerboardit" className="brandLogo" />
      </main>

      <footer className="footer">
        <span>© 2025 Dealerboardit</span>
      </footer>
    </>
  );
}
