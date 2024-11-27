import React from "react";
import Formulaire from "../components/DemarrerMonProjet/Formulaire";
import Socials from "../components/Footer/Socials";
import { useNavigate } from "react-router-dom";

export default function DemarrerProjet() {
  return (
    <section id="demarrerprojet">
      <LeftPart />
      <Formulaire />
    </section>
  );
}

function LeftPart() {
  return (
    <div className="leftPart">
      <Button />
      <Title />
      <Socials />
    </div>
  );

  function Button() {
    const navigate = useNavigate();

    function handleGoBack() {
      navigate(-1);
    }

    return (
      <div className="button" onClick={() => handleGoBack()}>
        Back
      </div>
    );
  }

  function Title() {
    return (
      <div className="title">
        <h2>Démarrer mon projet</h2>
        <span>Travaillons ensemble.</span>
      </div>
    );
  }
}
