import { useState } from 'react';
import styles from './Linguagens.module.css'

const Linguagens = (props) => {
   const [isExpanded, setIsExpanded] = useState(false);
  
      const toggleExpand = () => {
          setIsExpanded(!isExpanded);
      };
    return (
        <section className={styles.tecnologiasContainer}>
              <div className={styles.tecnologiasHeader} onClick={toggleExpand}>
                  <h2>{props.titulo} {isExpanded ? <ion-icon name="caret-up-outline"></ion-icon> : <ion-icon name="caret-down-outline"></ion-icon>}</h2>
              </div>
              {isExpanded && (
      <div className={styles.tecnologiasContent}>
      <hr />
      <table>
      <tr>
        <td>
          <div className={styles.linguagensContainer}>
            {props.imagemLinks.map((link, index) => (
              <img className={styles.linguagensItem} key={index} src={link} alt={`Linguagem ${index + 1}`} />
            ))}
          </div>
        </td>
      </tr>
      </table>
      </div>
              )}
      </section>
    )
  }
  

export default Linguagens
