import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import LogoButton from '../LogoButton/LogoButton';

function Header() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const isOnIntro = useRouteMatch('/intro')?.path === '/intro';
  const isOnMain = useRouteMatch('/main')?.path === '/main';
  const isOnCredit = useRouteMatch('/credit')?.path === '/credit';
  const backButtonColor = isOnCredit ? 'black' : 'white';

  return (
    <>
      {!isOnIntro
    && (
    <div className={styles.header}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      {!isOnMain
        && (
        <button className={styles.backButton} style={{ color: backButtonColor }} type="button" onClick={goBack}>
          <i className="fas fa-arrow-left" />
        </button>
        )}
      <LogoButton />
      <Navbar />
    </div>
    )}
    </>
  );
}

export default Header;
