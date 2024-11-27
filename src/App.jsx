import { Route, Routes } from "react-router-dom";
import "./style/style.css";
import DemarrerProjet from "./pages/DemarrerProjet";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demarrermonprojet" element={<DemarrerProjet />} />
      </Routes>
    </>
  );
}

export default App;
