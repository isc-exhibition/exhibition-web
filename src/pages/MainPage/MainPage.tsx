import React from 'react';
import styles from './MainPage.module.scss';
import backgroundImage from '../../assets/background/mobile_background.png';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import LogoButton from '../../components/LogoButton/LogoButton';
import SubjectList from '../../components/SubjectList/SubjectList';

function MainPage() {
  return (
    <div className={styles.mainPageContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <LogoButton />
      <InfoNpc />
      <SubjectList />
    </div>
  );
}

export default MainPage;
