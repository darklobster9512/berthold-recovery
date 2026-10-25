import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header, kompetenzen } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSettings } from "@/hooks/useSettings";
import { journalPosts } from "@/components/ArticleLayout";
import heroImg from "@/assets/hero-library.jpg";
import justiceImg from "@/assets/editorial-justice.jpg";
import cryptoImg from "@/assets/crypto-hero-bg.jpg";
import penImg from "@/assets/contact-hero-bg.jpg";
import loungeImg from "@/assets/partner-coinbase-meeting.jpg";
import meetingImg from "@/assets/partner-bka-cooperation.jpg";

const team = [
  { name: "Dr. Thomas Korte", role: "Rechtsanwalt · Gründungspartner", focus: "Cybercrime, Datenschutz, Kapitalmarkt, Kryptonachverfolgung", img: "/lovable-uploads/2cad25d9-8d15-482b-bc38-5b1378991be6.png" },
  { name: "Dr. Maximilian Krause", role: "Rechtsanwalt", focus: "Prozessführung, Datenschutz, Kapitalmarktrecht", img: "/lovable-uploads/b4127816-793a-42ef-b5e4-34987580a428.png" },
  { name: "Dr. Alexander Voigt", role: "Rechtsanwalt", focus: "Immobilienrecht, Prozessführung, Datenschutz", img: "/lovable-uploads/49592374-fd61-4f95-b984-a0cbeeaad8f5.png" },
  { name: "Dr. Sebastian Werner", role: "Rechtsanwalt", focus: "Immobilienrecht, Streitbeilegung, Cybercrime", img: "/lovable-uploads/709d1496-f015-4b38-b331-9cb17b1b6eaa.png" },
  { name: "Julian Maier", role: "Blockchain- und Datenanalyse", focus: "", img: "/lovable-uploads/fb9c5d6b-b0d1-44b0-9835-4301827237bb.png" },
  { name: "Clara Hoffmann", role: "Mandatsbetreuung", focus: "", img: "/lovable-uploads/eb203c07-90e7-479d-8fd8-fdaa83fcce97.png" },
];

const rubriken = [
  { to: "/kompetenz/cybercrime", label: "Cybercrime", text: "Wenn Betrug, Datendiebstahl oder Erpressung digital geschehen, handeln wir straf- und zivilrechtlich zugleich.", img: cryptoImg, span: "md:col-span-2" },
  { to: "/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis", label: "Kryptonachverfolgung", text: "Transaktionen lesen, Wege rekonstruieren, Herkunft belegen.", span: "" },
  { to: "/kompetenz/wertpapier-und-kapitalmarktrecht", label: "Kapitalmarktrecht", text: "Anlegerschutz, Aufsicht und Produktfragen aus einer Hand.", span: "" },
  { to: "/kompetenz/private-clients-family-offices", label: "Private Clients", text: "Diskrete Begleitung von Familien, Unternehmern und Vermögen.", img: loungeImg, span: "md:col-span-2" },
  { to: "/kompetenz/prozessfuhrung", label: "Prozessführung", text: "Streit mit Plan — vor Gericht und davor.", span: "" },
  { to: "/kompetenz/immobilienrecht", label: "Immobilienrecht", text: "Von der Transaktion bis zum Rechtsstreit um Grund und Boden.", span: "" },
  { to: "/kompetenz/gesellschafts-und-unternehmensrecht", label: "Gesellschaftsrecht", text: "Struktur, Governance und Konflikte unter Gesellschaftern.", img: penImg, span: "md:col-span-2" },
  { to: "/kompetenz/datenschutz-und-compliance", label: "Datenschutz & Compliance", text: "Regeln, die tragen — und Antworten, wenn etwas passiert.", span: "md:col-span-2" },
];

const journal = journalPosts.slice(0, 3);

const facts = [
  ["12+", "Jahre Praxis"],
  ["1.400", "betreute Mandate"],
  ["8", "Rechtsgebiete"],
  ["24 h", "Rückmeldung"],
];

const chapters = [
  ["I", "Das erste Gespräch", "Sie schildern, wir hören zu. Am Ende wissen Sie, ob und wie wir helfen können — ohne Kosten."],
  ["II", "Die Analyse", "Wir sichten Unterlagen, prüfen Zahlungsströme und bewerten Chancen und Risiken offen."],
  ["III", "Die Strategie", "Ein schriftlicher Plan mit Schritten, Zeitrahmen und transparenter Kostenaussage."],
  ["IV", "Die Umsetzung", "Wir verhandeln, sichern und klagen — und halten Sie bei jedem Schritt auf dem Laufenden."],
];

