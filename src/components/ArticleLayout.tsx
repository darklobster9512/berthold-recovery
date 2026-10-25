import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { EditorialHero } from "@/components/EditorialHero";
import { Footer } from "@/components/Footer";
import { useSettings } from "@/hooks/useSettings";
import cryptoImg from "@/assets/crypto-hero-bg.jpg";
import filesImg from "@/assets/partner-bka-cooperation.jpg";
import penImg from "@/assets/contact-hero-bg.jpg";
import laptopImg from "@/assets/partner-binance-collaboration.jpg";
import justiceImg from "@/assets/editorial-justice.jpg";
import confImg from "@/assets/partner-iosco-summit.jpg";

/** All journal posts, newest first. Used by journal overview, home page and article sidebars. */
export const journalPosts = [
  { to: "/blog-post/falsche-krypto-plattformen-erkennen", rubric: "Ratgeber · Krypto", title: "Falsche Krypto-Plattformen erkennen", text: "Professionelle Websites, echte Gesichter, erfundene Gewinne. Woran Sie Anlagebetrug vor der ersten Einzahlung erkennen.", img: laptopImg, date: "23. Oktober 2026", time: "7 Min." },
  { to: "/blog-post/sms-phishing-haftung-bank", rubric: "Rechtsprechung · Bankrecht", title: "Phishing per SMS: Haftet die Bank?", text: "Eine gefälschte Nachricht, ein Klick, das Konto leer. Wann Banken den Schaden ersetzen müssen.", img: justiceImg, date: "16. Oktober 2026", time: "6 Min." },
  { to: "/blog-post/nis2-geschaeftsfuehrer", rubric: "Compliance", title: "NIS2: Was Geschäftsführer jetzt wissen müssen", text: "Neue Pflichten zur Cybersicherheit, persönliche Haftung der Leitung. Ein Überblick für Unternehmen.", img: confImg, date: "12. Oktober 2026", time: "8 Min." },
  { to: "/blog-post/ceo-fraud-und-ueberweisungsbetrug", rubric: "Unternehmen · Cybercrime", title: "Die gefälschte Chefanweisung", text: "CEO-Fraud trifft Unternehmen jeder Größe. Was in den ersten Stunden nach der Fehlüberweisung zählt.", img: filesImg, date: "9. Oktober 2026", time: "6 Min." },
  { to: "/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck", rubric: "Fallbericht · Krypto", title: "8,69 Bitcoin finden ihren Weg zurück", text: "Rund 800.000 Euro galten als verloren. Wie Blockchain-Forensik und juristische Ausdauer den Fall gedreht haben.", img: cryptoImg, date: "2. Oktober 2026", time: "8 Min." },
  { to: "/blog-post/ogh-kreditgebuehr-unzulaessig", rubric: "Rechtsprechung · Bankrecht", title: "Kreditgebühr auf dem Prüfstand", text: "Gebündelte Bearbeitungsgebühren sind intransparent. Wer jetzt Geld zurückfordern kann.", img: penImg, date: "21. September 2026", time: "6 Min." },
];

interface Props {
  rubric: string;
  title: ReactNode;
  standfirst: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  children: ReactNode;
  infoTitle?: string;
  info?: ReactNode;
  self: string;
}

export const ArticleLayout = ({ rubric, title, standfirst, date, readTime, author, image, children, infoTitle, info, self }: Props) => {
  const { phone, phoneEnabled } = useSettings();
  return (
    <div className="min-h-screen bg-background">
      <EditorialHero
        eyebrow={rubric}
        breadcrumb={[{ label: "Titelseite", href: "/" }, { label: "Journal", href: "/blog" }, { label: rubric }]}
        title={title}
        lead={standfirst}
        meta={<><span>{date}</span><span>·</span><span>{readTime} Lesezeit</span><span>·</span><span>Von {author}</span></>}
        image={image}
      />

      <section className="container mx-auto px-6 max-w-7xl py-16 grid lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8 text-[17px] leading-relaxed text-foreground/85 space-y-6 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-primary [&_h2]:pt-6 [&_h2]:leading-snug [&>p:first-child]:dropcap">
          {children}
        </article>

        <aside className="lg:col-span-4 space-y-8">
          {info && (
            <div className="bg-muted p-7 border-t-4 border-double border-primary">
              <p className="kicker mb-4">{infoTitle ?? "Kurz gefasst"}</p>
              <div className="text-sm leading-relaxed space-y-2">{info}</div>
            </div>
          )}
          <div className="bg-primary text-primary-foreground p-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-3">Ähnlicher Fall?</p>
            <p className="font-serif text-xl leading-snug mb-5">Sprechen Sie mit uns — vertraulich und zunächst kostenfrei.</p>
            <p className="text-sm space-y-1">
              <a href="mailto:info@kortekanzlei.de" className="block hover:text-accent">info@kortekanzlei.de</a>
              {phoneEnabled && <a href={`tel:${phone}`} className="block hover:text-accent">{phone}</a>}
            </p>
            <Link to="/kontakt" className="mt-5 inline-block text-[11px] uppercase tracking-[0.24em] border-b border-accent pb-1 hover:text-accent">Anfrage senden</Link>
          </div>
          <div>
            <p className="kicker mb-4">Weiterlesen</p>
            <ul className="divide-y divide-border">
              {journalPosts.filter((p) => p.to !== self).map((p) => (
                <li key={p.to} className="py-4">
                  <Link to={p.to} className="group">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">{p.rubric}</p>
                    <p className="font-serif text-lg text-primary group-hover:text-secondary">{p.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
};

export const PullQuote = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-10 border-y border-accent py-8 font-serif italic text-2xl md:text-3xl text-secondary leading-snug text-center">{children}</blockquote>
);
