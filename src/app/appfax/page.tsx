"use client";

export default function AppFaxPage() {
  return (
    <main>
      <section
        className="section-pad"
        style={{ display: "grid", placeItems: "center" }}
      >
        <div
          style={{
            position: "relative",
            width: "min(960px, 90vw)",
            aspectRatio: "16 / 9",
          }}
        >
          {/* Hero video */}
          <video
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          >
            {/* Adjust path if your hero.mp4 lives elsewhere */}
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Big label under the video */}
        <h1
          className="script"
          style={{
            marginTop: "24px",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            color: "white",
            textAlign: "center",
          }}
        >
          In Transit
        </h1>
      </section>
    </main>
  );
}
