import FormulesData from "../assets/FormulesData.json";
import Button from "../components/Button";
import Title from "../components/Title";

export default function Formules() {
  return (
    <section id="formules">
      <div className="contenu">
        <Title words={["nos", "formules"]} />
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

      <Button href="#demarrerprojet" txt="Démarrer mon projet" />
    </div>
  );
}
