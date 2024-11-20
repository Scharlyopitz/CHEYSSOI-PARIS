import Image1 from "/Image1.webp";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import persons from "../assets/Persons.json";
import { useInView, motion as m } from "framer-motion";
import Carousel from "../components/ThirdSection/Carousel";
import Title from "../components/ThirdSection/Title";
import PersonsContainer from "../components/ThirdSection/PersonsContainer";

export default function About() {
  return (
    <>
      <main id="About">
        <Navbar />
        <BackgroundImage />
        <FirstSection />
        <SecondSection
          anchor={true}
          white={false}
          title={"CRéATEURS D'ESPACES DE VIE DURABLES éLéGANTS"}
          texts={[
            `Cheyssoi Paris, studio de design d’intérieur éthique et écoresponsable, réinvente vos espaces en alliant élégance,
durabilité et respect de l’environnement en France et à l’international. Chaque projet,à l’aide de nos artisans, est

une harmonie parfaite entre esthétique, innovation et engagement pour un avenir meilleur`,
          ]}
        />
        <SecondSection
          anchor={false}
          white={true}
          title={"HARMONIE, CONFORT, DURABILITé, éLéGANCE"}
          texts={[
            `Chaque membre de l’équipe partage la même ambition : Expertise, créativité et souci du détail sont au cœur de
notre démarche, pour transformer vos espaces en véritables lieux d’exception, respectueux de la planète.
Tania, CEO`,
          ]}
        />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
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

function SecondSection({ texts, title, anchor, white }) {
  return (
    <section
      id={anchor ? "apropos" : null}
      className={`secondSection ${white && "white"}`}
    >
      <h2>{title}</h2>
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
  };

  return (
    <section className="thirdSection">
      <Title
        currentMember={currentMember}
        persons={persons}
        carrouselTransi={carrouselTransi}
      />
      <Carousel
        refCarrousel={refCarrousel}
        persons={persons}
        currentMember={currentMember}
        setCurrentMember={setCurrentMember}
        timer={timer}
      />
      <PersonsContainer
        persons={persons}
        carrouselTransi={carrouselTransi}
        currentMember={currentMember}
      />
    </section>
  );
}

function FourthSection() {
  const texts = [
    `Cheyssoi est votre studio de design spécialisé dans les intérieurs éthiques et durables.
Nous vous accompagnons dans la création de lieux uniques, où esthétisme et respect de

l’environnement s’entrelacent harmonieusement.`,
    `Cheyssoi Paris, c’est avant tout une expérience sur-mesure : inspirez-vous de nos idées et
laissez-vous guider à chaque étape, jusqu’à la réalisation d’un espace en parfaite adéquation

avec vos valeurs et vos envies.`,
    `Nous mettons un point d’honneur à collaborer avec des artisans locaux, valorisant savoir-
faire, circularité et matériaux durables, pour des créations qui font sens et durent dans le

temps.`,
  ];

  return (
    <section id="services" className="fourthSection">
      <h2>Une expérience unique</h2>
      <div className="txtContainer">
        {texts.map((t, i) => {
          return <p key={i}>{t}</p>;
        })}
      </div>
      <button>nous contacter</button>
    </section>
  );
}

function FifthSection() {
  return <section className="fifthSection"></section>;
}
