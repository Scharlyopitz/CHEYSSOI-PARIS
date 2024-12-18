import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import ProgressBar from "../components/ProgressBar";
import ImageEspacePro from "/Haussman.webp";

export default function EspacePro({ loader }) {
  return (
    <main style={{ height: "200vh" }} id="EspacePro">
      <ProgressBar />
      <BackgroundImage image={ImageEspacePro} />
      <BigTitle
        loader={loader}
        text="espace pro"
        undertitle="PAGE RESERVEE AUX PROFESSIONNELS"
      />
    </main>
  );
}
