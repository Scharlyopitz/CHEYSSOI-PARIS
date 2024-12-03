export default function Formules() {
  const title = "Nos Formules";
  return (
    <section id="formules">
      <div className="contenu">
        <div className="title">
          {title.split(" ").map((word, i) => {
            return <h2 key={i}>{word}</h2>;
          })}
        </div>

        <div className="cardsContainer">
          <FormuleCard
            name={"Chey"}
            price={"49"}
            descriptions={[
              "Conseils",
              "Etude personnalisée",
              "Accompagnement personnalisé",
              "Planche d'ambiances",
              "Plans 2D et Visuels 3D",
              "Présentation des matériaux à utiliser",
              "Shopping list",
              "Coffret livré à domicile",
              "Mise en lien avec artisans",
            ]}
          />
          <FormuleCard
            name={"Ssoi"}
            price={"69"}
            descriptions={[
              "Conseils",
              "Etude personnalisée",
              "Accompagnement personnalisé",
              "Planche d'ambiances",
              "Plans 2D et Visuels 3D",
              "Présentation des matériaux à utiliser",
              "Shopping list",
              "Coffret livré à domicile",
              "Mise en lien avec artisans",
              "Gestion du chantier",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FormuleCard({ name, price, descriptions }) {
  return (
    <div className="formuleCard">
      <div className="topContainer">
        <div className="Name">{name}</div>
        <div className="price">{price} €/m²</div>
      </div>
      <div className="descriptif">
        <ul>
          {descriptions.map((description, i) => {
            return <li key={i}>{description}</li>;
          })}
        </ul>
      </div>
      <a href="#demarrerprojet" className="redButton">
        Commander
      </a>
    </div>
  );
}
