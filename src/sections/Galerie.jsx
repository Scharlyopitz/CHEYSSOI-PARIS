import GalerieData from "../assets/GalerieData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";
import { useState } from "react";

export default function Galerie({ setProjectName }) {
  return (
    <section id="galerie">
      <div className="content">
        <TitleReveal words={["l'art", "du", "detail"]} />
        <TextReveal text="Plongez dans notre collection de projets d’intérieurs inspirants, où design et durabilité se rencontrent." />
        <Projects setProjectName={setProjectName} />
      </div>
    </section>
  );
}

function Projects({ setProjectName }) {
  const [currentProject, setCurrentProject] = useState(0);

  function NextProject() {
    if (currentProject === GalerieData.length - 1) {
      setCurrentProject(0);
    } else {
      setCurrentProject(currentProject + 1);
    }
  }
  function PrecedentProject() {
    if (currentProject < 1) {
      setCurrentProject(GalerieData.length - 1);
    } else {
      setCurrentProject(currentProject - 1);
    }
  }

  return (
    <div className="projectsContainer">
      <div className="arrowLeft" onClick={PrecedentProject}>
        <FontAwesomeIcon icon={faChevronLeft} color="#ffffff" />
      </div>
      <div className="arrowRight" onClick={NextProject}>
        <FontAwesomeIcon icon={faChevronRight} color="#ffffff" />
      </div>
      {GalerieData.map(({ name, image }, i) => {
        return (
          <div
            key={i}
            onClick={() => setProjectName(name)}
            className="projet"
            style={{ pointerEvents: currentProject === i ? "all" : "none" }}
          >
            <div
              className="name"
              style={{ opacity: currentProject === i ? 1 : 0 }}
            >
              {name}
            </div>

            <img
              src={image}
              alt={name}
              style={{ opacity: currentProject === i ? 1 : 0 }}
            />
            <CarousselNumber
              currentProject={currentProject}
              maxLength={GalerieData.length}
            />
          </div>
        );
      })}
    </div>
  );
}

function CarousselNumber({ currentProject, maxLength }) {
  console.log(currentProject * 100);
  return (
    <div className="carrouselNumber">
      <div className="numberContainer">
        {[...Array(9)].map((_, i) => {
          return (
            <div
              className="number"
              style={{ transform: `translateY(-${currentProject * 100}%)` }}
              key={i}
            >
              0{i + 1}
            </div>
          );
        })}
      </div>
      / 0{maxLength}
    </div>
  );
}
