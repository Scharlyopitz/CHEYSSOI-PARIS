import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";
import Button from "../components/Button";

export default function ConnectSection() {
  return (
    <section id="ConnextSection">
      <TitleReveal words={["Une", "experience", "unique"]} />
      <TextReveal text="Cheyssoi est votre studio de design spécialisé dans les intérieurs éthiques et durables. Nous vous accompagnons dans la création de lieux uniques, où esthétisme et respect de l’environnement s’entrelacent harmonieusement. Cheyssoi Paris, c’est avant tout une expérience sur-mesure : inspirez-vous de nos idées et laissez-vous guider à chaque étape, jusqu’à la réalisation d’un espace en parfaite adéquation avec vos valeurs et vos envies. Nous mettons un point d’honneur à collaborer avec des artisans locaux, valorisant savoir-faire, circularité et matériaux durables, pour des créations qui font sens et durent dans le temps." />
      <div className="buttonsContainer">
        <Button href="#apropos" txt="En savoir plus ?" />
        <Button href="#demarrerprojet" txt="Démarrer mon projet !" />
      </div>
    </section>
  );
}
