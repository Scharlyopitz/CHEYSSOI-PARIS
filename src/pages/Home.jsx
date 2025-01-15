import Image1 from "/PREZ.webp";
import GotoTopButton from "../components/GotoTopButton";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Projet from "./Projet";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
//import Footer from "../components/Footer";

export default function Home({ loader }) {
  const [projectName, setProjectName] = useState("");

  // FONCTION POUR ELEVER LE SCROLL ET LE REMTTRE SI LA MODAL EST OUVERTE OU NON AVEC LENIS

  useEffect(() => {
    if (projectName) {
      document.body.style.overflow = "hidden"; // standard no-scroll implementation
      document.body.setAttribute("data-lenis-prevent", "true"); // Make sure you pass true as string
    } else {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("data-lenis-prevent", "true");
    }
  }, [projectName]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP

    window.history.replaceState({}, "", "/");
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
      
      
      
      <AnimatePresence>
        {projectName && (
          <Projet projectName={projectName} setProjectName={setProjectName} />
        )}
      </AnimatePresence>
      
      <PageTransition loader={loader} />
    </main>
  );
}
