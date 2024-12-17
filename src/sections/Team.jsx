import Persons from "../assets/Persons.json";
import TextReveal from "../components/TextReveal";
import TitleReveal from "../components/TitleReveal";

export default function Team() {
  return (
    <section id="team">
      <div className="content">
        <header>
          <TitleReveal words={["l'eq", "uipe"]} />
          <TextReveal
            text=" La quête de l'excellence anime chaque membre de l'équipe. Chacun,
              en apportant son expertise, sa créativité et son sens du détail
              contribue à la création de projets uniques."
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
              <div className="image">
                <img src={member.image} alt={member.name} />
              </div>
              <p>{member.name}</p>
              <span>{member.job}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
