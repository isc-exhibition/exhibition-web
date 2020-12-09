import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import styles from './LogoButton.module.scss';
import logoButton from '../../assets/mobile_logo.png';

function LogoButton() {
  return <Router><Link to="/main"><img className={styles.logoButton} src={logoButton} alt="" /></Link></Router>;
}

export default LogoButton;
