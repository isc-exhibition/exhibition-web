import React from 'react';
import styles from './MainPage.module.scss';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import LogoButton from '../../components/LogoButton/LogoButton';
import SubjectList from '../../components/SubjectList/SubjectList';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

import backgroundImage from '../../assets/background/mobile_background.png';

function MainPage() {
  return (
    <>
      <BackgroundImage backgroundImageUrl={backgroundImage} />
      <div className={styles.mainPageContainer}>
        <LogoButton />
        <InfoNpc />
        <SubjectList />
      </div>
    </>
  );
}

export default MainPage;
