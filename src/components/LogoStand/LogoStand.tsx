import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoStand.module.scss';
import desktopLogoButtonImage from '../../assets/desktop_logo.png';

function LogoStand() {
  return (
    <Link to="/main"><img className={styles.logoStand} src={desktopLogoButtonImage} alt="" /></Link>
  );
}

export default LogoStand;
