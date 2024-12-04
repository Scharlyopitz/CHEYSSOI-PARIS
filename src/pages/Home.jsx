import Image1 from "/Image2.webp";
import Navbar from "../components/Navbar";

import ConnectSection from "../components/Home/ConnectSection";
import Ebook from "../components/Home/Ebook";
import Apropos from "./Apropos";
import DemarrerProjet from "./DemarrerProjet";
import Team from "./Team";

import Footer from "../components/Footer";
import Formules from "./Formules";
import Galerie from "./Galerie";
import GotoTopButton from "../components/GotoTopButton";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  return (
    <>
      <main id="Home">
        <ProgressBar />
        <GotoTopButton />
        <BackgroundImage />
        <HomeSection />
        <ConnectSection />
        <Apropos />
        <Team />
        <Galerie />
        <Formules />
        <DemarrerProjet />
        <Ebook />
      </main>
      <Footer />
    </>
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
