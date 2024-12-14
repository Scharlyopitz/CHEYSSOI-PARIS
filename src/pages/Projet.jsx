import Galerie from "../assets/GalerieData.json";
import { motion as m, transform } from "framer-motion";

export default function Projet({ projectName, setProjectName }) {
  const projet = Galerie.find((projet) => projet.name === projectName);

  function Goback() {
    setProjectName("");
  }

  const bottomPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
  const basicPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

  const easeInOutQuart = [0.76, 0, 0.24, 1];
  const easeInOutCubic = [0.65, 0, 0.35, 1];

  const animePath = {
    initial: {
      clipPath: bottomPath,
    },
    animate: {
      clipPath: basicPath,
      transition: { duration: 1.3, ease: easeInOutQuart },
    },
    exit: {
      clipPath: bottomPath,
      transition: { duration: 0.75, ease: easeInOutCubic },
    },
  };

  const animePhoto = {
    initial: {
      transform: "translateY(20%)",
    },
    animate: {
      transform: "translateY(0%)",
      transition: { duration: 1.3, ease: easeInOutQuart },
    },
    exit: {
      transform: "translateY(0%)",
    },
  };

  const animeOpacity = {
    initial: {
      opacity: 0,
      transform: "translateY(0px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.8, delay: 0.8, ease: easeInOutCubic },
    },
    exit: {
      opacity: 1,
      transform: "translateY(60px)",
      transition: { duration: 0.75, ease: easeInOutCubic },
    },
  };

  const exitText = {
    initial: {
      transform: "translateY(100%)",
    },
    animate: {
      transform: "translateY(0)",
      transition: { duration: 1.3, ease: easeInOutCubic },
    },
    exit: {
      transform: "translateY(60px)",
      transition: { duration: 0.75, ease: easeInOutCubic },
    },
  };

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
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={backgroundAnimation}
      className="backgroundProjet"
    >
      <m.section variants={animePath} id="Projet">
        <div className="image">
          <m.img variants={animePhoto} src={projet?.image} alt={projet?.name} />
          <div className="filter"></div>
          <m.div variants={exitText} className="title">
            <m.h1>{projet?.name}</m.h1>
          </m.div>
        </div>
        <div className="content">
          <m.div variants={exitText} className="backBtn">
            <m.span onClick={() => Goback()}>Back</m.span>
          </m.div>

          <m.div>
            <m.p variants={animeOpacity} className="projetTxt">
              {projet?.description}
            </m.p>
          </m.div>
        </div>
      </m.section>
    </m.div>
  );
}
