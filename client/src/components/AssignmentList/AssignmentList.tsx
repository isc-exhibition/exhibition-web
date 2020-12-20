/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AssignmentList.module.scss';
import trayBackgroundImage from './subject_tray.png';
import desktopTrayImage from '../../assets/desktop_tray.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';
import EventLetter from '../EventLetter/EventLetter';
import noImage from '../../assets/noimage.png';

interface Props {
  subject: any;
  subjectId: number;
}

function AssignmentList(props: Props) {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const { subject, subjectId } = props;
  const assignments = subject?.data?.assignment;

  // TODO: 나중에 서버의 Pagination으로 처리해야 합니다
  const hasPagination = assignments?.length > 6;
  const hasThirdPage = assignments?.length > 12;

  const firstPageAssingments = hasPagination ? assignments.slice(0, 6) : assignments;
  const secondPageAssingments = hasPagination
    ? assignments.slice(firstPageAssingments.length, 12) : null;
  const thirdPageAssignments = hasThirdPage
    ? assignments.slice(firstPageAssingments.length + secondPageAssingments.length) : null;

  // eslint-disable-next-line no-nested-ternary
  const assignmentsInCurrentPage = currentPageIndex === 0
    ? firstPageAssingments : currentPageIndex === 1 ? secondPageAssingments : thirdPageAssignments;

  const setNextPage = () => {
    let nextPageIndex;
    if (hasThirdPage) {
      // eslint-disable-next-line no-nested-ternary
      nextPageIndex = currentPageIndex === 0 ? 1 : currentPageIndex === 1 ? 2 : 0;
    } else {
      nextPageIndex = currentPageIndex === 0 ? 1 : 0;
    }
    setCurrentPageIndex(nextPageIndex);
  };

  const setPrevPage = () => {
    let nextPageIndex;
    if (hasThirdPage) {
      // eslint-disable-next-line no-nested-ternary
      nextPageIndex = currentPageIndex === 2 ? 1 : currentPageIndex === 1 ? 0 : 2;
    } else {
      nextPageIndex = currentPageIndex === 1 ? 0 : 1;
    }
    setCurrentPageIndex(nextPageIndex);
  };

  const trayImage = isDeviceWidthWideAsDesktop ? `url(${desktopTrayImage}` : `url(${trayBackgroundImage})`;

  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
    <div
      className={styles.assignmnetList}
      style={{ backgroundImage: trayImage }}
    >
      {hasPagination
        && (
        <div className={styles.arrowButtons}>
          <button type="button" onClick={setPrevPage}><i className="fas fa-arrow-left 3x" /></button>
          <button type="button" onClick={setNextPage}><i className="fas fa-arrow-right 3x" /></button>
        </div>
        )}
      <div className={styles.assignmentWrapper}>
        {/* 1~5 번의 과목에 이벤트 쪽지 넣기 */}
        {subjectId < 6 && <EventLetter positionBottom={`${30 * subjectId}px`} positionRight={`${40 * subjectId}px`} letterIndex={subjectId} /> }
        { hasPagination
          ? assignmentsInCurrentPage?.map((assignment: any) => (
            <Link to={`/assignment/${assignment._id}`}>
              <div className={styles.assignment} style={{ backgroundImage: `url(${assignment.image_link || noImage})` }} />
            </Link>
          ))
          : firstPageAssingments?.map((assignment: any) => (
            <Link to={`/assignment/${assignment._id}`}>
              <div className={styles.assignment} style={{ backgroundImage: `url(${assignment.image_link})` }} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default AssignmentList;
