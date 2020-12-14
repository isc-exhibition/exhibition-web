import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './assets/logo.png';
import DesktopLogo from './assets/DesktopLogo.png';
import styles from './IntroPage.module.scss';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function IntroPage() {
  const [notClick, setClick] = useState(false);
  const history = useHistory();
  const isDeviceHeightHighAsIphone8Plus = UseMediaQuery('(max-width: 767px)');
  let logo;
  let enter;

  function MovePage() {
    history.push('/main');
  }
  if (isDeviceHeightHighAsIphone8Plus) {
    logo = <img src={Logo} alt="Logo" className={styles.Logo} data-click={notClick} />;
  } else {
    logo = <img src={DesktopLogo} alt="Logo" className={styles.Logo} data-click={notClick} />;
  }

  if (!notClick) {
    enter = <p className={styles.IntroEnter}>터치하여 입장하세요</p>;
  } else {
    enter = null;
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
        {logo}
      </div>
      {enter}
    </div>
  );
}
export default IntroPage;
