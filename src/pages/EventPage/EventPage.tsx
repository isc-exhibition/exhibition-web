import React from 'react';
import EventBackground from './assets/EventBackground.png';
import styles from './EventPage.module.scss';

function EventPage() {
  return (
    <div className={styles.BackgoundContainer}>
      <img src={EventBackground} alt="EventBackgroud" className={styles.BackgroundImage} />
    </div>
  );
}

export default EventPage;
