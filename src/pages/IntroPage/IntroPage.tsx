import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IntroEnter from './assets/enter.png';
import Logo from './assets/logo.png';
import styles from './IntroPage.module.scss';

function IntroPage() {
  const [notClick, setClick] = useState(false);
  const history = useHistory();
  function MovePage() {
    history.push('/main');
  }
  return (
    <div
      className={styles.IntroContainer}
      onClick={() => setClick(!notClick)}
      onKeyDown={() => setClick(!notClick)}
      onAnimationEnd={MovePage}
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
