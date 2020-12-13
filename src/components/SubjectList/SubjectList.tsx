import React from 'react';
import styles from './SubjectList.module.scss';

function SubjectList() {
  return (
    <div className={styles.subjectListWrapper}>
      <div className={styles.subjectList}>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        <h1>Subject</h1>
        {window.matchMedia('(min-width: 800px)').matches}
      </div>
    </div>
  );
}

export default SubjectList;