const Index = () => {
  const { phone, phoneEnabled } = useSettings();
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1. Cover */}
      <section className="container mx-auto px-6 max-w-7xl py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8 flex flex-col">
            <img src={heroImg} alt="Kanzleibibliothek von Korte & Partner" width={1600} height={1104} className="order-last lg:order-none mt-8 lg:mt-0 w-full h-[220px] md:h-[480px] object-cover" />
            <p className="kicker lg:mt-8 mb-4 md:mb-5">Titelgeschichte</p>
            <h1 className="font-serif text-[2.1rem] md:text-6xl leading-[1.08] text-primary">
              Recht, das Vermögen <em className="text-secondary">schützt</em> — analog wie digital.
            </h1>
            <p className="mt-5 md:mt-6 font-serif italic text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
              Korte &amp; Partner verbindet klassische Wirtschaftskanzlei mit technischem Verständnis für Blockchain, Zahlungsströme und Cyberangriffe. Für Privatpersonen ebenso wie für Unternehmen.
            </p>
            <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/kontakt">
                <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-secondary h-12 px-8 w-full sm:w-auto">
                  Kostenfreies Erstgespräch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="rounded-none border-primary text-primary hover:bg-muted h-12 px-8 w-full sm:w-auto">Zum Journal</Button>
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10">
            <div className="hidden lg:block mb-6"><p className="kicker">In dieser Ausgabe</p></div>
            <ol className="divide-y divide-border hidden lg:block">
              {kompetenzen.map((k, i) => (
                <li key={k.to}>
                  <Link to={k.to} className="group flex items-baseline gap-4 py-4">
                    <span className="font-serif italic text-accent text-2xl w-8">{i + 1}</span>
                    <span className="font-serif text-lg text-primary group-hover:text-secondary flex-1">{k.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary" />
                  </Link>
                </li>
              ))}
            </ol>
            {phoneEnabled && (
              <div className="lg:mt-8 bg-primary text-primary-foreground p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-2">Direkter Draht</p>
                <a href={`tel:${phone}`} className="font-serif text-2xl hover:text-accent">{phone}</a>
                <p className="text-sm text-primary-foreground/60 mt-2">Mo–Fr, 8 bis 19 Uhr</p>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* 2. Leitartikel */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <img src={justiceImg} alt="Gesetzbücher und Waage" loading="lazy" width={912} height={1200} className="w-full h-[240px] md:h-[460px] object-cover" />
          </div>
          <div className="lg:col-span-8">
            <p className="kicker mb-5">Leitartikel</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-primary mb-6 md:mb-10">Warum wir anders arbeiten.</h2>
            <div className="md:columns-2 gap-10 text-base md:text-[17px] leading-relaxed text-foreground/85 space-y-5">
              <p className="dropcap">Wer betrogen wurde oder vor einer schweren wirtschaftlichen Entscheidung steht, braucht keine Floskeln, sondern eine ehrliche Einschätzung. Darum sagen wir früh, was realistisch ist — und was nicht.</p>
              <p>Unsere Anwältinnen und Anwälte arbeiten eng mit eigenen Datenanalysten zusammen. So entsteht ein Bild, das juristische Argumente und technische Spuren zusammenführt.</p>
              <p>Wir bleiben bewusst überschaubar. Jedes Mandat hat feste Ansprechpartner, die den Fall von Anfang bis Ende kennen. Kurze Wege, klare Absprachen, nachvollziehbare Kosten.</p>
              <p>Und wir denken über den Einzelfall hinaus: Wo es sinnvoll ist, bündeln wir Ansprüche, kooperieren mit Behörden und nutzen internationale Netzwerke.</p>
            </div>
            <blockquote className="mt-8 md:mt-12 border-t-4 border-double border-primary pt-6 md:pt-8 font-serif text-xl md:text-3xl italic text-secondary leading-snug">
              „Gute Beratung beginnt mit dem Satz, den der Mandant nicht hören will — und endet mit einem Plan, der funktioniert."
              <footer className="mt-4 not-italic text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground">Dr. Thomas Korte</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. Rubriken */}
      <section className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="flex items-end justify-between border-b-4 border-double border-primary pb-4 mb-6 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">Rubriken</h2>
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Acht Rechtsgebiete</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {rubriken.filter((r) => r.img).map((r, i) => (
              <Link key={r.to} to={r.to} className={`group relative overflow-hidden border border-border ${i === 0 ? "col-span-2 h-[260px] md:h-80" : "col-span-2 sm:col-span-1 h-[200px] md:h-64"}`}>
                <img src={r.img} alt={r.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-2">{r.label}</p>
                  <p className={`font-serif leading-snug text-primary-foreground ${i === 0 ? "text-2xl" : "text-lg"}`}>{r.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <ol className="lg:col-span-5 border-t border-primary flex flex-col">
            {rubriken.filter((r) => !r.img).map((r, i) => (
              <li key={r.to} className="flex-1 border-b border-border">
                <Link to={r.to} className="group h-full flex items-start gap-5 py-5">
                  <span className="font-serif italic text-secondary w-10 shrink-0 pt-1">{["I.", "II.", "III.", "IV.", "V."][i]}</span>
                  <span className="flex-1">
                    <span className="block font-serif text-xl text-primary group-hover:text-secondary">{r.label}</span>
                    <span className="block mt-1 text-foreground/70 leading-relaxed">{r.text}</span>
                  </span>
                  <span className="text-secondary pt-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Facts */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-7xl py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x divide-primary-foreground/15">
          {facts.map(([n, l]) => (
            <div key={l} className="text-center px-4">
              <p className="font-serif text-4xl md:text-5xl text-accent">{n}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-primary-foreground/70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Journal */}
      <section className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="flex items-end justify-between border-b-4 border-double border-primary pb-4 mb-6 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">Aus dem Journal</h2>
          <Link to="/blog" className="text-[11px] uppercase tracking-[0.24em] text-secondary story-link">Alle Beiträge</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 md:divide-x md:divide-border">
          {journal.map((j, i) => (
            <Link key={j.to} to={j.to} className={`group ${i > 0 ? "md:pl-10 flex md:block gap-4 border-t border-border pt-6 md:border-0 md:pt-0" : ""}`}>
              <img src={j.img} alt={j.title} loading="lazy" className={`object-cover md:w-full md:h-56 md:mb-5 ${i > 0 ? "w-24 h-24 shrink-0" : "w-full h-52 mb-5"}`} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-secondary mb-2">{j.rubric}</p>
                <h3 className={`font-serif leading-snug text-primary group-hover:text-secondary md:text-2xl md:mb-3 ${i > 0 ? "text-lg" : "text-2xl mb-3"}`}>{j.title}</h3>
                <p className={`text-foreground/70 leading-relaxed ${i > 0 ? "hidden md:block" : ""}`}>{j.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-muted">
        <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
          <div className="text-center mb-8 md:mb-14">
            <p className="kicker mb-5">Impressum der Köpfe</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">Wer an Ihrem Fall arbeitet.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-8 md:gap-y-14">
            {team.map((m) => (
              <figure key={m.name}>
                <div className="aspect-[4/5] overflow-hidden bg-card mb-3 md:mb-5">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover sepia-[.25]" />
                </div>
                <figcaption className="border-t border-primary pt-3 md:pt-4">
                  <p className="font-serif text-base md:text-xl text-primary">{m.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-secondary mt-1">{m.role}</p>
                  {m.focus && <p className="hidden md:block text-sm text-foreground/70 mt-3">{m.focus}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Chapters */}
      <section className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="text-center mb-8 md:mb-14">
          <p className="kicker mb-5">So läuft ein Mandat</p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary">In vier Kapiteln zum Ergebnis.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {chapters.map(([n, t, d]) => (
            <div key={n} className="bg-background p-6 md:p-8">
              <p className="font-serif italic text-4xl md:text-5xl text-accent mb-3 md:mb-6">{n}</p>
              <h3 className="font-serif text-xl text-primary mb-3">{t}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-5xl py-14 md:py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6">Ihr nächster Schritt</p>
          <h2 className="font-serif text-3xl md:text-6xl leading-tight">Erzählen Sie uns Ihren Fall.</h2>
          <p className="mt-6 text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">Das erste Gespräch ist kostenfrei und vertraulich. Wir melden uns innerhalb eines Werktages.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/kontakt" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-primary-foreground h-14 px-10 w-full sm:w-auto">Anfrage senden <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            {phoneEnabled && <a href={`tel:${phone}`} className="font-serif text-xl hover:text-accent">{phone}</a>}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
