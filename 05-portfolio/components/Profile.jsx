import styles from './Profile/Profile.module.css'
import React from 'react'

const Profile = ({ children, fotoPerfil, banner }) => {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.bannerContainer}>
          <img src={banner} alt="Banner" className={styles.banner} />
        <div className={styles.profile}>
          <img src={fotoPerfil} alt="Profile" className={styles.profileImage} />
          <p>{children}</p>
        </div>
        </div>
      </div>
    );
  };

export default Profile