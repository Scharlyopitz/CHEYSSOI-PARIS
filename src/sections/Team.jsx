import Persons from "../assets/Persons.json";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Team() {
  return (
    <section id="team">
      <div className="content">
        <header>
          <Title words={["l'eq", "uipe"]} />
          <Text
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
