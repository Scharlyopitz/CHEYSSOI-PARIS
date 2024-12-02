import React from "react";
import AproposSection from "../components/Apropos/AproposSection";
import AproposInfos from "../assets/AproposInfos.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apropos() {
  return (
    <main id="apropos">
      <Navbar />
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
      <Footer />
    </main>
  );
}
