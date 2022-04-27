import React from "react";
import "./menus.scss"
import logo1 from "../../images/site-logo.png";
import account from "../../images/accountIcon.png";
import language from "../../images/worldIcon.png";

export function Menus(){
    //The functionality of the menu is here

    return (
        //The menu in html is here
        <div className= "header">            
        <ul id = "menu">
            <span>
                <img src = {logo1} width="3%"></img>
                <li id="proton"><a href = "../../../bundle/index.html" >proton</a>
                        <li id="db"><a href="../../../bundle/index.html">db</a></li>    
                </li>

            </span>
            
            
            <li id="input"><input type="text" placeholder="Search games..." name ="searchBar"></input></li>
            <li id="explore"> <a href="https://www.protondb.com/explore">EXPLORAR</a> </li>
            <li id="contribuite"><a href="https://www.protondb.com/explore">CONTRIBUIR</a></li>
            <li id="news"><a href="https://www.protondb.com/explore">NOTICIAS</a></li>
            <li id="dashboard"><a href="https://www.protondb.com/explore">DASHBOARD</a></li>
            <li id="help"><a href="https://www.protondb.com/explore">AYUDA</a></li>
            <li id="language">
                <img src={language} width="40%"></img>
            </li>
            <li id="account">
                <a href ="https://www.protondb.com/" ><img src={account} width="40%"></img></a>
                
            </li>

        </ul>

        
        

        </div>
    );
}

