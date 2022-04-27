import React from "react";
import ReactDOM from "react-dom";
import image from "./images/up.png";
//import App from "./App.js";
import  "./components/background.scss";
//import world from "./images/worldicon.png"

import {Menus} from './components/menu/menu.js';
import {PageBody} from './components/body/body.js';
import {Footer} from './components/footer/footer.js';

ReactDOM.render(
    <>
        <Menus></Menus>
        <PageBody></PageBody>
        <Footer></Footer>
    </>,
    document.getElementById("root")
);

