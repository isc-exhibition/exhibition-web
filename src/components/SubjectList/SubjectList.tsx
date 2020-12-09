import React from 'react';
import styles from './SubjectList.module.scss';
import subjectListImage from '../../assets/subjectList.png';

function SubjectList() {
  return (
    <div className={styles.subjectList} style={{ backgroundImage: `url(${subjectListImage})` }}>
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
  );
}

export default SubjectList;
