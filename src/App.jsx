import { Route, Routes, useLocation } from "react-router-dom";
import "./style/style.css";
import DemarrerProjet from "./pages/DemarrerProjet";
import Home from "./pages/Home";
import { useEffect } from "react";
import Apropos from "./pages/Apropos";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demarrermonprojet" element={<DemarrerProjet />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </>
  );
}

export default App;
