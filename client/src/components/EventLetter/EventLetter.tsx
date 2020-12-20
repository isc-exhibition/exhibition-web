import React, { CSSProperties, useState } from 'react';
import EventLetterImage from '../../assets/EventLetter.png';
import EventModal from '../EventModal/EventModal';
import { eventLetters, Letter } from './letter';

interface Props {
    letterIndex: number;
    positionRight: string;
    positionBottom: string;
}

function EventLetter(props: Props) {
  const { letterIndex, positionRight, positionBottom } = props;
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const eventLetter = eventLetters.find((letter: Letter) => letter.index === letterIndex % 5);

  const eventLetterStyle: CSSProperties = {
    transition: 'all 1s ease',
    position: 'absolute',
    height: 'auto',
    right: positionRight,
    bottom: positionBottom,
  };

  const isLetterShown = localStorage.getItem(`ISSHOWNEVENTLETTER${letterIndex}`);

  const isShowingLetter = !isLetterShown && isEventModalOpen;

  const onClickEventLetter = () => {
    setIsEventModalOpen(true);
  };

  const closeModal = () => {
    setIsEventModalOpen(false);
  };

  return (
    <>

      {isShowingLetter && (
      <EventModal
        closeModal={closeModal}
        letter={eventLetter || eventLetters[0]}
      />
      )}
      {!isLetterShown
      && (
      <button type="button" style={eventLetterStyle} onClick={onClickEventLetter}>
        <img src={EventLetterImage} alt="Event Letter" style={{ width: '180px' }} />
      </button>
      )}
    </>
  );
}

export default EventLetter;
