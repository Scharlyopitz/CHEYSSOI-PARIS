import Formulaire from "../components/DemarrerMonProjet/Formulaire";
import Title from "../components/Title";

export default function DemarrerProjet() {
  return (
    <section id="demarrerprojet">
      <div className="content">
        <Title words={["demarrer", "mon", "projet"]} />
        <Formulaire />
      </div>
    </section>
  );
}
