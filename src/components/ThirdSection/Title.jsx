import { motion as m } from "framer-motion";

export default function Title({ persons, currentMember, carrouselTransi }) {
  return (
    <div className="titleContainer">
      {persons.map((p, i) => {
        return (
          <m.h2
            initial="initial"
            animate={currentMember === i ? "animate" : "initial"}
            variants={carrouselTransi}
            key={i}
          >
            {p.job}
          </m.h2>
        );
      })}
    </div>
  );
}
