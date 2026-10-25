import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header, kompetenzen } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";
import heroImage from "@/assets/hero-library.jpg";

export interface FocusItem {
  title: string;
  content: ReactNode;
}

interface KompetenzLayoutProps {
  eyebrow?: string;
  breadcrumbLabel: string;
  title: ReactNode;
  heroLead?: string;
  introStatement: string;
  introBody: ReactNode;
  focusEyebrow?: string;
  focusHeadline?: string;
  focusItems: FocusItem[];
  ctaTitle: string;
  ctaBody: string;
  image?: string;
}

export const KompetenzLayout = ({
  eyebrow = "Rechtsgebiet",
  breadcrumbLabel,
  title,
  heroLead,
  introStatement,
  introBody,
  focusEyebrow = "Im Detail",
  focusHeadline = "Was wir für Sie übernehmen.",
  focusItems,
  ctaTitle,
  ctaBody,
  image = heroImage,
}: KompetenzLayoutProps) => {
  const { phone, phoneEnabled } = useSettings();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article>
        {/* Article opener */}
        <header className="container mx-auto px-6 max-w-5xl pt-14 pb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-6">
            <Link to="/" className="hover:text-secondary">Titelseite</Link> <span className="mx-2">/</span> {eyebrow} <span className="mx-2">/</span> <span className="text-secondary">{breadcrumbLabel}</span>
          </p>
          <h1 className="font-serif text-[2rem] md:text-6xl leading-[1.1] text-primary">{title}</h1>
          {heroLead && (
            <p className="mt-8 font-serif italic text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">{heroLead}</p>
          )}
        </header>

        <figure className="container mx-auto px-6 max-w-7xl">
          <img src={image} alt={breadcrumbLabel} width={1600} height={1104} className="w-full h-[220px] md:h-[460px] object-cover" />
          <figcaption className="mt-3 text-xs text-muted-foreground border-b border-border pb-3">Korte &amp; Partner · {breadcrumbLabel}</figcaption>
        </figure>

        {/* Body: sidebar + two-column text */}
        <section className="container mx-auto px-6 max-w-7xl py-10 md:py-16 grid lg:grid-cols-12 gap-10 lg:gap-12">
          <aside className="lg:col-span-3 order-2 lg:order-1 space-y-8">
            <div className="bg-muted p-6">
              <p className="kicker mb-4">Auf einen Blick</p>
              <ul className="space-y-3 text-sm">
                {focusItems.map((f, i) => (
                  <li key={f.title} className="flex gap-3"><span className="font-serif text-secondary">{String(i + 1).padStart(2, "0")}</span><span>{f.title}</span></li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block border-t-4 border-double border-primary pt-6">
              <p className="kicker mb-4">Weitere Rechtsgebiete</p>
              <ul className="space-y-2 text-sm">
                {kompetenzen.filter((k) => k.label !== breadcrumbLabel).map((k) => (
                  <li key={k.to}><Link to={k.to} className="story-link text-foreground/75 hover:text-secondary">{k.label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 order-1 lg:order-2">
            <blockquote className="font-serif text-xl md:text-3xl leading-snug text-secondary border-l-2 border-accent pl-5 md:pl-6 mb-8 md:mb-10">
              „{introStatement}"
            </blockquote>
            <div className="md:columns-2 gap-10 text-base md:text-[17px] leading-relaxed text-foreground/85 space-y-5 [&>p:first-child]:dropcap">
              {introBody}
            </div>
          </div>
        </section>

        {/* Focus chapters */}
        <section className="bg-card border-y border-border">
          <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
            <div className="text-center mb-8 md:mb-14">
              <p className="kicker mb-5">{focusEyebrow}</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary">{focusHeadline}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {focusItems.map((item, i) => (
                <div key={item.title} className="bg-card p-6 md:p-8 lg:p-10">
                  <p className="font-serif italic text-accent text-3xl md:text-4xl mb-2 md:mb-4">{["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][i] ?? i + 1}</p>
                  <h3 className="font-serif text-xl lg:text-2xl leading-snug mb-4 text-primary">{item.title}</h3>
                  <div className="text-foreground/75 leading-relaxed">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 max-w-5xl py-14 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6">Persönliches Gespräch</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">{ctaTitle}</h2>
          <p className="mt-6 text-secondary-foreground/75 max-w-2xl mx-auto leading-relaxed">{ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/kontakt">
              <Button size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-primary-foreground h-14 px-8">
                Gespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {phoneEnabled && <a href={`tel:${phone}`} className="font-serif text-lg hover:text-accent">{phone}</a>}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
