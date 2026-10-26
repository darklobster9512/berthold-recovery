import { ArticleLayout, PullQuote } from "@/components/ArticleLayout";
const img = "/images/partner-iosco-summit.jpg";

const BlogPostNis2 = () => (
  <ArticleLayout
    self="/blog-post/nis2-geschaeftsfuehrer"
    rubric="Compliance"
    title={<>NIS2: Was Geschäftsführer<br /><em className="text-secondary">jetzt wissen müssen.</em></>}
    standfirst="Mit der Umsetzung der europäischen NIS2-Richtlinie fallen deutlich mehr Unternehmen unter strenge Pflichten zur Cybersicherheit. Neu ist vor allem: Die Verantwortung liegt ausdrücklich bei der Geschäftsleitung."
    date="12. Oktober 2026"
    readTime="8 Min."
    author="Berthold & Partner"
    image={img}
    infoTitle="Die Kernpflichten im Überblick"
    info={
      <ul className="space-y-1.5 list-disc pl-4">
        <li>Prüfen, ob das Unternehmen betroffen ist, und Registrierung beim BSI</li>
        <li>Risikomanagement für IT und Lieferketten einführen</li>
        <li>Erhebliche Sicherheitsvorfälle innerhalb von 24 Stunden melden</li>
        <li>Regelmäßige Schulungen der Geschäftsleitung</li>
        <li>Maßnahmen dokumentieren und überwachen</li>
      </ul>
    }
  >
    <p>Die NIS2-Richtlinie erweitert den Kreis der regulierten Unternehmen erheblich. Betroffen sind nicht mehr nur klassische Betreiber kritischer Infrastrukturen, sondern auch viele mittelgroße Unternehmen aus Branchen wie Produktion, Logistik, Lebensmittel, Entsorgung oder digitale Dienste.</p>

    <h2>Bin ich betroffen?</h2>
    <p>Maßgeblich sind Branche und Größe. Grob gilt: Ab 50 Beschäftigten oder 10 Millionen Euro Jahresumsatz in einem erfassten Sektor sollten Unternehmen genau prüfen, ob sie unter das Gesetz fallen. Für manche Bereiche gelten die Pflichten unabhängig von der Größe.</p>

    <PullQuote>„Cybersicherheit ist keine reine IT-Aufgabe mehr, sondern eine Pflicht der Unternehmensleitung."</PullQuote>

    <h2>Persönliche Verantwortung der Leitung</h2>
    <p>Geschäftsführer und Vorstände müssen die Maßnahmen zum Risikomanagement billigen, ihre Umsetzung überwachen und sich selbst regelmäßig schulen lassen. Werden Pflichten verletzt, kommt eine persönliche Haftung gegenüber der Gesellschaft in Betracht. Daneben drohen Bußgelder in Millionenhöhe.</p>

    <h2>Was jetzt zu tun ist</h2>
    <p>Am Anfang steht eine saubere Betroffenheitsanalyse. Danach folgen Bestandsaufnahme, Maßnahmenplan und klare Zuständigkeiten, einschließlich eines Meldeprozesses für den Ernstfall.</p>
    <p>Wir begleiten Unternehmen von der ersten Prüfung über interne Richtlinien bis zur Schulung der Geschäftsleitung, und stehen bereit, wenn ein Sicherheitsvorfall eintritt.</p>
  </ArticleLayout>
);

export default BlogPostNis2;
