import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import "../styles/nevis.css";
import nevisLogo from "@/assets/nevis-logo.png";

export const Route = createFileRoute("/alege-masajul")({
  head: () => ({
    meta: [
      { title: "Alege masajul după starea ta — Nevis Spa Oradea" },
      { name: "description", content: "Nu știi ce masaj vrei? Spune-ne cum te simți și îți recomandăm protocolul potrivit — la Nevis Wellness & SPA Oradea." },
      { property: "og:title", content: "Alege masajul după starea ta — Nevis Spa" },
      { property: "og:description", content: "Traducem starea ta în tratament. Alege cum te simți, primește protocolul potrivit." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: AlegeMasajul,
});

type Protocol = {
  key: string;
  state: string;
  hint: string;
  eyebrow: string;
  titleA: string;
  titleB: string;
  description: string;
  technique: string;
  oils: string[];
  forWhom: string;
  duration: string;
  price: string;
  icon: ReactNode;
};

const protocols: Protocol[] = [
  {
    key: "stres",
    state: "Stres",
    hint: "Relaxare profundă",
    eyebrow: "Pentru stres",
    titleA: "Masaj pentru",
    titleB: "Relaxare Profundă",
    description:
      "Tehnici lente și ritmice, presiuni blânde, cu uleiuri de lavandă, bergamotă și rozmarin. Sistemul tău nervos primește permisiunea să se oprească.",
    technique: "Tehnici lente, ritmice, presiuni blânde",
    oils: ["Lavandă", "Bergamotă", "Rozmarin"],
    forWhom: "Pentru un sistem nervos suprasolicitat",
    duration: "50 min",
    price: "135",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "anxietate",
    state: "Anxietate",
    hint: "Calm și liniște",
    eyebrow: "Pentru anxietate",
    titleA: "Masaj pentru",
    titleB: "Calm și Liniște",
    description:
      "Mișcări continue, fără pauze bruște, cu o prezență blândă și ancorată. Uleiurile de brad siberian, lemongrass și portocale dulci liniștesc sistemul nervos și aduc corpul înapoi în siguranță.",
    technique: "Mișcări continue, fără pauze bruște — prezență ancorată",
    oils: ["Brad siberian", "Lemongrass", "Portocale dulci"],
    forWhom: "Când corpul are nevoie să fie readus în siguranță",
    duration: "50 min",
    price: "135",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
  {
    key: "epuizare",
    state: "Epuizare",
    hint: "Energie & revigorare",
    eyebrow: "Pentru epuizare",
    titleA: "Masaj pentru",
    titleB: "Energie și Revigorare",
    description:
      "Percuții ușoare, presopunctură pe punctele de vitalitate, cu uleiuri de mentă, rozmarin și eucalipt. Trezim energia pe care o ai deja în tine.",
    technique: "Percuții ușoare, presopunctură pe puncte de vitalitate",
    oils: ["Mentă", "Rozmarin", "Eucalipt"],
    forWhom: "Când rezervorul de energie e gol și ai nevoie de reactivare",
    duration: "50 min",
    price: "135",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    key: "tristete",
    state: "Tristețe",
    hint: "Reechilibrare emoțională",
    eyebrow: "Pentru tristețe",
    titleA: "Masaj pentru",
    titleB: "Reechilibrare Emoțională",
    description:
      "Un masaj cald, profund și prezent, cu uleiuri de portocale dulci, lavandă și lămâie — arome care ridică starea de spirit cu blândețe. Uneori corpul are nevoie să fie îngrijit, nu doar atins. Acest protocol oferă tocmai asta.",
    technique: "Atingere caldă, profundă, prezentă — îngrijire, nu doar atingere",
    oils: ["Portocale dulci", "Lavandă", "Lămâie"],
    forWhom: "Când corpul are nevoie să fie îngrijit, nu doar atins",
    duration: "50 min",
    price: "135",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
      </svg>
    ),
  },
  {
    key: "oboseala",
    state: "Oboseală mentală",
    hint: "Claritate & concentrare",
    eyebrow: "Pentru oboseală mentală",
    titleA: "Masaj pentru",
    titleB: "Claritate și Concentrare",
    description:
      "Focusat pe scalp, gât și umeri — sediul tensiunii mentale. Uleiurile de rozmarin, lămâie și eucalipt stimulează claritatea, iar atingerile lente și intenționate dizolvă presiunea acumulată și lasă mintea să respire din nou.",
    technique: "Focus pe scalp, gât și umeri — atingeri lente și intenționate",
    oils: ["Rozmarin", "Lămâie", "Eucalipt"],
    forWhom: "Pentru minte saturată, gânduri care nu se opresc",
    duration: "50 min",
    price: "135",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-10-1 2-2 4-2 6 0 4 3 7 7 7-1 2-4 4-7 4z" />
      </svg>
    ),
  },
];

function AlegeMasajul() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [activeKey, setActiveKey] = useState<string>("stres");
  const [visible, setVisible] = useState(true);

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

  const handleSelect = (key: string) => {
    if (key === activeKey) return;
    setVisible(false);
    setTimeout(() => {
      setActiveKey(key);
      setVisible(true);
    }, 280);
  };

  const active = protocols.find((p) => p.key === activeKey) ?? protocols[0];

  return (
    <div className="nevis-root">
      <div ref={cursorRef} className="nevis-cursor" aria-hidden />

      {/* NAV — same as homepage */}
      <nav ref={navRef} className="nv-nav">
        <Link to="/" aria-label="Nevis"><img src={nevisLogo} alt="Hotel Nevis Wellness & SPA" className="nv-logo-img" /></Link>
        <ul className="nv-menu">
          <li><Link to="/" hash="experiente">Experiențe</Link></li>
          <li><Link to="/" hash="pachete">Pachete</Link></li>
          <li><Link to="/" hash="facilitati">Facilități</Link></li>
          <li><Link to="/" hash="contact">Contact</Link></li>
        </ul>
        <a href="#" className="nv-cta">Rezervă</a>
        <button className="nv-mobile" aria-label="Meniu">☰</button>
      </nav>

      {/* PAGE */}
      <main className="nv-selector-page">
        <div className="nv-selector-container">

          {/* HERO */}
          <section className="nv-selector-hero reveal">
            <div className="nv-selector-eyebrow">Ghid de alegere</div>
            <h1 className="nv-selector-h1">
              Nu știi ce masaj vrei?<br />
              <span>Spune-ne cum te simți.</span>
            </h1>
            <p className="nv-selector-lead">
              Uneori corpul știe ce are nevoie, dar mintea nu găsește cuvintele.
            </p>
            <p className="nv-selector-sub">
              Noi te ajutăm să traduci starea în tratament — tot ce trebuie să faci este să ne spui cum ai venit.
            </p>
          </section>

          {/* STEP 1 */}
          <div className="nv-selector-instruction reveal">
            <span>01 — Alege starea cu care ai venit</span>
            <span className="nv-selector-line" />
          </div>

          <div className="nv-selector-states reveal">
            {protocols.map((p) => (
              <button
                type="button"
                key={p.key}
                onClick={() => handleSelect(p.key)}
                className={`nv-state-card ${activeKey === p.key ? "is-active" : ""}`}
              >
                <span className="nv-state-icon">{p.icon}</span>
                <span className="nv-state-name">{p.state}</span>
                <span className="nv-state-hint">{p.hint}</span>
              </button>
            ))}
          </div>

          {/* STEP 2 */}
          <div className="nv-selector-instruction reveal">
            <span>02 — Iată protocolul potrivit pentru tine</span>
            <span className="nv-selector-line" />
          </div>

          <div className="nv-selector-detail reveal">
            <div className={`nv-detail-content ${visible ? "is-visible" : ""}`}>
              <div className="nv-detail-grid">
                <div>
                  <div className="nv-detail-eyebrow">{active.eyebrow}</div>
                  <h2 className="nv-detail-title">
                    {active.titleA} <em>{active.titleB}</em>
                  </h2>
                  <p className="nv-detail-desc">{active.description}</p>
                  <div className="nv-price-tag">
                    <span className="nv-price-duration">{active.duration}</span>
                    <span className="nv-price-amount">{active.price}</span>
                    <span className="nv-price-currency">lei</span>
                  </div>
                </div>
                <aside className="nv-detail-aside">
                  <div className="nv-aside-block">
                    <div className="nv-aside-label">Tehnică</div>
                    <div className="nv-aside-value">{active.technique}</div>
                  </div>
                  <div className="nv-aside-block">
                    <div className="nv-aside-label">Uleiuri esențiale</div>
                    <div className="nv-oils">
                      {active.oils.map((o) => (
                        <div key={o} className="nv-oil">{o}</div>
                      ))}
                    </div>
                  </div>
                  <div className="nv-aside-block">
                    <div className="nv-aside-label">Pentru cine</div>
                    <div className="nv-aside-value">{active.forWhom}</div>
                  </div>
                </aside>
              </div>
              <div className="nv-detail-cta">
                <a href="#" className="nv-btn nv-btn-primary">Rezervă acest ritual</a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER — same as homepage */}
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
                <li><a href="#">Contact</a></li>
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
