import React from "react";
import Image1 from "/Image1.webp";

export default function Home() {
  return (
    <main id="Home">
      <Image />
    </main>
  );
}

function Image() {
  return (
    <div className="image">
      <div className="logo">
        <p>Cheyssoi Paris</p>
      </div>
      <img src={Image1} alt="Image1" />
    </div>
  );
}
