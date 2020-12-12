import React from 'react';
import styles from './SubjectList.module.scss';
import subjectListImage from '../../assets/subjectList.png';

function SubjectList() {
  return (
    <div className={styles.subjectListWrapper} style={{ backgroundImage: `url(${subjectListImage})` }}>
      <div className={styles.subjectList}>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
      </div>
    </div>
  );
}

export default SubjectList;
