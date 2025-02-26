import styles from "./SocialLinks.module.css"

const SocialLinks = ({link, icon}) => {
  return (
    <div>
    <a href={link} target="_blank">
    <ion-icon name={icon}></ion-icon>
    </a>
        </div>
  )
}

export default SocialLinks