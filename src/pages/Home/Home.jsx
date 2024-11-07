import React from "react";
import Image1 from "/Image1.webp";

export default function Home() {
  return (
    <main>
      <Image />
    </main>
  );
}

function Image() {
  return (
    <div className="">
      <img src={Image1} alt="Image1" />
    </div>
  );
}
