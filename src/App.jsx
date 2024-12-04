import { Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
