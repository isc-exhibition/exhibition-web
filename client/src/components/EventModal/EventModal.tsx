/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Modal from 'react-modal';
import { EventAnswerResponseData } from '../../pages/EventPage/EventPage';
import { Letter } from '../EventLetter/letter';
import styles from './EventModal.module.scss';

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

  const mainTest = letter || eventAnswer?.text;

  const onCloseModal = () => {
    setDismissedLetter();
    closeModal();
  };
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
      {eventAnswer?.isRight && (
      <>
        <p>맞추신 분을 위한 선물</p>
        <a href="https://forms.gle/xAynbuRhCGqUQAx7A">보러가기</a>
      </>
      ) }
      <button className={styles.infoModalButton} type="button" onClick={onCloseModal}>
        확인
      </button>
    </Modal>
  );
}

export default EventModal;
