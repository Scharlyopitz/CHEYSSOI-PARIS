import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GotoTopButton from "../components/GotoTopButton";
import ProgressBar from "../components/ProgressBar";
import Projet from "./Projet";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import Formules from "../sections/Formules";
import Galerie from "../sections/Galerie";
import DemarrerProjet from "../sections/DemarrerProjet";

import VideoPrez from "/VIDEOPREZ.mp4"; // Ajout de la vidéo

gsap.registerPlugin(ScrollTrigger);

export default function Home({ loader }) {
  const [projectName, setProjectName] = useState("");
  const formRef = useRef(null);
  const videoContainerRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    if (projectName) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("data-lenis-prevent");
    }
  }, [projectName]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    window.history.replaceState({}, "", "/");
  }, []);

  useEffect(() => {
    gsap.to(videoContainerRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "bottom center",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
      opacity: 1,
      y: 0,
    });

    gsap.to(linksContainerRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        pin: false,
      },
      opacity: 1,
      y: 0,
    });
  }, []);

  const handleVideoButtonClick = () => {
    const formElement = document.getElementById("demarrerprojet");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        formElement.querySelector("input, select, textarea").focus();
      }, 500);
    }
  };

  return (
    <main id="Home">
      <ProgressBar />
      <GotoTopButton />
      <div className="video-background-container">
        <video className="video-background" src={VideoPrez} autoPlay loop muted playsInline style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
      </div>
      <BigTitle loader={loader} text="Cheyssoi Paris" undertitle="Designers d’intérieurs éthiques" />

      <Galerie setProjectName={setProjectName} />

      <AnimatePresence>
        {projectName && <Projet projectName={projectName} setProjectName={setProjectName} />}
      </AnimatePresence>

      <Formules />
      
      <div ref={formRef} id="demarrerprojet" style={{ position: "relative", zIndex: 5, pointerEvents: "auto" }}>
        <DemarrerProjet />
      </div>

      <motion.div
        ref={videoContainerRef}
        className="video-fullscreen-container"
        style={{ opacity: 0, position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 10, pointerEvents: "none" }}
      >
        <video className="video-fullscreen" src="/videodernierepage.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <button className="video-button" onClick={handleVideoButtonClick}>
          DÉMARRER MON PROJET
        </button>
      </motion.div>

      <motion.div ref={linksContainerRef} className="links-container" style={{ position: "relative", zIndex: 10000, opacity: 1, marginTop: "50px" }}>
        <div className="témoignage-link-container">
          <Link to="/témoignages-clients">TEMOIGNAGES CLIENTS</Link>
        </div>
        <div className="conditions-link-container">
          <Link to="/conditions-generales">CONDITIONS GENERALES DE VENTE</Link>
        </div>
        <Link to="/mentions-legales">MENTIONS LEGALES</Link>
        <Link to="/politique-confidentialite">POLITIQUE DE CONFIDENTIALITE</Link>
        <Link to="/newletters">S'INSCRIRE A LA NEWSLETTER</Link>
        <Link to="/contact">CONTACT</Link>
      </motion.div>

      <Footer />
      <PageTransition loader={loader} />
    </main>
  );
}
