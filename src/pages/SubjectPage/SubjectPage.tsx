import React, { CSSProperties, useEffect, useState } from 'react';
import styles from './SubjectPage.module.scss';
import AssignmentList from '../../components/AssignmentList/AssignmentList';
import tempImg from '../../assets/mobile_subject/UCD_bread.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

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
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const subject = mockupSubject;

  const [isHiddenScrollUpText, setHiddenScrollUpText] = useState(false);

  const isClassImage = isDeviceWidthWideAsDesktop ? (
    <div className={styles.classImage}>
      <img src={tempImg} alt="img" />
      <h2 className={styles.name}>{subject.name}</h2>
    </div>
  ) : <h2 className={styles.name}>{subject.name}</h2>;

  const assignmentTrayBottom = '-496px';

  const addScrollListenr = () => {
    window.addEventListener('scroll', () => {
      setHiddenScrollUpText(window.scrollY >= 120);
    });
  };

  const removeScrollListenr = () => {
    window.removeEventListener('scroll', () => {
      setHiddenScrollUpText(window.scrollY >= 120);
    });
  };

  useEffect(() => {
    addScrollListenr();
    return removeScrollListenr;
  });

  const assignmentTrayStyle: CSSProperties = {
    transition: 'all 0.5s ease',
    bottom: `calc(${assignmentTrayBottom}`,
    position: 'absolute',
    width: '100vw',
    paddingBottom: '32px',
  };

  return (
    <div className={styles.subjectPage}>
      <div className={styles.subjectWrapper}>
        <div className={styles.textContainer}>
          <h4 className={styles.shortName}>
            &quot;
            {subject.shortName}
            &quot;
          </h4>
          {isClassImage}
          <h5 className={styles.professor}>{subject.professor}</h5>
          <p className={styles.introduction}>{subject.introduction}</p>
        </div>
      </div>
      <div style={assignmentTrayStyle}>
        {!isHiddenScrollUpText && <h2 className={styles.scrollUpText}>Scroll Down!</h2> }
        <AssignmentList />
      </div>
    </div>
  );
}

export default SubjectPage;
