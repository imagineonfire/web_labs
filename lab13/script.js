const quizData = [
    {
        question: "Как называется самая большая планета Солнечной системы?",
        options: ["Марс", "Земля", "Юпитер", "Сатурн"],
        correct: 2
    },
    {
        question: "Какая планета ближайшая к Солнцу?",
        options: ["Венера", "Марс", "Меркурий", "Земля"],
        correct: 2
    },
    {
        question: "Какое расстояние от Земли до Солнца?",
        options: ["150 миллионов км", "200 миллионов км", "100 миллионов км", "300 миллионов км"],
        correct: 0
    },
    {
        question: "Кто был первым человеком в космосе?",
        options: ["Юрий Гагарин", "Нил Армстронг", "Алексей Леонов", "Джон Гленн"],
        correct: 0
    },
    {
        question: "На какой планете находятся самые высокие горы?",
        options: ["Марс", "Венера", "Земля", "Юпитер"],
        correct: 0
    },
    {
        question: "Какое космическое тело не является планетой?",
        options: ["Плутон", "Меркурий", "Марс", "Венера"],
        correct: 0
    },
    {
        question: "Какая звезда самая близкая к Земле?",
        options: ["Сириус", "Проксима Центавра", "Полярная звезда", "Солнце"],
        correct: 3
    },
    {
        question: "Сколько планет в Солнечной системе?",
        options: ["8", "9", "10", "7"],
        correct: 0
    },
    {
        question: "Какая планета имеет кольца?",
        options: ["Венера", "Юпитер", "Сатурн", "Марс"],
        correct: 2
    },
    {
        question: "Сколько спутников у Марса?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "Как называется естественный спутник Земли?",
        input: true,
        correct: "Луна"
    },
    {
        question: "Какая планета известна как 'Красная планета'?",
        options: ["Марс", "Венера", "Юпитер", "Сатурн"],
        correct: 0
    },
    {
        question: "Какая планета ближе всего к Земле?",
        options: ["Марс", "Венера", "Юпитер", "Меркурий"],
        correct: 1
    },
    {
        question: "Как называется галактика, в которой находится наша Солнечная система?",
        options: ["Андромеда", "Млечный Путь", "Туманность Ориона", "Большое Магелланово Облако"],
        correct: 1
    },
    {
        question: "Какая планета имеет самый длинный день?",
        options: ["Юпитер", "Земля", "Венера", "Марс"],
        correct: 2
    },
    {
        question: "Сколько времени свету требуется, чтобы достичь Земли от Солнца?",
        options: ["8 минут", "12 минут", "5 минут", "10 минут"],
        correct: 0
    },
    {
        question: "Какой элемент является основным компонентом атмосферы Земли?",
        options: ["Кислород", "Азот", "Водород", "Гелий"],
        correct: 1
    },
    {
        question: "Как называется точка, в которой орбита планеты ближе всего к Солнцу?",
        options: ["Апоцентр", "Перигелий", "Эллипс", "Астроцентр"],
        correct: 1
    },
    {
        question: "Какая планета известна своим сильным магнитным полем?",
        options: ["Земля", "Юпитер", "Сатурн", "Нептун"],
        correct: 1
    },
    {
        question: "Какое созвездие известно как 'Орион'? (оно имеет пояс)",
        options: ["Большая Медведица", "Кассиопея", "Орион", "Лебедь"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const inputAnswerEl = document.getElementById('input-answer');
const userInputEl = document.getElementById('user-input');
const submitInputAnswerBtn = document.getElementById('submit-input-answer');
const resultsContainer = document.getElementById('results-container');
const resultTextEl = document.getElementById('result-text');
const resultImageEl = document.getElementById('result-image');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    if (question.input) {
        optionsEl.classList.add('hidden');
        inputAnswerEl.classList.remove('hidden');
    } else {
        optionsEl.classList.remove('hidden');
        inputAnswerEl.classList.add('hidden');
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((button, index) => {
            button.textContent = question.options[index];
            button.onclick = () => checkAnswer(index);
        });
    }
}

function checkAnswer(selected) {
    const question = quizData[currentQuestion];
    if (selected === question.correct) {
        score++;
    }
    nextQuestion();
}

function checkInputAnswer() {
    const question = quizData[currentQuestion];
    if (userInputEl.value.toLowerCase() === question.correct.toLowerCase()) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionEl.classList.add('hidden');
    optionsEl.classList.add('hidden');
    inputAnswerEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    let resultText;
    let resultImage;

    if (score >= 18) {
        resultText = `Отличный результат! Вы ответили правильно на ${score} из 20 вопросов. Вы — настоящий эксперт по космосу!`;
        resultImage = "images/expert.jpeg"; // Замените на реальный путь к изображению
    } else if (score >= 10) {
        resultText = `Хороший результат! Вы ответили правильно на ${score} из 20 вопросов. Вы хорошо разбираетесь в космосе.`;
        resultImage = "images/good.jpg"; // Замените на реальный путь к изображению
    } else {
        resultText = `Вы ответили правильно на ${score} из 20 вопросов. Не переживайте, космос — сложная тема. Попробуйте ещё раз!`;
        resultImage = "images/try-again.jpeg"; // Замените на реальный путь к изображению
    }

    resultTextEl.textContent = resultText;
    resultImageEl.src = resultImage;
}

nextBtn.addEventListener('click', nextQuestion);
submitInputAnswerBtn.addEventListener('click', checkInputAnswer);

loadQuestion();