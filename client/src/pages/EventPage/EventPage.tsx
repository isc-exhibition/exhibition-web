import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import styles from './EventPage.module.scss';
import UseMediaQuery from '../../customHooks/UseMediaQuery';
import EventLetter from '../../assets/EventLetter.png';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import mobileBackgroundImage from '../../assets/background/mobile_background.png';
import desktopBackgroundImage from '../../assets/background/desktop_background.png';
import EventModal from '../../components/EventModal/EventModal';

export interface EventResult {
  isRight: boolean;
  text: string;
}
interface EventResultData {
  getEventLetterAnswer: EventResult;
}

const GET_EVENT_LETTER_ANSWER = gql`
query ($letter: String!) {
  getEventLetterAnswer(letter: $letter) {
    isRight
    text
  }
}
`;

function EventPage() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(max-width: 800px)');
  const [answer, setAnswer] = useState('');
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  const [getEventLetterAnswer, { data, error, loading }] = useLazyQuery<EventResultData>(
    GET_EVENT_LETTER_ANSWER,
  );

  const eventButtonClicked = () => {
    getEventLetterAnswer({ variables: { letter: answer } });
    setIsAnswerModalOpen(true);
  };

  const closeModdal = () => {
    setIsAnswerModalOpen(!isAnswerModalOpen);
  };

  let event;
  if (isDeviceWidthWideAsDesktop) {
    event = (
      <div className={styles.EventPageContainer}>
        <div className={styles.TextContainer}>
          <p className={styles.EventTitle}>이벤트</p>
          <p className={styles.EventContent}>
            각 과목을 돌아다니면서
            {' '}
            <br />
            {' '}
            흩어져 있는 글자 쪽지들을 모아
            {' '}
            <br />
            <span className={styles.EventFiveLetter}>다섯 글자 회문</span>
            을 만들어보세요!
            <p />
            {' '}
            <br />
            완성된 회문은 당신에게 행운을
            {' '}
            <br />
            가져다 줄 것입니다.
          </p>
        </div>
        <img src={EventLetter} alt="Letter" className={styles.EventLetter} />
        <div className={styles.EventBoard}>
          <p className={styles.BoardTitle}>회문입력</p>
          <input type="text" name="EventAnswer" placeholder="Hint: _ _ _ _ _(5글자)" onChange={(e) => setAnswer(e.target.value)} />
          <button className={styles.EventButton} name="EventButton" type="button" onClick={eventButtonClicked}>제출하기</button>
        </div>
      </div>

    );
  } else {
    event = (
      <div className={styles.EventPageContainer}>
        <div>
          <div className={styles.DeskTopBoard}>
            <img src={EventLetter} alt="Letter" className={styles.EventLetter} />
            <div className={styles.DeskTopTextContainer}>
              <p className={styles.DeskTopText}>
                각 과목을 돌아다니면서
                <br />
                흩어져있는 글자 쪽지들을 모아
                <br />
                <span className={styles.DeskTopFiveLetter}>다섯 글자 회문</span>
                을 만들어 보세요!
              </p>

              <p className={styles.DeskTopText2}>완성된 회문은 당신에게 행운을 가져다 줄 것입니다.</p>
            </div>
            <div className={styles.DeskTopInputContainer}>
              <p className={styles.InputTitle}>회문 입력</p>
              <div className={styles.DeskTopInput}>
                <input type="text" name="EventAnswer" placeholder="Hint: _ _ _ _ _(5글자)" onChange={(e) => setAnswer(e.target.value)} />
                <button className={styles.DeskTopEventButton} name="DeskTopEventButton" type="button" onClick={eventButtonClicked}>제출하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {!isDeviceWidthWideAsDesktop
        ? <div className={styles.desktopMainPageContainer} style={{ backgroundImage: `url(${desktopBackgroundImage})` }} />
        : <BackgroundImage backgroundImageUrl={mobileBackgroundImage} />}
      {event}
      {(isAnswerModalOpen
       && !loading && !error) && (
       <EventModal
         closeModal={closeModdal}
         eventAnswer={data?.getEventLetterAnswer}
       />
      )}
    </>
  );
}
export default EventPage;
