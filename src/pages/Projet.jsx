import { useLocation, useParams } from "react-router-dom";
import Galerie from "../assets/GalerieData.json";

export default function Projet() {
  const location = useLocation();

  const { name } = useParams();

  const projet = Galerie.find((projet) => projet.name === name);

  return (
    <section id="Projet">
      <h2>
        Bienvenue sur le {projet.name}
        <p>{projet.description}</p>
      </h2>
    </section>
  );
}
