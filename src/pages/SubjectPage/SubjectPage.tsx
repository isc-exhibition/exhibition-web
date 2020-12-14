import React, { CSSProperties } from 'react';
import styles from './SubjectPage.module.scss';
import subjectBackgroundImage from './mobile_subject_background.png';
import AssignmentList from '../../components/AssignmentList/AssignmentList';
import UseMediaQuery from '../../customHooks/UseMediaQuery';

const mockupSubject = {
  shortName: '유저는 저유',
  name: '사용자 중심 디자인',
  professor: '홍화정 교수님',
  introduction: `멋진 프로젝트를 기획했는데, 사용자에게 불편하거나 혹은 사용할 사람조차 없다면 말짱 도루묵이겠죠? 

  지금 이 순간 사람들이 필요로 하는 것을 철저히 조사하고 분석하는 과정부터, 그에 딱 맞는 프로젝트를 기획하고 시험하는 과정까지.
  
  나 이런 거 필요했네...? 
  
  숨겨진 니즈를 찾아 뚝딱뚝딱 기획한 수강생들의 작품들을 만나보세요.`,

};

function SubjectPage() {
  const isDeviceHighHighAsIphone8Plus = UseMediaQuery('(min-height: 730px)');

  const subject = mockupSubject;
  // const trayDefaultTop = '88vh';

  // const onTraySwipeStart = ()

  // const onTraySwipeStart = (event: any) => {
  //   console.log('Start swiping...', event);
  // };

  // const onTraySwipeMove = (position: any, event: any) => {
  //   console.log(`Moved ${position.x} pixels horizontally`, event);
  //   console.log(`Moved ${position.y} pixels vertically`, event);
  // };

  // const onTraySwipeEnd = (event:any) => {
  //   console.log('End swiping...', event);
  // };

  // const [offsetTopByDragup, setOffsetTopByDragup] = useState(0);
  // const [isAssignmentListTrayDragUp, setAssignmentListTrayDragUp] = useState(false);
  // const [assignmentListTrayDragReset, setAssignmentListTrayDragReset] = useState(false);
  // const [trayOffsetJustBefore, setTrayOffsetJustBefore] = useState(0);
  // const assignmentListTray = useRef<HTMLDivElement>(null);

  // const handleSubjectListWrapperOnToucStart = (event: TouchEvent<HTMLDivElement>) => {
  //   setAssignmentListTrayDragReset(false);
  //   setTrayOffsetJustBefore(event.changedTouches[0].screenY);
  // };
  // const handleSubjectListWrapperOnTouchMove = (event: TouchEvent<HTMLDivElement>) => {
  //   const currentScreenY = event.changedTouches[0].screenY;
  //   const isDragginUp = currentScreenY <= trayOffsetJustBefore;
  //   // const isDragginDown = currentScreenY >= trayOffsetJustBefore;

  //   if (!isAssignmentListTrayDragUp) {
  //     if (assignmentListTray.current
  //     && !isAssignmentListTrayDragUp
  //     && isDragginUp
  //     && offsetTopByDragup <= 500
  //     ) {
  //       const offset = offsetTopByDragup + 1.8;
  //       setOffsetTopByDragup(offset);
  //       setTrayOffsetJustBefore(currentScreenY);
  //     }
  //     if (assignmentListTray.current
  //     && !isAssignmentListTrayDragUp
  //     && !isDragginUp
  //     && offsetTopByDragup >= 0
  //     ) {
  //       const offset = offsetTopByDragup - 1.8;
  //       setOffsetTopByDragup(offset);
  //       setTrayOffsetJustBefore(currentScreenY);
  //     }
  //   }
  //   // else if (assignmentListTray.current
  //   //   && isAssignmentListTrayDragUp
  //   //   && isDragginDown
  //   //   && offsetTopByDragup <= 0
  //   // ) {
  //   //   console.log(123123);
  //   //   const offset = offsetTopByDragup - 1.4;
  //   //   console.log(offset);
  //   //   setOffsetTopByDragup(offset);
  //   //   setTrayOffsetJustBefore(currentScreenY);
  //   // }
  // };

  // const handleSubjectListWrapperOnTouchEnd = () => {
  //   if (offsetTopByDragup > 50) {
  //     setOffsetTopByDragup(0);
  //     setAssignmentListTrayDragUp(true);
  //   } else {
  //     setAssignmentListTrayDragReset(true);
  //     setOffsetTopByDragup(0);
  //   }
  // };

  // const styleToDragUp: CSSProperties = {
  //   transition: 'all 0.5s ease',
  //   top: `calc(${topOnDragUp} - ${offsetTopByDragup}px)`,
  // };

  // const onDragging: CSSProperties = {
  //   top: `calc(${trayDefaultTop} - ${offsetTopByDragup}px)`,
  // };

  // const dragReset: CSSProperties = {
  //   transition: 'all 0.5s ease',
  //   top: trayDefaultTop,
  // };

  const topOnDragUp = isDeviceHighHighAsIphone8Plus ? '24vh' : '14vh';

  const styleOnDragUp: CSSProperties = {
    transition: 'all 0.5s ease',
    top: `calc(${topOnDragUp}`,
    position: 'absolute',
    width: '100vw',
  };

  const trayStyle = styleOnDragUp;

  return (
    <div className={styles.subjectPage}>
      <div className={styles.subjectWrapper} style={{ backgroundImage: `url(${subjectBackgroundImage})` }}>
        <h4 className={styles.shortName}>
          &quot;
          {subject.shortName}
          &quot;
        </h4>
        <h2 className={styles.name}>{subject.name}</h2>
        <h5 className={styles.professor}>{subject.professor}</h5>
        <p className={styles.introduction}>{subject.introduction}</p>
      </div>
      <div style={trayStyle}>
        <AssignmentList />
      </div>
    </div>
  );
}

export default SubjectPage;
