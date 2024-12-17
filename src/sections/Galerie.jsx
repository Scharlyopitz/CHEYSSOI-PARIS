import GalerieData from "../assets/GalerieData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
  const [currentProject, setCurrentProject] = useState();

  return (
    <div className="projectsContainer">
      <div className="left">
        <div className="imageProjetContainer">
          {GalerieData.map(({ image, name }, i) => {
            return (
              <img
                style={{
                  opacity: currentProject === i ? 1 : 0,
                  transform: currentProject === i ? "scale(1.05)" : "scale(1)",
                }}
                key={i}
                src={image}
                alt={name}
              />
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="projectsNamesContainer">
          {GalerieData.map((galerie, i) => {
            return (
              <div
                key={i}
                onClick={() => setProjectName(galerie.name)}
                onMouseEnter={() => setCurrentProject(i)}
                onMouseLeave={() => setCurrentProject()}
                className="projectName"
              >
                <div className="hiddenContent">
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} /> {galerie.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
