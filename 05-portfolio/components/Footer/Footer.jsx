import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
          <div className={styles.FooterItems}>
            <p>Feito com ❤️ por <a href={props.devLink} className={styles.devLink} target='_blank' rel='noopener noreferrer'>{props.devName}</a>      ©{props.AnoAtual}</p>
          </div>
          <div className={styles.IconsItems}>
            <a className={styles.Icon} href={props.Link1} target="_blank" rel='noopener noreferrer'>
              <ion-icon name={`logo-${props.Logo1}`}></ion-icon>
            </a>
            <a className={styles.Icon} href={props.Link2} target="_blank" rel='noopener noreferrer'>
              <ion-icon name={`logo-${props.Logo2}`}></ion-icon>
            </a>
          </div>
        </footer>
  )
}

export default Footer