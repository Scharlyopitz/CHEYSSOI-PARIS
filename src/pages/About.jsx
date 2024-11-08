import React from "react";
import Image1 from "/Image1.webp";
import Image2 from "/Image2.webp";
import Tania from "/Tania.webp";

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
  const color = "#eadbcc";

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
      <svg fill={color} style={{ transform: "rotate(180deg)" }}>
        <path d="M0,44L26.7,51.3C53.3,59,107,73,160,77C213.3,81,267,73,320,80.7C373.3,88,427,110,480,132C533.3,154,587,176,640,168.7C693.3,161,747,125,800,124.7C853.3,125,907,161,960,168.7C1013.3,176,1067,154,1120,124.7C1173.3,95,1227,59,1280,51.3C1333.3,44,1387,66,1440,88C1493.3,110,1547,132,1600,143C1653.3,154,1707,154,1760,135.7C1813.3,117,1867,81,1920,69.7C1973.3,59,2027,73,2080,91.7C2133.3,110,2187,132,2240,139.3C2293.3,147,2347,139,2400,124.7C2453.3,110,2507,88,2560,88C2613.3,88,2667,110,2720,113.7C2773.3,117,2827,103,2880,102.7C2933.3,103,2987,117,3040,110C3093.3,103,3147,73,3200,73.3C3253.3,73,3307,103,3360,95.3C3413.3,88,3467,44,3520,25.7C3573.3,7,3627,15,3680,18.3C3733.3,22,3787,22,3813,22L3840,22L3840,220L3813.3,220C3786.7,220,3733,220,3680,220C3626.7,220,3573,220,3520,220C3466.7,220,3413,220,3360,220C3306.7,220,3253,220,3200,220C3146.7,220,3093,220,3040,220C2986.7,220,2933,220,2880,220C2826.7,220,2773,220,2720,220C2666.7,220,2613,220,2560,220C2506.7,220,2453,220,2400,220C2346.7,220,2293,220,2240,220C2186.7,220,2133,220,2080,220C2026.7,220,1973,220,1920,220C1866.7,220,1813,220,1760,220C1706.7,220,1653,220,1600,220C1546.7,220,1493,220,1440,220C1386.7,220,1333,220,1280,220C1226.7,220,1173,220,1120,220C1066.7,220,1013,220,960,220C906.7,220,853,220,800,220C746.7,220,693,220,640,220C586.7,220,533,220,480,220C426.7,220,373,220,320,220C266.7,220,213,220,160,220C106.7,220,53,220,27,220L0,220Z"></path>
      </svg>

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
