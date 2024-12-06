import FormulesData from "../assets/FormulesData.json";

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
          {FormulesData.map((formData, i) => {
            return (
              <FormuleCard
                key={i}
                name={formData.name}
                price={formData.price}
                descriptions={formData.descriptions}
              />
            );
          })}
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
