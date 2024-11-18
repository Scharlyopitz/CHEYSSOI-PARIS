import Image1 from "/Image1.webp";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useInView } from "framer-motion";
import Carousel from "../components/ThirdSection/Carousel";
import ImageContainer from "../components/ThirdSection/ImageContainer";
import NameContainer from "../components/ThirdSection/NameContainer";
import DescriptionContainer from "../components/ThirdSection/DescriptionContainer";

export default function About() {
  return (
    <>
      <main id="About">
        <Navbar />
        <BackgroundImage />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
    </>
  );
}

function BackgroundImage() {
  return (
    <div className="imgContainer">
      <img src={Image1} alt="Image1" />
    </div>
  );
}

function FirstSection() {
  return (
    <section className="firstSection">
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
    </section>
  );
}

function SecondSection() {
  const texts = [
    `Cheyssoi Paris incarne le Slow Design avec des espaces durables, valorisant qualité et conscience. Notre mission est de créer des ambiances élégantes, éco-responsables, et accueillantes.`,
    `Chaque création est imprégnée d'une atmosphère chaleureuse, établissant une connexion émotionnelle avec nos clients.`,
    `En privilégiant l'artisanat local, la réuitilisation et une approche réfléchie, nos services offrent une élégance qui résiste à l'épreuve du temps.`,
  ];
  return (
    <section id="about" className="secondSection">
      <h2>Vous ne voudrez plus quitter votre interieur</h2>
      <div className="txtContainer">
        {texts.map((txt, i) => {
          return <p key={i}>{txt}</p>;
        })}
      </div>
    </section>
  );
}

function ThirdSection() {
  const persons = [
    {
      id: 0,
      image:
        "https://www.frejoux-photographe.fr/wp-content/gallery/portrait-pro-corporate/Photographe-portrait-entreprise-pro-Corporate-toulon-Celine.jpg",
      name: "Tania",
      job: "CEO",
      description: `La Javaness m'a accueillie au sein d'une équipe extraordinaire et inclusive qui m'a permis de me développer professionnellement et aussi sur le plan personnel. Je travaille sur des sujets très intéressants, je relève de nouveaux défis chaque jour, j'apprends toujours de nouvelles choses.`,
    },
    {
      id: 1,
      image:
        "https://cdn.booke.fr/wp-content/uploads/2021/01/10172447/Illustration-Use-Case-Althe%CC%81a.jpg",
      name: "Scharly",
      job: "Développeur Front-End",
      description: `J'ai rejoint La Javaness pour mon stage de fin d'études. 6 mois plus tard, sans hésiter, j'ai décidé de rester. Je suis tombé amoureux de notre ambiance conviviale. Je reviens dans nos bureaux à chaque fois avec la certitude de me réjouir et monter en compétences en AI auprès de vrais experts dans le domaine.`,
    },
    {
      id: 2,
      image:
        "https://www.sylvaingelineau.com/wp-content/uploads/2020/12/photographe-portrait-pro-cv-linkedin-toulouse.jpg",
      name: "Mones",
      job: "Développeur Front-End",
      description: `Il y a un esprit d’équipe qui nous permet de partager nos connaissances et d’en apprendre tous les jours un peu plus avec des personnes bienveillantes. Cette collaboration nous permet d’être soudés et de nous épanouir dans le travail que nous fournissons au quotidien.`,
    },
    {
      id: 3,
      image:
        "https://www.studiocorinneballouard.fr/wp-content/uploads/2020/04/photographie-studio-corporate-homme.studio-corinneballouard-8.jpg",
      name: "Adrien",
      job: "Architecte d'intérieur",
      description: `L’équipe Data et IA de La Javaness est une équipe jeune et dynamique. Au-delà du potentiel et de la diversité des expériences professionnelles, l’environnement ouvert et uni entre des équipes de La Javaness nous permet de faire évoluer nos compétences, nos savoir-faire et d’avoir une vision Fullstackerie de l’intelligence artificielle.`,
    },
    {
      id: 4,
      image:
        "https://studiolecarre.com/wp-content/uploads/2020/07/190422-1905-SrcSet.jpg",
      name: "Léa",
      job: "Graphiste",
      description: `En tant que Project Manager, j’ai l’opportunité de collaborer avec des équipes multidisciplinaires (IT, DevOps, Data, Design) et de travailler avec les clients au quotidien pour répondre à des besoins variés dans une diversité de secteurs. La Javaness nous permet de monter en compétences et de réaliser un impact concret dans nos projets tout en gardant un équilibre pro-perso.`,
    },
  ];

  const [currentMember, setCurrentMember] = useState(0);

  const timer = 5000;

  const refCarrousel = useRef(null);
  const isInView = useInView(refCarrousel, { once: true });

  // useEffect(() => {
  //   let interval;

  //   if (isInView) {
  //     interval = setInterval(() => {
  //       setCurrentMember(currentMember + 1);
  //     }, timer);
  //   }
  //   if (currentMember === persons.length) {
  //     setCurrentMember(0);
  //   }

  //   return () => clearInterval(interval);
  // }, [currentMember, isInView]);

  const easeOutQuad = [0.5, 1, 0.89, 1];

  const carrouselTransi = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 0.2, ease: easeOutQuad },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: easeOutQuad },
    },
  };

  return (
    <section className="thirdSection">
      <h2>Membres de l'équipe</h2>
      <div className="contenu">
        <Carousel
          refCarrousel={refCarrousel}
          persons={persons}
          currentMember={currentMember}
          setCurrentMember={setCurrentMember}
          timer={timer}
        />
        <ImageContainer
          persons={persons}
          currentMember={currentMember}
          carrouselTransi={carrouselTransi}
        />
        <div className="left">
          <NameContainer
            currentMember={currentMember}
            carrouselTransi={carrouselTransi}
            persons={persons}
          />
          <DescriptionContainer
            currentMember={currentMember}
            carrouselTransi={carrouselTransi}
            persons={persons}
          />
        </div>
      </div>
    </section>
  );
}

function FourthSection() {
  return <section className="fourthSection"></section>;
}
