import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AssignmentList.module.scss';
import trayBackgroundImage from './subject_tray.png';
import desktopTrayImage from '../../assets/desktop_tray.png';
import MockupAssginmentImage from '../../assets/infonpc.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function AssignmentList() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const trayImage = isDeviceWidthWideAsDesktop ? `url(${desktopTrayImage}` : `url(${trayBackgroundImage})`;

  const mockupAssignmentList = [
    { name: '과제1', id: '1', previewImageUrl: MockupAssginmentImage },
    { name: '과제1', id: '1', previewImageUrl: MockupAssginmentImage },
    { name: '과제1', id: '1', previewImageUrl: MockupAssginmentImage },
    { name: '과제1', id: '1', previewImageUrl: MockupAssginmentImage },
    { name: '과제1', id: '1', previewImageUrl: MockupAssginmentImage },
    { name: '과제1', id: '1', previewImageUrl: MockupAssginmentImage },
  ];

  return (
    <div
      className={styles.assignmnetList}
      style={{ backgroundImage: trayImage }}
    >
      <div className={styles.assignmentWrapper} style={{ padding: '30px' }}>
        {mockupAssignmentList.map((assignment) => (
          <Link to={`/assignment/${assignment.id}`}>
            <div className={styles.assignment} style={{ backgroundImage: `url(${assignment.previewImageUrl})` }} />
          </Link>
        ))}
      </div>
    </div>

  );
}

export default AssignmentList;
