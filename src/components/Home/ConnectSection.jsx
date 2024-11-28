import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function ConnectSection() {
  const titleSection = "Connectons nous";
  return (
    <section id="ConnextSection">
      <div className="titleSection">
        {titleSection.split(" ").map((word, i) => {
          return <h2 key={i}>{word}</h2>;
        })}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        incidunt delectus, perferendis rem maxime recusandae dicta ipsam minima
        accusamus reiciendis dolorem, illo quia tempore quisquam odit laborum
        voluptatibus fugit vel!
      </p>
      <NavLink to={"demarrermonprojet"}>
        <div className="button">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </NavLink>
    </section>
  );
}
