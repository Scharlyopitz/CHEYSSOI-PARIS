import Image1 from "/Image2.webp";
import Navbar from "../components/Navbar";

import ConnectSection from "../components/Home/ConnectSection";
import Ebook from "../components/Home/Ebook";
import Apropos from "./Apropos";
import DemarrerProjet from "./DemarrerProjet";
import Team from "./Team";

import Footer from "../components/Footer";
import Formules from "./Formules";
import Galerie from "./Galerie";
import GotoTopButton from "../components/GotoTopButton";
import ProgressBar from "../components/ProgressBar";

import { useEffect } from "react";

import Lenis from "lenis";
import { useScroll, useTransform, motion as m } from "framer-motion";
import { useRef } from "react";

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
  return (
    <div className="backgroundImage">
      <img src={Image1} alt="Image1" />
    </div>
  );
}

function HomeSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section ref={containerRef} id="homeSection">
      <Navbar />
      <m.div style={{ opacity }} className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </m.div>
    </section>
  );
}
