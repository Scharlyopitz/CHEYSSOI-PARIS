import Image1 from "/Image1.webp";
import Navbar from "../components/Navbar";

import Presentation from "../components/Apropos/Presentation";
import MemberSection from "../components/Apropos/MemberSection";

export default function About() {
  return (
    <>
      <main id="About">
        <Navbar />
        <BackgroundImage />
        <HomeSection />
        <Apropos />
        <Services />
        <Galerie />
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

function HomeSection() {
  return (
    <section className="homeSection">
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
    </section>
  );
}

function Apropos() {
  return (
    <>
      <Presentation
        anchor={true}
        white={false}
        title={"CRéATEURS D'ESPACES DE VIE DURABLES éLéGANTS"}
        texts={[
          `Cheyssoi Paris, studio de design d’intérieur éthique et écoresponsable, réinvente vos espaces en alliant élégance,
durabilité et respect de l’environnement en France et à l’international. Chaque projet,à l’aide de nos artisans, est

une harmonie parfaite entre esthétique, innovation et engagement pour un avenir meilleur`,
        ]}
      />
      <Presentation
        anchor={false}
        white={true}
        title={"HARMONIE, CONFORT, DURABILITé, éLéGANCE"}
        texts={[
          `Chaque membre de l’équipe partage la même ambition : Expertise, créativité et souci du détail sont au cœur de
notre démarche, pour transformer vos espaces en véritables lieux d’exception, respectueux de la planète.
Tania, CEO`,
        ]}
      />
      <MemberSection />
    </>
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
    <section id="services" className="services">
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
  return <section id="galerie" className="galerie"></section>;
}
