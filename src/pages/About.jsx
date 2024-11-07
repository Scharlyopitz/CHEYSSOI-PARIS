import React from "react";
import Image1 from "/Image1.webp";

export default function About() {
  return (
    <main id="About">
      <FirstSection />
    </main>
  );
}

function FirstSection() {
  return (
    <section>
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
      <img src={Image1} alt="Image1" />
    </section>
  );
}
