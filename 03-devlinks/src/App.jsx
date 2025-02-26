import "./App.css";

import Links from "../components/links/Links";
import Perfil from "../components/Profile/perfil";
import Switch from "../components/switch/Switch";
import SocialLinks from "../components/socialLinks/SocialLinks";
import Rodape from "../components/rodape/Rodape";
import { useState } from "react";
import FotoLight from "./img/ryu.jpg";
import FotoDark from "./img/spike.jpg";

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const troca = () => {
    setIsLight(!isLight);
  };
  return (
    <div id="App" className={isLight ? "light" : undefined}>
      <div id="container">
      <Perfil fotoPerfil={isLight? FotoLight : FotoDark}> @JoaquimGuilherme </Perfil>
      <Switch troca={troca} isLight={isLight} />
      <div id="links">
      <ul>
        <Links link={"https://github.com/Joaquimtxt"}>Github</Links>
        <Links link={"https://instagram.com/joaquimgsr"}>Instagram</Links>
        <Links link={"https://www.chess.com/member/pa1n-615"}>Xadrez</Links>
        <Links link={"https://steamcommunity.com//id/jocaquim"}>Steam</Links>
      </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/Joaquimtxt"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://instagram.com/joaquimgsr"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={"https://www.youtube.com/@painxd6607"}
          icon={"logo-youtube"}
        />
        <SocialLinks link={"https://linkedin.com"} icon={"logo-linkedin"} />
      </div>
      <Rodape>Joaquim</Rodape>
      </div>
    </div>

  );
};

export default App;
