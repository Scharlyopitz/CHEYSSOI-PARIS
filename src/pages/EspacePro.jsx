import { useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
import ProgressBar from "../components/ProgressBar";
import ImageEspacePro from "/PAGEPRO.webp";
import Footer from "../components/Footer";
import Section from "../components/EspacePRO/Section";
import ContactButon from "../components/EspacePRO/ContactButon";

export default function EspacePro({ loader }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main id="EspacePro">
      <ProgressBar />
      <BackgroundImage image={ImageEspacePro} />
      <BigTitle
        loader={loader}
        text="club cheyssoi"
        undertitle="page reservee AUX PROFESSIONNELS"
      />
      <TopSection />
      <Section
        title="VOUS SOUHAITEZ PROPOSER NOS SERVICES À VOTRE CLIENT ?"
        text="Vous êtes professionnel de l'immobilier artisans, sociétés de rénovation, vendeurs de décoration ou designers d'objets, vous avez un projet à nous proposer? 
Rejoignez le Club Cheyssoi et bénéficiez de votre commission!"
      />
      <Section text="Le Club Cheyssoi est le premier club d'affaires gratuit et qui vous rémunère!" />

      <Footer />
      <PageTransition loader={loader} />
    </main>
  );
}

function TopSection() {
  return (
    <div className="topSection espaceProSection max-w">
      <p className="center">
        Cheyssoi Paris collectif de designers d’intérieurs éthiques collabore
        étroitement avec les professionnels de l'immobilier, artisans, sociétés
        de rénovation, vendeurs de décoration et designers d’objet.{" "}
      </p>
      <div>
        <p>Rejoindre le Club Cheyssoi c'est :</p>
        <ul>
          <li>Une commission sur chaque projet signé grâce à vous</li>
          <li>
            Une collaboration valorisante : mettre en lumière votre expertise et
            accéder à plus de clientèle! Faire partie d’un réseau innovant,
            élégant et rentable!
          </li>
        </ul>
        <p
          className="center
        "
        >
          Nous croyons au pouvoir du partenariat durable et gagnant-gagnant.
        </p>
      </div>

      <ContactButon />
    </div>
  );
}
