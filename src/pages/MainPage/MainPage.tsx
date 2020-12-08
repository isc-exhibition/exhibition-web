import React from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import InfoNpc from '../../components/InfoNpc/InfoNpc';
import SubjectList from '../../components/SubjectList/SubjectList';

function MainPage() {
  return (
    <div>
      <BackgroundImage />
      <InfoNpc />
      <SubjectList />
    </div>
  );
}

export default MainPage;
