import About from "../components/About/about";
import Portfolio from "../components/Portfolio/Portfolio";
import Profile from "../components/Profile";
import "./App.css";

function App() {
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
            devNome="Seu Nome"
            descricao="Esta é a descrição sobre você."
          />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
