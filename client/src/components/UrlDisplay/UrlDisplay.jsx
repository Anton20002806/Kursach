import React from 'react';
import styles from './UrlDisplay.module.scss'

const UrlDisplay = ({ currentUrl }) => {
    return (
        <div className={styles.root}>
            <p className={styles.text}>Current URL:</p>
            <div className={styles.container}>
                <p className={styles.text}>url</p>
                <p className={styles.text}>{currentUrl}</p>
            </div>
        </div>
    );
};

export default UrlDisplay;