import { useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage";
import BigTitle from "../components/BigTitle";
import PageTransition from "../components/PageTransition";
import ProgressBar from "../components/ProgressBar";
import ImageEspacePro from "/Haussman.webp";
import Footer from "../components/Footer";

export default function EspacePro({ loader }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <PageTransition id="EspacePro">
      <ProgressBar />
      <BackgroundImage image={ImageEspacePro} />
      <BigTitle
        loader={loader}
        text="espace pro"
        undertitle="PAGE RESERVEE AUX PROFESSIONNELS"
      />
      <Footer />
    </PageTransition>
  );
}
