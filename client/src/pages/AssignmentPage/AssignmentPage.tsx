import React, { useEffect, useState } from 'react';
import { Link, match } from 'react-router-dom';
import axios from 'axios';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import styles from './AssignmentPage.module.scss';
import subjectBackgroundImage from '../../assets/mobile_subject_background.png';
import DesktopBackgroundImage from '../../assets/desktop_subject_background.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

interface Props {
  match: match<any>;
}

function AssignmentPage(props: Props) {
  const isDesktop = UseMediaQuery('(min-width: 800px)');

  const [assignmentResponse, setAssignmentResponse] = useState<any>(null);

  // eslint-disable-next-line no-shadow
  const { match } = props;
  const assignmentId = Number(match.params.id);

  const assginmentButton = isDesktop ? (
    <div className={styles.buttonContainer}>
      <a className={styles.toAssignment} href={assignmentResponse?.link}>과제 보러가기</a>
      <Link to="/subjectpage" className={styles.toOtherAssignment}><p>다른 과제 보러가기</p></Link>
    </div>
  ) : <a className={styles.toAssignment} href={assignmentResponse?.link}>과제 보러가기</a>;

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    axios.get(`/api/v1/assignment/${assignmentId}`, { cancelToken: source.token })
      .then((res) => {
        setAssignmentResponse(res.data.assignment);
      });

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <BackgroundImage backgroundImageUrl={isDesktop
        ? DesktopBackgroundImage : subjectBackgroundImage}
      />
      <div className={styles.assignmentWrapper}>
        <div className={styles.assignmentContainer}>
          <div className={styles.alignImageContainer}>
            <div className={styles.alignTextConatiner}>
              <h2 className={styles.name}>{assignmentResponse?.name}</h2>
              <h4 className={styles.concept}>{assignmentResponse?.concept}</h4>
              <div className={styles.whiteRectangle} />
              <h4 className={styles.teamname}>{assignmentResponse?.team}</h4>
            </div>
            <img className={styles.mainImage} src={assignmentResponse?.image_link} alt="" />
          </div>
          <h3 style={{
            margin: '40px 0 20px 0', paddingLeft: '50px', fontSize: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.9)',
          }}
          >
            과제 설명
          </h3>
          <p className={styles.description}>{assignmentResponse?.description}</p>
          {assginmentButton}
        </div>
      </div>
    </>
  );
}

export default AssignmentPage;