import React from 'react';
import styles from './InfoNpc.module.scss';
import infoNpc from '../../assets/infonpc.png';

function InfoNpc() {
  return <img className={styles.infoNpc} src={infoNpc} alt="" />;
}

export default InfoNpc;
