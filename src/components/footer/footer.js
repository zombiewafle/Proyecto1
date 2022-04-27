import React from "react";
import "../footer/footer.scss"

import discord from "../../images/discord.svg";
import chat from "../../images/chat.svg";
import patron from "../../images/patron.png";


export function Footer(){

    return (
        <div className="footer">
            <div id="divider"></div>
            <div id="footerInfo">
                <span id="dbInfo">
                    <p id="info1">ProtonDB es un proyecto pasional de @bdefore y una dedicada comunidad de contribuidores.</p>
                    <p id="info2">Este sitio utiliza datos de Steam así como también datos proporcionados por SteamDB vía Algolia.</p>
                    <p id="info3">Este sitio no está afiliado con Valve Software. Todas las imágenes y logos de los juegos son propiedad de sus respectivos dueños.</p>
                </span>
                <span id="advices">
                    <p>¿Tienes sugerencias? ¡Ven y únete en Discord!</p>
                    <img id="discord" width ="10%" src={discord} ></img>
                    <img id="chat" width ="10%" src={chat} ></img>
                    <img id="patron" width ="30%" src={patron} ></img>
                </span>
            </div>
        </div>
    );
}
