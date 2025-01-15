import Formules from "../sections/Formules"; // Importez Formules
import DemarrerProjet from "../sections/DemarrerProjet"; // Importez DemarrerProjet
import Footer from "../components/Footer";



export default function DemarrerMonProjet() {
  return (
    <div className="demarrer-projet-page">
      
      {/* Section Démarrer Mon Projet */}
      <div className="demarrer-projet-section">
        <DemarrerProjet />
      </div>

      {/* Section Formules */}
      <div className="formules-section">
        <Formules />
      </div>

      {/* Section footer */}
                        <div id="footer-section" className="footer-section">
                          <Footer /> {/* Affiche le contenu du composant Footer */}
                        </div>
                      </div>
                    );
                  }
          
    