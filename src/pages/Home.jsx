
import { Link } from "react-router-dom";

import Image1 from "/PREZ.webp";
import GotoTopButton from "../components/GotoTopButton";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Projet from "./Projet";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import Formules from "../sections/Formules"; // Importez Formules
import Galerie from "../sections/Galerie";
import DemarrerProjet from "../sections/DemarrerProjet";


export default function Home({ loader }) {
  const [projectName, setProjectName] = useState("");

  // FONCTION POUR GÉRER LE SCROLL LORSQU'UNE MODALE EST OUVERTE
  useEffect(() => {
    if (projectName) {
      document.body.style.overflow = "hidden"; // Désactive le scroll
      document.body.setAttribute("data-lenis-prevent", "true"); // Prévention supplémentaire
    } else {
      document.body.style.overflow = "auto"; // Réactive le scroll
      document.body.removeAttribute("data-lenis-prevent");
    }
  }, [projectName]);

  // REMISE DU SCROLL EN HAUT AU CHARGEMENT DE LA PAGE
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    window.history.replaceState({}, "", "/"); // Reset l'URL
  }, []);

  return (
    <main id="Home">
      <ProgressBar />
      <GotoTopButton />
      <BackgroundImage image={Image1} />
      <BigTitle
        loader={loader}
        text="Cheyssoi Paris"
        undertitle="Designers d’intérieurs éthiques"
      />

      {/* Section Galerie */}
      <Galerie setProjectName={setProjectName} />

      {/* Affichage des projets si un nom est sélectionné */}
      <AnimatePresence>
        {projectName && (
          <Projet projectName={projectName} setProjectName={setProjectName} />
        )}
      </AnimatePresence>

      {/* Section Formules */}
      <Formules />

      <div className="video-fullscreen-container">
  <video
    className="video-fullscreen"
    src="/video-derniere-page.mp4" // Remplacez par le nouveau nom
    autoPlay
    muted
    loop
    playsInline
  />
</div>




      {/* Section Démarrer Mon Projet */}
      <DemarrerProjet />

      <div class="links-container">

      <div className="témoignage-link-container">
        <Link to="/témoignages-clients" className="témoignages-link">
          TEMOIGNAGES CLIENTS
        </Link>
      </div>

      <div className="conditions-link-container">
        <Link to="/conditions-generales" className="conditions-link">
          CONDITIONS GENERALES DE VENTE
        </Link>
      </div>
      <Link to="/mentions-legales" className="footer-link">
      MENTIONS LEGALES
      </Link>


      <Link to="/politique-confidentialite" className="footer-link">
  POLITIQUE DE CONFIDENTIALITE
</Link>

<Link to="/newletters" className="footer-link">
  S'INSCRIRE A LA NEWSLETTER
</Link>

<Link to="/contact" className="footer-link">
  CONTACT
</Link>



      </div>


      {/* Pied de page */}
      <Footer />

      {/* Transition de la page */}
      <PageTransition loader={loader} />
    </main>
  );
}
