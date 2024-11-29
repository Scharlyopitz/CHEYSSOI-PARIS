import React from "react";

export default function Apropos() {
  const wordsTitle1 = [
    `Createurs`,
    `D'espaces`,
    `de`,
    `vie`,
    `Durables`,
    ` elegants`,
  ];

  const txt = `Cheyssoi Paris, studio de design d’intérieur éthique et écoresponsable, réinvente vos espaces en alliant élégance,
durabilité et respect de l’environnement en France et à l’international. Chaque projet,à l’aide de nos artisans, est

une harmonie parfaite entre esthétique, innovation et engagement pour un avenir meilleur`;

  return (
    <main id="apropos">
      <section className="aproposSection">
        <div className="line" />
        <div className="content">
          <div className="txt">
            <div className="title">
              {wordsTitle1.map((word, i) => {
                return <h2 key={i}>{word}</h2>;
              })}
            </div>
            <div className="paragraphe">
              <p>{txt}</p>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </section>
    </main>
  );
}
