import Team from "../sections/Team"; // Importer le composant Team depuis sections
import Footer from "../components/Footer";

export default function Equipe() {
  return (
    <div className="team-page">
      
      {/* Section Équipe */}
      <div id="team-section" className="team-section">
        <Team /> {/* Afficher le contenu du composant Team */}
      </div>

      {/* Section footer */}
      <div id="footer-section" className="footer-section">
        <Footer /> {/* Affiche le contenu du composant Footer */}
      </div>
    </div>
  );
}
