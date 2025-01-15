import ConnectSection from "../sections/ConnectSection"; // Importez ConnectSection
import Apropos from "../sections/Apropos"; // Importez Apropos
import Footer from "../components/Footer";


export default function PourVous() {
  return (
    <div className="pourvous-page">
      {/* Section Connect */}
      <div className="connect-section">
        <ConnectSection /> {/* Affichez la section Connect */}
      </div>

      {/* Section À Propos */}
      <div className="pourvous-section">
        <Apropos /> {/* Affichez le composant Apropos */}
      </div>

      {/* Section footer */}
            <div id="footer-section" className="footer-section">
              <Footer /> {/* Affiche le contenu du composant Footer */}
            </div>
          </div>
        );
      }
   
