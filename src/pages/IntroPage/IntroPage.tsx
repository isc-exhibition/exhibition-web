import React from 'react';
import IntroEnter from './assets/enter.png';
import styles from './IntroPage.module.scss';

function IntroPage() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.IntroBackground}>
        <div>
          <img src={IntroEnter} alt="IntroEnter" className={styles.IntroEnter} />
        </div>
      </div>
    </div>
  );
}
export default IntroPage;
