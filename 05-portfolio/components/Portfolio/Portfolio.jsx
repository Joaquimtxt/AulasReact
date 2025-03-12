import styles from "./Portfolio.module.css";
import ItemPort from "./ItemPort";
import React, { useState } from "react";

const Portfolio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.portfolio}>
      <div>
        <h2 onClick={toggleExpand}>
          Alguns projetos meus
          {isExpanded ? (
            <ion-icon name="caret-up-outline"></ion-icon>
          ) : (
            <ion-icon name="caret-down-outline"></ion-icon>
          )}
        </h2>
      </div>

      {isExpanded && (
        <div className={styles.row}>
          <div className={styles.card}>
            <ItemPort
              link="https://github.com/Joaquimtxt"
              imagem="https://placehold.co/300x300"
              titulo="Titulo1"
              descricao="É um projeto muito bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
            />
          </div>
          <div className={styles.card}>
            <ItemPort
              link="https://github.com/Joaquimtxt"
              imagem="https://placehold.co/300x300"
              titulo="Titulo1"
              descricao="É um projeto muito bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
