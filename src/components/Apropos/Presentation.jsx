export default function Presentation({ texts, title, anchor, white }) {
  return (
    <section
      id={anchor ? "apropos" : null}
      className={`Apropos ${white && "white"}`}
    >
      <h2>{title}</h2>
      <div className="txtContainer">
        {texts.map((txt, i) => {
          return <p key={i}>{txt}</p>;
        })}
      </div>
    </section>
  );
}
