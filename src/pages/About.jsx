import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Pastor Michael Torres",
    role: "Lead Teaching Pastor",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "20+ years shepherding communities in faith and purpose.",
  },
  {
    name: "Pastor Sarah Kimble",
    role: "Discipleship Pastor",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Passionate about equipping believers to grow deeper in Christ.",
  },
  {
    name: "Pastor James Osei",
    role: "Youth Pastor",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Dedicated to raising the next generation of faith-filled leaders.",
  },
  {
    name: "Pastor Ruth Nakamura",
    role: "Worship & Arts Pastor",
    image: "https://i.pravatar.cc/300?img=45",
    bio: "Bringing people into God's presence through creativity and song.",
  },
  {
    name: "Pastor David Okonkwo",
    role: "Community Outreach Pastor",
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Building bridges between the church and the city we serve.",
  },
  {
    name: "Pastor Priya Mendez",
    role: "Family Life Pastor",
    image: "https://i.pravatar.cc/300?img=48",
    bio: "Helping families grow together in love, grace, and wholeness.",
  },
];

const TeamCard = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center group cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeUp 0.6s ease both",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Circle image */}
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          overflow: "hidden",
          border: hovered ? "4px solid #C8963E" : "4px solid transparent",
          boxShadow: hovered
            ? "0 0 0 4px rgba(200,150,62,0.18), 0 12px 40px rgba(0,0,0,0.18)"
            : "0 4px 20px rgba(0,0,0,0.10)",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Name & role */}
      <div className="mt-5 text-center">
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            transition: "color 0.2s",
            color: hovered ? "#C8963E" : "#1a1a1a",
          }}
        >
          {member.name}
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.88rem",
            color: "#888",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: "4px",
          }}
        >
          {member.role}
        </p>

        {/* Bio reveal on hover */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.85rem",
            color: "#666",
            marginTop: "10px",
            maxWidth: "200px",
            lineHeight: 1.6,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "all 0.3s ease",
            maxHeight: hovered ? "80px" : "0",
            overflow: "hidden",
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <>


      <div className="font-lato bg-white">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
          <Navbar />
          {/* Dark overlay background */}
          <div className="absolute inset-0 hero-bg" />
          {/* Gold mesh accent */}
          <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full bg-radial-gold-accent pointer-events-none" />
          <div className="absolute bottom-[-8%] left-[-4%] w-[400px] h-[400px] rounded-full bg-radial-gold-accent-2 pointer-events-none" />
          {/* Subtle grain */}
          <div className="absolute inset-0 bg-subtle-grain opacity-40 pointer-events-none" />

          <div className="relative z-20 px-5">
            <p className="hero-text-1 font-lato font-bold tracking-[0.28em] uppercase text-[#C8963E] text-[0.8rem] mb-5">
              ABOUT US
            </p>

            <h1 className="hero-text-2 font-playfair font-black leading-[1.08] text-[clamp(3.5rem,10vw,8rem)] text-white mb-2">
              WHO{" "}
              <em className="text-[#C8963E] not-italic drop-shadow-[0_0_60px_rgba(200,150,62,0.4)]">
                WE ARE
              </em>
            </h1>

            <div className="hero-text-2 divider-line h-[5px] rounded-[3px] bg-divider-gold w-[220px] mx-auto my-4" />

            <p className="hero-text-3 font-lato font-light text-[clamp(1rem,2.5vw,1.25rem)] text-white/65 max-w-[580px] mx-auto mb-11 leading-[1.8] tracking-[0.02em]">
              A community of people pursuing God, growing together,<br />
              and bringing hope to our city and beyond.
            </p>

            <div className="hero-text-3 flex gap-4 justify-center">
              <button className="cta-btn bg-[#C8963E] text-white border-none rounded py-3 px-7 cursor-pointer hover:bg-[#a97530] hover:scale-105">I'm New Here</button>
              <button className="font-lato font-bold text-[0.88rem] tracking-[0.12em] uppercase bg-transparent text-white border-2 border-white/30 rounded py-3 px-7 cursor-pointer transition-colors transition-transform hover:border-[#C8963E] hover:text-[#C8963E]">
                Watch Online
              </button>
            </div>
          </div>

          {/* Scroll arrow */}
          <div className="scroll-indicator absolute bottom-9 flex flex-col items-center gap-2">
            <span className="text-[0.7rem] tracking-[0.18em] text-white/40 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#C8963E]/80 to-transparent" />
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="py-[100px] px-[60px] bg-[#fafaf8] grid grid-cols-2 gap-0 max-w-[1100px] mx-auto">
          {/* Mission */}
          <div className="py-[60px] pr-[60px] border-r border-[#e8e4dc]">
            <div style={{
              width: 48, height: 4, borderRadius: 2,
              background: "#C8963E", marginBottom: "24px",
            }} />
            <h2 className="gold-underline" style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1a1a1a", marginBottom: "28px",
              lineHeight: 1.1,
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: "1.05rem", lineHeight: 1.9,
              color: "#555", fontWeight: 300,
              maxWidth: 400,
            }}>
              To love God wholeheartedly and love our neighbors as ourselves —
              making disciples who make disciples, transforming lives one
              relationship at a time. We are committed to preaching the
              uncompromising truth of Scripture while extending radical grace
              to everyone who walks through our doors.
            </p>
            <div style={{
              marginTop: "36px", display: "flex", alignItems: "center", gap: "14px",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "2px solid #C8963E",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "1.2rem" }}>✝</span>
              </div>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700, fontSize: "0.8rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#C8963E",
              }}>
                Matthew 28:19 – 20
              </span>
            </div>
          </div>

          {/* Vision */}
          <div style={{ padding: "60px 0 60px 60px" }}>
            <div style={{
              width: 48, height: 4, borderRadius: 2,
              background: "#1a1a1a", marginBottom: "24px",
            }} />
            <h2 className="gold-underline" style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1a1a1a", marginBottom: "28px",
              lineHeight: 1.1,
            }}>
              Our Vision
            </h2>
            <p style={{
              fontSize: "1.05rem", lineHeight: 1.9,
              color: "#555", fontWeight: 300,
              maxWidth: 400,
            }}>
              To see a city transformed by the power of the Gospel — where
              every family is rooted in faith, every neighborhood feels the
              warmth of genuine community, and every person discovers their
              God-given purpose. We envision a church without walls, reaching
              across cultures and generations with enduring hope.
            </p>
            <div style={{
              marginTop: "36px", display: "flex", alignItems: "center", gap: "14px",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "2px solid #1a1a1a",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "1.2rem" }}>◎</span>
              </div>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700, fontSize: "0.8rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#555",
              }}>
                Proverbs 29:18
              </span>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section style={{
          padding: "100px 60px 120px",
          background: "#fff",
          textAlign: "center",
        }}>
          {/* Section header */}
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700, letterSpacing: "0.28em",
            textTransform: "uppercase", color: "#C8963E",
            fontSize: "0.78rem", marginBottom: "16px",
          }}>
            MEET THE PASTORS
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#1a1a1a", marginBottom: "16px",
          }}>
            Our Team
          </h2>
          <div style={{
            height: 5, width: 80, borderRadius: 3,
            background: "#C8963E", margin: "0 auto 20px",
          }} />
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300, fontSize: "1.05rem",
            color: "#888", maxWidth: 480, margin: "0 auto 72px",
            lineHeight: 1.7,
          }}>
            Faithful servants dedicated to leading with love, wisdom, and integrity.
          </p>

          {/* Team grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "60px 40px",
            maxWidth: 900,
            margin: "0 auto",
          }}>
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <section style={{
          background: "linear-gradient(135deg, #1a1208 0%, #0f0f0f 100%)",
          padding: "80px 60px",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(200,150,62,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700, letterSpacing: "0.28em",
            textTransform: "uppercase", color: "#C8963E",
            fontSize: "0.78rem", marginBottom: "18px",
            position: "relative",
          }}>
            YOU BELONG HERE
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff", marginBottom: "28px",
            position: "relative",
          }}>
            Ready to Take Your Next Step?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300, fontSize: "1.05rem",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 460, margin: "0 auto 40px",
            lineHeight: 1.7, position: "relative",
          }}>
            Join us this Sunday and experience a community that is real, warm, and alive in faith.
          </p>
          <button className="cta-btn" style={{ position: "relative", padding: "16px 44px", fontSize: "0.92rem" }}>
            Plan Your Visit
          </button>
        </section>

          <Footer />
      </div>
    </>
  );
}
