export default function Page() {
  // Board It! neon palette – aligned with SnapshotPanel
  const reconPurple = "#a855f7"; // RECONboard purple
  const salesGreen = "#34d399"; // SALESboard green (emerald-400)
  const dashPink = "#ec4899"; // DASHboard pink (pink-500)
  const dayYellow = "#FFD300"; // DAYboard yellow (neon from SnapshotPanel)
  const leaderBlue = "#38bdf8"; // LEADERboard blue (sky-400 style)

  const cardStyle: React.CSSProperties = {
    borderRadius: 12,
    border: "1px solid rgba(168, 85, 247, 0.4)", // softer RECON purple
    padding: "18px 20px 16px",
    marginBottom: 32,
    background: "rgba(15,15,23,0.9)",
  };

  const quoteLabelStyle: React.CSSProperties = {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: 0.6,
    opacity: 0.9,
  };

  const chatStackStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 10,
  };

  const dealerBubbleStyle: React.CSSProperties = {
    alignSelf: "flex-start",
    maxWidth: "80%",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 16,
    padding: "8px 11px",
    fontSize: 14,
    lineHeight: 1.5,
    border: "1px solid rgba(255,255,255,0.24)", // match Dealer Board It! outline
  };

  const boardItBubbleStyle: React.CSSProperties = {
    alignSelf: "flex-end",
    maxWidth: "80%",
    background: "rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: "8px 11px",
    fontSize: 14,
    lineHeight: 1.5,
    border: "1px solid rgba(255,255,255,0.24)",
  };

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
          What Dealer Board It! actually solves—for the tower, the desk, and the
          group.
        </p>
      </div>

      {/* Tile 1 – One Place to Work the Tower */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Centralize the Workspace for the Entire Tower
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “I&apos;m bouncing between the DMS, CRM, IMS, OEM tools,
              spreadsheets, chat, and text threads just to answer one question.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “Dealer Board It is the place the tower actually sources data for
              deals, recon, team performances.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          Board-centric workspace that sits above your existing stack showcasing
          live SALESboard, DASHboard, LEADERboard, DAYboard, RECONboard, and
          BVAboard.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          Less tab-hopping, faster decisions, and one working view for the
          tower—without pretending to replace your DMS as the source of truth.
        </p>
      </section>

      {/* Tile 2 – Track Every Deal */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Track Every Deal, Pending to Delivered
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “CRM says it&apos;s sold, accounting says it&apos;s not delivered,
              and my report double-counts everything.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “Pending and delivered live in separate lanes, so today&apos;s
              real unit count is obvious.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          SALESboard tracks every deal with clear Pending vs Delivered lanes and
          RDR status.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          Real-time sales numbers without phantom deals, double counts, or
          “wait, how many did we actually sell?”
        </p>
      </section>

      {/* Tile 3 – Know What’s Out on the Road */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Always Know What&apos;s Out on the Road
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “Who has that truck? Is it a demo, a loaner, or just…gone?”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “Every borrowed vehicle is tagged, timed, and tied to a driver—
              right on the board.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          BVAboard shows who has which vehicle, when it left, and how long
          it&apos;s been out.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          No more mystery miles or missing metal—clean control over demos,
          loaners, and borrowed units.
        </p>
      </section>

      {/* Tile 4 – Measure What Moves the Needle */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Measure What Actually Moves the Needle
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “I get a stack of reports at month-end, but nothing I can coach
              from during the month.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “You see units, F&amp;I, and gross trends while the month is
              happening—not after it&apos;s over.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          DASHboard rolls up unit counts, F&amp;I penetration, gross totals, and
          trend lines from store to dealer group levels.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          You can rally the team around live numbers, adjust mid-month, and stop
          coaching off last month&apos;s autopsy.
        </p>
      </section>

      {/* Tile 5 – Celebrate the Wins */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Celebrate the Wins. See the Leaders.
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “The same loud few get all the attention, the quiet killers stay
              invisible, and motivation fades.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “Every salesperson&apos;s performance is on the board—wins are
              visible, and effort doesn&apos;t get missed.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          LEADERboard highlights top performers and key stats across stores,
          complexes, regions, and the group.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          Healthy competition, stronger culture, and a clear picture of
          who&apos;s carrying the mail (and who needs a boost).
        </p>
      </section>

      {/* Tile 6 – See Today and the Trend */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          See Today and the Trend
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “We talk about pace and trend in meetings, but it&apos;s all gut
              feel and napkin math.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “You see today&apos;s results and where the month is headed on the
              same board.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          DAYboard shows daily and historical trends by unit type, status, and
          time frame.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          True visibility into pace—so you can pull levers early instead of
          panicking in the last three days.
        </p>
      </section>

      {/* Tile 7 – Get Recon Right */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Get Recon Right from the Appraisal
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “We guess at recon during appraisal, then eat overages and lose
              days getting cars to the front line.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “Recon is tracked from the first pencil to frontline ready, with
              overage and time-to-line in plain sight.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          RECONboard ties appraisal estimates, actual recon spend, and
          time-to-line to each unit.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          Tighter estimates, fewer overages, faster time-to-line—and you stop
          bleeding gross in holding costs.
        </p>
      </section>

      {/* Tile 8 – Kill Spreadsheet Chaos */}
      <section style={cardStyle}>
        <h2
          style={{
            fontSize: "20px",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Kill Spreadsheet and Pivot-Table Chaos
        </h2>

        <div style={chatStackStyle}>
          <div style={dealerBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: salesGreen }}>Dealer</div>

            <div>
              “I&apos;ve got pivot tables, VLOOKUPs, and custom sheets that only
              one person knows how to fix.”
            </div>
          </div>

          <div style={boardItBubbleStyle}>
            <div style={{ ...quoteLabelStyle, color: dashPink }}>
              Dealer Board It!
            </div>
            <div>
              “The boards become your pre-built, always-on pivot table—without
              the formulas and fragility.”
            </div>
          </div>
        </div>

        <p style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600, color: dayYellow }}>Feature:</span>
          Cloud-based board views built on clean, structured deal and recon
          data.
        </p>
        <p style={{ marginTop: 10 }}>
          <span style={{ fontWeight: 600, color: leaderBlue }}>Benefit:</span>
          One click instead of five formulas—less time wrestling spreadsheets,
          more time working the tower.
        </p>
      </section>

      <hr style={{ opacity: 0.2, margin: "28px 0" }} />
      <p style={{ opacity: 0.8 }}>
        Dealer Board It! is the board-centric workspace your team actually uses.
      </p>
    </main>
  );
}
