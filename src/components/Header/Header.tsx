import React from 'react';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import LogoButton from '../LogoButton/LogoButton';

function Header() {
  return (
    <div className={styles.header}>
      <LogoButton />
      <Navbar />
    </div>
  );
}

export default Header;
