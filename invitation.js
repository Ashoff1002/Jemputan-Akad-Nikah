import React from "react";

const floralTopLeft = "https://pngimg.com/d/rose_PNG657.png";
const floralBottomRight = "https://pngimg.com/d/rose_PNG684.png";
const qrSrc = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://forms.gle/TZN7Pnk7d6ADCP5i7&choe=UTF-8";
const rsvpLink = "https://forms.gle/TZN7Pnk7d6ADCP5i7";

export default function Invitation() {
  return (
    <main
      style={{
        background: "#fdf6f2",
        minHeight: "100vh",
        fontFamily: "'Montserrat', Arial, sans-serif",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      aria-label="Jemputan Majlis Akad Nikah Aliana & Syahir"
    >
      <article
        className="card"
        style={{
          maxWidth: 500,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
          padding: "32px 24px",
          textAlign: "center",
          border: "2px solid #f4dcc9",
          position: "relative",
        }}
        role="region"
        aria-labelledby="invite-title"
      >
        {/* Decorative flowers */}
        <img
          src={floralTopLeft}
          className="floral top-left"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 100,
            opacity: 0.2,
            zIndex: 0,
            left: 0,
            top: 0,
            transform: "rotate(-10deg)",
            pointerEvents: "none",
          }}
        />
        <img
          src={floralBottomRight}
          className="floral bottom-right"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 100,
            opacity: 0.2,
            zIndex: 0,
            right: 0,
            bottom: 0,
            transform: "rotate(10deg)",
            pointerEvents: "none",
          }}
        />
        {/* Titles */}
        <h1
          id="invite-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#8d684c",
            marginBottom: "0.5em",
            marginTop: 0,
            fontSize: "2.1em",
            position: "relative",
            zIndex: 1,
          }}
        >
          Jemputan Majlis Akad Nikah
        </h1>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#8d684c",
            marginBottom: "0.5em",
            marginTop: 0,
            fontSize: "1.4em",
            position: "relative",
            zIndex: 1,
          }}
        >
          Aliana & Syahir
        </h2>
        <p
          style={{
            color: "#573c2c",
            fontSize: "1.08em",
            lineHeight: 1.7,
            position: "relative",
            zIndex: 1,
          }}
        >
          Dengan penuh kesyukuran, kami menjemput anda ke majlis perkahwinan kami:
        </p>
        <section
          className="details"
          style={{
            margin: "24px 0",
            background: "#f4dcc9",
            borderRadius: 8,
            padding: 16,
            display: "inline-block",
            position: "relative",
            zIndex: 1,
          }}
          aria-label="Butiran Majlis"
        >
          <p
            style={{
              color: "#573c2c",
              fontSize: "1.08em",
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            <strong>Tarikh:</strong> Malam Hari Raya Aidiladha (7/6/2025)
            <br />
            <strong>Masa:</strong> Selepas Isya'
            <br />
            <strong>Tempat:</strong> Masjid Jamek Kubang Kerian
          </p>
        </section>
        <p
          style={{
            color: "#573c2c",
            fontSize: "1.08em",
            lineHeight: 1.7,
            position: "relative",
            zIndex: 1,
          }}
        >
          Kehadiran anda amat kami hargai sebagai tanda kasih dan doa restu.
        </p>
        <section
          className="qr-section"
          style={{ margin: "24px 0", position: "relative", zIndex: 1 }}
          aria-label="RSVP"
        >
          <p>
            <strong>Sila imbas kod QR ini untuk menyatakan kehadiran:</strong>
          </p>
          <img
            src={qrSrc}
            width={140}
            height={140}
            alt="Kod QR RSVP"
            style={{
              width: 140,
              height: 140,
              borderRadius: 12,
              border: "1px solid #f4dcc9",
              background: "#fff",
              marginBottom: 8,
            }}
          />
          <p>
            <a
              href={rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8d684c",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Isi RSVP di sini (klik link)
            </a>
          </p>
        </section>
        <section
          className="contacts"
          style={{
            marginTop: 22,
            fontSize: "1em",
            position: "relative",
            zIndex: 1,
          }}
          aria-label="Kontak"
        >
          <p>Sebarang pertanyaan, sila hubungi:</p>
          <address style={{ fontStyle: "normal", color: "#573c2c" }}>
            <strong style={{ color: "#8d684c" }}>
              Ridhwan Abdul Rahman
            </strong>
            :{" "}
            <a href="tel:0139217423" style={{ color: "#8d684c" }}>
              013-921 7423
            </a>
            <br />
            <strong style={{ color: "#8d684c" }}>
              Ashoff Murtadha Ridhwan
            </strong>
            :{" "}
            <a href="tel:01158520899" style={{ color: "#8d684c" }}>
              011-5852 0899
            </a>
          </address>
        </section>
      </article>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 600px) {
            .card { padding: 16px 4px !important; }
            .floral { width: 68px !important; }
          }
        `}
      </style>
      {/* Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap"
      />
    </main>
  );
}