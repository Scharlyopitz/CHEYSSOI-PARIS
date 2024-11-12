import React from "react";
import Image1 from "/Image1.webp";

export default function Home() {
  return (
    <main id="Home">
      <Texte />
      <Image />
    </main>
  );
}

function Texte() {
  return (
    <div className="logo">
      <p>Cheyssoi Paris</p>
    </div>
  );
}

function Image() {
  return (
    <div className="image">
      <img src={Image1} alt="Image1" />
    </div>
  );
}
