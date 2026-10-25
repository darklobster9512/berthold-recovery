import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { EditorialHero } from "@/components/EditorialHero";
import cryptoImg from "@/assets/crypto-hero-bg.jpg";
import meetingImg from "@/assets/partner-bka-cooperation.jpg";
import penImg from "@/assets/contact-hero-bg.jpg";

const posts = [
  { to: "/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck", rubric: "Fallbericht · Krypto", title: "8,69 Bitcoin finden ihren Weg zurück", text: "Rund 800.000 Euro galten als verloren. Wie Blockchain-Forensik und juristische Ausdauer den Fall gedreht haben.", img: cryptoImg, date: "7. Juli 2025", time: "8 Min." },
  { to: "/blog-post/ceo-fraud-und-ueberweisungsbetrug", rubric: "Unternehmen · Cybercrime", title: "Die gefälschte Chefanweisung", text: "CEO-Fraud trifft Unternehmen jeder Größe. Was in den ersten Stunden nach der Fehlüberweisung zählt.", img: meetingImg, date: "16. Juli 2025", time: "6 Min." },
  { to: "/blog-post/ogh-kreditgebuehr-unzulaessig", rubric: "Rechtsprechung · Bankrecht", title: "Kreditgebühr auf dem Prüfstand", text: "Gebündelte Bearbeitungsgebühren sind intransparent. Wer jetzt Geld zurückfordern kann.", img: penImg, date: "7. Juli 2025", time: "6 Min." },
];

const Blog = () => {
  const [lead, ...rest] = posts;
  return (
    <div className="min-h-screen bg-background">
      <EditorialHero
        eyebrow="Das Journal"
        breadcrumb={[{ label: "Titelseite", href: "/" }, { label: "Journal" }]}
        title={<>Fälle, Urteile,<br /><em className="text-secondary">Einordnungen.</em></>}
        lead="Was wir aus unseren Mandaten lernen und was neue Entscheidungen für Sie bedeuten."
      />

      <section className="container mx-auto px-6 max-w-7xl py-16">
        <Link to={lead.to} className="group grid lg:grid-cols-12 gap-10 pb-14 border-b border-border">
          <img src={lead.img} alt={lead.title} className="lg:col-span-7 w-full h-[360px] object-cover" />
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="kicker mb-5">{lead.rubric}</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-primary group-hover:text-secondary">{lead.title}</h2>
            <p className="mt-5 font-serif italic text-lg text-foreground/70 leading-relaxed">{lead.text}</p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{lead.date} · {lead.time}</p>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 pt-14 md:divide-x md:divide-border">
          {rest.map((p, i) => (
            <Link key={p.to} to={p.to} className={`group ${i > 0 ? "md:pl-12" : ""}`}>
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-64 object-cover mb-6" />
              <p className="text-[11px] uppercase tracking-[0.24em] text-secondary mb-2">{p.rubric}</p>
              <h2 className="font-serif text-2xl md:text-3xl leading-snug text-primary group-hover:text-secondary">{p.title}</h2>
              <p className="mt-3 text-foreground/70 leading-relaxed">{p.text}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.date} · {p.time}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
