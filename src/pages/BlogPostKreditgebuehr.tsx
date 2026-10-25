import { ArticleLayout, PullQuote } from "@/components/ArticleLayout";
import img from "@/assets/contact-hero-bg.jpg";

const BlogPostKreditgebuehr = () => (
  <ArticleLayout
    self="/blog-post/ogh-kreditgebuehr-unzulaessig"
    rubric="Rechtsprechung"
    title={<>Kreditgebühr<br /><em className="text-secondary">auf dem Prüfstand.</em></>}
    standfirst="Der Oberste Gerichtshof erklärt gebündelte Bearbeitungsgebühren für intransparent. Für viele Kreditnehmer heißt das: Geld zurück — sogar bei längst getilgten Krediten."
    date="21. September 2026"
    readTime="6 Min."
    author="Berthold & Partner"
    image={img}
    infoTitle="Diese Begriffe im Vertrag suchen"
    info={
      <ul className="space-y-1.5 list-disc pl-4">
        <li>Bearbeitungsgebühr / -entgelt</li>
        <li>Vertragsabschlussgebühr, Kreditspesen</li>
        <li>Einmalige Spesen für Erhebung, Auszahlung, Verwaltung</li>
        <li>Drucksorten- und Portokosten</li>
        <li>Schätzgebühr</li>
        <li>Gebühren für Grundbuchgesuch und -auszug</li>
      </ul>
    }
  >
    <p>Mit einer Grundsatzentscheidung hat der OGH die Rechte von Kreditnehmern deutlich gestärkt. Bestimmte Bearbeitungsgebühren sind unzulässig — und bereits bezahlte Beträge können zurückverlangt werden.</p>

    <h2>Worum es ging</h2>
    <p>Gegenstand war eine Klausel der WSK Bank: Neben einer Bearbeitungsgebühr von 4 % fielen Erhebungs- und Überweisungsspesen sowie Druck- und Portokosten an. Abgezogen wurde direkt vom Kreditkonto oder vom Auszahlungsbetrag.</p>
    <p>Das Gericht sah darin eine intransparente Bündelung. Die Bank lasse sich Tätigkeiten bezahlen, die ohnehin zur Kreditvergabe gehören — teilweise sogar mehrfach. Das benachteilige Kunden unangemessen.</p>

    <PullQuote>„Ansprüche verjähren erst nach 30 Jahren — und werden mit vier Prozent jährlich verzinst."</PullQuote>

    <h2>Was das für Sie bedeutet</h2>
    <p>Viele Verträge enthalten ähnliche Klauseln, etwa einen Prozentsatz der Kreditsumme oder ein pauschales Entgelt für den Abschluss. Sind diese unzulässig, lässt sich das Geld zurückfordern — oft mehrere Tausend Euro, auch wenn der Kredit längst abbezahlt ist.</p>
    <p>Entscheidend ist, ob die Gebühren klar nachvollziehbar sind oder dieselbe Leistung doppelt berechnet wurde.</p>

    <h2>Unser Angebot</h2>
    <p>Wir prüfen Ihren Kreditvertrag kostenlos und unverbindlich und sagen Ihnen, ob sich eine Rückforderung lohnt. Ihre Ansprechpartner sind Dr. Holger Berthold und Dr. Maximilian Krause.</p>
  </ArticleLayout>
);

export default BlogPostKreditgebuehr;
