import React from 'react';
import styles from './AssignmentList.module.scss';
import trayBackgroundImage from './subject_tray.png';

function AssignmentList() {
  return (
    <div className={styles.assignmnetList} style={{ backgroundImage: `url(${trayBackgroundImage})` }} />
  );
}

export default AssignmentList;
