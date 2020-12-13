import React, { useState } from 'react';
import IntroEnter from './assets/enter.png';
import Logo from './assets/logo.png';
import styles from './IntroPage.module.scss';

function IntroPage() {
  const [notClick, setClick] = useState(false);

  return (
    <div
      className={styles.IntroContainer}
      onClick={() => setClick(!notClick)}
      onKeyDown={() => setClick(!notClick)}
      role="button"
      tabIndex={0}
      data-click={notClick}
    >
      <div className={styles.IntroImage} data-click={notClick}>
        <img src={Logo} alt="Logo" className={styles.Logo} data-click={notClick} />
      </div>
      <img src={IntroEnter} alt="IntroEnter" className={styles.IntroEnter} />
    </div>
  );
}
export default IntroPage;
