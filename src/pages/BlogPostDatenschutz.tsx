import { KompetenzLayout } from "@/components/KompetenzLayout";
const img = "/images/partner-bka-cooperation.jpg";

const BlogPostDatenschutz = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Datenschutz & Compliance"
    title={<>Regeln, die tragen.<br /><em className="text-secondary">Auch im Ernstfall.</em></>}
    heroLead="Wir bauen Datenschutz und Compliance so auf, dass sie im Alltag funktionieren — und stehen bereit, wenn Behörden, Kunden oder Angreifer anklopfen."
    introStatement="Compliance ist kein Ordner im Regal, sondern ein Wettbewerbsvorteil."
    introBody={
      <>
        <p>DSGVO, Hinweisgeberschutz, Geldwäscherecht: Die Pflichten für Unternehmen wachsen, die Bußgelder auch. Gleichzeitig erwarten Kunden und Partner einen verantwortungsvollen Umgang mit Daten.</p>
        <p>Wir analysieren Prozesse, schreiben verständliche Richtlinien und schulen Teams. Wenn es zu einer Datenpanne oder einem Verfahren kommt, übernehmen wir die Kommunikation mit den Behörden.</p>
      </>
    }
    focusHeadline="Vorsorgen, reagieren, verteidigen."
    focusItems={[
      { title: "Datenschutz-Organisation", content: "Verarbeitungsverzeichnisse, Verträge mit Dienstleistern, Datenschutz-Folgenabschätzungen — praxisnah und prüfungsfest." },
      { title: "Datenpannen und Meldepflichten", content: "Innerhalb von 72 Stunden muss gemeldet werden. Wir bewerten Vorfälle, koordinieren Meldungen und begrenzen Haftungsrisiken." },
      { title: "Compliance-Systeme und Geldwäscheprävention", content: "Wir entwickeln Kontrollsysteme, die zu Ihrem Geschäft passen, und begleiten interne Untersuchungen." },
      { title: "Verfahren mit Aufsichtsbehörden", content: "Bei Anhörungen, Bußgeldverfahren oder Klagen Betroffener vertreten wir Sie mit klarer Linie." },
    ]}
    ctaTitle="Wie gut ist Ihr Unternehmen aufgestellt?"
    ctaBody="Wir prüfen den Ist-Zustand und zeigen Ihnen die wichtigsten Stellschrauben — kompakt und ohne Fachchinesisch."
  />
);

export default BlogPostDatenschutz;
