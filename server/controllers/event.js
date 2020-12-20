const getEventLetterAnswer = async (req, res, next) => {
    const { letter } = req.body;

    if (letter === letterAnswer) {
        res.json({ rightAnswerResponse });
    } else {
        res.json({ wrongAnswerResponse });
    }
  };

// 20-2 글자 이벤트 정답
const letterAnswer = '요새밤새요';

const rightAnswerResponse = {
    isRight: true,
    text: '정답입니다!'
}

const wrongAnswerResponse = {
    isRight: true,
    text: '오답입니다ㅠㅠ'
}

exports.getEventLetterAnswer = getEventLetterAnswer;
