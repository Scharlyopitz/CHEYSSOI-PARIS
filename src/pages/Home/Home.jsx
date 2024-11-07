import React from "react";
import Image1 from "/Image1.webp";

export default function Home() {
  return (
    <main className="Home">
      <Image />
    </main>
  );
}

function Image() {
  return (
    <div className="image">
      <img src={Image1} alt="Image1" />
    </div>
  );
}
