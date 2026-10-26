import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EditorialHero } from "@/components/EditorialHero";
const heroImage = "/images/partner-bka-cooperation.jpg";

const jobs = [
  {
    id: "ra-gesellschaftsrecht",
    title: "Rechtsanwalt (m/w/d) Gesellschafts- und Unternehmensrecht",
    meta: ["Vollzeit", "ab 3 Jahren Erfahrung", "Hybrid"],
    teaser: "Sie strukturieren Unternehmen, begleiten Transaktionen und führen Gesellschafterkonflikte zu einer Lösung.",
    tasks: ["Unternehmenskäufe und M&A-Transaktionen begleiten", "Gesellschaftsverträge und Governance-Strukturen entwerfen", "Gesellschaftsrechtliche Streitigkeiten vor Gericht führen", "Internationale Mandate mitbetreuen"],
    profile: ["Zweites Staatsexamen mit Prädikat oder vergleichbar", "Mindestens drei Jahre Praxis im Gesellschaftsrecht", "Verhandlungssicheres Englisch", "Offenheit für Legal-Tech-Werkzeuge"],
  },
  {
    id: "ra-prozessfuehrung",
    title: "Rechtsanwalt (m/w/d) Prozessführung / Litigation",
    meta: ["Vollzeit", "ab 2 Jahren Erfahrung", "Hybrid"],
    teaser: "Sie führen anspruchsvolle Zivilverfahren — von der Strategie bis zur mündlichen Verhandlung.",
    tasks: ["Verfahren durch alle Instanzen führen", "Prozessstrategien und Risikoanalysen entwickeln", "Schiedsverfahren und Mediationen begleiten", "Mandanten präventiv beraten"],
    profile: ["Zweites Staatsexamen mit guten Ergebnissen", "Mindestens zwei Jahre Erfahrung in der Prozessführung", "Überzeugende Argumentation und Verhandlungsgeschick", "Strukturiert und belastbar"],
  },
  {
    id: "ra-datenschutz",
    title: "Rechtsanwalt (m/w/d) Datenschutz & Compliance",
    meta: ["Vollzeit", "2 – 5 Jahre Erfahrung", "Hybrid"],
    teaser: "Sie machen Unternehmen datenschutzfest und stehen bereit, wenn ein Sicherheitsvorfall passiert.",
    tasks: ["DSGVO-Beratung und Datenschutz-Audits", "Compliance-Management-Systeme aufbauen", "Bei Cyber-Vorfällen beraten", "Mandanten schulen"],
    profile: ["Volljurist mit Schwerpunkt IT- oder Datenschutzrecht", "Zwei bis fünf Jahre Berufserfahrung", "Zertifizierung als Datenschutzbeauftragter wünschenswert", "Technisches Grundverständnis"],
  },
  {
    id: "referendar",
    title: "Referendar / Wissenschaftlicher Mitarbeiter (m/w/d)",
    meta: ["Teilzeit", "Juristisches Studium", "Hybrid"],
    teaser: "Sie arbeiten an echten Mandaten mit und lernen die Kanzleipraxis von innen kennen.",
    tasks: ["Recherche und Mitarbeit an Mandaten", "Schriftsätze und Memoranden entwerfen", "Mandantentermine und Verhandlungen begleiten", "Bei Due-Diligence-Prüfungen unterstützen"],
    profile: ["Erstes Staatsexamen mit überdurchschnittlichem Ergebnis", "Interesse an Wirtschaftsrecht und Prozessen", "Selbstständige Arbeitsweise", "Sehr gutes Deutsch und Englisch"],
  },
  {
    id: "paralegal",
    title: "Rechtsanwaltsfachangestellte / Paralegal (m/w/d)",
    meta: ["Vollzeit", "ab 2 Jahren Erfahrung", "Vor Ort / Hybrid"],
    teaser: "Sie halten den Laden zusammen: Fristen, Termine, Korrespondenz und Akten.",
    tasks: ["Anwälte in der Mandatsarbeit unterstützen", "Fristen und Termine überwachen", "Mit Mandanten und Gerichten korrespondieren", "Digitale Akten pflegen"],
    profile: ["Abgeschlossene Ausbildung als ReFa", "Mindestens zwei Jahre Berufserfahrung", "Sicher in MS Office und Kanzleisoftware", "Freundlich und serviceorientiert"],
  },
  {
    id: "legal-tech-werkstudent",
    title: "Werkstudent:in Legal Tech / IT (m/w/d)",
    meta: ["20 Std./Woche", "Studium Jura oder Informatik", "Hybrid"],
    teaser: "Sie bringen neue Werkzeuge in die Kanzlei und automatisieren, was sich automatisieren lässt.",
    tasks: ["Legal-Tech-Projekte und Automatisierung begleiten", "Digitale Tools entwickeln und testen", "Daten für das Mandatscontrolling aufbereiten", "Neue Technologien recherchieren"],
    profile: ["Studium Rechtswissenschaft, Informatik o. Ä.", "Interesse an Recht und Technik", "Grundkenntnisse in Programmierung oder Datenanalyse", "Eigenständig und projektorientiert"],
  },
];

