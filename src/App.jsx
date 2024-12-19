import { Route, Routes, useLocation } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home";
import EspacePro from "./pages/EspacePro";
import Loader from "./pages/Loader";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";

function App() {
  const [loader, setLoader] = useState(true);

  // FONCTION POUR ELEVER LE SCROLL ET LE REMTTRE SI LA MODAL EST OUVERTE OU NON AVEC LENIS
  useEffect(() => {
    if (loader) {
      document.body.style.overflow = "hidden"; // standard no-scroll implementation
      document.body.setAttribute("data-lenis-prevent", "true"); // Make sure you pass true as string
    } else {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("data-lenis-prevent", "true");
    }
  }, [loader]);

  const { pathname } = useLocation();

  useEffect(() => {
    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP
    history.scrollRestoration = "manual";

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const lenis = new Lenis();

    lenis.stop();
    setTimeout(() => {
      lenis.start();
    }, 10);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home loader={loader} />} />
        <Route path="/espacepro" element={<EspacePro loader={loader} />} />
      </Routes>
      {loader && <Loader setLoader={setLoader} />}
    </>
  );
}

export default App;
