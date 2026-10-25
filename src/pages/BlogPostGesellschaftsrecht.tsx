import { KompetenzLayout } from "@/components/KompetenzLayout";
import img from "@/assets/contact-hero-bg.jpg";

const BlogPostGesellschaftsrecht = () => (
  <KompetenzLayout
    image={img}
    breadcrumbLabel="Gesellschafts- & Unternehmensrecht"
    title={<>Gute Strukturen.<br /><em className="text-secondary">Weniger Streit.</em></>}
    heroLead="Von der Gründung über die Nachfolge bis zum Konflikt unter Gesellschaftern: Wir begleiten Unternehmen durch alle Phasen."
    introStatement="Ein guter Gesellschaftsvertrag ist die beste Streitvermeidung."
    introBody={
      <>
        <p>Unternehmen wachsen, Beteiligungen ändern sich, Generationen wechseln. Jede dieser Phasen verlangt nach passenden rechtlichen Strukturen.</p>
        <p>Wir gestalten Verträge, die Interessen fair ausgleichen, begleiten Transaktionen und finden Lösungen, wenn Gesellschafter nicht mehr an einem Strang ziehen — am Verhandlungstisch oder vor Gericht.</p>
      </>
    }
    focusHeadline="Wofür Unternehmer uns holen."
    focusItems={[
      { title: "Gründung und Gesellschaftsverträge", content: "Rechtsformwahl, Satzungen, Beteiligungsmodelle und Gesellschaftervereinbarungen — maßgeschneidert statt Musterlösung." },
      { title: "Transaktionen und Umstrukturierungen", content: "Kauf und Verkauf von Unternehmen und Anteilen, Due Diligence, Umwandlungen und Holding-Strukturen." },
      { title: "Gesellschafterstreit", content: "Abberufung, Ausschluss, Abfindung: Wir vertreten Ihre Position entschlossen und suchen dabei stets den wirtschaftlich sinnvollsten Weg." },
      { title: "Organhaftung und Governance", content: "Wir beraten Geschäftsführer und Aufsichtsgremien zu Pflichten und Haftungsrisiken und verteidigen sie im Ernstfall." },
    ]}
    ctaTitle="Steht in Ihrem Unternehmen eine Weichenstellung an?"
    ctaBody="Sprechen Sie mit uns, bevor Entscheidungen fallen. Ein Gespräch kostet weniger als ein späterer Streit."
  />
);

export default BlogPostGesellschaftsrecht;
