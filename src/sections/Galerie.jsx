import GalerieData from "../assets/GalerieData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Galerie({ setProjectName }) {
  return (
    <section id="galerie">
      <div className="content">
        <Title words={["l'art", "du", "detail"]} />
        <Text text="Plongez dans notre collection de projets d’intérieurs inspirants, où design et durabilité se rencontrent." />
        <Projects setProjectName={setProjectName} />
      </div>
    </section>
  );
}

function Projects({ setProjectName }) {
  return (
    <div className="projectsContainer">
      {GalerieData.map((galerie, i) => {
        return (
          <div
            key={i}
            onClick={() => setProjectName(galerie.name)}
            className="projectContainer"
          >
            <div className="filter" />
            <div className="project">
              <img src={galerie.image} alt={galerie.name} />
            </div>
            <div className="projectsNameContainer">
              <p>{galerie.name}</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
