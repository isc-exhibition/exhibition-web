import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './LogoStand.module.scss';
import desktopLogoButtonImage from '../../assets/desktop_logo.png';

function LogoStand() {
  const isOnIntro = useRouteMatch('/intro')?.path === '/intro';

  return (
    <>
      {!isOnIntro
    && <Link to="/main"><img className={styles.logoStand} src={desktopLogoButtonImage} alt="" /></Link>}
    </>
  );
}

export default LogoStand;
