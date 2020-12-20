/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Modal from 'react-modal';
import { EventAnswerResponseData } from '../../pages/EventPage/EventPage';
import { Letter } from '../EventLetter/letter';
import styles from './EventModal.module.scss';
import turtleImage from '../../assets/turtle.png';

interface Props {
    closeModal: () => void;
    letter?: Letter;
    eventAnswer?: EventAnswerResponseData;
}

function EventModal(props: Props) {
  const {
    closeModal, letter, eventAnswer,
  } = props;

  const setDismissedLetter = () => {
    localStorage.setItem(`ISSHOWNEVENTLETTER${letter?.index}`, 'true');
  };

  const mainTest = letter?.text || eventAnswer?.text;

  const onCloseModal = () => {
    setDismissedLetter();
    closeModal();
  };

  const turtleEventImage = () => (
    <div style={{ display: 'flex', alignItems: 'center', margin: '-16px 0 10px' }}>
      <p>그리고...?!</p>
      <a href="https://forms.gle/hUa7UPDJr9Fb6sGCA" target="_blank" rel="noreferrer">
        <img src={turtleImage} alt="거북이" width="110px" height="auto" />
      </a>
    </div>
  );
  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      className={styles.infoModal}
      overlayClassName={styles.infoOverlay}
      shouldFocusAfterRender={false}
    >
      {letter && <p>당신이 찾은 글자는...</p> }
      <h1>{mainTest}</h1>
      {letter?.index === 3 && turtleEventImage()}
      {eventAnswer?.isRight && (
      <>
        <p>맞히신 분을 위한 선물</p>
        <a href="https://forms.gle/xAynbuRhCGqUQAx7A" target="_blank" rel="noreferrer">보러가기</a>
      </>
      ) }
      <button className={styles.infoModalButton} type="button" onClick={onCloseModal}>
        확인
      </button>
    </Modal>
  );
}

export default EventModal;
