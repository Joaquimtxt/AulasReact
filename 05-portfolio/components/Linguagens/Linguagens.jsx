import { useState } from 'react';
import styles from './Linguagens.module.css'
import LinguagensItem from './LinguagensItem';

const Linguagens = (props) => {
   const [isExpanded, setIsExpanded] = useState(false);
  
      const toggleExpand = () => {
          setIsExpanded(!isExpanded);
      };
      const imagemLinks1 = [
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
        "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
    ];
    const imagemLinks2 = [
      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
  ];
    return (
        <section className={styles.tecnologiasContainer}>
              <div className={styles.tecnologiasHeader} onClick={toggleExpand}>
                  <h2>{props.titulo} {isExpanded ? <ion-icon name="caret-up-outline"></ion-icon> : <ion-icon name="caret-down-outline"></ion-icon>}</h2>
              </div>
              {isExpanded && (
      <div className={styles.tecnologiasContent}>
      <hr />
      <table>
    <LinguagensItem imagemLinks={imagemLinks1} />
    <LinguagensItem imagemLinks={imagemLinks2} />
      </table>
      </div>
              )}
      </section>
    )
  }
  

export default Linguagens
