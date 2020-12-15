import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AssignmentList.module.scss';
import trayBackgroundImage from './subject_tray.png';

function AssignmentList() {
  const mockupAssignmentList = [
    { name: '과제1', id: '1' },
    { name: '과제1', id: '1' },
    { name: '과제1', id: '1' },
    { name: '과제1', id: '1' },
    { name: '과제1', id: '1' },
    { name: '과제1', id: '1' },
  ];

  return (
    <div
      className={styles.assignmnetList}
      style={{ backgroundImage: `url(${trayBackgroundImage})` }}
    >
      <div className={styles.assignmentWrapper} style={{ padding: '30px' }}>
        {mockupAssignmentList.map((assignment) => (
          <Link to={`/assignment/${assignment.id}`}>
            <div className={styles.assignment} />
          </Link>
        ))}
      </div>
    </div>

  );
}

export default AssignmentList;
