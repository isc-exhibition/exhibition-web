import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AssignmentList.module.scss';
import trayBackgroundImage from './subject_tray.png';
import desktopTrayImage from '../../assets/desktop_tray.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

interface Props {
  subject: any;
}

function AssignmentList(props: Props) {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const { subject } = props;

  const trayImage = isDeviceWidthWideAsDesktop ? `url(${desktopTrayImage}` : `url(${trayBackgroundImage})`;

  return (
    <div
      className={styles.assignmnetList}
      style={{ backgroundImage: trayImage }}
    >
      <div className={styles.assignmentWrapper}>
        {subject?.data.assignment.map((assignment: any) => (
          <Link to={`/assignment/${assignment.assignment_id}`}>
            <div className={styles.assignment} style={{ backgroundImage: `url(${assignment.image_link})` }} />
          </Link>
        ))}
      </div>
    </div>

  );
}

export default AssignmentList;
