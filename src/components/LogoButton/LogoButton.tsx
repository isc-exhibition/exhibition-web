import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoButton.module.scss';
import logoButton from '../../assets/mobile_logo.png';

function LogoButton() {
  return <Link to="/main"><img className={styles.logoButton} src={logoButton} alt="" /></Link>;
}

export default LogoButton;
