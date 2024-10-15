import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personajes from "./Components/Personajes";
import Comics from "./Components/Comics";
import Bienvenida from "./Components/Bienvenida";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Bienvenida />} />
            <Route path="/Pagcomics" element={<Comics />} />
            <Route path="/Pagpersonajes" element={<Personajes />} />
            <Route path="*" element={<Comics />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
