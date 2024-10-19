let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByTagName("button"));

function addMultiplicationSign(expression) {
    return expression.replace(/(\d)(\()/g, '$1*(')  // Умножение перед скобками
                     .replace(/(\))(\d)/g, ')*$2'); // Умножение после скобок
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        function ctg(x) { return Math.cos(x) / Math.sin(x); }
        if (button.innerText === "C") {
            display.value = ""; // Очистка дисплея
        } else if (button.innerText === "=") {
            try {
                let expression = addMultiplicationSign(display.value); // Добавление умножения
                display.value = eval(expression); // Выполнение вычисления
            } catch {
                display.value = "Error"; // Обработка ошибок
            }
        } else if (button.innerText === "x²") {
            display.value = Math.pow(eval(display.value), 2); // Возведение в квадрат
        } else if (button.innerText === "√") {
            display.value = Math.sqrt(eval(display.value)); // Извлечение квадратного корня
        } else if (button.innerText === "π") {
            display.value += Math.PI; // Добавление π
        } else if (button.innerText === "𝞎") {
            display.value += Math.E; // Добавление e
        } else if (button.innerText === "sin") {
            display.value = Math.sin(eval(display.value)); // Синус
        } else if (button.innerText === "cos") {
            display.value = Math.cos(eval(display.value)); // Косинус
        } else if (button.innerText === "tan") {
            display.value = Math.tan(eval(display.value)); // Тангенс
        } else if (button.innerText === "ctg") {
            display.value = ctg(eval(display.value)); // Котангенс
        } else if (button.innerText === "n√") {
            const n = prompt("Введите степень корня (n):"); // Запрос степени корня
            if (n && !isNaN(n)) {
                display.value = Math.pow(eval(display.value), 1 / n); // Корень n-ой степени
            } else {
                alert("Некорректное значение для n.");
            }
        } else if (button.innerText === "^") {
            const n = prompt("Введите степень (n):"); // Запрос степени
            if (n && !isNaN(n)) {
                display.value = Math.pow(eval(display.value), n); // Возведение в степень n
            } else {
                alert("Некорректное значение для n.");
            }
        } else {
            display.value += button.innerText; // Добавление нажатой кнопки на дисплей
        }
    });
});