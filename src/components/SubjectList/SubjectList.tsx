import React from 'react';
import styles from './SubjectList.module.scss';
import subjectListImage from '../../assets/subjectList.png';

function SubjectList() {
  return (
    <div className={styles.subjectListBorder}>
      <div>
        <img className={styles.subjectListImage} src={subjectListImage} alt="" />
      </div>
      <div className={styles.subjectList}>
        <div className={styles.subjectListColumn}>
          <h1>Subject</h1>
          <h1>Subject</h1>
          <h1>Subject</h1>
          <h1>Subject</h1>
        </div>
        <div className={styles.subjectListColumn}>
          <h1>Subject</h1>
          <h1>Subject</h1>
          <h1>Subject</h1>
          <h1>Subject</h1>
        </div>
      </div>
    </div>
  );
}

export default SubjectList;
