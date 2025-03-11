import styles from "./MovieCard.module.css"

const MovieCard = (props) => {
  return (
    <div className={styles.movie}>
    <div>
     <p>{props.year}</p>
     </div> 

     <img src={props.poster} alt=""></img> 
     <h3>{props.type}</h3>
     <h3>{props.title}</h3> 
     <p>{props.description}</p>   
   </div>
  )
}

export default MovieCard