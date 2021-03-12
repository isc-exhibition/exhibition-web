import React, { CSSProperties, useEffect, useState } from 'react';
import { match } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styles from './SubjectPage.module.scss';
import AssignmentList from '../../components/AssignmentList/AssignmentList';
import UseMediaQuery from '../../customHooks/UseMediaQuery';
import subjectListOnFallSemester from '../../utils/constants';

interface Props {
  match: match<any>;
}

export interface AssignmentListInterface {
  _id: string;
  // eslint-disable-next-line camelcase
  image_link: string;
}

interface AssignmentListData {
  assignmentList: AssignmentListInterface[];
}

const ASSIGNMENT_LIST = gql`
  query ($subjectId: Float) {
    assignmentList(assignmentListInput: {
      subject_id: $subjectId
    }) {
      _id
      image_link
    }
  }
`;

function SubjectPage(props: Props) {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  // eslint-disable-next-line no-shadow
  const { match } = props;
  const subjectId = Number(match.params.id);

  const { data, error, loading } = useQuery<AssignmentListData>(
    ASSIGNMENT_LIST,
    { variables: { subjectId } },
  );

  const subjectDescription = subjectListOnFallSemester.find((sub) => sub.id
  === subjectId)?.description;

  const subjectImage = subjectListOnFallSemester.find((sub) => sub.id
  === subjectId)?.image;

  const [isHiddenScrollUpText, setHiddenScrollUpText] = useState(false);

  const classImage = isDeviceWidthWideAsDesktop ? (
    <div className={styles.classImage}>
      <img src={subjectImage} alt="img" />
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
    addScrollListenr();
    return () => {
      removeScrollListenr();
    };
  }, []);

  const assignmentTrayStyle: CSSProperties = {
    transition: 'all 0.5s ease',
    bottom: `calc(${assignmentTrayBottom}`,
    position: 'absolute',
    width: '100vw',
    paddingBottom: '32px',
  };

  let scrollMessage = null;

  if (!loading && !error && data) {
    scrollMessage = isDeviceWidthWideAsDesktop ? (
      <div style={assignmentTrayStyle}>
        {!isHiddenScrollUpText && <h2 className={styles.scrollUpText}>Scroll Down!</h2> }
        <AssignmentList assignmentList={data.assignmentList} />
      </div>
    ) : (
      <div style={assignmentTrayStyle}>
        {!isHiddenScrollUpText && <h2 className={styles.scrollUpText}>Scroll Up!</h2> }
        <AssignmentList assignmentList={data.assignmentList} />
      </div>
    );
  }

  return (
    <div className={styles.subjectPage}>
      <div className={styles.subjectWrapper}>
        <div className={styles.textContainer}>
          <h4 className={styles.shortName}>
            &quot;
            {subjectDescription?.shortName}
            &quot;
          </h4>
          {classImage}
          <h5 className={styles.professor}>{subjectDescription?.professor}</h5>
          <p className={styles.introduction}>{subjectDescription?.introduction}</p>
        </div>
      </div>
      {scrollMessage}
    </div>
  );
}

export default SubjectPage;
