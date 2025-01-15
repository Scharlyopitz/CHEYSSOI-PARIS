import Ebook from "../sections/Ebook"; // Importez le composant Ebook
import Footer from "../components/Footer";

export default function EbookPage() {
  return (
    <div className="ebook-page">

      {/* Section Ebook */}
      <div className="ebook-section">
        <Ebook />
      </div>
      {/* Section footer */}
                                    <div id="footer-section" className="footer-section">
                                      <Footer /> {/* Affiche le contenu du composant Footer */}
                                    </div>
                                  </div>
                                );
                              }
         