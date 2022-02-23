import React from "react";
import Home from "./View/Header/Home";
import Logo from "./View/Header/Logo";
import Overview from "./View/Header/Overview";
import Pages from "./View/Header/Pages";
import Portfolio from "./View/Header/Portfolio";
import Template from "./View/Header/Template";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
