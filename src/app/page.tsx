// dealerboardit-www/src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed top-6 right-6">
        <Link
          href="https://app.dealerboardit.com/auth/login"
          className="rounded-full px-5 py-2.5 border border-white/30 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition"
        >
          SIGN IN
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <div className="text-center select-none">
            <div className="text-6xl md:text-7xl font-light tracking-[0.35em] text-sky-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.9)]">
              DEALER
            </div>
            <div className="mt-8 text-6xl md:text-7xl italic text-pink-400 drop-shadow-[0_0_24px_rgba(244,114,182,0.95)]">
              Board It!
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 content-center">
          <div className="rounded-xl p-8 border border-white/15 bg-black/30 backdrop-blur-sm">
            <div className="text-5xl font-light text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.8)]">
              $0
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-slate-300">
              Start-Up Fees
            </div>
          </div>

          <div className="rounded-xl p-8 border border-white/15">
            <div className="text-5xl font-light text-sky-300 drop-shadow-[0_0_14px_rgba(56,189,248,0.8)]">
              $369
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-slate-300">
              Monthly
            </div>
          </div>

          <div className="rounded-xl p-8 border border-white/15">
            <div className="text-4xl font-light text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">
              $36.9
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-slate-300">
              Monthly Discount (Multi-Stores)
            </div>
          </div>

          <div className="rounded-xl p-8 border border-white/15">
            <div className="text-4xl font-light text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">
              $3,690
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-slate-300">
              Yearly — 2 Months Free
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute left-6 bottom-6 text-xs text-white/60">
        © 2025 Dealerboardit
      </footer>
    </main>
  );
}
