const quizDate = [
    {
        question: 'How old am I?',
        a: '10',
        b: '12',
        c: '15',
        d: '17',
        correct: 'd',
    }, {
        question: 'What is the capital of Korea?',
        a: 'Korean',
        b: 'Gangseo',
        c: 'gangnam',
        d: 'seoul',
        correct: 'd',
    }, {
        question: 'What\'s my name?',
        a: '곽채원',
        b: '김경한',
        c: '이동현',
        d: '김동현',
        correct: 'b',
    }, {
        question: 'What programming language can\'t I use ?',
        a: 'Python',
        b: 'JavaScript', 
        c: 'C',
        d: 'Java',
        correct: 'd',
    }, {
        question: 'What editor do I use now?',
        a: 'Visual studio Code',
        b: 'Visual studio 2019',
        c: 'div',
        d: 'eclipse',
        correct: 'a',
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizDate[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizDate[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizDate.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>${quizDate.length}개중 ${score}개를 맞추셨습니다!!</h2>
            <button onClick="location.reload()">Reload</button>`;
        }
    }
});