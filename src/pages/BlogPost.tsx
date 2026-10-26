import { ArticleLayout, PullQuote } from "@/components/ArticleLayout";
const img = "/images/crypto-hero-bg.jpg";

const BlogPost = () => (
  <ArticleLayout
    self="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck"
    rubric="Fallbericht"
    title={<>8,69 Bitcoin finden<br /><em className="text-secondary">ihren Weg zurück.</em></>}
    standfirst="Rund 800.000 Euro galten als verloren. Blockchain-Forensik, gute Zusammenarbeit mit den Ermittlern und juristische Hartnäckigkeit brachten das Vermögen zurück."
    date="2. Oktober 2026"
    readTime="8 Min."
    author="Berthold & Partner"
    image={img}
    infoTitle="Der Fall in Zahlen"
    info={
      <ul className="space-y-2">
        <li><strong>2022:</strong> rund 350.000 € über Coinbase, Bitpanda und Nexo investiert</li>
        <li><strong>8,69 BTC</strong> bis zu einer Börsenadresse zurückverfolgt</li>
        <li><strong>über 100.000 €</strong> Verlust durch Zwangsumtausch verhindert</li>
        <li><strong>Wert bei Rückgabe:</strong> ca. 800.000 € (September 2026)</li>
      </ul>
    }
  >
    <p>Am Anfang stand ein freundlicher Kontakt in einer Dating-App. Am Ende stand ein Mandant, der glaubte, sein Erspartes nie wiederzusehen. Dass es anders kam, verdankt er schnellem Handeln und einer lückenlosen Spurensuche auf der Blockchain.</p>

    <h2>Das Muster: „Pig Butchering"</h2>
    <p>Der Begriff stammt aus China und beschreibt eine perfide Strategie: Das Opfer wird über Wochen „gemästet" — mit Aufmerksamkeit, Vertrauen und scheinbaren Gewinnen auf einer manipulierten Trading-Plattform. Erst wenn große Summen eingezahlt sind, schnappt die Falle zu. Auszahlungen werden blockiert oder an immer neue „Gebühren" geknüpft.</p>
    <p>Warnsignale gibt es fast immer: Renditen, die zu gut klingen, emotionaler Druck, Gespräche ausschließlich über WhatsApp oder Telegram und die Bitte, „nur noch einmal" nachzuzahlen.</p>

    <h2>Die Spur im Netz</h2>
    <p>Unser Mandant hatte 2022 auf Anweisung der Täter rund 350.000 Euro über mehrere Krypto-Börsen in Bitcoin getauscht und an die vermeintliche Plattform überwiesen. Als die versprochenen Auszahlungen ausblieben, wandte er sich an uns.</p>
    <p>Mit eigener Forensik-Software verfolgten wir die Coins von Wallet zu Wallet — bis zu einer Adresse bei einer großen internationalen Börse. Diese Analyse übernehmen wir selbst, das spart Zeit und Kosten.</p>

    <PullQuote>„Die Blockchain ist ein öffentliches Kassenbuch. Wer es lesen kann, findet Ansatzpunkte."</PullQuote>

    <h2>Sicherstellung durch die Staatsanwaltschaft</h2>
    <p>Auf Basis unserer Analyse fragte die Kriminalpolizei direkt bei der Börse an und ließ das Guthaben einfrieren. Die Staatsanwaltschaft Innsbruck ordnete anschließend die Sicherstellung von 8,69532127 BTC an. Die Coins wurden auf ein Wallet des Cybercrime Competence Centers im Bundeskriminalamt übertragen.</p>

    <h2>Der juristische Kampf um den Wert</h2>
    <p>Danach begann der eigentliche Hürdenlauf. Die Behörde wollte die Bitcoin in Euro umtauschen. Zum damaligen Kurs hätte unser Mandant dadurch über 100.000 Euro verloren. Wir haben den Umtausch gerichtlich verhindert.</p>
    <p>Mit der Strafprozessreform 2024 wurde es möglich, beschlagnahmte Kryptowerte schon im Ermittlungsverfahren herauszugeben — auch ohne dass die Täter gefasst sind. Unseren Antrag auf vorzeitige Ausfolgung stellten wir unmittelbar nach Inkrafttreten.</p>

    <h2>Was wir daraus lernen</h2>
    <p>Die Zusammenarbeit mit dem Landeskriminalamt Tirol, dem Bundeskriminalamt und der Staatsanwaltschaft Innsbruck war vorbildlich. Saubere Beweisketten und präzise Argumente haben ein Ergebnis möglich gemacht, das keineswegs selbstverständlich ist.</p>
    <p>Für Betroffene heißt das: Nicht aufgeben. Alle Transaktionen und Chats sichern, sofort spezialisierte Hilfe holen und die Spur professionell verfolgen lassen. Ansprechpartner für solche Fälle sind bei uns Dr. Holger Berthold und Dr. Maximilian Krause.</p>
  </ArticleLayout>
);

export default BlogPost;
