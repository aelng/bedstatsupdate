import { FaDiscord } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import bedd from "./assets/bedd.png";

function Topnav () {

    const [isOpen, setIsOpen] = useState(false);
    
    function toggleMenu() {
        setIsOpen(is => !is);
    }
    

    return(
        <>
            <nav>
                
                <div className="navi">
                    <img src={bedd}alt="bedimg"style={{width: "50px", height: "auto", position: "fixed", left: "1%", top: "1.4%"}}/>
                    <a className="option" href="https://top.gg/bot/601205271578017813" target="_blank">
                        <FaHome size={22} className="option-icon"/>
                        Top.gg
                    </a>     
                    <a className="option" href="https://www.patreon.com/gian447?fan_landing=true" target="_blank">
                        <SiPatreon size={22} className="option-icon"/>
                        Patreon
                    </a>   
                    <a className="option" href="https://discord.com/oauth2/authorize?client_id=601205271578017813&permissions=8&scope=applications.commands%20bot" target="_blank">
                         <FaDiscord size={22} className="option-icon"/>
                         Invite
                    </a>
                    <div className="ic" onClick={toggleMenu}>
                        <FaAlignJustify />
                    </div>
                </div>
                <div className={isOpen ? "sidebar active" : "sidebar"}>
                    <ul>
                        <li><a href="https://top.gg/bot/601205271578017813" target="_blank">Top.gg</a></li>
                        <li><a href="https://www.patreon.com/gian447?fan_landing=true" target="_blank">Patreon</a></li>
                        <li><a href="https://discord.com/oauth2/authorize?client_id=601205271578017813&permissions=8&scope=applications.commands%20bot" target="_blank">Invite</a></li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default Topnav;