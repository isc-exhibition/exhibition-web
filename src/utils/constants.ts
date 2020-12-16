import digitalVideo2Image from '../assets/mobile_subject/DigitalVideo2_bread.png';
import futureNews2Image from '../assets/mobile_subject/FutureNews2_bread.png';
import ICT101Image from '../assets/mobile_subject/ICT101_bread.png';
import interactiveStoryImage from '../assets/mobile_subject/InteractiveStory_bread.png';
import interactiveMediaImage from '../assets/mobile_subject/InteractiveMedia_bread.png';
import personalProjectImage from '../assets/mobile_subject/PersonalProject_bread.png';
import soundInteractionImage from '../assets/mobile_subject/SoundInteraction_bread.png';
import UCDImage from '../assets/mobile_subject/UCD_bread.png';

const futureNews2 = '미래뉴스실습2';
const digitalVideo2 = '디지털영상실습2';
const ICT101 = '정보문화기술입문';
const interactiveStory = '인터랙티브 스토리텔링';
const interactiveMedia = '인터랙티브미디어';
const personalProject = '개인프로젝트';
const soundInteraction = '사운드인터랙션';
const UCD = '사용자중심디자인';

interface SubjectListOnFallSemester {
    id: number;
    name: string;
    image: string;
}

const subjectListOnFallSemester: SubjectListOnFallSemester[] = [
  { id: 1, name: UCD, image: UCDImage },
  { id: 2, name: soundInteraction, image: soundInteractionImage },
  { id: 3, name: ICT101, image: ICT101Image },
  { id: 4, name: futureNews2, image: futureNews2Image },
  { id: 5, name: interactiveMedia, image: interactiveMediaImage },
  { id: 6, name: digitalVideo2, image: digitalVideo2Image },
  { id: 7, name: interactiveStory, image: interactiveStoryImage },
  { id: 8, name: personalProject, image: personalProjectImage },
];

export default subjectListOnFallSemester;
