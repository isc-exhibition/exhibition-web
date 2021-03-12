import React from 'react';
import { match, useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import styles from './AssignmentPage.module.scss';
import subjectBackgroundImage from '../../assets/mobile_subject_background.png';
import DesktopBackgroundImage from '../../assets/desktop_subject_background.png';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

interface Props {
  match: match<any>;
}

interface Assignment {
    name: string;
    // eslint-disable-next-line camelcase
    image_link: string;
    description: string;
    team: string;
    link: string;
    concept: string;
}

interface AssignmentData {
  assignmentById: Assignment;
}

const ASSIGNMENT = gql`
  query ($id: String!) {
    assignmentById(
      assignmentByIdInput: { id: $id }
    ) {
      name
      image_link
      description
      team
      link
      concept
    }
  }
`;

function AssignmentPage(props: Props) {
  const isDesktop = UseMediaQuery('(min-width: 800px)');

  // eslint-disable-next-line no-shadow
  const { match } = props;
  const assignmentId = match.params.id;

  const { data, error, loading } = useQuery<AssignmentData>(
    ASSIGNMENT,
    { variables: { id: assignmentId } },
  );

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      {isDesktop
        ? <div className={styles.desktopMainPageContainer} style={{ backgroundImage: `url(${DesktopBackgroundImage})` }} />
        : <BackgroundImage backgroundImageUrl={subjectBackgroundImage} />}

      {(!error && !loading && data)
      && (
      <div className={styles.assignmentWrapper}>
        <div className={styles.assignmentContainer}>
          <div className={styles.alignImageContainer}>
            <div className={styles.alignTextConatiner}>
              <h2 className={styles.name}>{data.assignmentById.name}</h2>
              <h4 className={styles.concept}>{data.assignmentById.concept}</h4>
              <div className={styles.whiteRectangle} />
              <h4 className={styles.teamname}>{data.assignmentById.team}</h4>
            </div>
            <img className={styles.mainImage} src={data.assignmentById.image_link} alt="" />
          </div>
          <h3 style={{
            margin: '40px 0 20px 0', paddingLeft: '50px', fontSize: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.9)',
          }}
          >
            과제 설명
          </h3>
          <p className={styles.description}>{data.assignmentById.description}</p>
          {isDesktop && (
          <div className={styles.buttonContainer}>
            {data.assignmentById.link
       && <a className={styles.toAssignment} href={data.assignmentById.link} target="_blank" rel="noreferrer">과제 보러가기</a> }
            <button className={styles.toAssignment} type="button" onClick={goBack}>다른 과제 보러가기</button>
          </div>
          ) }
          { (!isDesktop && data.assignmentById.link)
           && <a className={styles.toAssignment} href={data.assignmentById.link} target="_blank" rel="noreferrer">과제 보러가기</a> }
        </div>
      </div>
      )}
    </>
  );
}

export default AssignmentPage;
