const getEventLetterAnswer = async (req, res, next) => {
    const { letter } = req.query;

    if (letter === letterAnswer) {
        res.json({ answer: rightAnswerResponse });
    } else {
        res.json({ answer: wrongAnswerResponse });
    }
  };

// 20-2 글자 이벤트 정답
const letterAnswer = '요새밤새요';

const rightAnswerResponse = {
    isRight: true,
    text: '정답입니다!'
}

const wrongAnswerResponse = {
    isRight: false,
    text: '오답입니다ㅠㅠ'
}

exports.getEventLetterAnswer = getEventLetterAnswer;
