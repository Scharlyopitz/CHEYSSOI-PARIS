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

import EbookPage from "./pages/EbookPage";
import ConditionsGenerales from "./pages/ConditionsGenerales";

import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Contact from "./pages/Contact";
// Dans vos routes :s
import Chatbot from "./components/Chatbot";





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

  const handleHashNavigation = () => {
    const hash = window.location.hash.replace("#", ""); // Supprime le "#"
    if (hash) {
      const element = document.getElementById(`section-${hash}`); // Ajoute le préfixe
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // Délai pour assurer le scroll après le chargement
      }
    }
  };
  
  

  return (
    <>
      <Navbar />
      <Chatbot /> 
      <AnimatePresence mode="wait">
        <Routes location={pathname} key={pathname}>
          <Route path="/" element={<Home loader={loader} />} />
          <Route path="/clubcheyssoi" element={<EspacePro loader={loader} />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/notre-engagement" element={<NotreEngagement />} />
          <Route path="/team-section" element={<Team />} /> {/* Nouvelle route */}
          <Route path="/pourvous" element={<PourVous />} />
          <Route path="/ebook" element={<EbookPage />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      {loader && <Loader setLoader={setLoader} />}
    </>
  )
}

export default App;
