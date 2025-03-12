import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";
import Button from "../components/Button";

export default function ConnectSection() {
  return (
    <section id="ConnextSection">
      <TitleReveal words={["Une", "experience", "unique"]} />
      <TextReveal text="CHEYSSOI EST VOTRE STUDIO DE DESIGN SPÉCIALISÉ DANS LES INTÉRIEURS ÉTHIQUES ET DURABLES. NOUS VOUS ACCOMPAGNONS DANS LA CRÉATION DE LIEUX UNIQUES, OÙ ESTHÉTISME ET RESPECT DE L’ENVIRONNEMENT S’ENTRELACENT HARMONIEUSEMENT. CHEYSSOI PARIS, C’EST AVANT TOUT UNE EXPÉRIENCE SUR-MESURE : INSPIREZ-VOUS DE NOS IDÉES ET LAISSEZ-VOUS GUIDER À CHAQUE ÉTAPE, JUSQU’À LA RÉALISATION D’UN ESPACE EN PARFAITE ADÉQUATION AVEC VOS VALEURS ET VOS ENVIES. NOUS METTONS UN POINT D’HONNEUR À COLLABORER AVEC DES ARTISANS LOCAUX, VALORISANT SAVOIR-FAIRE, CIRCULARITÉ ET MATÉRIAUX DURABLES, POUR DES CRÉATIONS QUI FONT SENS ET DURENT DANS LE TEMPS." />
      <div className="buttonsContainer">
        <Button href="#apropos" txt="En savoir plus ?" />
        <Button href="#demarrerprojet" txt="Démarrer mon projet !" />
      </div>
    </section>
  );
}
