import styles from './About.module.css'
import React, { useState } from 'react'

const About = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.about}>
            <h2 onClick={toggleExpand}>
                Sobre Mim {isExpanded ? <ion-icon name="caret-up-outline"></ion-icon> : <ion-icon name="caret-down-outline"></ion-icon>}
            </h2>
            {isExpanded && (
                
                <div className={styles.aboutMeContent}>
                    <hr/>
                    <h4>Oi meu nome é {props.devNome}</h4>
                    <p>{props.descricao}</p>
                </div>
            )}
        </div>
    );
};

export default About