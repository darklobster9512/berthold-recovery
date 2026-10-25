import { KompetenzLayout } from "@/components/KompetenzLayout";
import img from "@/assets/partner-iosco-summit.jpg";

const BlogPostWertpapier = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Kapitalmarktrecht"
    title={<>Kapitalmärkte verstehen.<br /><em className="text-secondary">Ansprüche durchsetzen.</em></>}
    heroLead="Ob Anleihe, Fonds oder tokenisiertes Wertpapier — wir begleiten Anbieter wie Anleger durch ein Regelwerk, das ständig dichter wird."
    introStatement="Zwischen MiFID II und MiCAR braucht es Anwälte, die beide Welten sprechen."
    introBody={
      <>
        <p>Das Kapitalmarktrecht ist längst nicht mehr nur Sache von Banken und Börsen. Neue Anbieter, digitale Plattformen und Krypto-Produkte haben den Markt geöffnet — und zugleich neue Risiken geschaffen.</p>
        <p>Wir beraten Unternehmen bei Aufbau und Aufsicht, vertreten geschädigte Anleger gegen Emittenten und Vermittler und übersetzen technische Produktmerkmale in belastbare juristische Argumente.</p>
        <p>Dabei verbinden wir klassische Prospekt- und Beratungshaftung mit fundiertem Wissen über Token, Smart Contracts und die Vorgaben der europäischen Krypto-Regulierung.</p>
      </>
    }
    focusHeadline="Vier Felder, ein Anspruch: Klarheit."
    focusItems={[
      { title: "Aufsichtsrecht für FinTechs und Finanzdienstleister", content: "Erlaubnisverfahren, Compliance-Organisation und Produktprüfung — wir bereiten Anbieter auf BaFin und europäische Vorgaben vor, von MiFID II bis MiCAR." },
      { title: "Anlegerschutz und Schadensersatz", content: "Fehlerhafte Beratung, irreführende Prospekte, riskante Derivate: Wir prüfen Ihre Ansprüche gegen Banken, Vermittler und Emittenten und setzen sie konsequent durch." },
      { title: "Token, Krypto-Finanzierungen und Emissionen", content: "Wir strukturieren Token-Emissionen rechtssicher, begleiten Finanzierungen mit digitalen Assets und klären Streitigkeiten rund um Krypto-Investments." },
      { title: "Verfahren vor Gerichten und Behörden", content: "Ob Zivilklage, Verwaltungsverfahren oder Anhörung bei der Aufsicht — wir vertreten Sie dort, wo über Ihr Geld entschieden wird." },
    ]}
    ctaTitle="Ihr Kapitalmarktfall verdient eine zweite Meinung."
    ctaBody="Schicken Sie uns die wichtigsten Unterlagen. Wir sagen Ihnen offen, welche Wege es gibt und was sie kosten."
  />
);

export default BlogPostWertpapier;
