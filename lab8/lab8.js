const puzzleContainer = document.getElementById('puzzle-container');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');
const fullImage = document.createElement('div');

const pieceCount = 16;
let correctPieces = 0;

// Функция для создания пазла
function createPuzzle() {
    console.log("Создаем пазл"); // Отладка
    puzzleContainer.innerHTML = ''; // Очистка контейнера
    correctPieces = 0; // Сброс счетчика правильных частей
    message.style.display = 'none'; // Скрытие сообщения "Конец!"
    restartBtn.style.display = 'none'; // Скрытие кнопки "Начать заново"

    // Создаем части пазла
    for (let i = 0; i < pieceCount; i++) {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = 'url(images/2.jpg)'; // Одно изображение
        piece.style.backgroundPosition = getBackgroundPosition(i); // Позиция для каждого куска

        // Случайный начальный поворот
        let currentRotation = Math.floor(Math.random() * 4) * 90;
        piece.style.transform = `rotate(${currentRotation}deg)`;

        // Если кусок уже на своем месте
        const isCorrect = (currentRotation === 0);
        piece.dataset.correct = isCorrect; // Правильный ли угол

        // Обновляем счётчик правильных частей сразу, если они уже стоят верно
        if (isCorrect) {
            correctPieces++;
        }

        // Добавляем обработчик на клик для вращения частей
        piece.addEventListener('click', function() {
            console.log(`Клик на кусок ${i}, текущий поворот: ${currentRotation}`); // Отладка
            if (piece.dataset.correct === "true") return; // Если часть уже на месте

            // Поворачиваем на 90 градусов по часовой стрелке
            currentRotation = (currentRotation + 90) % 360; 
            piece.style.transform = `rotate(${currentRotation}deg)`;

            // Проверка на правильный угол
            if (currentRotation === 0) {
                piece.dataset.correct = "true";
                correctPieces++;
                console.log(`Правильная часть! Всего правильных частей: ${correctPieces}`); // Отладка
                checkCompletion();
            }
        });

        puzzleContainer.appendChild(piece); // Добавляем кусок пазла в контейнер
    }
}

// Функция для расчета позиции части изображения
function getBackgroundPosition(index) {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return `${-col * 100}px ${-row * 100}px`; // Регулируем позицию части изображения
}

// Проверка завершения пазла
function checkCompletion() {
    console.log(`Проверка завершения, правильные части: ${correctPieces}`); // Отладка
    if (correctPieces === pieceCount) {
        showFullImage(); // Показываем полную картинку при завершении
    }
}

// Функция для отображения полной картинки
function showFullImage() {
    console.log("Показ полной картинки"); // Отладка
    puzzleContainer.style.display = 'none'; // Скрываем контейнер с частями пазла
    
    // Обновляем параметры fullImage и добавляем в контейнер
    fullImage.style.backgroundImage = 'url(images/2.jpg)';
    fullImage.style.width = '400px';
    fullImage.style.height = '400px';
    fullImage.style.backgroundSize = 'cover';
    fullImage.style.margin = '10px auto';
    fullImage.style.display = 'block';
    puzzleContainer.parentElement.appendChild(fullImage); // Добавляем полную картинку под контейнером

    // Показываем надпись "Конец!" и кнопку "Начать заново" через 1 секунду
    setTimeout(() => {
        message.style.display = 'block';
        restartBtn.style.display = 'block';
    }, 1000);
}

// Кнопка "Начать заново"
restartBtn.addEventListener('click', function() {
    fullImage.style.display = 'none'; // Скрываем полное изображение
    puzzleContainer.style.display = 'grid'; // Возвращаем видимость контейнера пазла
    createPuzzle(); // Перезапускаем игру
});

// Инициализация пазла при загрузке страницы
window.onload = createPuzzle;