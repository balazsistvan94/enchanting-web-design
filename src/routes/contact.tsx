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

function ContactPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

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
      io.disconnect();
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
        <Link to="/" aria-label="Nevis"><img src={nevisLogo} alt="Hotel Nevis Wellness & SPA" className="nv-logo-img" /></Link>
        <ul className="nv-menu">
          <li><Link to="/" hash="experiente">Experiențe</Link></li>
          <li><Link to="/" hash="pachete">Pachete</Link></li>
          <li><Link to="/" hash="facilitati">Facilități</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <a href="#" className="nv-cta">Rezervă</a>
        <button className="nv-mobile" aria-label="Meniu">☰</button>
      </nav>

      {/* PAGE */}
      <main className="nv-contact-page">
        <div className="nv-selector-container">

          {/* HERO */}
          <section className="nv-contact-hero reveal">
            <div className="nv-selector-eyebrow">Suntem aici pentru tine</div>
            <h1 className="nv-selector-h1">
              Contactează-<em>ne</em>
            </h1>
            <p className="nv-selector-lead">
              Fie că vrei să rezervi un ritual, fie că ai o întrebare —
              <br />ne face plăcere să auzim de la tine.
            </p>
          </section>

          {/* INFO */}
          <div className="nv-selector-instruction reveal">
            <span>01 — Informații de contact</span>
            <span className="nv-selector-line" />
          </div>

          <section className="nv-contact-grid reveal">
            <article className="nv-contact-card">
              <div className="nv-contact-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="nv-contact-label">Locație</div>
              <div className="nv-contact-value">Hotel Nevis</div>
              <div className="nv-contact-sub">Strada Lăpușului 2, Oradea</div>
              <a
                href="https://maps.google.com/?q=Hotel+Nevis+Strada+Lapusului+2+Oradea"
                target="_blank"
                rel="noopener noreferrer"
                className="nv-contact-link"
              >
                Deschide harta →
              </a>
            </article>

            <article className="nv-contact-card">
              <div className="nv-contact-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M4 5h16v14H4z" strokeLinejoin="round" />
                  <path d="m4 6 8 7 8-7" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="nv-contact-label">Email</div>
              <div className="nv-contact-value">office@spanevis.ro</div>
              <div className="nv-contact-sub">Răspundem în maxim 24 de ore</div>
              <a href="mailto:office@spanevis.ro" className="nv-contact-link">
                Trimite un email →
              </a>
            </article>

            <article className="nv-contact-card">
              <div className="nv-contact-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="nv-contact-label">Telefon</div>
              <div className="nv-contact-value">0732 402 136</div>
              <div className="nv-contact-sub">Luni — Duminică, 09:00 — 21:00</div>
              <a href="tel:+40732402136" className="nv-contact-link">
                Sună acum →
              </a>
            </article>
          </section>

          {/* FORM */}
          <div className="nv-selector-instruction reveal">
            <span>02 — Scrie-ne un mesaj</span>
            <span className="nv-selector-line" />
          </div>

          <section className="nv-contact-form-wrap reveal">
            <div className="nv-contact-form-side">
              <div className="nv-detail-eyebrow">Programare sau întrebare</div>
              <h2 className="nv-detail-title">
                Spune-ne <em>cum te putem ajuta</em>
              </h2>
              <p className="nv-detail-desc">
                Completează formularul și un membru al echipei noastre îți va răspunde personal.
                Pentru rezervări urgente, te rugăm să ne suni direct.
              </p>
              <div className="nv-contact-hours">
                <div className="nv-aside-label">Program SPA</div>
                <div className="nv-hours-row"><span>Luni — Vineri</span><span>09:00 — 21:00</span></div>
                <div className="nv-hours-row"><span>Sâmbătă</span><span>10:00 — 21:00</span></div>
                <div className="nv-hours-row"><span>Duminică</span><span>10:00 — 20:00</span></div>
              </div>
            </div>

            <form className="nv-contact-form" onSubmit={handleSubmit}>
              <div className="nv-form-row">
                <label className="nv-field">
                  <span>Nume</span>
                  <input type="text" name="name" required placeholder="Numele tău" />
                </label>
                <label className="nv-field">
                  <span>Telefon</span>
                  <input type="tel" name="phone" placeholder="07xx xxx xxx" />
                </label>
              </div>
              <label className="nv-field">
                <span>Email</span>
                <input type="email" name="email" required placeholder="email@exemplu.ro" />
              </label>
              <label className="nv-field">
                <span>Subiect</span>
                <input type="text" name="subject" placeholder="Rezervare, întrebare, pachet cadou..." />
              </label>
              <label className="nv-field">
                <span>Mesaj</span>
                <textarea name="message" rows={5} required placeholder="Scrie-ne aici..." />
              </label>
              <div className="nv-form-actions">
                <button type="submit" className="nv-btn nv-btn-primary">
                  {sent ? "Mesaj trimis ✓" : "Trimite mesajul"}
                </button>
                <span className="nv-form-note">Răspundem în maxim 24 de ore</span>
              </div>
            </form>
          </section>

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
