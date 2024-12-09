import { useLocation, useParams } from "react-router-dom";
import Galerie from "../assets/GalerieData.json";

export default function Projet() {
  const location = useLocation();

  const { name } = useParams();

  const projet = Galerie.find((projet) => projet.name === name);

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
        <p>{projet.description}</p>
      </div>
    </main>
  );
}
