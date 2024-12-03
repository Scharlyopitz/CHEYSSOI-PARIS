import GalerieData from "../assets/GalerieData.json";

export default function Galerie() {
  const title = "L'art du detail";

  const text =
    "Plongez dans notre collection de projets d’intérieurs inspirants, où design et durabilité se rencontrent.";
  return (
    <section id="galerie">
      <div className="content">
        <div className="titleContainer">
          <div className="h2Container">
            {title.split(" ").map((word, i) => {
              return <h2 key={i}>{word}</h2>;
            })}
          </div>
          <p>{text}</p>
        </div>

        <div className="projectsContainer">
          {GalerieData.map((galerie, i) => {
            return (
              <div key={i} className="projectContainer">
                <div className="projectsNameContainer">
                  <p>{galerie.name}</p>
                </div>
                <div className="project"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
