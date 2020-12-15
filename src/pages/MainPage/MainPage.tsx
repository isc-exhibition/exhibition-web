import React from 'react';
import styles from './MainPage.module.scss';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import LogoButton from '../../components/LogoButton/LogoButton';
import SubjectList from '../../components/SubjectList/SubjectList';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Navbar from '../../components/Navbar/Navbar';
import mobileMainBackgroundImage from '../../assets/background/mobile_background.png';
import desktopMainBackgroundImage from '../../assets/background/desktop_background.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function MainPage() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const backgroundImageUrl = isDeviceWidthWideAsDesktop
    ? desktopMainBackgroundImage : mobileMainBackgroundImage;

  return (
    <>
      <BackgroundImage backgroundImageUrl={backgroundImageUrl} />
      <div className={styles.mainPageContainer}>
        <LogoButton />
        <InfoNpc />
        <SubjectList />
      </div>
      <Navbar />
    </>
  );
}

export default MainPage;
