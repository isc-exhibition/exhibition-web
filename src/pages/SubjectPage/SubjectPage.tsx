import React, { CSSProperties, useEffect, useState } from 'react';
import axios from 'axios';
import { match } from 'react-router-dom';
import styles from './SubjectPage.module.scss';
import AssignmentList from '../../components/AssignmentList/AssignmentList';
import tempImg from '../../assets/subject/UCD_bread.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';
import subjectListOnFallSemester from '../../utils/constants';

interface Props {
  match: match<any>;
}

function SubjectPage(props: Props) {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  // eslint-disable-next-line no-shadow
  const { match } = props;
  const subjectId = Number(match.params.id);

  const subjectDescription = subjectListOnFallSemester.find((sub) => sub.id
  === subjectId)?.description;

  const [isHiddenScrollUpText, setHiddenScrollUpText] = useState(false);

  const isClassImage = isDeviceWidthWideAsDesktop ? (
    <div className={styles.classImage}>
      <img src={tempImg} alt="img" />
      <h2 className={styles.name}>{subjectDescription?.name}</h2>
    </div>
  ) : <h2 className={styles.name}>{subjectDescription?.name}</h2>;

  const assignmentTrayBottom = '-496px';

  const addScrollListenr = () => {
    window.addEventListener('scroll', () => {
      setHiddenScrollUpText(window.scrollY >= 120);
    });
  };

  const removeScrollListenr = () => {
    window.removeEventListener('scroll', () => {
      setHiddenScrollUpText(window.scrollY >= 120);
    });
  };

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    axios.get(`/api/v1/subject/${subjectId}`, { cancelToken: source.token })
      .then((res) => console.log(res));

    addScrollListenr();
    return () => {
      source.cancel();
      removeScrollListenr();
    };
  });

  const assignmentTrayStyle: CSSProperties = {
    transition: 'all 0.5s ease',
    bottom: `calc(${assignmentTrayBottom}`,
    position: 'absolute',
    width: '100vw',
    paddingBottom: '32px',
  };

  const scrollMessage = isDeviceWidthWideAsDesktop ? (
    <div style={assignmentTrayStyle}>
      {!isHiddenScrollUpText && <h2 className={styles.scrollUpText}>Scroll Down!</h2> }
      <AssignmentList />
    </div>
  ) : (
    <div style={assignmentTrayStyle}>
      {!isHiddenScrollUpText && <h2 className={styles.scrollUpText}>Scroll Up!</h2> }
      <AssignmentList />
    </div>
  );

  return (
    <div className={styles.subjectPage}>
      <div className={styles.subjectWrapper}>
        <div className={styles.textContainer}>
          <h4 className={styles.shortName}>
            &quot;
            {subjectDescription?.shortName}
            &quot;
          </h4>
          {isClassImage}
          <h5 className={styles.professor}>{subjectDescription?.professor}</h5>
          <p className={styles.introduction}>{subjectDescription?.introduction}</p>
        </div>
      </div>
      {scrollMessage}
    </div>
  );
}

export default SubjectPage;
