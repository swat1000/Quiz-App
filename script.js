const quizData = [
    {
        question: "Which of the following is correct about JavaScript?",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",
        correct: "a",
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        a: "Function/Method",
        b: "Preprocessor",
        c: "Triggering Event",
        d: "RMI",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "Both A and B",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both A and B",
        d: "getElementByClass()",
        correct: "c",
    },
    


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const questionCountEl = document.getElementById("question-count");
const scoreCountEl = document.getElementById("scored");
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

var currentQuiz = 0;
let score = 0;





loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }

          currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
    scoreCountEl.textContent = `Your current Score is ${score}`
    questionCountEl.textContent = `Question Attempted: ${currentQuiz} of ${quizData.length} questions`;
})