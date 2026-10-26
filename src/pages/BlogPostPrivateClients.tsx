import { KompetenzLayout } from "@/components/KompetenzLayout";
const img = "/images/partner-coinbase-meeting.jpg";

const BlogPostPrivateClients = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Private Clients & Family Offices"
    title={<>Vermögen begleiten.<br /><em className="text-secondary">Über Generationen.</em></>}
    heroLead="Für Unternehmerfamilien, vermögende Privatpersonen und Family Offices sind wir der diskrete Ansprechpartner für alle rechtlichen Fragen."
    introStatement="Diskretion ist bei uns keine Leistung, sondern Grundhaltung."
    introBody={
      <>
        <p>Großes Vermögen bringt komplexe Fragen mit sich: Wie wird es strukturiert, geschützt und weitergegeben? Wer haftet, wenn Investments schiefgehen?</p>
        <p>Wir koordinieren die rechtliche Seite und arbeiten eng mit Steuerberatern, Banken und Vermögensverwaltern zusammen. Ein fester Partner behält dabei den Überblick.</p>
        <p>Zunehmend gehören auch digitale Werte zum Familienvermögen. Wir wissen, wie man sie sicher verwahrt, vererbt und bewertet.</p>
      </>
    }
    focusHeadline="Was Familien uns anvertrauen."
    focusItems={[
      { title: "Vermögensstrukturierung", content: "Holding, Stiftung, Familiengesellschaft: Wir finden die passende Struktur für Schutz, Steuerung und Nachfolge." },
      { title: "Nachfolge und Testament", content: "Unternehmensnachfolge, Testamente, Erbverträge und die Lösung von Erbstreitigkeiten." },
      { title: "Investments und Haftung", content: "Prüfung von Beteiligungen und die Durchsetzung von Ansprüchen, wenn Berater oder Partner Fehler gemacht haben." },
      { title: "Digitale Vermögenswerte", content: "Verwahrung, Dokumentation und Übertragung von Kryptowerten — rechtlich sauber und praxistauglich." },
    ]}
    ctaTitle="Ein vertrauliches Gespräch, wann immer es passt."
    ctaBody="Gern auch außerhalb der Bürozeiten oder bei Ihnen vor Ort."
  />
);

export default BlogPostPrivateClients;
