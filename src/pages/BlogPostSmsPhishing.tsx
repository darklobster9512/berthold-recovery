import { ArticleLayout, PullQuote } from "@/components/ArticleLayout";
import img from "@/assets/editorial-justice.jpg";

const BlogPostSmsPhishing = () => (
  <ArticleLayout
    self="/blog-post/sms-phishing-haftung-bank"
    rubric="Rechtsprechung"
    title={<>Phishing per SMS:<br /><em className="text-secondary">Haftet die Bank?</em></>}
    standfirst="Eine täuschend echte Nachricht, ein Klick auf den Link, und kurz darauf ist das Konto leer. Ob Betroffene auf dem Schaden sitzen bleiben, hängt vor allem von einer Frage ab: War das Verhalten grob fahrlässig?"
    date="16. Oktober 2026"
    readTime="6 Min."
    author="Korte & Partner"
    image={img}
    infoTitle="Sofort tun nach einem Phishing-Angriff"
    info={
      <ul className="space-y-1.5 list-disc pl-4">
        <li>Konto und Karten über den Sperr-Notruf 116 116 sperren</li>
        <li>Bank schriftlich über die nicht autorisierten Zahlungen informieren</li>
        <li>Strafanzeige bei der Polizei erstatten</li>
        <li>SMS, Screenshots und Kontoauszüge sichern</li>
        <li>Keine Haftung anerkennen, bevor der Fall geprüft ist</li>
      </ul>
    }
  >
    <p>Smishing, also Phishing per SMS, gehört zu den häufigsten Betrugsmaschen im Onlinebanking. Die Nachrichten geben sich als Bank, Paketdienst oder Behörde aus und führen auf gefälschte Seiten, die Zugangsdaten und Freigabecodes abgreifen.</p>

    <h2>Die gesetzliche Ausgangslage</h2>
    <p>Bei einer nicht autorisierten Zahlung muss die Bank den Betrag grundsätzlich unverzüglich erstatten (§ 675u BGB). Die Beweislast dafür, dass der Kunde die Zahlung selbst freigegeben oder grob fahrlässig gehandelt hat, trägt die Bank.</p>
    <p>Nur wenn grobe Fahrlässigkeit nachgewiesen wird, haftet der Kunde voll (§ 675v BGB). Bei einfacher Fahrlässigkeit ist die Haftung auf 50 Euro begrenzt.</p>

    <PullQuote>„Wer auf eine professionell gemachte Fälschung hereinfällt, handelt nicht automatisch grob fahrlässig."</PullQuote>

    <h2>Wie Gerichte entscheiden</h2>
    <p>Die Rechtsprechung schaut genau auf den Einzelfall: Wie echt wirkte die Nachricht? Wurden Warnhinweise der Bank übergangen? Hat der Kunde mehrere TANs oder eine Freigabe für ein fremdes Gerät bestätigt? Je raffinierter die Täuschung, desto eher bleibt die Bank in der Pflicht.</p>
    <p>Pauschale Ablehnungen von Banken halten einer Prüfung deshalb häufig nicht stand.</p>

    <h2>Unser Rat</h2>
    <p>Lassen Sie eine Ablehnung der Erstattung prüfen, bevor Sie sie akzeptieren. Wir sehen uns Ihren Fall an, fordern die Unterlagen der Bank an und setzen Ihren Anspruch außergerichtlich oder vor Gericht durch.</p>
  </ArticleLayout>
);

export default BlogPostSmsPhishing;
