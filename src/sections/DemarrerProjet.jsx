import Formulaire from "../components/DemarrerMonProjet/Formulaire";
import TitleReveal from "../components/TitleReveal";

export default function DemarrerProjet() {
  return (
    <section id="demarrerprojet">
      <div className="content">
        <TitleReveal words={["demarrer", "mon", "projet"]} />
        <Formulaire />
      </div>
    </section>
  );
}
