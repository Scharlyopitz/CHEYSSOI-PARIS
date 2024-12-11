import { useParams } from "react-router-dom";
import Galerie from "../assets/GalerieData.json";
import { motion as m, transform } from "framer-motion";

export default function Projet({ projectName, setProjectName }) {
  const projet = Galerie.find((projet) => projet.name === projectName);

  function Goback() {
    setProjectName("");
  }

  const bottomPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
  const basicPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  const topPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";

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

  // const animeTitle = {
  //   initial: {
  //     transform: "translateY(-100%)",
  //   },
  //   animate: {
  //     transform: "translateY(0)",
  //     transition: { duration: 1, delay: 1, ease: easeInOutCubic },
  //   },
  //   exit: {
  //     transform: "translateY(0)",
  //   },
  // };

  const animeOpacity = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, delay: 1, ease: easeInOutCubic },
    },
    exit: {
      opacity: 1,
    },
  };

  const exitText = {
    initial: {
      transform: "translateY(0)",
    },
    animate: {
      transform: "translateY(0)",
    },
    exit: {
      transform: "translateY(40px)",
      transition: { duration: 0.75, ease: easeInOutCubic },
    },
  };

  return (
    <m.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animePath}
      id="Projet"
    >
      <div className="image">
        <m.img variants={animePhoto} src={projet?.image} alt={projet?.name} />
        <div className="filter"></div>
        <m.div variants={exitText} className="title">
          <m.h1 variants={animeOpacity}>{projet?.name}</m.h1>
        </m.div>
      </div>
      <div className="content">
        <m.div variants={exitText} className="backBtn">
          <m.span variants={animeOpacity} onClick={() => Goback()}>
            Back
          </m.span>
        </m.div>
        <m.div variants={exitText}>
          <m.p variants={animeOpacity}>{projet?.description}</m.p>
        </m.div>
      </div>
    </m.section>
  );
}
