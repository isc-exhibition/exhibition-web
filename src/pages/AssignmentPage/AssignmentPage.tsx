import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import styles from './AssignmentPage.module.scss';
import subjectBackgroundImage from '../../assets/mobile_subject_background.png';
import DesktopBackgroundImage from '../../assets/desktop_subject_background.png';
import Infonpc from '../../assets/infonpc.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function AssignmentPage() {
  const isDesktop = UseMediaQuery('(min-width: 800px)');

  const assginmentButton = isDesktop ? (
    <div className={styles.buttonContainer}>
      <a className={styles.toAssignment} href="https://www.youtube.com/watch?v=NRTr_T8FuX8">과제 보러가기</a>
      <Link to="/subjectpage" className={styles.toOtherAssignment}><p>다른 과제 보러가기</p></Link>
    </div>
  ) : <a className={styles.toAssignment} href="https://www.youtube.com/watch?v=NRTr_T8FuX8">과제 보러가기</a>;

  const mockupAssignment = {
    name: '똑-톡',
    concept: '초딩 섭외력 2스푼, 새벽팀플 n스푼, ㅇㅇㅇㅇ n스푼',
    teamname: '화정초 2학년 3반',
    members: ['이경은', '류의정', '정수빈', '윤지민', '송지원'],
    imageUrl: Infonpc,
    description: `나 네가 궁금해! 친해져도 될까? 
    코로나 시대 초등학생을 위한 퀴즈형 
    우정 시작 웹서비스`,
    link: 'naver.com',
  };

  return (
    <>
      <BackgroundImage backgroundImageUrl={isDesktop
        ? DesktopBackgroundImage : subjectBackgroundImage}
      />
      <div className={styles.assignmentWrapper}>
        <div className={styles.assignmentContainer}>
          <div className={styles.alignImageContainer}>
            <div className={styles.alignTextConatiner}>
              <h2 className={styles.name}>{mockupAssignment.name}</h2>
              <h4 className={styles.concept}>{mockupAssignment.concept}</h4>
              <div className={styles.whiteRectangle} />
              <h4 className={styles.teamname}>{mockupAssignment.teamname}</h4>
              <h4 className={styles.members}>{mockupAssignment.members.map((member) => `${member},`)}</h4>
            </div>
            <img className={styles.mainImage} src={mockupAssignment.imageUrl} alt="" />
          </div>
          <h3 style={{
            marginBottom: '4px', paddingLeft: '50px', fontSize: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.9)',
          }}
          >
            과제 설명
          </h3>
          <p className={styles.description}>{mockupAssignment.description}</p>
          {assginmentButton}
        </div>
      </div>
    </>
  );
}

export default AssignmentPage;
