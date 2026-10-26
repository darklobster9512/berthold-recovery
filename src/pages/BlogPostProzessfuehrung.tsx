import { KompetenzLayout } from "@/components/KompetenzLayout";
const img = "/images/editorial-justice.jpg";

const BlogPostProzessfuehrung = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Prozessführung"
    title={<>Streiten mit Plan.<br /><em className="text-secondary">Gewinnen mit Geduld.</em></>}
    heroLead="Wir führen Verfahren vor staatlichen Gerichten und Schiedsgerichten — und prüfen vorher genau, ob sich der Weg lohnt."
    introStatement="Der beste Prozess ist der, den man gut vorbereitet — oder gar nicht führen muss."
    introBody={
      <>
        <p>Ein Rechtsstreit kostet Zeit, Geld und Nerven. Darum beginnen wir jeden Fall mit einer nüchternen Analyse: Wie stark sind die Argumente, wie solvent ist die Gegenseite, welche Alternativen gibt es?</p>
        <p>Wenn verhandelt werden muss, verhandeln wir hart. Wenn geklagt werden muss, klagen wir gründlich — in Deutschland und, mit Partnern, auch international.</p>
      </>
    }
    focusHeadline="Unser Werkzeugkasten im Streit."
    focusItems={[
      { title: "Prozessstrategie und Risikoanalyse", content: "Kosten, Dauer, Erfolgsaussichten: Sie wissen vor dem ersten Schriftsatz, worauf Sie sich einlassen." },
      { title: "Zivil- und Wirtschaftsprozesse", content: "Vertragsstreit, Schadensersatz, Haftung — durch alle Instanzen." },
      { title: "Eilverfahren und Vermögenssicherung", content: "Arrest, einstweilige Verfügung und Kontopfändung, wenn Vermögen zu verschwinden droht." },
      { title: "Vergleich und Mediation", content: "Wo eine Einigung mehr bringt als ein Urteil, verhandeln wir sie für Sie." },
    ]}
    ctaTitle="Steht ein Rechtsstreit im Raum?"
    ctaBody="Lassen Sie Ihre Chancen prüfen, bevor Fristen ablaufen."
  />
);

export default BlogPostProzessfuehrung;
