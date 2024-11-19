import { motion as m } from "framer-motion";

export default function PersonsContainer({
  persons,
  carrouselTransi,
  currentMember,
}) {
  return (
    <div className="personsContainer">
      {persons.map((p, i) => {
        return (
          <m.div
            initial="initial"
            animate={currentMember === i ? "animate" : "initial"}
            variants={carrouselTransi}
            key={i}
            className="personContainer"
          >
            {p.names.map((name, i) => {
              return (
                <div key={i} className="imgContainer">
                  <img src={name.image} alt={`photo de ${name.name}`} />
                  <div className="nameContainer">
                    <span className="name">{name.name}</span>
                  </div>
                </div>
              );
            })}
          </m.div>
        );
      })}
    </div>
  );
}
