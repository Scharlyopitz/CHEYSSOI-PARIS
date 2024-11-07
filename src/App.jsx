import { Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home/Home";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
