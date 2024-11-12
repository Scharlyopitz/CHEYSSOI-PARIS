import React from "react";
import Image1 from "/Image1.webp";
import Image2 from "/Image2.webp";
import Tania from "/Tania.webp";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main id="About">
        <FirstSection />
        <SecondeSection />
        <ThirdSection />
      </main>
    </>
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
  const color = "#ffffff";

  const textes = [
    "Je suis Tania Vingadassalon,",
    `Passionnée et visionnaire, j’ai consacré 20 ans de ma vie en ​tant qu'employée d'une société aérienne renommée ​côtoyant ainsi l'excellence du service.
     Esthète dans l'âme, attirée par l'artisanat, le design, la ​créativité et les objets qui portent en eux l'essence du cœur, ​en 2021 je vole de mes propres ailes, me forme auprès ​d’écoles réputées en tant que Designer d’espaces .`,
    `Fortement engagée envers des valeurs telles que l'éco-​responsabilité et la durabilité, le Slow Design est une ​révélation et je crée Cheyssoi Paris,  studio concepteur ​d’intérieurs utilisant des matériaux sains pour ​l'environnement et pour les individus.`,
    `Nous travaillons avec les particuliers souhaitant concevoir ​leur antre de bien-être.`,
    `Cheyssoi Paris collabore étroitement avec des artisans ​locaux, offrant ainsi un soutien essentiel à l'économie locale ​et contribuant à la redynamisation du secteur du fait-main.`,
  ];

  return (
    <section className="thirdSection">
      <h2>Notre Fondatrice</h2>
      <div className="container">
        <img src={Tania} alt="Tania" />
        <div className="txt">
          {textes.map((texte, i) => {
            return <p key={i}>{texte}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
