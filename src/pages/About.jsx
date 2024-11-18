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
    <div className="backgroundImage">
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
  return (
    <section className="fourthSection">
      <h2>Envie de démarrer ton projet ?</h2>
      <button>Click ici</button>
    </section>
  );
}
