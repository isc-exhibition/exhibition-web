import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './Navbar.module.scss';

function Navbar() {
  const [isNavbarMenuModalOpen, setIsNavbarMenuModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const toggleNavbarModal = () => {
    setIsNavbarMenuModalOpen(!isNavbarMenuModalOpen);
  };

  const toggleInfoModal = () => {
    if (isInfoModalOpen) {
      localStorage.setItem('ISCEXHIBITIONINFO_DISMISSED', 'true');
    }

    setIsInfoModalOpen(!isInfoModalOpen);
    setIsNavbarMenuModalOpen(false);
  };

  const isOnCredit = useRouteMatch('/credit')?.path === '/credit';
  const navbarButtonColor = isOnCredit ? 'black' : 'white';

  const isNoticeDismissed = localStorage.getItem('ISCEXHIBITIONINFO_DISMISSED') === 'true';

  const menuList = [
    { name: '이벤트', path: '/event' },
    { name: '크레딧', path: '/credit' },
  ];

  useEffect(() => {
    Modal.setAppElement('body');

    if (!isNoticeDismissed) {
      setIsInfoModalOpen(true);
    }
  });

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className={styles.navbarButton} style={{ color: navbarButtonColor }} type="button" onClick={toggleNavbarModal}><i className="fas fa-bars" /></button>
      <Modal
        isOpen={isNavbarMenuModalOpen}
        onRequestClose={toggleNavbarModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        shouldFocusAfterRender={false}
      >
        <div className={styles.navbarMenu}>
          <h2>MENU</h2>
          <button className={styles.infoMenuButton} type="button" onClick={toggleInfoModal}>과제전 소개 </button>
          {
            menuList.map((menu) => (
              <Link to={menu.path} onClick={toggleNavbarModal}>{menu.name}</Link>
            ))
          }
        </div>
      </Modal>
      <div className={styles.navbarMenuPC}>
        <button className={styles.infoMenuButton} type="button" onClick={toggleInfoModal}>과제전 소개</button>
        {
            menuList.map((menu) => (
              <Link to={menu.path}>{menu.name}</Link>
            ))
          }
      </div>
      <Modal
        isOpen={isInfoModalOpen}
        onRequestClose={toggleInfoModal}
        className={styles.infoModal}
        overlayClassName={styles.infoOverlay}
        shouldFocusAfterRender={false}
      >
        <p className={styles.infoTitle}>
          2020-2 정보문화학 과제전
          <br />
          과제전 제과에 오신 것을 환영합니다!
        </p>
        <div className={styles.infoContents}>
          <p>첫째, 메인화면에서 요리사를 누르면 정보문화학과에 관한 각종 정보와 FAQ 확인이 가능합니다.</p>
          <p>둘째, 메인화면에서 빵을 누르면 각 과목으로 이동하여 과제를 감상할 수 있습니다.</p>
          <p>셋째, 화면 중앙 상단에 있는 간판을 누르면 메인화면으로 돌아올 수 있습니다.</p>
        </div>
        <p className={styles.infoEvent}>
          보물찾기 이벤트도 숨어있으니,
          <br />
          곳곳에 숨겨져 있는 쪽지를 찾아보세요!
        </p>
        <button className={styles.infoModalButton} type="button" onClick={toggleInfoModal}>확인</button>
        <a href="https://www.instagram.com/isc_exhibition_2020/?hl=ko">과제전 방명록 쓰러 가기(인스타그램)</a>
      </Modal>
    </>
  );
}

export default Navbar;
