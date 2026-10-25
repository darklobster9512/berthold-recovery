import { Link } from "react-router-dom";
import { useSettings } from "@/hooks/useSettings";
import { kompetenzen } from "./Header";

export const Footer = () => {
  const { phone, phoneEnabled } = useSettings();
  const a = "text-primary-foreground/70 hover:text-accent transition-colors";
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-7xl pt-12 md:pt-20 pb-8 md:pb-10">
        <div className="text-center pb-8 md:pb-12 border-b border-primary-foreground/15">
          <p className="font-serif text-3xl md:text-6xl tracking-tight">
            Korte <span className="italic text-accent">&amp;</span> Partner
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground/50">Rechtsanwälte · Hamburg</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 py-10 md:py-14">
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-5">Die Kanzlei</p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Eine unabhängige Sozietät für Wirtschafts-, Vermögens- und digitales Recht. Wir arbeiten in kleinen Teams, direkt und mit Blick auf das wirtschaftliche Ergebnis.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-5">Rechtsgebiete</p>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-2 text-sm">
              {kompetenzen.map((k) => (
                <li key={k.to}><Link to={k.to} className={a}>{k.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-5">Mehr lesen</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className={a}>Journal</Link></li>
              <li><Link to="/unsere-partner" className={a}>Netzwerk</Link></li>
              <li><Link to="/stellenangebote" className={a}>Karriere</Link></li>
              <li><Link to="/kontakt" className={a}>Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent mb-5">Besuchen Sie uns</p>
            <address className="not-italic text-sm text-primary-foreground/80 leading-relaxed space-y-3">
              <p>Domstraße 15<br />20095 Hamburg</p>
              {phoneEnabled && <p><a href={`tel:${phone}`} className={a}>{phone}</a></p>}
              <p><a href="mailto:info@kortekanzlei.de" className={a}>info@kortekanzlei.de</a></p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 Korte &amp; Partner. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/impressum" className={a}>Impressum</Link>
            <Link to="/datenschutz" className={a}>Datenschutz</Link>
            <Link to="/agb" className={a}>AGB</Link>
            <Link to="/haftungsausschluss" className={a}>Haftungsausschluss</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
