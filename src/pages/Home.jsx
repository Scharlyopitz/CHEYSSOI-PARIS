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
    window.scrollTo(0, 0);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const backgroundAnimation = {
    initial: {
      background: "#05050500",
    },
    animate: {
      background: "#050505a1",
      transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      background: "#05050500",
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

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
            <m.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={backgroundAnimation}
              className="backgroundProjet"
            >
              <Projet
                projectName={projectName}
                setProjectName={setProjectName}
              />
            </m.div>
          )}
        </AnimatePresence>
        <Formules />
        <DemarrerProjet />
        <Ebook />
      </main>
      <Footer />
      <Loader loader={loader} setLoader={setLoader} />
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
      <img src={Image1} alt="Image1" />
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
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

  const revealH1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 4, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <section id="homeSection">
      <Navbar />
      <div ref={txtContainerRef} className="parentContainer">
        <m.div
          initial="initial"
          animate="animate"
          variants={revealH1}
          className="txtContainer"
        >
          <m.h1 style={{ y, opacity }}>
            Cheyssoi Paris <span>Designers d’intérieurs éthiques</span>
          </m.h1>
        </m.div>
      </div>
    </section>
  );
}
