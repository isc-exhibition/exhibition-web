import React from 'react';
import styles from './MainPage.module.scss';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import SubjectList from '../../components/SubjectList/SubjectList';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import mobileMainBackgroundImage from '../../assets/background/mobile_background.png';
import desktopMainBackgroundImage from '../../assets/background/desktop_background.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function MainPage() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  return (
    <>
      {!isDeviceWidthWideAsDesktop ? (
        <>
          <BackgroundImage backgroundImageUrl={mobileMainBackgroundImage} />
          <div className={styles.mainPageContainer}>
            <InfoNpc />
            <SubjectList />
          </div>
        </>
      ) : (
        <div className={styles.desktopMainPageContainer} style={{ backgroundImage: `url(${desktopMainBackgroundImage})` }}>
          <InfoNpc />
          <SubjectList />
        </div>
      )}
    </>
  );
}

export default MainPage;
