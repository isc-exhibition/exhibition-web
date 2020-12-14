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
    name: string;
    image: string;
}

const subjectListOnFallSemester: SubjectListOnFallSemester[] = [
  { name: digitalVideo2, image: digitalVideo2Image },
  { name: futureNews2, image: futureNews2Image },
  { name: ICT101, image: ICT101Image },
  { name: interactiveStory, image: interactiveStoryImage },
  { name: interactiveMedia, image: interactiveMediaImage },
  { name: personalProject, image: personalProjectImage },
  { name: soundInteraction, image: soundInteractionImage },
  { name: UCD, image: UCDImage },
];

export default subjectListOnFallSemester;
