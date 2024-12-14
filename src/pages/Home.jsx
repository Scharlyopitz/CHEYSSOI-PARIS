import Image1 from "/Image2.webp";
import Navbar from "../components/Navbar";

import ConnectSection from "../sections/ConnectSection";
import Ebook from "../sections/Ebook";
import Apropos from "../sections/Apropos";
import DemarrerProjet from "../sections/DemarrerProjet";
import Team from "../sections/Team";

import Footer from "../components/Footer";
import Formules from "../sections/Formules";
import Galerie from "../sections/Galerie";
import GotoTopButton from "../components/GotoTopButton";
import ProgressBar from "../components/ProgressBar";

import { useEffect, useRef, useState } from "react";

import Lenis from "lenis";
import {
  AnimatePresence,
  motion as m,
  useScroll,
  useTransform,
} from "framer-motion";
import Projet from "./Projet";
import Loader from "./Loader";

export default function Home() {
  const [projectName, setProjectName] = useState("");

  const [loader, setLoader] = useState(true);

  // FONCTION POUR ELEVER LE SCROLL ET LE REMTTRE SI LA MODAL EST OUVERTE OU NON

  useEffect(() => {
    if (projectName || loader) {
      document.body.style.overflow = "hidden"; // standard no-scroll implementation
      document.body.setAttribute("data-lenis-prevent", "true"); // Make sure you pass true as string
    } else {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("data-lenis-prevent", "true");
    }
  }, [projectName, loader]);

  useEffect(() => {
    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP
    history.scrollRestoration = "manual";
    window.history.replaceState({}, "", "/");

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main id="Home">
        <ProgressBar />
        <GotoTopButton />
        <BackgroundImage />
        <HomeSection />
        <ConnectSection />
        <Apropos />
        <Team />
        <Galerie setProjectName={setProjectName} />
        <AnimatePresence>
          {projectName && (
            <Projet projectName={projectName} setProjectName={setProjectName} />
          )}
        </AnimatePresence>
        <Formules />
        <DemarrerProjet />
        <Ebook />
      </main>
      <Footer />
      {loader && <Loader setLoader={setLoader} />}
    </>
  );
}

function BackgroundImage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6], [1, 1, 0]);

  return (
    <m.div ref={containerRef} style={{ opacity }} className="backgroundImage">
      <div className="image">
        <img src={Image1} alt="Image1" />
      </div>
    </m.div>
  );
}

function HomeSection() {
  const txtContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: txtContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="homeSection">
      <Navbar />
      <div ref={txtContainerRef} className="parentContainer">
        <m.div
          initial="initial"
          animate="animate"
          style={{ opacity }}
          className="txtContainer"
        >
          <Title />
          <UnderTitle />
        </m.div>
      </div>
    </section>
  );
}

function Title() {
  const revealH1 = {
    initial: {
      y: "105%",
    },
    animate: {
      y: 0,
      transition: { duration: 1, delay: 2.35, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <div className="h1container">
      <m.h1 variants={revealH1}>Cheyssoi Paris</m.h1>
    </div>
  );
}

function UnderTitle() {
  const revealUnderTitle = {
    initial: {
      y: "-105%",
    },
    animate: {
      y: 0,
      transition: { duration: 1, delay: 2.35, ease: [0.65, 0, 0.35, 1] },
    },
  };
  return (
    <div className="spanContainer">
      <m.span variants={revealUnderTitle}>
        Designers d’intérieurs éthiques
      </m.span>
    </div>
  );
}
