import Persons from "../assets/Persons.json";
import ImageReveal from "../components/ImageReveal";
import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";

export default function Team() {
  return (
    <section id="team">
      <div className="content">
        <header>
          <TitleReveal words={["l'eq", "uipe"]} />
          <TextReveal
            text=" LA QUÊTE DE L'EXCELLENCE ANIME CHAQUE MEMBRE DE L'ÉQUIPE. CHACUN, EN APPORTANT SON EXPERTISE, SA CRÉATIVITÉ ET SON SENS DU DÉTAIL, CONTRIBUE À LA CRÉATION DE PROJETS UNIQUES."
          />
        </header>

        <Members />
      </div>
    </section>
  );
}

function Members() {
  return (
    <div className="membersContainer">
      <div className="members">
        {Persons.map((member, i) => {
          return (
            <div key={i} className="card">
              <div className="filter" />
              <ImageReveal src={member.image} alt={member.name} />
              <div className="textContainer">
                <div className="hiddenContent">
                  <p>{member.name}</p>
                </div>
                <div className="hiddenContent">
                  <span>{member.job}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
