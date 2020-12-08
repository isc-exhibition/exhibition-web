import React from 'react';
import IntroImage from './assets/intro_page.png';
import IntroEnter from './assets/enter.png';
import styles from './IntroPage.module.scss';

function IntroPage() {
  return (
    <div className={styles.IntroContainer}>
      <img src={IntroImage} alt="IntroImage" className={styles.IntroImage} />
      <img src={IntroEnter} alt="IntroEnter" className={styles.IntroEnter} />
    </div>
  );
}
export default IntroPage;
