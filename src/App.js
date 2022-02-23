import React from "react";
import ReactDOM from "react-dom";
import Home from "./View/Header/Home";
import Logo from "./View/Header/Logo";
import Overview from "./View/Header/Overview";
import Pages from "./View/Header/Pages";
import Portfolio from "./View/Header/Portfolio";
import Template from "./View/Header/Template";

import {Routes, Route} from "react-router-dom";

import "./index.css";

function App() {
    return (
        <div className="App">
            <Home/>
            <Logo/>
            <Overview/>
            <Pages/>
            <Portfolio/>
            <Template/>
        </div>
    );
}

export default App;