const perks = [
  ["Echte Verantwortung", "Eigene Mandate und direkter Mandantenkontakt vom ersten Tag an."],
  ["Flexible Arbeit", "Hybrides Arbeiten und Arbeitszeiten, die zum Leben passen."],
  ["Weiterbildung", "Fachanwaltskurse, Zertifizierungen und interne Schulungen."],
  ["Kurze Wege", "Ein überschaubares Team, in dem jede Stimme zählt."],
];

const Stellenangebote = () => {
  useEffect(() => {
    document.title = "Karriere | Berthold & Partner";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <EditorialHero
        eyebrow="Stellenmarkt"
        breadcrumb={[{ label: "Titelseite", href: "/" }, { label: "Karriere" }]}
        title={<>Arbeiten, wo Recht<br /><em className="text-secondary">etwas bewegt.</em></>}
        lead="Wir suchen Menschen, die gründlich denken, klar schreiben und gern Verantwortung übernehmen."
        image={heroImage}
      />

      <section className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {perks.map(([t, d]) => (
            <div key={t} className="bg-card p-7">
              <h3 className="font-serif text-lg text-primary mb-2">{t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-7xl pb-20">
        <div className="flex items-end justify-between border-b-4 border-double border-primary pb-4 mb-2">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">Offene Stellen</h2>
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Standort Berlin · {jobs.length} Anzeigen</span>
        </div>

        <Accordion type="single" collapsible>
          {jobs.map((j, i) => (
            <AccordionItem key={j.id} value={j.id} className="border-border">
              <AccordionTrigger className="hover:no-underline py-7 text-left">
                <div className="flex gap-6 items-baseline">
                  <span className="font-serif italic text-accent text-2xl w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-serif text-xl md:text-2xl text-primary">{j.title}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-secondary font-normal">{j.meta.join(" · ")}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-14 pb-6 grid md:grid-cols-3 gap-10">
                  <p className="font-serif italic text-lg text-foreground/75 leading-relaxed">{j.teaser}</p>
                  <div>
                    <p className="kicker mb-3">Ihre Aufgaben</p>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-4">{j.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                  <div>
                    <p className="kicker mb-3">Ihr Profil</p>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-4">{j.profile.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                </div>
                <div className="pl-14 pb-4">
                  <Link to={`/kontakt?job=${j.id}`}>
                    <Button className="rounded-none bg-primary text-primary-foreground hover:bg-secondary">Jetzt bewerben <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 max-w-4xl py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-5">Initiativbewerbung</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">Nichts Passendes dabei?</h2>
          <p className="mt-5 text-secondary-foreground/75 max-w-2xl mx-auto">Gute Leute finden bei uns immer Gehör. Erzählen Sie uns, was Sie können und was Sie suchen.</p>
          <Link to="/kontakt?job=initiativbewerbung" className="inline-block mt-8">
            <Button size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-primary-foreground h-14 px-10">Initiativ bewerben</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stellenangebote;
