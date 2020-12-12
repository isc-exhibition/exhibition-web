import React from 'react';
import IntroEnter from './assets/enter.png';
import Logo from './assets/logo.png';
import styles from './IntroPage.module.scss';

function IntroPage() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.IntroImage}>
        <img src={Logo} alt="Logo" className={styles.Logo} />
        <img src={IntroEnter} alt="IntroEnter" className={styles.IntroEnter} />
      </div>
    </div>
  );
}
export default IntroPage;
