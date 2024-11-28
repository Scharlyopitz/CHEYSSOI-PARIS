import React from "react";

export default function Apropos() {
  const wordsTitle1 = [`Createurs`, `D'espaces De vie`, `Durables elegants`];

  return (
    <main id="apropos">
      <section className="aproposSection">
        <div className="title">
          {wordsTitle1.map((word, i) => {
            return <h2 key={i}>{word}</h2>;
          })}
        </div>
      </section>
    </main>
  );
}
