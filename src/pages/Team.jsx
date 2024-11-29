import Navbar from "../components/Navbar";
import Persons from "../assets/Persons.json";

export default function Team() {
  const titleWords = "L'eq uipe";
  return (
    <main id="team">
      <Navbar />
      <div className="titleContainer">
        {titleWords.split(" ").map((word, i) => {
          return <h2 key={i}>{word}</h2>;
        })}
      </div>
      <Members />
    </main>
  );
}

function Members() {
  return (
    <div className="membersContainer">
      {Persons.map((person, i) => {
        return (
          <div key={i} className="jobContainer">
            <div className="job">
              <h3>{person.job}</h3>
              <div className="line"></div>
            </div>
            <div className="members">
              {person.members.map((member, i) => {
                return (
                  <div key={i} className="card">
                    <div className="image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <p>{member.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
