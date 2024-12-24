import { useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
import ProgressBar from "../components/ProgressBar";
import ImageEspacePro from "/PAGEPRO.webp";
import Footer from "../components/Footer";
import Section from "../components/EspacePRO/Section";
import ContactButton from "../components/EspacePRO/ContactButton";

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
      <Section />
      <Footer />
      <PageTransition loader={loader} />
    </main>
  );
}

function TopSection() {
  return (
    <div className="espaceProSection">
      <p>
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
        <p>
          Nous croyons au pouvoir du partenariat durable et gagnant-gagnant.
        </p>
      </div>
      <ContactButton />
    </div>
  );
}
