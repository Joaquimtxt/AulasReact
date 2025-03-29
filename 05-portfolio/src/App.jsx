import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Linguagens from "../components/Linguagens/Linguagens";
import Portfolio from "../components/Portfolio/Portfolio";
import Profile from "../components/Profile";
import Photo from "./img/JOca.png";
import "./App.css";

function App() {
   const Data = new Date();
    const Nascimento = new Date(2007, 8, 10);
    var Idade = Data.getFullYear() - Nascimento.getFullYear();
    const MesAtual = Data.getMonth()-1;
   const DiaAtual = Data.getDate();
   if (MesAtual < Nascimento.getMonth()-1 || (MesAtual === Nascimento.getMonth() && DiaAtual < Nascimento.getDate())) {
    Idade--;
}
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
            descricao={`Tenho ${Idade} anos, comecei meus estudos em 2024 no Senai em Jaú, onde aprendi a fazer códigos em html, css, e programar em JavaScript, C#, React, e SQL para análise de banco de dados. Sou apaixonado  também pelo estudo de línguas estrangeiras, conseguindo ter conversações avançadas em inglês, e básicas em italiano, também sei ler o alfabeto russo. Sou uma pessoa que gosta de aprender, e sempre busco novos desafios. Estou sempre em busca de novos conhecimentos, e me aprimorando cada vez mais. Gosto de trabalhar em equipe, e estou sempre disposto a ajudar os outros, e a aprender com eles.
             Abaixo é possível ter a ideia de alguns projetos já desenvolvidos por mim, e das tecnologias utilizadas. `}
          />
          <Portfolio />
          <Linguagens titulo="Tecnologias utilizadas" />
        </div>
        <hr />
        <Footer devLink="https://github.com/joaquimtxt" devName="Joaquim" AnoAtual={Data.getFullYear()}
        Link1="https://linkedin.com" Logo1="linkedin" Link2="https://www.instagram.com/joaquimgsr/" Logo2="instagram"
        />
      </div>
    </div>
  );
}

export default App;
