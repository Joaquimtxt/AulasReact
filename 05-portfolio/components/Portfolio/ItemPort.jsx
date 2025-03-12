import React from "react";
import styles from "./Portfolio.module.css";

const ItemPort = (props) => {
  {
    return (
      <div>
        <div className={styles.portfolioContent}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className={styles.imageContainer}>
              <img
                src={props.imagem}
                alt={props.titulo}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
};

export default ItemPort;
