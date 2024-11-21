import persons from "../../assets/Persons.json";

export default function MemberSection() {
  return (
    <div className="memberSection">
      {persons.map((p, i) => {
        return (
          <div key={i} className="groupContainer">
            <h2>{p.job}</h2>
            <div className="personsContainer">
              {p.names.map((n, i) => {
                return (
                  <PersonsContainer key={i} name={n.name} photo={n.image} />
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
