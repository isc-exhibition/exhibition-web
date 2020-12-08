import React from 'react';
import backgroundImage from '../../assets/background/mobile_background.png';
import styles from './BackgroundImage.module.scss';

function BackgroundImage() {
  return <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }} />;
}

export default BackgroundImage;
