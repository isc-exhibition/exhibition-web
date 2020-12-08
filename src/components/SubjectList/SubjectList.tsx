import React from 'react';
import styles from './SubjectList.module.scss';
import subjectList from '../../assets/subjectList.png';

function SubjectList() {
  return (
    <img className={styles.subjectList} src={subjectList} alt="" />
  );
}

export default SubjectList;
