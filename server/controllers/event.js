const getEventLetterAnswer = async (req, res, next) => {
    // const { letter } = req.query;
    // if (letter === letterAnswer) {
    //     res.json({ answer: rightAnswerResponse });
    // } else {
    //     res.json({ answer: wrongAnswerResponse });
    // }

    res.json({ answer: eventOverResponse });
  };

// 20-2 글자 이벤트 정답
// const letterAnswer = '요새밤새요';

// const rightAnswerResponse = {
//     isRight: true,
//     text: '정답입니다!'
// }

// const wrongAnswerResponse = {
//     isRight: false,
//     text: '오답입니다ㅠㅠ'
// }

const eventOverResponse = {
    isRight: false,
    text: '쪽지 이벤트는 종료되었습니다! 참여해 주셔서 감사합니다'
}   

exports.getEventLetterAnswer = getEventLetterAnswer;
