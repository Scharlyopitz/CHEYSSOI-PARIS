import Navbar from "../components/Navbar";
import Persons from "../assets/Persons.json";
import Footer from "../components/Footer";

export default function Team() {
  const titleWords = "L'eq uipe";
  return (
    <main id="team">
      <Navbar />
      <header>
        <div className="titleContainer">
          {titleWords.split(" ").map((word, i) => {
            return <h2 key={i}>{word}</h2>;
          })}
        </div>
        <p>
          La quête de l'excellence anime chaque membre de l'équipe. Chacun, en
          apportant son expertise, sa créativité et son sens du détail contribue
          à la création de projets uniques.
        </p>
      </header>

      <Members />
      <Footer />
    </main>
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
