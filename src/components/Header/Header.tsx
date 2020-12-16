import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import LogoButton from '../LogoButton/LogoButton';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/main" className={styles.backButton}><i className="fas fa-arrow-left" /></Link>
      <LogoButton />
      <Navbar />
    </div>
  );
}

export default Header;
