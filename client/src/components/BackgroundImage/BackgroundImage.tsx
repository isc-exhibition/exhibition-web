import React from 'react';
import styles from './BackgroundImage.module.scss';

interface Props {
  backgroundImageUrl: string;
}

function BackgroundImage(props: Props) {
  const { backgroundImageUrl } = props;
  return <div className={styles.background} style={{ backgroundImage: `url(${backgroundImageUrl})` }} />;
}

export default BackgroundImage;
