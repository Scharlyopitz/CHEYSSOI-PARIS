export default function Formules() {
  const title = "Nos Formules";
  return (
    <section id="formules">
      <div className="title">
        {title.split(" ").map((word, i) => {
          return <h2 key={i}>{word}</h2>;
        })}
      </div>
      <FormuleCard />
    </section>
  );
}

function FormuleCard() {
  return (
    <div className="formuleCard">
      <div className="Name">Chey</div>
      <div className="price">11€ / m²</div>

      <div className="descriptif">
        <ul>
          <li>Super</li>
          <li>Super</li>
          <li>Super</li>
          <li>Super</li>
        </ul>
      </div>
      <a href="#demarrerprojet">Commander</a>
    </div>
  );
}
