import Formulaire from "../components/DemarrerMonProjet/Formulaire";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function DemarrerProjet() {
  return (
    <main id="demarrerprojet">
      <LeftPart />
      <Formulaire />
    </main>
  );
}

function LeftPart() {
  return (
    <div className="leftPart">
      <Button />
      <Socials />
    </div>
  );

  function Button() {
    return (
      <NavLink className="button" to={"/"}>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#000000" }} />
          <span>Home</span>
        </div>
      </NavLink>
    );
  }
}
