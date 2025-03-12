import { useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
import ProgressBar from "../components/ProgressBar";
import ImageEspacePro from "/PAGEPRO.webp";
import Footer from "../components/Footer";
import Section from "../components/EspacePRO/Section";
import ContactButon from "../components/EspacePRO/ContactButon";
import ClubCheyssoi1 from "/CC1.webp";
import ClubCheyssoi2 from "/CC2.webp";


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
        text="Le club cheyssoi"
        undertitle="page reservee AUX PROFESSIONNELS"
      />
      <TopSection />
      <Section
        title="VOUS SOUHAITEZ PROPOSER NOS SERVICES À VOTRE CLIENT ?"
        text="VOUS ÊTES PROFESSIONNEL DE L'IMMOBILIER, ARTISAN, SOCIÉTÉ DE RÉNOVATION, VENDEUR DE DÉCORATION OU DESIGNER D'OBJETS ? VOUS AVEZ UN PROJET À NOUS PROPOSER ?
REJOIGNEZ LE CLUB CHEYSSOI ET BÉNÉFICIEZ DE VOTRE COMMISSION !"
        src={ClubCheyssoi1}
        alt="image club cheyssoi 1"
      />
      <Section
        title="Rejoignez un club qui vous rémunère!"
        text="LE CLUB CHEYSSOI EST LE PREMIER CLUB D'AFFAIRES GRATUIT ET QUI VOUS RÉMUNÈRE !"
        src={ClubCheyssoi2}
        alt="image club cheyssoi 2"
      />

      <Footer />
      <PageTransition loader={loader} />
    </main>
  );
}

function TopSection() {
  return (
    <div className="topSection espaceProSection max-w">
      <p className="center">
      CHEYSSOI PARIS, COLLECTIF DE DESIGNERS D’INTÉRIEURS ÉTHIQUES, COLLABORE ÉTROITEMENT AVEC LES PROFESSIONNELS DE L'IMMOBILIER, ARTISANS, SOCIÉTÉS DE RÉNOVATION, VENDEURS DE DÉCORATION ET DESIGNERS D’OBJET.{" "}
      </p>
      <div className="listContainer">
        <p>REJOINDRE LE CLUB CHEYSSOI C'EST :</p>
        <ul>
          <li>UNE COMISSION SUR CHAQUE PROJET SIGNÉ GRÂCE À VOUS</li>
          <li>
          UNE COLLABORATION VALORISANTE : METTRE EN LUMIÈRE VOTRE EXPERTISE ET ACCÉDER À PLUS DE CLIENTÈLE ! FAIRE PARTIE D’UN RÉSEAU INNOVANT, ÉLÉGANT ET RENTABLE !
          </li>
        </ul>
        <p
          className="center
        "
        >
          NOUS CROYONS AU POUVOIR DU PARTENARIAT DURABLE ET GAGNANT-GAGNANT.
        </p>
      </div>

      <ContactButon />
    </div>
  );
}
