import Galerie from "../sections/Galerie"; // Importez le composant Galerie
import Footer from "../components/Footer";



export default function GaleriePage() {
  return (
    <div className="galerie-page">
      <h2 className="galerie-title">GALERIE</h2>
      {/* Section Galerie */}
      <div className="galerie-section">
        <Galerie />
      </div>

       {/* Section footer */}
                              <div id="footer-section" className="footer-section">
                                <Footer /> {/* Affiche le contenu du composant Footer */}
                              </div>
                            </div>
                          );
                        }
   