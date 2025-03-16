import styles from './Profile/Profile.module.css'
import React from 'react'

const Profile = ({ children, fotoPerfil, banner }) => {
    return (
      <header className={styles.profileContainer}>
        <div className={styles.bannerContainer}>
          <img src={banner} alt="Banner" className={styles.banner} />
        <div className={styles.profile}>
          <img src={fotoPerfil} alt="Profile" className={styles.profileImage} />
          <p>{children}</p>
        </div>
        </div>
      </header>
    );
  };

export default Profile