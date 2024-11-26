import Image1 from "/Image1.webp";
import Navbar from "../components/Navbar";

import MemberSection from "../components/Apropos/MemberSection";
import TextPart from "../components/Apropos/TextPart";
import Observer from "../components/Observer";
import { useState } from "react";
import TextSeparation from "../components/Apropos/TextSeparation";
import Formulaire from "../components/DemarrerMonProjet/Formulaire";
import { NavLink } from "react-router-dom";

export default function About() {
  const [activeSection, setActiveSection] = useState("homeSection");

  return (
    <main id="About">
      <Navbar activeSection={activeSection} />
      <BackgroundImage />
      <Observer setActiveSection={setActiveSection}>
        <HomeSection />
      </Observer>
      <Observer setActiveSection={setActiveSection}>
        <Apropos />
      </Observer>
      <Observer setActiveSection={setActiveSection}>
        <Services />
      </Observer>
      <Observer setActiveSection={setActiveSection}>
        <Galerie />
      </Observer>
      <Observer setActiveSection={setActiveSection}>
        <DemarrerMonProjet />
      </Observer>
      <Observer setActiveSection={setActiveSection}>
        <Ebook />
      </Observer>
    </main>
  );
}

function BackgroundImage() {
  return (
    <div className="backgroundImage">
      <img src={Image1} alt="Image1" />
    </div>
  );
}

function HomeSection() {
  return (
    <section id="homeSection">
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
    </section>
  );
}

function Apropos() {
  const TextsBlocs = [
    {
      title: `CRéATEURS D'ESPACES DE VIE DURABLES éLéGANTS`,
      text: `Cheyssoi Paris, studio de design d’intérieur éthique et écoresponsable, réinvente vos espaces en alliant élégance,
durabilité et respect de l’environnement en France et à l’international. Chaque projet,à l’aide de nos artisans, est

une harmonie parfaite entre esthétique, innovation et engagement pour un avenir meilleur`,
    },
    {
      title: `HARMONIE, CONFORT, DURABILITE, ELEGANCE`,
      text: `Chaque membre de l’équipe partage la même ambition : Expertise, créativité et souci du détail sont au cœur de
notre démarche, pour transformer vos espaces en véritables lieux d’exception, respectueux de la planète.
Tania, CEO`,
    },
  ];

  const textSeparation = "Cheyssoi Paris";

  return (
    <section id="apropos">
      {TextsBlocs.map((txtBloc, i) => {
        return <TextPart key={i} title={txtBloc.title} texts={txtBloc.text} />;
      })}
      <TextSeparation textSeparation={textSeparation} />
      <MemberSection />
    </section>
  );
}

function Services() {
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
    <section id="services">
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

function Galerie() {
  return <section id="galerie"></section>;
}

function DemarrerMonProjet() {
  return (
    <section id="demarrermonprojet">
      <Formulaire />
    </section>
  );
}

function Ebook() {
  const ebookLink = `https://www.amazon.fr/CREER-INTERIEUR-ECO-RESPONSABLE-ELEGANT-ebook/dp/B0D73LSF6C/ref=sr_1_1?

__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31XJVAMSA9CSQ&dib=eyJ2IjoiMSJ9.A4z4bMsJWqTjD5P2uzG2Pk6BHSfM10a6b8b

VmdiYqxeEK-iTWVx-FosmOjkyjxlQtmgRclONO9W5RTWEiu7Ovs_Gubxw2-

FPy3ZpSn2H1oX94jx3n7QfeDeEt_fThcwl2t0qMa6tvFN1P6QjMFG7Ja7tLMwRm5pUeIYKBayW15LpxCB6Wu_npvC9nrqGmE9nEDlUTawFbx3ue1mz
cqx1wG_-3ywsVy2W5DKAo3ZXhTyPTe47YF9gnxfkqJg5oyp4EkpPHEq9Q2HccGUYdV2yu5oU4kazHDdD0WArpj3NBt0.8NQb37_3dkeeC5CROKbx
5qpH0FHw4JAwZ78VHYd4GCg&dib_tag=se&keywords=CREER+UN+INTERIEUR+ECO+RESPONSABLE&nsdOptOutParam=true&qid=173195137

4&sprefix=creer+un+interieur+eco+responsable%2Caps%2C137&sr=8-1`;

  return (
    <section id="ebook">
      <h2>Notre Ebook</h2>
      <p>
        Créer un intérieur éco-responsable élégant" est un guide pour
        transformer votre espace de vie en un sanctuaire chic et respectueux de
        l'environnement.
      </p>
      <NavLink to={ebookLink} target="_blank">
        Découvrir notre Ebook
      </NavLink>
    </section>
  );
}
