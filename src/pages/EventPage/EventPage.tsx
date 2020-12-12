import React from 'react';
import styles from './EventPage.module.scss';

function EventPage() {
  return (
    <div className={styles.BackgroundImage}>
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
      <div className={styles.EventBoard}>
        <p className={styles.BoardTitle}>회문입력</p>
        <input type="text" name="EventAnswer" placeholder="Hint: _ _ _ _ _(5글자)" />
        <button className={styles.EventButton} name="EventButton" type="button">제출하기</button>
      </div>
    </div>
  );
}

export default EventPage;
