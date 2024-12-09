import { useParams } from "react-router-dom";
import Galerie from "../assets/GalerieData.json";
import { motion as m } from "framer-motion";

export default function Projet({ projectName, setProjectName }) {
  const projet = Galerie.find((projet) => projet.name === projectName);

  function Goback() {
    setProjectName("");
  }

  const bottomPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
  const basicPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  const topPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";

  const animePath = {
    initial: {
      clipPath: bottomPath,
    },
    animate: {
      clipPath: basicPath,
    },
    exit: {
      clipPath: bottomPath,
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
      <div
        className="image"
        style={{ backgroundImage: `URL(${projet?.image})` }}
      >
        <div className="filter"></div>
        <h1>{projet?.name}</h1>
      </div>
      <div className="content">
        <div className="backBtn">
          <span onClick={() => Goback()}>Back</span>
        </div>
        <p>{projet?.description}</p>
        {/* <div className="imageProjet">
          <img src={projet.projetImage} alt="image projet" />
        </div> */}
      </div>
    </m.section>
  );
}
