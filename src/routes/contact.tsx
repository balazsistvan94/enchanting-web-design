import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import "../styles/nevis.css";
import nevisLogo from "@/assets/nevis-logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contactează-ne — Nevis Wellness & SPA Oradea" },
      { name: "description", content: "Hotel Nevis Wellness & SPA — Oradea, Strada Lăpușului 2. Scrie-ne sau sună-ne pentru rezervări și informații." },
      { property: "og:title", content: "Contact — Nevis Wellness & SPA" },
      { property: "og:description", content: "Suntem aici pentru tine. Scrie-ne sau sună-ne pentru programări și detalii." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: ContactPage,
});

const HERO_IMG = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80";

function ContactPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) navRef.current?.classList.add("scrolled");
      else navRef.current?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="nevis-root">
      <div ref={cursorRef} className="nevis-cursor" aria-hidden />

      {/* NAV */}
      <nav ref={navRef} className="nv-nav">
        <Link to="/" aria-label="Nevis">
          <img src={nevisLogo} alt="Hotel Nevis Wellness & SPA" className="nv-logo-img" />
        </Link>
        <ul className="nv-menu">
          <li><Link to="/" hash="experiente">Experiențe</Link></li>
          <li><Link to="/" hash="pachete">Pachete</Link></li>
          <li><Link to="/" hash="facilitati">Facilități</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <a href="#" className="nv-cta">Rezervă</a>
        <button className="nv-mobile" aria-label="Meniu">☰</button>
      </nav>

      <main className="nv-ctx-page">
        <div className="nv-ctx-grain" aria-hidden />

        <div className="nv-ctx-wrap">
          {/* LEFT */}
          <div className="nv-ctx-left">
            <div>
              <h1 className="nv-ctx-h1">
                Contactați
                <span className="nv-ctx-h1-it">Spa Nevis</span>
              </h1>
              <div className="nv-ctx-eyebrow-row">
                <span className="nv-ctx-eyebrow-line" />
                <span className="nv-ctx-eyebrow-txt">Destinația relaxării tale</span>
              </div>
            </div>

            <div className="nv-ctx-img-collage">
              <div
                className="nv-ctx-img"
                style={{ backgroundImage: `url(${HERO_IMG})` }}
                aria-hidden
              />
              <div className="nv-ctx-addr-card">
                <span className="nv-ctx-lbl">Locație</span>
                <p className="nv-ctx-addr">
                  Hotel Nevis,<br />
                  Strada Lăpușului 2,<br />
                  Oradea, România
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="nv-ctx-right">
            <div className="nv-ctx-quick">
              <a href="tel:0732402136" className="nv-ctx-quick-item">
                <span className="nv-ctx-quick-lbl">Programări telefonice</span>
                <span className="nv-ctx-quick-val">0732 402 136</span>
              </a>
              <a href="mailto:office@spanevis.ro" className="nv-ctx-quick-item">
                <span className="nv-ctx-quick-lbl">Corespondență</span>
                <span className="nv-ctx-quick-val">office@spanevis.ro</span>
              </a>
            </div>

            <div className="nv-ctx-form-card">
              <h2 className="nv-ctx-form-title">Solicitați detalii</h2>
              <form className="nv-ctx-form" onSubmit={handleSubmit}>
                <div className="nv-ctx-field">
                  <label className="nv-ctx-field-lbl" htmlFor="ctx-name">Nume Complet</label>
                  <input id="ctx-name" type="text" name="name" required />
                </div>
                <div className="nv-ctx-field">
                  <label className="nv-ctx-field-lbl" htmlFor="ctx-email">Adresă Email</label>
                  <input id="ctx-email" type="email" name="email" required />
                </div>
                <div className="nv-ctx-field">
                  <label className="nv-ctx-field-lbl" htmlFor="ctx-phone">Telefon (opțional)</label>
                  <input id="ctx-phone" type="tel" name="phone" />
                </div>
                <div className="nv-ctx-field">
                  <label className="nv-ctx-field-lbl" htmlFor="ctx-msg">Mesaj</label>
                  <textarea id="ctx-msg" name="message" rows={3} required />
                </div>
                <button type="submit" className="nv-ctx-submit">
                  {sent ? "Mesaj trimis ✓" : "Trimite mesajul"}
                </button>
              </form>

              <div className="nv-ctx-hours-row">
                <div>
                  <span className="nv-ctx-hours-lbl">Wellness Spa</span>
                  <span className="nv-ctx-hours-day">Luni — Duminică</span>
                </div>
                <div className="nv-ctx-hours-time">08:00 — 22:00</div>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="nv-ctx-map">
            <iframe
              title="Hartă Hotel Nevis Oradea"
              src="https://www.google.com/maps?q=Hotel+Nevis+Strada+Lapusului+2+Oradea&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="nv-ctx-map-overlay">
              <span className="nv-ctx-map-pin" aria-hidden />
              <div className="nv-ctx-map-txt">
                <span className="nv-ctx-map-h">Hotel Nevis</span>
                <span className="nv-ctx-map-s">Lăpușului 2 · Oradea</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="nv-footer">
        <div className="nv-container">
          <div className="nv-footer-top">
            <div>
              <img src={nevisLogo} alt="Hotel Nevis" className="nv-footer-brand-img" />
              <p className="nv-footer-tag">Vino cum ești. Pleacă altfel.</p>
            </div>
            <div className="nv-footer-col">
              <h5>Experiențe</h5>
              <ul>
                <li><a href="#">Ritualuri Semnătură</a></li>
                <li><a href="#">Masaje</a></li>
                <li><a href="#">Răsfăț oriental</a></li>
                <li><a href="#">Tinerețe &amp; longevitate</a></li>
              </ul>
            </div>
            <div className="nv-footer-col">
              <h5>Nevis</h5>
              <ul>
                <li><a href="#">Pachete cu cazare</a></li>
                <li><a href="#">Facilități</a></li>
                <li><a href="#">Card cadou</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="nv-footer-col">
              <h5>Informații</h5>
              <ul>
                <li><a href="#">Politica de confidențialitate</a></li>
                <li><a href="#">Termeni și condiții</a></li>
                <li><a href="#">Politica de anulare</a></li>
                <li><a href="#">ANPC</a></li>
              </ul>
            </div>
          </div>
          <div className="nv-footer-bottom">
            <div>© 2026 Hotel Nevis Wellness &amp; SPA</div>
            <div>Oradea · Str. Lăpușului 2</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
