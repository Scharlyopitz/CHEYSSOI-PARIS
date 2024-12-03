import React from "react";

export default function ConnectSection() {
  const titleSection = "UNE EXPERIENCE UNIQUE";

  const txt =
    "Cheyssoi est votre studio de design spécialisé dans les intérieurs éthiques et durables. Nous vous accompagnons dans la création de lieux uniques, où esthétisme et respect de l’environnement s’entrelacent harmonieusement. Cheyssoi Paris, c’est avant tout une expérience sur-mesure : inspirez-vous de nos idées et laissez-vous guider à chaque étape, jusqu’à la réalisation d’un espace en parfaite adéquation avec vos valeurs et vos envies. Nous mettons un point d’honneur à collaborer avec des artisans locaux, valorisant savoir-faire, circularité et matériaux durables, pour des créations qui font sens et durent dans le temps.";

  return (
    <section id="ConnextSection">
      <div className="titleSection">
        {titleSection.split(" ").map((word, i) => {
          return <h2 key={i}>{word}</h2>;
        })}
      </div>
      <p>{txt}</p>
      <div className="buttonsContainer">
        <a href="#apropos" className="redButton">
          En savoir plus ?
        </a>
        <a href="#demarrerprojet" className="redButton">
          Démarrer mon projet !
        </a>
      </div>
    </section>
  );
}
