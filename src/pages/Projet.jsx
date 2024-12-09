import { useParams } from "react-router-dom";
import Galerie from "../assets/GalerieData.json";

export default function Projet({ projectName, setProjectName }) {
  const projet = Galerie.find((projet) => projet.name === projectName);

  function Goback() {
    setProjectName("");
  }

  return (
    <section id="Projet">
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
    </section>
  );
}
