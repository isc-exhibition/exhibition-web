import React from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import styles from './AssignmentPage.module.scss';
import subjectBackgroundImage from '../../assets/mobile_subject_background.png';
import Infonpc from '../../assets/infonpc.png';

function AssignmentPage() {
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
      <BackgroundImage backgroundImageUrl={subjectBackgroundImage} />
      <div className={styles.assignmentWrapper}>
        <h2 className={styles.name}>{mockupAssignment.name}</h2>
        <h4 className={styles.concept}>{mockupAssignment.concept}</h4>
        <div className={styles.whiteRectangle} />
        <h4 className={styles.teamname}>{mockupAssignment.teamname}</h4>
        <h4 className={styles.members}>{mockupAssignment.members.map((member) => `${member},`)}</h4>
        <img className={styles.mainImage} src={mockupAssignment.imageUrl} alt="" />
        <h3 style={{
          marginBottom: '4px', paddingLeft: '50px', fontSize: '1.375rem', fontWeight: 'bold', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.9)',
        }}
        >
          과제 설명
        </h3>
        <p className={styles.description}>{mockupAssignment.description}</p>
        <a href="https://www.youtube.com/watch?v=NRTr_T8FuX8">과제 보러가기</a>
      </div>
    </>
  );
}

export default AssignmentPage;
