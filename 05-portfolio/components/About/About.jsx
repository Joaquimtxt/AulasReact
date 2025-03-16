import styles from './About.module.css'
import React, { useState } from 'react'

const About = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className={styles.aboutContainer}>
        <div className={styles.aboutHeader} onClick={toggleExpand}>
            <h2>Sobre Mim {isExpanded ? <ion-icon name="caret-up-outline"></ion-icon> : <ion-icon name="caret-down-outline"></ion-icon>}</h2>
        </div>
        {isExpanded && (
            <div className={styles.aboutContent}>
                <hr />
                <h4>Oi meu nome é {props.devNome}</h4>
                <p>{props.descricao}</p>
            </div>
        )}
    </section>
    );
};

export default About