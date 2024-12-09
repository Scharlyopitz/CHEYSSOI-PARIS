import React from "react";
import AproposInfos from "../assets/AproposInfos.json";

export default function Apropos() {
  return (
    <section id="apropos">
      {AproposInfos.map((info, i) => {
        return (
          <AproposSection
            key={i}
            wordsTitle={info.wordsTitle}
            text={info.text}
            image={info.image}
          />
        );
      })}
    </section>
  );
}

function AproposSection({ wordsTitle, text, image }) {
  return (
    <section className="aproposSection">
      <div className="lineContainer">
        <div className="line" />
      </div>
      <div className="content">
        <div className="txt">
          <div className="title">
            {wordsTitle.map((word, i) => {
              return <h2 key={i}>{word}</h2>;
            })}
          </div>
          <div className="paragraphe">
            <p>{text}</p>
          </div>
        </div>
        <div className="image">
          <img src={image} alt="image" />
        </div>
      </div>
    </section>
  );
}
