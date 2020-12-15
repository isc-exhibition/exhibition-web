import React from 'react';
import styles from './MainPage.module.scss';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import SubjectList from '../../components/SubjectList/SubjectList';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import mobileMainBackgroundImage from '../../assets/background/mobile_background.png';
import desktopMainBackgroundImage from '../../assets/background/desktop_background.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';
import Header from '../../components/Header/Header';

function MainPage() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const backgroundImageUrl = isDeviceWidthWideAsDesktop
    ? desktopMainBackgroundImage : mobileMainBackgroundImage;

  return (
    <>
      <BackgroundImage backgroundImageUrl={backgroundImageUrl} />
      <Header />
      <div className={styles.mainPageContainer}>
        <InfoNpc />
        <SubjectList />
      </div>

    </>
  );
}

export default MainPage;
