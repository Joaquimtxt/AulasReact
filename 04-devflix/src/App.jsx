import "./App.css";
import MovieCard from "./components/movieCard/MovieCard";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import Logo from "./assets/devflix.png"
import Lupa from "./assets/search.svg"

// import Logo from ""

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo
  useEffect(() => {
    searchMovies("spider-man");
  }, []);

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando o Movies
    setMovies(data.Search);
  };

  //e = evento | ao clicar ou digitar acontece algo
  const handleKeyPress = (e) => { 
e.key === "Enter" && searchMovies(search);
  }
  return (
    <div id="app">
      <img className="logo" src={Logo} alt="" />

      <div className="search">
        <input onKeyDown={handleKeyPress} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Pesquise por filmes" />
        <img  onClick={() => searchMovies(search)} src={Lupa} alt="" />
      </div>
      
      {movies?.length > 0? (
        <div className="container"> 
         {movies.map((movie, index) => (
        <MovieCard key={index} apiUrl={apiUrl} {...movie} />
      ))}
        </div>
      ) : (
        <h2 className="empty">😢Filme não encontrado😢</h2>
      )}
     



      <Footer devName={"Joaquim"} devLink={"https://github.com/Joaquimtxt"} />
    </div>
  );
};

export default App;
