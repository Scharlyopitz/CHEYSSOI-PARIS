import React from "react";
import Navbar from "../components/Navbar";

export default function Galerie() {
  const title = "L'art du detail";

  const text =
    "Plongez dans notre collection de projets d’intérieurs inspirants, où design et durabilité se rencontrent.";
  return (
    <main id="galerie">
      <Navbar />
      <div className="titleContainer">
        {title.split(" ").map((word, i) => {
          return <h2 key={i}>{word}</h2>;
        })}
        <p>{text}</p>
      </div>
    </main>
  );
}
