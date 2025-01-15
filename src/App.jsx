import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home";
import EspacePro from "./pages/EspacePro";
import Loader from "./pages/Loader";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Histoire from "./pages/Histoire";
import NotreEngagement from "./pages/NotreEngagement";
import Team from "./pages/Team";
import PourVous from "./pages/PourVous"; 
import GaleriePage from "./pages/GaleriePage"; 
import DemarrerMonProjet from "./pages/DemarrerMonProjet";
import EbookPage from "./pages/EbookPage";


function App() {
  const [loader, setLoader] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Gestion du scroll vers une ancre spécifique après navigation
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash; // Récupère l'ancre (ex : #notre-engagement)
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashNavigation(); // Appelle la fonction lors du premier chargement
  }, [pathname]); // Réagit à chaque changement de route

  // Gestion du loader
  useEffect(() => {
    if (loader) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("data-lenis-prevent", "true");
    }
  }, [loader]);

  // Scroll restoration et Lenis
  useEffect(() => {
    history.scrollRestoration = "manual";
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.stop();
    setTimeout(() => {
      lenis.start();
    }, 10);
  }, [pathname]);


  useEffect(() => {
    const hash = window.location.hash; // Récupère l'ancre (ex: #notre-engagement)
    if (hash) {
      const element = document.querySelector(hash); // Trouve l'élément correspondant
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // Ajoute un délai pour assurer le scroll après le chargement
      }
    }
  }, [pathname]);

  
  

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={pathname} key={pathname}>
          <Route path="/" element={<Home loader={loader} />} />
          <Route path="/clubcheyssoi" element={<EspacePro loader={loader} />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/notre-engagement" element={<NotreEngagement />} />
          <Route path="/team-section" element={<Team />} /> {/* Nouvelle route */}
          <Route path="/pourvous" element={<PourVous />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/demarrer-mon-projet" element={<DemarrerMonProjet />} />
          <Route path="/ebook" element={<EbookPage />} />
          
        </Routes>
      </AnimatePresence>
      {loader && <Loader setLoader={setLoader} />}
    </>
  );
}

export default App;
