import React from "react";

import "../body/body.scss";
import "../stats.scss";

import steam from "../../images/steamDeck.png";
import stats from "../../images/stats.png";

import {Lines1} from "./lines.js"

export function PageBody(){

    return (
        <div className="pageBody">
            <div id="messages">
                <div id="message1">
                    <p>Con Proton y Steam Play, ¡ahora muchos juegos funcionan en Linux!</p>
                </div>

                <div id="message2">
                    <span>
                        <p id="verified">Deck Verified Games</p>
                    </span>

                    <span id="deckVerified">
                        <ul id="test1">
                            <li id="ver">verificado para deck</li>
                            <li id="firstLine"><a href="https://www.protondb.com/explore?selectedFilters=whitelisted">1,182</a></li>
                        </ul>
                        
                    </span>

                    <span id="deckPlayable">
                        <ul id="test2">
                            <li id="play">verificado para deck (jugable o verificado)</li>
                            <li id="secondLine"><a href="https://www.protondb.com/explore?selectedFilters=whitelisted">2,276</a></li>
                        </ul>
                    </span>

                    <span>
                        <p id="gamesOnProtonDB">Games on ProtonDB</p>
                    </span>

                    <span id="threeOrMore">
                        <ul id="test3">
                            <li id="three">recomendado por tres o más</li>
                            <li id="thirdLine">4,974</li>
                        </ul>
                    </span>

                    <span id="twoOrMore">
                        <ul id="test4">
                            <li id="two">recomendado por dos o más</li>
                            <li id="fourthLine">7,302</li>
                        </ul>
                    </span>
                    
                    <span id="atLeastOne">
                        <ul id="test5">
                            <li id="one">recomendado por al menos uno</li>
                            <li id="fifthLine">13,092</li>
                        </ul>
                    </span>
                </div>
            </div>

            <div id="stats">
                <span id="steamDeckImage">
                    <img src={steam} width="85%"></img>
                    <div id="steamDeckStats">
                        <img src={stats}></img>

                    </div>
                </span>
            </div>

            <div id="newPost">
                <p>How's this work? Read about it on the <a href="https://www.protondb.com/news/how-many-games-work-on-linux-and-steam-deck-dashboard">news post</a>. Also, you can use a bigger version on <a href="https://www.protondb.com/dashboard">the new Dashboard page</a>.</p>
            </div>

            <div id="whatIsProton">
                <h2>¿Qué es proton?</h2>
                <p>
                    Proton es una nueva herramienta publicada por Valve Software que ha sido integrada con Steam Play para hacer que jugando juegos de Windows en Linux sea tan simple como pulsar el botón de Jugar dentro de Steam. Bajo el capó, Proton abarca otras herramientas populares como Wine y DXVK, que un jugador tendría que instalar y mantener por el mismo. Esto alivia enormemente la carga para los usuarios que cambian a Linux, sin tener que aprender los sistemas subyacentes o tener que perder una gran parte de su librería de juegos. Proton todavía está en su infancia, así que el soporte es poco consistente, pero mejora regularmente.
                </p>
            </div>

            <div id="whatIsDB">
                <h2>¿Qué es ProtonDB?</h2>
                <p>
                    El objetivo de ProtonDB es recopilar reportes de otros jugadores mientras prueban juegos con Proton en Linux y proporcionan puntuaciones sobre como de bien van los juegos. Un conjunto de sugerencias cada vez mayor proporcionan ajustes que puedes probar para intentar conseguir que los juegos funcionen mientras Proton sigue desarrollándose. Además de esto, también puedes explorar el catálogo de juegos de Steam en este sitio para buscar y descubrir una amplio rango de títulos que estaban previamente no disponibles para utilizar en Linux.
                </p>
            </div>
        </div>
    );
}