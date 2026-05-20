import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import "../styles/nevis.css";
import nevisLogo from "@/assets/nevis-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nevis Spa — Vino cum ești. Pleacă altfel." },
      { name: "description", content: "Nevis Wellness & Spa Oradea — un loc unde ora nu se grăbește, telefonul tace, iar tu îți redescoperi propriul ritm." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // scroll-triggered reveals
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

    // nav scroll
    const onScroll = () => {
      if (window.scrollY > 80) navRef.current?.classList.add("scrolled");
      else navRef.current?.classList.remove("scrolled");
      // parallax hero
      if (heroImgRef.current) {
        const y = Math.min(window.scrollY * 0.35, 300);
        heroImgRef.current.style.transform = `translateY(${y}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // cursor glow
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

  return (
    <div className="nevis-root">
      <div ref={cursorRef} className="nevis-cursor" aria-hidden />

      {/* NAV */}
      <nav ref={navRef} className="nv-nav">
        <a href="#" aria-label="Nevis"><img src={nevisLogo} alt="Hotel Nevis Wellness & SPA" className="nv-logo-img" /></a>
        <ul className="nv-menu">
          <li><a href="#experiente">Experiențe</a></li>
          <li><a href="#pachete">Pachete</a></li>
          <li><a href="#facilitati">Facilități</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#" className="nv-cta">Rezervă</a>
        <button className="nv-mobile" aria-label="Meniu">☰</button>
      </nav>

      {/* HERO */}
      <section className="nv-hero">
        <div ref={heroImgRef} className="nv-hero-image" />
        <div className="nv-hero-overlay" />
        <div className="nv-hero-vignette" />
        <div className="nv-hero-content">
          <div className="nv-hero-eyebrow">Nevis Wellness &amp; Spa · Oradea</div>
          <h1>
            <span className="l1">Vino cum ești.</span>
            <span className="l2">Pleacă altfel.</span>
          </h1>
          <p>Un loc unde ora nu se grăbește, telefonul tace, iar tu îți redescoperi propriul ritm.</p>
          <div className="nv-hero-ctas">
            <a href="#" className="nv-btn nv-btn-primary">Rezervă o experiență</a>
            <a href="#experiente" className="nv-btn nv-btn-secondary">Descoperă ritualurile</a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="nv-intro reveal">
        <div className="nv-intro-content">
          <p>
            La Nevis, lumânările ard lent, aburul învăluie încet, iar atingerea știe exact unde să rămână.{" "}
            <em>Nu te scoatem din lume — te aducem înapoi la tine.</em>{" "}
            În fiecare ritual lăsăm spațiu pentru tăcere, pentru respirație adâncă, pentru plăcerea aproape uitată de a nu face nimic.
          </p>
        </div>
      </section>

      {/* DORINTE */}
      <section className="nv-sec nv-dorinte" id="experiente">
        <div className="nv-container">
          <div className="nv-dorinte-header reveal">
            <div className="nv-eyebrow center">Alege după dorința ta</div>
            <h2 className="nv-title">Patru feluri de a fi<br /><em>bine cu tine</em></h2>
          </div>
          <div className="nv-dorinte-grid">
            {[
              { n: "— 01", h: "Vreau să mă răsfăț", p: "Lumânări, unturi parfumate, mătase pe piele. Ritualuri făcute să-ți amintească ce înseamnă să fii alintat.", cta: "Vezi ritualurile" },
              { n: "— 02", h: "Vreau să evadez", p: "Aburul băii turcești, jacuzzi-ul de pe acoperiș, un pahar rece în mână. Câteva ore în care nimeni nu te caută.", cta: "Vezi facilitățile" },
              { n: "— 03", h: "Vreau să respir", p: "Pentru mintea care n-a mai tăcut de mult. Atingeri lente, uleiuri calde, liniște aproape completă.", cta: "Vezi ritualurile" },
              { n: "— 04", h: "Vreau să strălucesc", p: "Pielea își găsește lumina. Ritualuri de drenaj, îmbujorare, hrănire profundă — pentru tenul și corpul tău.", cta: "Vezi ritualurile" },
            ].map((d, i) => (
              <a href="#" key={i} className={`nv-dorinta reveal reveal-d${i + 1}`}>
                <div className="nv-dorinta-num">{d.n}</div>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
                <div className="nv-dorinta-arrow">{d.cta} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEMNATURA */}
      <section className="nv-sec nv-semn">
        <div className="nv-container">
          <div className="nv-semn-header reveal">
            <div>
              <div className="nv-eyebrow">Ritualuri Semnătură Nevis</div>
              <h2 className="nv-title">Cele trei<br /><em>care definesc Nevis</em></h2>
            </div>
            <p>Trei ritualuri pe care le-am construit atent, pas cu pas — de la uleiurile alese până la tăcerea dintre atingeri. Sunt ale noastre, și ale tale când vrei.</p>
          </div>
          <div className="nv-ritual-grid">
            {[
              { img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=90", dur: "90 min", price: "185 lei", h: <>Masaj <em>Nirvana</em></>, p: "Nouăzeci de minute în care corpul învață din nou ce e greutatea. Uleiuri calde, tehnici ayurvedice, o tăcere care te ține strâns." },
              { img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=90", dur: "75 min", price: "240 lei", h: <>Ritualul <em>Reginei</em></>, p: "Șaptezeci și cinci de minute tratate ca un moment important. Pentru zilele când ai nevoie să te simți văzută, îngrijită, prioritizată." },
              { img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=900&q=90", dur: "50 min", price: "125 lei", h: <>Candle <em>Massage</em></>, p: "Lumânare din mătase care devine unt cald pe piele. Textură unică, aromă caldă, o relaxare care curge natural." },
            ].map((r, i) => (
              <a href="#" key={i} className={`nv-ritual reveal reveal-d${i + 1}`}>
                <div className="nv-ritual-img">
                  <div className="nv-ritual-img-inner" style={{ backgroundImage: `url(${r.img})` }} />
                </div>
                <div className="nv-ritual-meta">
                  <span className="nv-ritual-duration">{r.dur}</span>
                  <span className="nv-ritual-price">{r.price}</span>
                </div>
                <h3>{r.h}</h3>
                <p>{r.p}</p>
              </a>
            ))}
          </div>
          <div className="nv-sec-cta reveal">
            <a href="#" className="nv-link-cta">Vezi toate ritualurile</a>
          </div>
        </div>
      </section>

      {/* FACILITATI */}
      <section className="nv-sec nv-facil" id="facilitati">
        <div className="nv-container">
          <div className="nv-facil-header reveal">
            <div>
              <div className="nv-eyebrow">Facilități Nevis</div>
              <h2 className="nv-title">Cer, apă,<br /><em>abur, lemn.</em></h2>
            </div>
            <p>Patru spații gândite să lucreze împreună. Poți rămâne într-unul singur sau le poți trece pe toate — la noi nu există grabă.</p>
          </div>
          <div className="nv-facil-grid">
            {[
              { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=90", h: "Rooftop Jacuzzi", p: "Cer deschis, apă caldă, Oradea văzută de sus. În liniște completă." },
              { img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=90", h: "Baia de aburi", p: "Ritualul grecesc de mii de ani. Piele curățată, mușchi destinși, minte golită." },
              { img: "https://images.unsplash.com/photo-1554009975-d74653b879f1?w=900&q=90", h: "Aromasauna", p: "Căldură uscată, lemn parfumat, respirație adâncă. Detoxifiere aproape fără s-o simți." },
              { img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=90", h: "Oldsauna", p: "Sauna clasică nordică. Pentru cine vrea căldură serioasă și tradiție adevărată." },
            ].map((f, i) => (
              <div key={i} className={`nv-facil-card reveal reveal-d${i + 1}`}>
                <div className="nv-facil-img" style={{ backgroundImage: `url(${f.img})` }} />
                <div className="nv-facil-overlay">
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACHETE */}
      <section className="nv-sec nv-pachete" id="pachete">
        <div className="nv-container">
          <div className="nv-pachete-intro reveal">
            <div className="nv-eyebrow center">Pachete cu cazare</div>
            <h2 className="nv-title">Când o seară<br /><em>nu ajunge.</em></h2>
            <p>Combinăm cazarea în Hotel Nevis Wellness &amp; SPA cu ritualuri alese pentru tine. Te cazezi, te răsfeți, dormi adânc. Dimineața începe cu apă caldă și cer.</p>
          </div>
          <div className="nv-pachete-list">
            {[
              { n: "I.", h: "Weekend de răsfăț", p: "Două nopți, două ritualuri semnătură, acces complet la SPA și mic dejun.", dur: "2 nopți", price: "de la 890 lei", unit: "/persoană" },
              { n: "II.", h: "Mini-vacanță Nevis", p: "Trei nopți, trei ritualuri, acces nelimitat la toate facilitățile și cină festivă.", dur: "3 nopți", price: "de la 1.390 lei", unit: "/persoană" },
              { n: "III.", h: "Retreat pentru doi", p: "Două nopți, ritualuri în doi, rooftop jacuzzi rezervat, cină la lumânări.", dur: "2 nopți", price: "de la 1.890 lei", unit: "/cuplu" },
            ].map((p, i) => (
              <a href="#" key={i} className="nv-pachet reveal">
                <span className="nv-pachet-num">{p.n}</span>
                <div className="nv-pachet-info">
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
                <span className="nv-pachet-duration">{p.dur}</span>
                <span className="nv-pachet-price">{p.price}<small>{p.unit}</small></span>
              </a>
            ))}
          </div>
          <div className="nv-sec-cta reveal">
            <a href="#" className="nv-link-cta">Vezi toate pachetele</a>
          </div>
        </div>
      </section>

      {/* CADOU */}
      <section className="nv-sec nv-cadou">
        <div className="nv-container">
          <div className="nv-cadou-wrap">
            <div className="nv-cadou-img reveal">
              <div className="nv-cadou-img-inner" />
              <div className="nv-cadou-label">
                <span>Card Cadou</span>
                <h4>Nevis</h4>
              </div>
            </div>
            <div className="nv-cadou-text reveal reveal-d1">
              <div className="nv-eyebrow">Cadou Nevis</div>
              <h2 className="nv-title">Un cadou<br /><em>pe care nu îl uită.</em></h2>
              <p>Cardurile cadou Nevis sunt pentru aniversări, mulțumiri, sau pur și simplu pentru cineva care merită o pauză. Oferi o experiență, nu un obiect — și asta se simte.</p>
              <a href="#" className="nv-btn nv-btn-primary" style={{ background: "var(--forest)", color: "var(--cream)" }}>Oferă un Nevis</a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="nv-sec nv-reviews">
        <div className="nv-container">
          <div className="nv-reviews-header reveal">
            <div className="nv-eyebrow center">Ce spun oaspeții Nevis</div>
            <h2 className="nv-title">Poveștile lor,<br /><em>în cuvintele lor.</em></h2>
            <div className="nv-google">
              <strong>4,6</strong><span className="nv-stars">★★★★★</span> pe baza a <strong>1.978 recenzii</strong> Google
            </div>
          </div>
          <div className="nv-reviews-grid">
            {[
              { t: "Am venit obosită, am plecat alt om. Terapeuta a știut exact unde să insiste. Am dormit opt ore fără să mă trezesc — prima dată în luni.", a: "Ana M.", d: "Martie 2026" },
              { t: "Rooftop-ul seara, cu un pahar în mână, e imbatabil. Am rezervat deja weekend-ul următor. Liniște totală în mijlocul orașului.", a: "Radu P.", d: "Februarie 2026" },
              { t: "Ritualul Reginei e exact cum sună. Te simți văzut, nu doar tratat. Detaliile — ceaiul cald după, liniștea, parfumul — contează enorm.", a: "Ioana T.", d: "Ianuarie 2026" },
            ].map((r, i) => (
              <div key={i} className={`nv-review reveal reveal-d${i + 1}`}>
                <div className="nv-review-q">"</div>
                <p className="nv-review-t">{r.t}</p>
                <div className="nv-review-a">{r.a}<span>{r.d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="nv-contact" id="contact">
        <div className="nv-container">
          <div className="nv-contact-grid">
            <div className="nv-contact-info reveal">
              <div className="nv-eyebrow">Unde ne găsești</div>
              <h2>Te așteptăm<br /><em>la Oradea.</em></h2>
              <div className="nv-contact-item">
                <span className="nv-contact-label">Adresa</span>
                <a href="#" className="nv-contact-val">Hotel Nevis Wellness &amp; SPA<br />Str. Lăpușului 2, Oradea 410264</a>
              </div>
              <div className="nv-contact-item">
                <span className="nv-contact-label">Telefon</span>
                <a href="tel:+40732402136" className="nv-contact-val">0732 402 136</a>
              </div>
              <div className="nv-contact-item">
                <span className="nv-contact-label">Email</span>
                <a href="mailto:office@spanevis.ro" className="nv-contact-val">office@spanevis.ro</a>
              </div>
              <div className="nv-contact-item">
                <span className="nv-contact-label">Orar</span>
                <span className="nv-contact-val">Luni — Duminică · 09:00 — 22:00</span>
              </div>
            </div>
            <div className="nv-contact-map reveal reveal-d1" />
          </div>
        </div>
      </section>

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
