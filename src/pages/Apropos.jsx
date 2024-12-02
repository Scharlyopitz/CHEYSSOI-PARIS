import React from "react";
import AproposSection from "../components/Apropos/AproposSection";
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
            number={i + 1}
          />
        );
      })}
    </section>
  );
}
