import { KompetenzLayout } from "@/components/KompetenzLayout";
const img = "/images/crypto-hero-bg.jpg";

const BlogPostKryptonachverfolgung = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Kryptonachverfolgung"
    title={<>Jede Transaktion<br /><em className="text-secondary">hinterlässt Spuren.</em></>}
    heroLead="Wir rekonstruieren Geldflüsse auf der Blockchain und belegen die Herkunft digitaler Vermögenswerte — gerichtsfest und verständlich."
    introStatement="Die Blockchain vergisst nichts. Man muss sie nur lesen können."
    introBody={
      <>
        <p>Gestohlene oder ergaunerte Kryptowerte gelten oft als verloren. Doch jede Bewegung ist öffentlich dokumentiert. Mit spezialisierter Software und Erfahrung lassen sich Wege bis zu Börsen und Verwahrstellen verfolgen.</p>
        <p>Umgekehrt brauchen seriöse Anleger einen sauberen Herkunftsnachweis, wenn Banken oder Notare fragen, woher das Geld stammt. Auch hier liefern wir prüfbare Berichte.</p>
      </>
    }
    focusHeadline="Forensik, die vor Gericht besteht."
    focusItems={[
      { title: "Transaktionsanalyse nach Betrug", content: "Wir verfolgen Coins über Wallets, Mixer und Börsen, identifizieren Ansatzpunkte und bereiten Sicherungs- und Auskunftsanträge vor." },
      { title: "Mittelherkunftsnachweis", content: "Für Bank, Notar oder Finanzamt: ein nachvollziehbarer Bericht über Erwerb und Entwicklung Ihrer Krypto-Bestände." },
      { title: "Gutachten für Verfahren", content: "Unsere Analysen sind so aufbereitet, dass Gerichte, Staatsanwaltschaften und Gegenseite sie nachvollziehen können." },
    ]}
    ctaTitle="Wo ist Ihr Vermögen geblieben?"
    ctaBody="Schicken Sie uns Wallet-Adressen und Transaktions-IDs. Wir sagen Ihnen, was die Spur verrät."
  />
);

export default BlogPostKryptonachverfolgung;
