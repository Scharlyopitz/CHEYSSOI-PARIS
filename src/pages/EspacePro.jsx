import BackgroundImage from "../components/BackgroundImage";
import ProgressBar from "../components/ProgressBar";
import ImageEspacePro from "/Vosges.webp";

export default function EspacePro() {
  return (
    <main style={{ height: "200vh" }} id="EspacePro">
      <ProgressBar />
      <BackgroundImage image={ImageEspacePro} />
      <h1>espacepro</h1>
    </main>
  );
}
