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
  const [currentProject, setCurrentProject] = useState(1);

  return (
    <div className="projectsContainer">
      {GalerieData.map(({ name, image }, i) => {
        return (
          <div key={i} onClick={() => setProjectName(name)} className="projet">
            <div className="number">{i + 1 >= 10 ? i + 1 : `0${i + 1}`}</div>
            <div className="name">{name}</div>
            <div className="imageContainer">
              <img src={image} alt={name} />
            </div>
            <div className="line" />
          </div>
        );
      })}
    </div>
  );
}
