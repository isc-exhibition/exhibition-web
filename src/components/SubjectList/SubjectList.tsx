import React from 'react';
import styles from './SubjectList.module.scss';
import subject1 from '../../assets/mobile_subject/subject1.png';
import subject2 from '../../assets/mobile_subject/subject2.png';
import subject3 from '../../assets/mobile_subject/subject3.png';
import subject4 from '../../assets/mobile_subject/subject4.png';
import subject5 from '../../assets/mobile_subject/subject5.png';
import subject6 from '../../assets/mobile_subject/subject6.png';
import subject7 from '../../assets/mobile_subject/subject7.png';
import subject8 from '../../assets/mobile_subject/subject8.png';

function SubjectList() {
  return (
    <div className={styles.subjectListWrapper}>
      <div className={styles.subjectList}>
        <img src={subject1} alt="" />
        <img src={subject2} alt="" />
        <img src={subject3} alt="" />
        <img src={subject4} alt="" />
        <img src={subject5} alt="" />
        <img src={subject6} alt="" />
        <img src={subject7} alt="" />
        <img src={subject8} alt="" />
      </div>
    </div>
  );
}

export default SubjectList;
