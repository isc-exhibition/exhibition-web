import React from 'react';
import styles from './SubjectPage.module.scss';
import subjectBackgroundImage from './mobile_subject_background.png';
import AssignmentList from '../../components/AssignmentList/AssignmentList';

const mockupSubject = {
  shortName: '유저는 저유',
  name: '사용자 중심 디자인',
  professor: '홍화정 교수님',
  introduction: `멋진 프로젝트를 기획했는데, 사용자에게 불편하거나 혹은 사용할 사람조차 없다면 말짱 도루묵이겠죠? 

  지금 이 순간 사람들이 필요로 하는 것을 철저히 조사하고 분석하는 과정부터, 그에 딱 맞는 프로젝트를 기획하고 시험하는 과정까지.
  
  나 이런 거 필요했네...? 
  
  숨겨진 니즈를 찾아 뚝딱뚝딱 기획한 수강생들의 작품들을 만나보세요.`,

};

function SubjectPage() {
  const subject = mockupSubject;

  return (
    <div className={styles.subjectPage}>
      <div className={styles.subjectWrapper} style={{ backgroundImage: `url(${subjectBackgroundImage})` }}>
        <h4 className={styles.shortName}>
          &quot;
          {subject.shortName}
          &quot;
        </h4>
        <h2 className={styles.name}>{subject.name}</h2>
        <h5 className={styles.professor}>{subject.professor}</h5>
        <p className={styles.introduction}>{subject.introduction}</p>
      </div>
      <div className={styles.assignmentListWrapper}>
        <AssignmentList />
      </div>
    </div>
  );
}

export default SubjectPage;
