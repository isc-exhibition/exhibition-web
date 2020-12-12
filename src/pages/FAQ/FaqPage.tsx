import React from 'react';
import styles from './FaqPage.module.scss';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import LogoButton from '../../components/LogoButton/LogoButton';
import backgroundImage from '../../assets/background/mobile_background.png';

function FaqPage() {
  return (
    <>
      <BackgroundImage backgroundImageUrl={backgroundImage} />
      <div className={styles.FaqContainer}>
        <LogoButton />
        <div className={styles.FaqIndexContainer}>
          <div className={styles.IntroContainer}>
            <p className={styles.Intro}>문항을 터치하여 내용을 확인하세요</p>
          </div>
          <div className={styles.FaqIndexBox}>
            <h2 className={styles.FaqTitle}>1) 과제전 소개</h2>
            <p className={styles.FaqText}>
              1. 과제전이란 무엇인가요?
              <br />
              2. 어떤 전시물을 볼 수 있나요?
              {' '}
              <br />
              3. 이번 과제전의 특별한 점은 없나요?
            </p>
          </div>
          <div className={styles.FaqIndexBox}>
            <h2 className={styles.FaqTitle}>2) 연합전공 정보문화학 소개</h2>
            <p className={styles.FaqText}>1. 정보문화학에서는 무엇을 배우나요?</p>
            <p className={styles.IndentText}>1.1 영상제작만 or 코딩만 하는 건가요?</p>
            <p className={styles.DoubleIndentText}>(한 분야만 팔 수 있나요?)</p>
            <p className={styles.FaqText}>2. 졸업 후 진로는 어떻게 되나요?</p>
          </div>
          <div className={styles.FaqIndexBoxLast}>
            <h2 className={styles.FaqTitle}>3) 정보문화학 진입 관련 질문</h2>
            <p className={styles.FaqText}>
              1. 진입 전에 전공수업 많이 들어야 하나요?
              <br />
              2.코딩을 전혀 모르는데 진입해도 괜찮을까요?
            </p>
            <p className={styles.IndentText}>2-1. 코딩 독학 팁을 주실 수 있나요?</p>
            <p className={styles.FaqText}>
              3. 포토폴리오가 필요한가요?
              <br />
              4. 면접 준비는 어떻게 해야 하나요?
              <br />
              5. 진입을 늦게 해도 괜찮을까요?
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
export default FaqPage;
