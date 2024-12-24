import React from "react";
import ContactButon from "./ContactButon";

export default function Section() {
  const title = `VOUS SOUHAITEZ PROPOSER NOS SERVICES À VOTRE CLIENT ?`;
  const text = `Vous êtes professionnel de l'immobilier artisans, sociétés de rénovation, vendeurs de décoration ou designers d'objets, vous avez un projet à nous proposer? 
Rejoignez le Club Cheyssoi et bénéficiez de votre commission! `;

  return (
    <div className="sectionContainer espaceProSection">
      <div className="image">{/* <img src="" alt="" /> */}</div>
      <div className="textContainer">
        <h2>{title}</h2>
        <p>{text}</p>
        <ContactButon />
      </div>
    </div>
  );
}
