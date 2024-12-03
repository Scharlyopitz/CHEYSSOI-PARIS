import Formulaire from "../components/DemarrerMonProjet/Formulaire";

export default function DemarrerProjet() {
  return (
    <section id="demarrerprojet">
      <div className="content">
        <Title />
        <Formulaire />
      </div>
    </section>
  );
}

function Title() {
  const titleSection = "Demarrer mon projet";
  return (
    <div className="titleFormulaire">
      {titleSection.split(" ").map((word, i) => {
        return <h2 key={i}>{word}</h2>;
      })}
    </div>
  );
}
