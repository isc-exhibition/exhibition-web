import React from 'react';
import Modal from 'react-modal';
import { Letter } from '../EventLetter/letter';
import styles from './EventModal.module.scss';

interface Props {
    closeModal: () => void;
    letter: Letter;
}

function EventModal(props: Props) {
  const { closeModal, letter } = props;

  const setDismissedLetter = () => {
    localStorage.setItem(`ISSHOWNEVENTLETTER${letter.index}`, 'true');
  };

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
      <p>당신이 찾은 글자는...</p>

      <h1>{letter.text}</h1>

      <button className={styles.infoModalButton} type="button" onClick={onCloseModal}>확인</button>
    </Modal>
  );
}

export default EventModal;
