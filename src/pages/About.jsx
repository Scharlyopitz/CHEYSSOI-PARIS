import React from "react";
import Image1 from "/Image1.webp";
import Image2 from "/Image2.webp";

export default function About() {
  return (
    <main id="About">
      <FirstSection />
      <SecondeSection />
      <ThirdSection />
    </main>
  );
}

function FirstSection() {
  return (
    <section className="firstSection">
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
      <img src={Image1} alt="Image1" />
    </section>
  );
}

function SecondeSection() {
  const textes = [
    "Cheyssoi Paris incarne le Slow Design avec des espaces durables, valorisant qualité et conscience. Notre mission est de créer des ambiances élégantes, éco-responsables, et accueillantes.",
    "Chaque création est imprégnée d'une atmosphère chaleureuse, établissant une connexion émotionnelle avec nos clients.",
    "En privilégiant l'artisanat local, la réuitilisation et une approche réfléchie, nos services offrent une élégance qui résiste à l'épreuve du temps.",
  ];

  return (
    <section className="secondSection">
      <div className="divContainer">
        <div className="container">
          <h2>Vous ne voudrez plus quitter votre Intérieur</h2>
          <div>
            {textes.map((texte, i) => {
              return <p key={i}>{texte}</p>;
            })}
          </div>
        </div>
        <div className="imgContainer">
          <img src={Image2} alt="Image2" />
        </div>
      </div>
    </section>
  );
}

function ThirdSection() {
  return (
    <section className="thirdSection">
      <h2>Tania</h2>
    </section>
  );
}
