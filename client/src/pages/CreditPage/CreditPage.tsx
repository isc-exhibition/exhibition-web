import React from 'react';
import styles from './CreditPage.module.scss';
import creditMobileBackgroundImage from '../../assets/background/credit_background.png';
import creditDesktopBackgorundImage from '../../assets/background/desktop_credit_background.png';
import creditMobileImage from '../../assets/credit.png';
import creidtDesktopImage from '../../assets/desktop_credit.png';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

function CreditPage() {
  const isDeviceWidthWideAsDesktop = UseMediaQuery('(min-width: 800px)');

  const creditBackgroundImage = isDeviceWidthWideAsDesktop
    ? creditDesktopBackgorundImage : creditMobileBackgroundImage;

  const creditImage = isDeviceWidthWideAsDesktop
    ? creidtDesktopImage : creditMobileImage;

  return (
    <>
      <BackgroundImage backgroundImageUrl={creditBackgroundImage} />
      <div className={styles.creditImage}><img src={creditImage} alt="" /></div>

    </>
  );
}

export default CreditPage;
