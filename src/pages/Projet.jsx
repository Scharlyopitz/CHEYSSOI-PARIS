import { useNavigate, useParams } from "react-router-dom";
import Galerie from "../assets/GalerieData.json";

export default function Projet() {
  const { name } = useParams();

  const projet = Galerie.find((projet) => projet.name === name);

  const navigate = useNavigate();

  function GoBack() {
    navigate(-1);
  }

  return (
    <main id="Projet">
      <div
        className="image"
        style={{ backgroundImage: `URL(${projet.image})` }}
      >
        <div className="filter"></div>
        <h1>{projet.name}</h1>
      </div>
      <div className="content">
        <div className="backBtn" onClick={() => GoBack()}>
          <span>Back</span>
        </div>
        <p>{projet.description}</p>
        {/* <div className="imageProjet">
          <img src={projet.projetImage} alt="image projet" />
        </div> */}
      </div>
    </main>
  );
}
