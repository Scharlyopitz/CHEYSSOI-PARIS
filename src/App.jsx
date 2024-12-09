import { Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home";
import Projet from "./pages/Projet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Projet />} />
    </Routes>
  );
}

export default App;
