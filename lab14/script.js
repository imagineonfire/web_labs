// script.js
const boardSize = 5;
let currentPlayer = 'cat'; // Первый ход за котиком
let roundCounter = 1;
let catWins = 0;
let mouseWins = 0;
let board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));

// Обновление отображения счетчиков
function updateScoreboard() {
    document.getElementById("round-counter").textContent = roundCounter;
    document.getElementById("cat-wins").textContent = catWins;
    document.getElementById("mouse-wins").textContent = mouseWins;
}

// Создание игрового поля
function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Очистка поля
    board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", handleMove);
            gameBoard.appendChild(cell);
        }
    }
}

// Обработка хода
function handleMove(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (board[row][col] !== null) return; // Клетка занята

    // Установка изображения в зависимости от текущего игрока
    board[row][col] = currentPlayer;
    event.target.innerHTML = `<img src="images/${currentPlayer}.png" alt="${currentPlayer}">`;

    if (checkWinner(row, col)) {
        alert(`${currentPlayer === 'cat' ? 'Котики' : 'Мышки'} победили!`);
        currentPlayer === 'cat' ? catWins++ : mouseWins++;
        roundCounter++;
        updateScoreboard();
        createBoard();
    } else if (board.flat().every(cell => cell !== null)) {
        alert("Ничья!");
        roundCounter++;
        updateScoreboard();
        createBoard();
    } else {
        // Переход хода
        currentPlayer = currentPlayer === 'cat' ? 'mouse' : 'cat';
    }
}

// Проверка победителя (три подряд)
function checkWinner(row, col) {
    const player = board[row][col];

    // Проверка горизонтали
    for (let i = 0; i <= boardSize - 3; i++) {
        if (board[row][i] === player && board[row][i + 1] === player && board[row][i + 2] === player) {
            return true;
        }
    }

    // Проверка вертикали
    for (let i = 0; i <= boardSize - 3; i++) {
        if (board[i][col] === player && board[i + 1][col] === player && board[i + 2][col] === player) {
            return true;
        }
    }

    // Проверка диагонали (слева направо)
    for (let i = 0; i <= boardSize - 3; i++) {
        for (let j = 0; j <= boardSize - 3; j++) {
            if (board[i][j] === player && board[i + 1][j + 1] === player && board[i + 2][j + 2] === player) {
                return true;
            }
        }
    }

    // Проверка диагонали (справа налево)
    for (let i = 0; i <= boardSize - 3; i++) {
        for (let j = 2; j < boardSize; j++) {
            if (board[i][j] === player && board[i + 1][j - 1] === player && board[i + 2][j - 2] === player) {
                return true;
            }
        }
    }

    return false;
}

// Инициализация игры
updateScoreboard();
createBoard();