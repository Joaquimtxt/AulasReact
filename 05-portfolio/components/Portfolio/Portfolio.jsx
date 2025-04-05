import styles from "./Portfolio.module.css";
import ItemPort from "./ItemPort";
import Jaketa from "../../src/img/JaketaImg.png";
import React, { useRef, useState } from "react";

const Portfolio = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScroll1 = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleScroll2 = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
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
          <ion-icon name="chevron-back-outline" size="large" className={styles.scrollIcon2} onClick={handleScroll2}></ion-icon>
          <div className={styles.scroll} ref={scrollRef}>
            <div className={styles.card}>
              <ItemPort
                link="https://github.com/Joaquimtxt/ProjetoBackend"
                imagem={Jaketa}
                titulo="DbJaketa"
                descricao="É um projeto MVC para a Jaketa, onde o objetivo principal é controlar o estoque de produtos, e gerenciar vendas e compras de produtos. Foi feito em C#, e possui algumas de suas validações feitas em Jquery. Front-end foi feito com HTML, Bootstrap e CSS. "
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
            <div className={styles.card}>
              <ItemPort
                link="https://github.com/Joaquimtxt"
                imagem="https://placehold.co/300x300"
                titulo="Titulo1"
                descricao="É um projeto muito bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
              />
            </div>
          </div>
          <ion-icon name="chevron-forward-outline" size="large" className={styles.scrollIcon1} onClick={handleScroll1}></ion-icon>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
