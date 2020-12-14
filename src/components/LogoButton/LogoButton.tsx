import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoButton.module.scss';
import mobileLogoButtonImage from '../../assets/mobile_logo.png';
import desktopLogoButtonImage from '../../assets/desktop_logo.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function LogoButton() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const logoButtonImageUrl = isDeviceWidthWideAsDesktop
    ? desktopLogoButtonImage : mobileLogoButtonImage;

  return <Link to="/main"><img className={styles.logoButton} src={logoButtonImageUrl} alt="" /></Link>;
}

export default LogoButton;
