//Скрипт требует доработки в плане отображения на экран функций: sin, cos, tan, ctg. 
//Пока работает так: Нажимаем "sin", экран чистится, вводим значение для синуса, нажимаем "="

/*function addMultiplicationSign(expression) {
    return expression.replace(/(\d)(\()/g, '$1*(')  // Умножение перед скобками
                     .replace(/(\))(\d)/g, ')*$2'); // Умножение после скобок
}
*/
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByTagName("button"));
let functionPending = null; // Флаг для отслеживания текущей функции

buttons.forEach(button => {
    button.addEventListener("click", () => {
        function ctg(x) { return Math.cos(x) / Math.sin(x); }

        if (button.innerText === "C") {
            display.value = ""; // Очистка дисплея
            functionPending = null; // Сброс состояния функции
        } else if (button.innerText === "=") {
            try {
                // Если есть ожидающая функция, применяем её к значению на дисплее
                if (functionPending) {
                    let value = eval(display.value); // Получаем текущее значение
                    switch (functionPending) {
                        case "sin":
                            display.value = Math.sin(value);
                            break;
                        case "cos":
                            display.value = Math.cos(value);
                            break;
                        case "tan":
                            display.value = Math.tan(value);
                            break;
                        case "ctg":
                            display.value = ctg(value);
                            break;
                        default:
                            display.value = eval(display.value); // Выполнение других вычислений
                    }
                    functionPending = null; // Сбрасываем флаг функции
                } else {
                    display.value = eval(display.value); // Выполнение вычисления
                }
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
        } else if (["sin", "cos", "tan", "ctg"].includes(button.innerText)) {
            functionPending = button.innerText; // Устанавливаем ожидаемую функцию
            display.value = ""; // Очищаем дисплей для ввода значения
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