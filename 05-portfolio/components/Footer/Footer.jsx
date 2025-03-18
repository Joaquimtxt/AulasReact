import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <footer className={styles.Footer}>
        <hr />
        <div>
    <p>Feito com ❤️ por <a href={props.devLink} target='_blank'> {props.devName}</a>
    </p>
        </div>
        <div>
     <div>
         <a href="https://www.facebook.com/jaketamoveis/?locale=pt_BR" target="_blank" >
             <ion-icon name="logo-facebook" ></ion-icon>
         </a>
         <a href="https://www.instagram.com/jaketamoveisoficial/?hl=pt" target="_blank">
             <ion-icon name="logo-instagram"></ion-icon>
         </a>
     </div>
     </div>
  </footer>
  )
}

export default Footer