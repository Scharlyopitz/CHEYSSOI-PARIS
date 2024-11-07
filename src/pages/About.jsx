import React from "react";
import Image1 from "/Image1.webp";

export default function About() {
  return (
    <main id="About">
      <section>
        <div className="txt">
          <h1>Cheyssoi Paris</h1>
        </div>
        <img src={Image1} alt="Image1" />
      </section>
    </main>
  );
}
