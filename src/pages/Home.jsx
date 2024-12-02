import Image1 from "/Image1.webp";
import Navbar from "../components/Navbar";

import ConnectSection from "../components/Home/ConnectSection";
import Ebook from "../components/Home/Ebook";

export default function Home() {
  return (
    <main id="Home">
      <BackgroundImage />
      <HomeSection />
      <ConnectSection />
      <Ebook />
    </main>
  );
}

function BackgroundImage() {
  return (
    <div className="backgroundImage">
      <img src={Image1} alt="Image1" />
    </div>
  );
}

function HomeSection() {
  return (
    <section id="homeSection">
      <Navbar />
      <div className="txtContainer">
        <h1>Cheyssoi Paris</h1>
      </div>
    </section>
  );
}
