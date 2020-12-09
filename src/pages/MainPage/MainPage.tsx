import React from 'react';
import styles from './MainPage.module.scss';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import LogoButton from '../../components/LogoButton/LogoButton';
import SubjectList from '../../components/SubjectList/SubjectList';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

function MainPage() {
  return (
    <>
      <BackgroundImage />
      <div className={styles.mainPageContainer}>
        <LogoButton />
        <InfoNpc />
        <SubjectList />
      </div>
    </>
  );
}

export default MainPage;
