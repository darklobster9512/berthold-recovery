import { KompetenzLayout } from "@/components/KompetenzLayout";
const img = "/images/hero-library.jpg";

const BlogPostImmobilienrecht = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Immobilienrecht"
    title={<>Werte aus Stein<br /><em className="text-secondary">brauchen Sorgfalt.</em></>}
    heroLead="Kauf, Entwicklung, Vermietung, Streit: Wir begleiten Investoren, Eigentümer und Unternehmen rund um Grundstücke und Gebäude."
    introStatement="Bei Immobilien geht es selten um Kleinigkeiten — und nie um Standardverträge."
    introBody={
      <>
        <p>Immobiliengeschäfte binden viel Kapital über lange Zeit. Fehler in Verträgen oder Prüfungen wirken sich deshalb oft erst Jahre später aus — dann aber deutlich.</p>
        <p>Wir prüfen Objekte rechtlich, verhandeln Kauf- und Mietverträge und vertreten Mandanten in Streitigkeiten mit Käufern, Bauunternehmen oder Mietern.</p>
      </>
    }
    focusHeadline="Von der Prüfung bis zum Prozess."
    focusItems={[
      { title: "Transaktionen und Ankaufsprüfung", content: "Rechtliche Due Diligence, Kaufvertragsgestaltung und Begleitung bis zur Eintragung — für Einzelobjekte und Portfolios." },
      { title: "Gewerbliches Mietrecht", content: "Verträge für Büro, Handel und Logistik, Nachträge, Kündigungen und Räumung." },
      { title: "Bau- und Projektentwicklung", content: "Verträge mit Planern und Bauunternehmen, Nachträge, Mängel und Bauverzug." },
      { title: "Immobilienstreitigkeiten", content: "Gewährleistung, Rückabwicklung, Eigentümerkonflikte: Wir setzen Ihre Rechte außergerichtlich und vor Gericht durch." },
    ]}
    ctaTitle="Ein Objekt, ein Vertrag, ein Problem?"
    ctaBody="Lassen Sie uns gemeinsam draufschauen. Wir geben Ihnen eine erste Einschätzung ohne Kosten."
  />
);

export default BlogPostImmobilienrecht;
