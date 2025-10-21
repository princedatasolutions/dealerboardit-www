"use client";

export default function AppFaxPage() {
  const printAppFacts = () => {
    const content = document.getElementById("appfacts-report");
    if (!content) {
      window.print();
      return;
    }

    const w = window.open("", "_blank", "width=1024,height=768");
    if (!w) {
      window.print();
      return;
    }

    const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>AppFacts Report</title>
  <style>
    @page { size: auto; margin: 12mm; }
    html, body { height: auto !important; }
    body { background: #fff; color: #000; -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; }

    * { box-sizing: border-box; }
    /* Let grids and cards break across pages */
    div { page-break-inside: auto; break-inside: auto; }
    .no-print { display: none !important; }
  </style>
</head>
<body>
<body>
  <div style="width:min(1000px,92vw); margin:0 auto;">
    ${content.outerHTML}
  </div>
</body>

</html>`;

    w.document.open();
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => {
      w.print();
      w.close();
    }, 300);
  };

  return (
    <main>
      {/* (Hero removed by request) */}

      {/* ===== AppFacts Report Body ===== */}
      <section
        className="section-pad"
        style={{
          width: "min(1000px, 92vw)",
          marginInline: "auto",
          color: "white",
        }}
      >
        {/* Print CSS — hide hero + button in print, make report full width */}
        <style>{`
  @media print {
    /* Preserve colors */
    body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

    /* Hide site chrome */
    header, nav, footer, .no-print { display: none !important; }

    /* Prefer printing only the report without breaking pagination */
    body * { visibility: hidden !important; }
    #appfacts-report, #appfacts-report * { visibility: visible !important; }

    /* Let the report flow naturally across pages */
    #appfacts-report {
      position: static !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Avoid clipping */
    #appfacts-report * { overflow: visible !important; }

    /* Allow page breaks inside blocks (so we don't force everything onto one page) */
    #appfacts-report div { break-inside: auto !important; page-break-inside: auto !important; }
  }

  @page { size: auto; margin: 12mm; }
`}</style>

        {/* Export to PDF */}
        <div
          className="no-print"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 12,
          }}
        >
          <button
            onClick={printAppFacts}
            style={{
              background: "rgba(0,255,170,0.12)",
              border: "1px solid rgba(0,255,170,0.45)",
              color: "white",
              padding: "8px 12px",
              borderRadius: 10,
              fontSize: 14,
              cursor: "pointer",
            }}
            aria-label="Export AppFacts as PDF"
            title="Export AppFacts as PDF"
          >
            Export PDF
          </button>
        </div>

        <div id="appfacts-report">
          {/* Header / Identity */}
          <div
            style={{
              display: "grid",
              gap: "6px",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            <div
              style={{ opacity: 0.75, fontSize: "0.9rem", letterSpacing: 0.5 }}
            >
              APPFACTS™ — App History Report
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Dealer Board It! — VIN: 0001-DEALERBOARDIT!-TX
            </h2>
            <div style={{ opacity: 0.8, fontSize: "0.95rem" }}>
              This report provided free of charge by: Dealer Board It! LLC —
              Austin, Texas
            </div>
          </div>

          {/* Summary Panel */}
          <div
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            }}
          >
            {[
              {
                label: "Why",
                value:
                  "Replace whiteboards & spreadsheets with a clear, simple source of truth.",
              },
              { label: "Founded", value: "Austin, Texas • Year: 2025" },
              {
                label: "Built On",
                value: "Next.js + Supabase • Neon vibes • Celebtrations",
              },
              { label: "Last Update", value: "September, 2025 • AppFacts v1" },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  minHeight: 96,
                }}
              >
                <div style={{ opacity: 0.7, fontSize: 12, marginBottom: 6 }}>
                  {card.label}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.35 }}>
                  {card.value}
                </div>
              </div>
            ))}
          </div>

          {/* Founding Story */}
          <div style={{ marginTop: 28 }}>
            <h3 style={{ margin: "18px 0 8px", fontSize: "1.25rem" }}>
              Founding Story — “Why”
            </h3>
            <p style={{ opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              {/* TODO: Replace with your voice */}
              Dealer Board It! was founded from the depths of spreadsheets,
              pivot tables, and a genuine need to celebrate others. The
              board-system was born out of a multi-rooftop dealer group’s
              obsession with live and historical data — every day, every store,
              every deal. After two and a half years of refining a shared,
              robust spreadsheet, the need for scale was evident. Dealer Board
              It! was built.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ marginTop: 28 }}>
            <h3 style={{ margin: "18px 0 8px", fontSize: "1.25rem" }}>
              Timeline — Conception to Now
            </h3>
            <div
              style={{
                display: "grid",
                gap: 10,
                borderLeft: "2px solid rgba(255,255,255,0.12)",
                paddingLeft: 14,
              }}
            >
              {[
                {
                  date: " Jul 2020",
                  miles: "0 hrs",
                  src: "Inventory and Sales Data",
                  note: "First dive into spreadsheets and pivot tables.",
                },
                {
                  date: "Nov 2023",
                  miles: "5,000 hrs",
                  src: "Multi-Store Grand Opening",
                  note: "The genisis of the foundational spreadsheet for Dealer Board It!.",
                },
                {
                  date: "Jul 2024",
                  miles: "10,000 hrs",
                  src: "Austin, TX",
                  note: "The conception of Dealer Board It! as a formal app idea.",
                },
                {
                  date: "May 2025",
                  miles: "25,000 hrs",
                  src: "Two-A-Days, 5-9s",
                  note: "Buildout of MVP begins.",
                },
                {
                  date: "Sep 2025",
                  miles: "50,000 hrs",
                  src: "World Wide Web",
                  note: "Board It! LLC formed. App goes live.",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 100px 1fr",
                    gap: 12,
                    alignItems: "start",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{row.date}</div>
                  <div style={{ opacity: 0.7 }}>{row.miles}</div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: 12 }}>{row.src}</div>
                    <div style={{ marginTop: 4 }}>{row.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Struggles & Milestones */}
          <div
            style={{
              marginTop: 28,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: "1.1rem" }}>
                Service Alerts — Struggles
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                <li>
                  Localhost compile gremlins — fixed, then… came back. Fixed
                  again.
                </li>
                <li>
                  Auth loops and RLS edge-cases during early multi-tenant setup.
                </li>
                <li>
                  Deal saving logic repeatedly failed before stable persistence.
                </li>
                <li>Lead form rewires (Supabase ↔ Resend) under live fire.</li>
                <li>VIN decoding timeouts while stress-testing.</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: "1.1rem" }}>
                Certified Fixes — Milestones
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                <li>
                  The first deal successfully saved and persisted — proof of
                  life.
                </li>
                <li>
                  Tenant creation pipeline stabilized; full group → store access
                  confirmed.
                </li>
                <li>
                  Global admin RLS patched for complete visibility and control.
                </li>
                <li>
                  Deal Modal rebuilt; warning filters and UI logic tightened.
                </li>
                <li>
                  Website live — pricing, 360 Walk-Around, and AppFacts launch.
                </li>
              </ul>
            </div>
          </div>

          {/* Future Plans */}
          <div style={{ marginTop: 28 }}>
            <h3 style={{ margin: "18px 0 8px", fontSize: "1.25rem" }}>
              Future Plans
            </h3>

            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>Inventory integrations.</li>
              <li>iOS / Android app development.</li>
              <li>BVA file uploading.</li>
              <li>Integrated Dealer feedback.</li>
            </ul>
          </div>

          {/* Favorite Quotes */}
          <div style={{ marginTop: 28 }}>
            <h3 style={{ margin: "18px 0 8px", fontSize: "1.25rem" }}>
              Favorite Quotes
            </h3>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {[
                "“Together we stand, divided we fall.”",
                "“Closed mouths don't get fed.”",
                "“In the world of LLMs, I was your Salesboard.”",
                "“Boards of a feather flock together.”",
              ].map((q, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: 14,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stamp */}
          <div
            style={{
              marginTop: 28,
              paddingTop: 14,
              borderTop: "1px dashed rgba(255,255,255,0.18)",
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              opacity: 0.75,
            }}
          >
            <div>Filed under: For Dealers, By Dealers</div>
            <div>Date Printed: {new Date().toLocaleDateString()}</div>
            <div>Report #: 0001-APPFACTS-AUS-TX</div>
          </div>
        </div>
      </section>
    </main>
  );
}
