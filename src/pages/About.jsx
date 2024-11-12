import React from "react";
import Image1 from "/Image1.webp";
import Image2 from "/Image2.webp";
import Tania from "/Tania.webp";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main id="About">
        <FirstSection />
      </main>
    </>
  );
}

function FirstSection() {
  return (
    <section className="firstSection">
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
      <img src={Image1} alt="Image1" />
    </section>
  );
}
