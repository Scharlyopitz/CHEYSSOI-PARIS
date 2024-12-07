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

import { useEffect, useRef } from "react";

import Lenis from "lenis";
import { motion as m, useScroll, useTransform } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

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
        <Galerie />
        <Formules />
        <DemarrerProjet />
        <Ebook />
      </main>
      <Footer />
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

  return (
    <section id="homeSection">
      <Navbar />
      <div ref={txtContainerRef} className="parentContainer">
        <m.div style={{ opacity }} className="txtContainer">
          <m.h1 style={{ y }}>Cheyssoi Paris</m.h1>
        </m.div>
      </div>
    </section>
  );
}
