import styles from './Linguagens.module.css'

const LinguagensItem = (props) => {
  return (
    <tr>
      <td>
        <div className={styles.linguagensContainer}>
          {props.imagemLinks.map((link, index) => (
            <img className={styles.linguagensItem} key={index} src={link} alt={`Linguagem ${index + 1}`} />
          ))}
        </div>
      </td>
    </tr>
  )
}

export default LinguagensItem;