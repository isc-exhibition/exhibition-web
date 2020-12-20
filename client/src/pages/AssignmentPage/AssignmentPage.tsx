import React, { useEffect, useState } from 'react';
import { match, useHistory } from 'react-router-dom';
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

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const [assignmentResponse, setAssignmentResponse] = useState<any>(null);

  // eslint-disable-next-line no-shadow
  const { match } = props;
  const assignmentId = match.params.id;

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
      {isDesktop
        ? <div className={styles.desktopMainPageContainer} style={{ backgroundImage: `url(${DesktopBackgroundImage})` }} />
        : <BackgroundImage backgroundImageUrl={subjectBackgroundImage} />}
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
          {isDesktop && (
            <div className={styles.buttonContainer}>
              {assignmentResponse?.link
       && <a className={styles.toAssignment} href={assignmentResponse?.link}>과제 보러가기</a> }
              <button className={styles.toAssignment} type="button" onClick={goBack}>다른 과제 보러가기</button>
            </div>
          ) }
          { (isDesktop && assignmentResponse?.link)
           && <a className={styles.toAssignment} href={assignmentResponse?.link}>과제 보러가기</a> }
        </div>
      </div>
    </>
  );
}

export default AssignmentPage;
