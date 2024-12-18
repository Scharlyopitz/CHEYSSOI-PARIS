import Image1 from "/PREZ.jpg";

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

import {
  AnimatePresence,
  motion as m,
  useScroll,
  useTransform,
} from "framer-motion";
import Projet from "./Projet";
import BackgroundImage from "../components/BackgroundImage";

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
    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP

    window.history.replaceState({}, "", "/");
  }, []);

  return (
    <>
      <main id="Home">
        <ProgressBar />
        <GotoTopButton />
        <BackgroundImage image={Image1} />
        <HomeSection loader={loader} />
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
    </>
  );
}

function HomeSection({ loader }) {
  return (
    <section id="homeSection">
      <div className="parentContainer">
        <m.div initial="initial" animate="animate" className="txtContainer">
          <Title loader={loader} />
          <UnderTitle loader={loader} />
        </m.div>
      </div>
    </section>
  );
}

function Title({ loader }) {
  const revealH1 = {
    initial: {
      y: "105%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: loader ? 2.35 : 0,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <div className="h1container">
      <m.h1 variants={revealH1}>Cheyssoi Paris</m.h1>
    </div>
  );
}

function UnderTitle({ loader }) {
  const revealUnderTitle = {
    initial: {
      y: "-105%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: loader ? 2.35 : 0,
        ease: [0.65, 0, 0.35, 1],
      },
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
