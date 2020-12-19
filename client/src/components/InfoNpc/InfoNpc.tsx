import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfoNpc.module.scss';
import infoNpc from '../../assets/infonpc.png';

function InfoNpc() {
  return <Link to="/faq"><img className={styles.infoNpc} src={infoNpc} alt="" /></Link>;
}

export default InfoNpc;
