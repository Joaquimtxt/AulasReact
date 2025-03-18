import About from "../components/About/about";
import Linguagens from "../components/Linguagens/Linguagens";
import Portfolio from "../components/Portfolio/Portfolio";
import Profile from "../components/Profile";
import "./App.css";

function App() {
   const imagemLinks = [
            "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
            "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
        ];
  return (
    <div id="App">
      <div id="container">
        <div>
          <Profile
            banner="https://placehold.co/1920x350"
            fotoPerfil="https://placehold.co/200x200"
          >
            {"@JoaquimGuilherme"}
          </Profile>
        </div>
        <div id="conteudo">
          <About
          titulo="Sobre Mim"
            devNome="Oi meu nome é Seu Nome"
            descricao="Esta é a descrição sobre você."
          />
          <Portfolio />
          <Linguagens titulo="Tecnologias" imagemLinks={imagemLinks} />
        </div>
      </div>
    </div>
  );
}

export default App;
