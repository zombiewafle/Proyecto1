import React from "react";
import "./menus.scss"
import "../images.scss"
import logo1 from "../../images/site-logo.png";

export function Menus(){
    //The functionality of the menu is here

    return (
        <>
            <div className="header">
                <ul id="menu">
                    <img id="logo" src={logo1} height ="2.5%"width="2.5%"></img>
                    <div id="protonText">
                        <li id="proton"><a href="../../../bundle/index.html">proton</a>
                            <li id="db"><a href="../../../bundle/index.html">db</a></li>
                        </li>

                    </div>


                    <li id="input"><input type="text" placeholder="Buscar Juegos..." name="searchBar"></input></li>
                    <li id="explore"> <a href="https://www.protondb.com/explore">EXPLORAR</a> </li>
                    <li id="contribuite"><a href="https://www.protondb.com/contribute">CONTRIBUIR</a></li>
                    <li id="news"><a href="https://www.protondb.com/news">NOTICIAS</a></li>
                    <li id="dashboard"><a href="https://www.protondb.com/dashboard">DASHBOARD</a></li>
                    <li id="help"><a href="https://www.protondb.com/help">AYUDA</a></li>

                    <div id="icons">
                        <span id ="language"className="material-symbols-outlined">language</span>
                        <span id ="account"className="material-symbols-outlined"><a href="https://www.protondb.com/profile">account_box</a></span>
                    </div>
                    

                </ul>



                <div id="lowerSizeMenu">
                    <ul id="menu2">
                        <span id="menuIcon" className="material-symbols-outlined">menu</span>
                        <img id="logo2" src={logo1} height ="3.5%"width="3.5%"></img>
                            <div id="protonText2">
                                <a href="../../../bundle/index.html">  
                                    <span id="proton2">proton</span>
                                    <span id="db2">db</span>
                                </a>

                            </div>

                        <li id="input2"><input type="text" placeholder="Buscar Juegos..." name="searchBar1"></input></li>

                        <span id="account2"className="material-symbols-outlined"><a href="https://www.protondb.com/profile">account_box</a></span>
                        <span id="language2"className="material-symbols-outlined">language</span>
                    </ul>
                </div>


            </div>
            
            <div id="hiddenMenu">
                <ul></ul>
            </div>
            
        </>



    );
}

