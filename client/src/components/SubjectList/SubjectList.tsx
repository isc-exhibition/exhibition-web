import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SubjectList.module.scss';
import subjectListOnFallSemester from '../../utils/constants';

function SubjectList() {
  return (
    <div className={styles.subjectListWrapper}>
      <div className={styles.subjectList}>
        {
          subjectListOnFallSemester.map((subject) => (
            <Link to={`/subjectpage/${subject.id}`}>
              <div className={styles.subjectContainer}>
                <div className={styles.subjectImage} style={{ backgroundImage: `url(${subject.image})` }} />
                <p className={styles.subjectName}>{subject.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default SubjectList;
