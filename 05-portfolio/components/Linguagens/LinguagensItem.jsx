import styles from './Linguagens.module.css'

const LinguagensItem = (props) => {
  return (
    <tr>
      <td>
        <div className={styles.linguagensContainer}>
          {props.imagemLinks.map((item, index) => (
            <img className={styles.linguagensItem} key={index} src={item[0]} alt={item[1]} />
          ))}
        </div>
      </td>
    </tr>
  )
}

export default LinguagensItem;