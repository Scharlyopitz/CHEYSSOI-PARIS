import { Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home";
import EspacePro from "./pages/EspacePro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/espacepro" element={<EspacePro />} />
    </Routes>
  );
}

export default App;
