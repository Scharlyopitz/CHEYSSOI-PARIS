import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "/PREZ.webp";
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
    // Transition de la vidéo après le formulaire
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

    // Transition des liens après la vidéo
    gsap.to(linksContainerRef.current, {
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: "bottom center",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
      opacity: 1,
      y: 0,
    });

  }, []);

  return (
    <main id="Home">
      <ProgressBar />
      <GotoTopButton />
      <BackgroundImage image={Image1} />
      <BigTitle loader={loader} text="Cheyssoi Paris" undertitle="Designers d’intérieurs éthiques" />

      <Galerie setProjectName={setProjectName} />

      <AnimatePresence>
        {projectName && <Projet projectName={projectName} setProjectName={setProjectName} />}
      </AnimatePresence>

      <Formules />
      
      {/* Formulaire interactif */}
      <div ref={formRef} id="demarrerprojet" style={{ position: "relative", zIndex: 5 }}>
        <DemarrerProjet />
      </div>

      {/* Section vidéo après le formulaire */}
      <motion.div
        ref={videoContainerRef}
        className="video-fullscreen-container"
        style={{ opacity: 0, position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 10 }}
      >
        <video className="video-fullscreen" src="/videodernierepage.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <button className="video-button" onClick={() => document.getElementById("demarrerprojet").scrollIntoView({ behavior: "smooth" })}>
          DÉMARRER MON PROJET
        </button>
      </motion.div>

      {/* Section des liens après la vidéo */}
      <motion.div ref={linksContainerRef} className="links-container" style={{ opacity: 0, position: "relative", zIndex: 6 }}>
        <div className="témoignage-link-container">
          <Link to="/témoignages-clients" className="témoignages-link">TEMOIGNAGES CLIENTS</Link>
        </div>
        <div className="conditions-link-container">
          <Link to="/conditions-generales" className="conditions-link">CONDITIONS GENERALES DE VENTE</Link>
        </div>
        <Link to="/mentions-legales" className="footer-link">MENTIONS LEGALES</Link>
        <Link to="/politique-confidentialite" className="footer-link">POLITIQUE DE CONFIDENTIALITE</Link>
        <Link to="/newletters" className="footer-link">S'INSCRIRE A LA NEWSLETTER</Link>
        <Link to="/contact" className="footer-link">CONTACT</Link>
      </motion.div>

      <Footer />
      <PageTransition loader={loader} />
    </main>
  );
}