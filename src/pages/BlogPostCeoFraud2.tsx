import { KompetenzLayout } from "@/components/KompetenzLayout";
const img = "/images/crypto-hero-bg.jpg";

const BlogPostCeoFraud2 = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Cybercrime"
    title={<>Wenn der Angriff<br /><em className="text-secondary">digital</em> kommt.</>}
    heroLead="Phishing, Fake-Plattformen, gehackte Konten, Erpressung: Wir handeln schnell, sichern Spuren und holen zurück, was sich zurückholen lässt."
    introStatement="Bei Cyberbetrug entscheiden oft die ersten 48 Stunden."
    introBody={
      <>
        <p>Täter im Netz sind organisiert, international und schnell. Opfer fühlen sich dagegen häufig allein gelassen — von Banken, Plattformen und manchmal auch von Behörden.</p>
        <p>Wir übernehmen die Koordination: Strafanzeige, Sicherungsanträge, Kommunikation mit Zahlungsdienstleistern und Börsen, zivilrechtliche Rückforderung. Alles aus einer Hand.</p>
        <p>Unsere Datenanalysten verfolgen Geldflüsse über Konten und Blockchains hinweg. So entstehen Ansatzpunkte, wo andere längst aufgegeben haben.</p>
      </>
    }
    focusHeadline="Unsere Antwort auf digitale Delikte."
    focusItems={[
      { title: "Anlagebetrug und Fake-Trading", content: "Gefälschte Broker und Krypto-Plattformen locken mit Traumrenditen. Wir dokumentieren den Betrug, verfolgen die Gelder und machen Ansprüche gegen Beteiligte geltend." },
      { title: "CEO-Fraud und Zahlungsumleitung", content: "Gefälschte Rechnungen oder Chefanweisungen: Wir stoppen Zahlungen, wo es noch möglich ist, und prüfen die Haftung von Banken und Dienstleistern." },
      { title: "Hacking, Datenklau und Erpressung", content: "Bei kompromittierten Konten oder Ransomware begleiten wir Sofortmaßnahmen, Meldepflichten und die rechtliche Aufarbeitung." },
      { title: "Strafanzeige und Opfervertretung", content: "Wir formulieren Anzeigen, die Ermittler weiterbringen, nehmen Akteneinsicht und vertreten Sie als Nebenkläger." },
    ]}
    ctaTitle="Betroffen? Warten Sie nicht."
    ctaBody="Je früher wir eingreifen, desto mehr lässt sich sichern. Rufen Sie an oder schreiben Sie uns — vertraulich und zunächst kostenfrei."
  />
);

export default BlogPostCeoFraud2;
