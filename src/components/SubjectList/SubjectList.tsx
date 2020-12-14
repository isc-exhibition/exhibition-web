import React from 'react';
import styles from './SubjectList.module.scss';
import subjectListOnFallSemester from '../../utils/constants';

function SubjectList() {
  return (
    <div className={styles.subjectListWrapper}>
      <div className={styles.subjectList}>
        {
          subjectListOnFallSemester.map((subject) => (
            <div className={styles.subjectContainer}>
              <img src={subject.image} alt="" />
              <div className={styles.subjectName}>{subject.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SubjectList;
