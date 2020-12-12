import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './Navbar.module.scss';

function Navbar() {
  const [isNavbarMenuModalOpen, setIsNavbarMenuModalOpen] = useState(false);

  const toggleNavbarModal = () => {
    setIsNavbarMenuModalOpen(!isNavbarMenuModalOpen);
  };

  const menuList = [
    { name: '메인 페이지', path: '/main' },
    { name: '이벤트', path: '/main' },
    { name: '크레딧', path: '/main' },
  ];

  useEffect(() => {
    Modal.setAppElement('body');
  });

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className={styles.navbarButton} type="button" onClick={toggleNavbarModal}><i className="fas fa-bars" /></button>
      <Modal
        isOpen={isNavbarMenuModalOpen}
        onRequestClose={toggleNavbarModal}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
        shouldFocusAfterRender={false}
        closeTimeoutMS={2000}

      >
        <div className={styles.navbarMenu}>
          <h2>MENU</h2>
          <p>과제전 소개</p>
          {
            menuList.map((menu) => (
              <Link to={menu.path}>{menu.name}</Link>
            ))
          }
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
