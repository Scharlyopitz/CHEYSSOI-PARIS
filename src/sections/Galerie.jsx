import GalerieData from "../assets/GalerieData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Galerie() {
  const title = "L'art du detail";

  const text =
    "Plongez dans notre collection de projets d’intérieurs inspirants, où design et durabilité se rencontrent.";
  return (
    <section id="galerie">
      <div className="content">
        <div className="titleContainer">
          <div className="h2Container">
            {title.split(" ").map((word, i) => {
              return <h2 key={i}>{word}</h2>;
            })}
          </div>
          <p>{text}</p>
        </div>

        <div className="projectsContainer">
          {GalerieData.map((galerie, i) => {
            return (
              <Link
                key={i}
                to={`/${galerie.name}`}
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
