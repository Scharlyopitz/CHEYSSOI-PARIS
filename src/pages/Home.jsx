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
        <BackgroundImage>
          <HomeSection />
          <ConnectSection />
        </BackgroundImage>
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

function BackgroundImage({ children }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);

  return (
    <div className="backgroundImageContainer">
      <m.div ref={containerRef} style={{ opacity }} className="backgroundImage">
        <img src={Image1} alt="Image1" />
      </m.div>
      {children}
    </div>
  );
}

function HomeSection() {
  return (
    <section id="homeSection">
      <Navbar />
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.9 }}
        transition={{ duration: 0.3 }}
        className="txtContainer"
      >
        <h1>Cheyssoi Paris</h1>
      </m.div>
    </section>
  );
}
