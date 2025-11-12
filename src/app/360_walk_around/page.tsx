"use client";

import TileGlobe from "@/components/TileGlobe";

export default function WalkAround() {
  return (
    <main>
      {/* Header */}
      <section className="section-pad pb-0">
        <div className="section-max" style={{ textAlign: "center" }}>
          <h1 className="section-title mb-0">360 Walk-Around</h1>
        </div>
      </section>

      {/* Bonus Levels */}
      <section id="bonus" className="section-pad pt-0">
        <div className="section-max">
          {/* Spinning 3D Tile Ring */}
          <TileGlobe
            tiles={[
              // ORDER: logo → right column (top→bottom) → left column (top→bottom)

              // 1) Logo
              {
                id: "dbilogo",
                title: "Dealer Board It! — Overview",
                imgSrc: "/tiles/dbilogo.png",
              },

              // Right column (7)
              {
                id: "salesboard",
                title: "SALESboard — log it, board it, track it",
                imgSrc: "/tiles/salesboard.png",
              },

              {
                id: "dashboardunits",
                title: "DASHboard — Units snapshot",
                imgSrc: "/tiles/dashboardunits.png",
              },

              {
                id: "leaderboard",
                title: "LEADERboard — showtime for the team",
                imgSrc: "/tiles/leaderboard.png",
              },
              {
                id: "dayboard",
                title: "DAYboard — time & trend",
                imgSrc: "/tiles/dayboard.png",
              },
              {
                id: "reconboardactive",
                title: "RECONboard — Active",
                imgSrc: "/tiles/reconboardactive.png",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
