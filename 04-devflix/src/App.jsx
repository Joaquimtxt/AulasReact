import './App.css'
import MovieCard from './components/movieCard/MovieCard';
import Footer from './components/footer/Footer';

// import Logo from ""

const App = () => {

  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="" />

      <div className="search">
      <input type="text" placeholder="Pesquise por filmes"/>
      <img src={"https://placehold.co/20x20"} alt="" />
      </div>
<MovieCard
 year={2024}
 type={"Movie"}
 title={"Batman"}
 poster={"https://placehold.co/300x444"}
/>
   <MovieCard 
    year={1927}
    type={"Movie"}
    title={"Nosferatu"}
    poster={"https://placehold.co/300x444"}
   /> 


<Footer
devName = {"Joaquim"}
devLink ={"https://github.com/Joaquimtxt"}
/>
    </div>

  );
}

export default App