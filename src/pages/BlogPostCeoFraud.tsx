import { ArticleLayout, PullQuote } from "@/components/ArticleLayout";
import img from "@/assets/partner-bka-cooperation.jpg";

const BlogPostCeoFraud = () => (
  <ArticleLayout
    self="/blog-post/ceo-fraud-und-ueberweisungsbetrug"
    rubric="Unternehmen"
    title={<>Die gefälschte<br /><em className="text-secondary">Chefanweisung.</em></>}
    standfirst="Eine E-Mail vom Geschäftsführer, eine dringende Überweisung, absolute Diskretion: So beginnt CEO-Fraud. Was Unternehmen in den ersten Stunden tun sollten."
    date="9. Oktober 2026"
    readTime="6 Min."
    author="Berthold & Partner"
    image={img}
    infoTitle="Sofort tun"
    info={
      <ol className="space-y-2 list-decimal pl-4">
        <li>Bank anrufen und Rückruf der Zahlung verlangen.</li>
        <li>E-Mails, Anhänge und Zahlungsbelege sichern.</li>
        <li>Anwalt einschalten und Anzeige ohne Zeitverlust erstatten.</li>
      </ol>
    }
  >
    <p>Ein Klick, eine Minute Unaufmerksamkeit — und eine hohe Summe landet nicht beim Geschäftspartner, sondern auf dem Konto von Betrügern. Hinter solchen Fällen steckt oft gezielter CEO-Fraud: Täter geben sich als Chef oder Lieferant aus und nutzen Insiderwissen, um Mitarbeitende zur Zahlung zu bewegen.</p>

    <h2>So funktioniert die Masche</h2>
    <p>CEO-Fraud ist Social Engineering in Reinform. Täuschend echte E-Mails, oft mit passender Signatur und internem Wissen, erzeugen Zeitdruck. „Vertrauliche Übernahme", „eilige Lieferantenzahlung" — die Gelder fließen meist auf Auslandskonten und werden von dort schnell weitergeleitet.</p>

    <PullQuote>„Bei Überweisungsbetrug zählt nicht der Tag, sondern die Stunde."</PullQuote>

    <h2>Warum eine Anzeige allein selten reicht</h2>
    <p>Eine Anzeige bei der örtlichen Polizei führt nicht automatisch zu schnellen Ermittlungen. Entscheidend ist, dass spezialisierte Ermittler den Fall rasch übernehmen und Sicherungsmaßnahmen beantragt werden, bevor das Geld weiterwandert.</p>
    <p>Wir ordnen den Sachverhalt rechtlich ein, erstatten die Anzeige direkt bei den zuständigen Spezialisten, beantragen Sicherstellungen und Beschlagnahmen, melden Geldwäscheverdacht bei den Empfängerbanken und kümmern uns um die Meldung an Ihre Versicherung.</p>

    <h2>Nach der Akutphase</h2>
    <p>Ist die erste Hektik vorbei, stellen sich Haftungsfragen: Wer trägt den Schaden? Haben Kontrollen versagt? Welche Rolle spielt die Geschäftsführung? Auch hier stehen wir zur Seite — ansprechbar sind Dr. Holger Berthold und Dr. Sebastian Werner.</p>
  </ArticleLayout>
);

export default BlogPostCeoFraud;
