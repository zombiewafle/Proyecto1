import React from "react";
import ReactDOM from "react-dom";

//import App from "./App.js";
import  "./components/background.css";
import world from "./images/worldicon.png"
import "./components/texts.css"
ReactDOM.render(

    <ul>
        <li id="title">proton</li>        
        <li>Explorar</li>
        <li>Contribuir</li>
        <li>Noticias</li>
        <li>Dashboard</li>
        <li>Ayuda</li>
    </ul>, 
    
    document.getElementById("root")
);
