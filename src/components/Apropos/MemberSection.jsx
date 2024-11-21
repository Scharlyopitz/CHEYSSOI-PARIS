import persons from "../../assets/Persons.json";

export default function MemberSection() {
  return (
    <div className="memberSection">
      {persons.map((person, i) => {
        return (
          <div key={i} className="groupContainer">
            <h2>{person.job}</h2>
            <div className="personsContainer">
              {person.members.map((member, i) => {
                return (
                  <PersonsContainer
                    key={i}
                    name={member.name}
                    photo={member.image}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PersonsContainer({ name, photo }) {
  return (
    <div className="imgContainer">
      <img src={photo} alt={`photo de ${name}`} />
      <div className="nameContainer">
        <span className="name">{name}</span>
      </div>
    </div>
  );
}
