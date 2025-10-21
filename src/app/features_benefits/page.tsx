export default function Page() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "48px 16px 80px",
        lineHeight: 1.6,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h1 style={{ fontSize: "36px", marginBottom: 8 }}>
          Features & Benefits
        </h1>
        <p style={{ opacity: 0.8, margin: "0 auto", maxWidth: 800 }}>
          Replace scattered spreadsheets and whiteboards with one source of
          truth for sales and celebration.
        </p>
      </div>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          See Everything That Matters. Instantly.
        </h2>
        <p>
          <strong>Problem:</strong> Data is scattered across CRMs, texts, and
          spreadsheets. <br />
          <strong>Feature:</strong> Unified platform for Sales Board, Dashboard,
          Leaderboard, and BVA tracking. <br />
          <strong>Benefit:</strong> One source of truth across your group.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          Track Every Deal — Pending or Delivered
        </h2>
        <p>
          <strong>Problem:</strong> CRM “sold” isn’t always delivered; double
          counts creep in. <br />
          <strong>Feature:</strong> Sales Board separates pending vs delivered
          with RDR tracking. <br />
          <strong>Benefit:</strong> Clean, real-time sales without phantom
          deals.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          Know Exactly What’s Out on the Road
        </h2>
        <p>
          <strong>Problem:</strong> Loaners and demos “disappear.” <br />
          <strong>Feature:</strong> BVA Board shows who has what and for how
          long. <br />
          <strong>Benefit:</strong> No more mystery miles or missing metal.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          Measure What Moves the Needle
        </h2>
        <p>
          <strong>Problem:</strong> Teams can’t rally around numbers they can’t
          see. <br />
          <strong>Feature:</strong> Dashboard with unit counts, F/L penetration,
          gross totals, and trends. <br />
          <strong>Benefit:</strong> Everyone knows the score—and how to win.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          Celebrate the Wins. See the Leaders.
        </h2>
        <p>
          <strong>Problem:</strong> Invisible performance = fading motivation.{" "}
          <br />
          <strong>Feature:</strong> Leaderboard highlights top performers from
          store to group levels. <br />
          <strong>Benefit:</strong> Healthy competition and a stronger sales
          culture.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          Spot Trends Before They Become Problems
        </h2>
        <p>
          <strong>Problem:</strong> Managing yesterday’s numbers misses
          tomorrow’s opportunities. <br />
          <strong>Feature:</strong> Dateboard shows daily/historical trends by
          unit type and status. <br />
          <strong>Benefit:</strong> Decisions with foresight—not hindsight.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: "22px", marginBottom: 8 }}>
          Protect the Data. Prevent the Headaches.
        </h2>
        <p>
          <strong>Problem:</strong> Missed RDRs and unwinds create accounting
          churn. <br />
          <strong>Feature:</strong> RDR warnings and smart filters catch issues
          early. <br />
          <strong>Benefit:</strong> Cleaner books and faster month-end.
        </p>
      </section>

      <hr style={{ opacity: 0.2, margin: "28px 0" }} />
      <p style={{ opacity: 0.8 }}>
        Dealer Board It! replaces dry-erase boards and scattered sheets with a
        living sales system your team actually uses.
      </p>
    </main>
  );
}
