import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Linguagens from "../components/Linguagens/Linguagens";
import Portfolio from "../components/Portfolio/Portfolio";
import Profile from "../components/Profile";
import Photo from "./img/JOca.png";
import "./App.css";

function App() {
   
  return (
    <div id="App">
      <div id="container">
        <div>
          <Profile
            banner="https://placehold.co/1920x350"
            fotoPerfil={Photo}
          >
            {"@JoaquimGuilherme"}
          </Profile>
        </div>
        <div id="conteudo">
          <About
          titulo="Sobre Mim"
            devNome="Oi meu nome é Joaquim Guilherme"
            descricao="Tenho 17 anos."
          />
          <Portfolio />
          <Linguagens titulo="Tecnologias utilizadas" />
        </div>
        <hr />
        <Footer devLink="https://github.com/joaquimtxt" devName="Joaquim"
        Link1="https://linkedin.com" Logo1="linkedin" Link2="https://www.instagram.com/joaquimgsr/" Logo2="instagram"
        />
      </div>
    </div>
  );
}

export default App;
