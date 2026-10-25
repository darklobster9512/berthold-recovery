import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EditorialHero } from "@/components/EditorialHero";
import bkaImg from "@/assets/partner-bka-cooperation.jpg";
import coinbaseImg from "@/assets/partner-coinbase-meeting.jpg";
import binanceImg from "@/assets/partner-binance-collaboration.jpg";
import ioscoImg from "@/assets/partner-iosco-summit.jpg";
import heroImg from "@/assets/partner-iosco-summit.jpg";

const partners = [
  {
    name: "Bundeskriminalamt",
    rubric: "Strafverfolgung",
    img: bkaImg,
    headline: "Wenn Ermittler und Forensiker an einem Tisch sitzen.",
    text: "Seit 2019 tauschen wir uns eng mit dem Bundeskriminalamt aus. Unsere Blockchain-Analysen fließen in internationale Ermittlungen ein — und helfen dabei, gestohlene Kryptowerte zu sichern und an Geschädigte zurückzuführen.",
    facts: ["über 150 Mio. € zurückverfolgt", "45 internationale Ermittlungen unterstützt", "12 Darknet-Marktplätze geschlossen", "300+ Geschädigte entschädigt"],
  },
  {
    name: "Coinbase",
    rubric: "Krypto-Börse",
    img: coinbaseImg,
    headline: "Kurze Wege zur Compliance einer der größten Börsen.",
    text: "Bei verdächtigen Transaktionen zählt Zeit. Der direkte Draht zum Compliance-Team erlaubt es uns, eingefrorene Vermögenswerte unserer Mandanten rasch zu identifizieren und die nächsten Schritte einzuleiten.",
    facts: ["80 Mio. € zurückgeholt", "500+ Kontosperrungen erwirkt", "24 h Reaktionszeit im Notfall", "Direkter Compliance-Kontakt"],
  },
  {
    name: "Binance",
    rubric: "Krypto-Börse",
    img: binanceImg,
    headline: "Globale Spurensuche bei grenzüberschreitendem Betrug.",
    text: "Viele Betrugsfälle führen über die weltgrößte Kryptobörse. Durch die Zusammenarbeit mit deren Ermittlungsteam erkennen wir verdächtige Bewegungen früher und können schneller reagieren.",
    facts: ["200+ Mio. € eingefroren", "Erkennung in Echtzeit", "Weltweiter Ermittlungszugang", "1.000+ Mandanten unterstützt"],
  },
  {
    name: "IOSCO",
    rubric: "Aufsicht",
    img: ioscoImg,
    headline: "Mitreden, wenn internationale Standards entstehen.",
    text: "Die internationale Vereinigung der Wertpapieraufsichtsbehörden vereint Regulierer aus 130 Ländern. Wir bringen unsere Praxiserfahrung bei der Entwicklung von Standards für grenzüberschreitende Krypto-Verfahren ein.",
    facts: ["95 % weltweite Marktabdeckung", "Standards mitentwickelt", "Netzwerk in 130 Ländern", "Beratender Status"],
  },
];

const UnserePartner = () => (
  <div className="min-h-screen bg-background">
    <EditorialHero
      eyebrow="Netzwerk"
      breadcrumb={[{ label: "Titelseite", href: "/" }, { label: "Netzwerk" }]}
      title={<>Niemand gewinnt<br /><em className="text-secondary">allein.</em></>}
      lead="Wer digitale Vermögenswerte zurückholen will, braucht Verbündete: Ermittler, Börsen und Aufsichtsbehörden. Hier stellen wir sie vor."
      image={heroImg}
    />

    <section className="container mx-auto px-6 max-w-7xl py-16">
      {partners.map((p, i) => (
        <article key={p.name} className="grid lg:grid-cols-12 gap-10 py-14 border-b border-border last:border-b-0">
          <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
            <img src={p.img} alt={p.name} loading="lazy" width={1200} height={800} className="w-full h-[360px] object-cover" />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="kicker mb-4">{p.rubric} · {p.name}</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-primary">{p.headline}</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-foreground/80">{p.text}</p>
            <dl className="mt-8 grid grid-cols-2 gap-px bg-border border border-border">
              {p.facts.map((f) => (
                <div key={f} className="bg-card p-4 text-sm text-primary font-serif">{f}</div>
              ))}
            </dl>
          </div>
        </article>
      ))}
    </section>

    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-4xl py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">Dieses Netzwerk arbeitet für Sie.</h2>
        <p className="mt-5 text-primary-foreground/70">Schildern Sie uns Ihren Fall — wir prüfen, welche Kontakte weiterhelfen.</p>
        <Link to="/kontakt" className="inline-block mt-8">
          <Button size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-primary-foreground h-14 px-10">Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default UnserePartner;
