"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Функция для генерации случайного целого числа в заданном диапазоне
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
// Задание 1
function task1() {
    var number1 = randomInteger(-100, 100);
    console.log("\u0427\u0438\u0441\u043B\u043E: ".concat(number1));
    console.log("\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435: ".concat(number1 < 0));
    console.log("\u0427\u0435\u0442\u043D\u043E\u0435: ".concat(number1 % 2 === 0));
}
// Задание 2
function task2() {
    var number2 = randomInteger(0, 9999); // Выбран произвольный диапазон
    var number2Str = number2.toString();
    console.log("\u0427\u0438\u0441\u043B\u043E: ".concat(number2));
    console.log("\u041F\u0435\u0440\u0432\u0430\u044F \u0446\u0438\u0444\u0440\u0430: ".concat(number2Str.charAt(0)));
    console.log("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0446\u0438\u0444\u0440\u0430: ".concat(number2Str.charAt(number2Str.length - 1)));
    console.log("\u0421\u0443\u043C\u043C\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0446\u0438\u0444\u0440\u044B: ".concat(parseInt(number2Str.charAt(0)) + parseInt(number2Str.charAt(number2Str.length - 1))));
    console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u0444\u0440: ".concat(number2Str.length));
}
// Задание 3
function task3() {
    var str1 = "Пример строки";
    console.log("\u0414\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438: ".concat(str1.length));
    console.log("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0441\u0438\u043C\u0432\u043E\u043B \u0441\u0442\u0440\u043E\u043A\u0438: ".concat(str1.charAt(str1.length - 1)));
    console.log("Строка в обратном порядке:");
    for (var i = str1.length - 1; i >= 0; i--) {
        console.log(str1.charAt(i));
    }
}
// Задание 4
function task4() {
    var str2 = "Первая строка";
    var str3 = "Вторая строка";
    var combinedStr = "".concat(str2, "&").concat(str3);
    console.log("\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: ".concat(combinedStr));
    console.log("\u0414\u043B\u0438\u043D\u043D\u0435\u0435 \u0441\u0442\u0440\u043E\u043A\u0430: ".concat(str2.length > str3.length ? str2 : str3));
}
// Задание 5
function task5() {
    var number3 = randomInteger(1, 100);
    var number4 = randomInteger(1, 100);
    console.log("\u0427\u0438\u0441\u043B\u043E 1: ".concat(number3));
    console.log("\u0427\u0438\u0441\u043B\u043E 2: ".concat(number4));
    console.log("\u041F\u0435\u0440\u0432\u044B\u0435 \u0446\u0438\u0444\u0440\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442: ".concat(number3.toString().charAt(0) === number4.toString().charAt(0)));
    console.log("\u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u0435: ".concat(number3 % number4 === 0));
    console.log("\u0411\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(Math.max(number3, number4)));
}
// Задание 6
function task6() {
    var number3 = randomInteger(1, 100);
    var number4 = randomInteger(1, 100);
    console.log("\u0427\u0438\u0441\u043B\u043E 1: ".concat(number3));
    console.log("\u0427\u0438\u0441\u043B\u043E 2: ".concat(number4));
    console.log("\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F: ".concat(number3 % number4));
    console.log("\u0421\u0443\u043C\u043C\u0430 \u0447\u0438\u0441\u0435\u043B: ".concat(number3 + number4));
    console.log("\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B: ".concat(number3 * number4));
}
// Задание 7
function task7() {
    var number7 = randomInteger(1, 50);
    var number8 = randomInteger(1, 50);
    var number9 = randomInteger(1, 50);
    console.log("\u0427\u0438\u0441\u043B\u043E 1: ".concat(number7));
    console.log("\u0427\u0438\u0441\u043B\u043E 2: ".concat(number8));
    console.log("\u0427\u0438\u0441\u043B\u043E 3: ".concat(number9));
    console.log("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435: ".concat((number7 + number8 + number9) / 3));
    console.log("\u0421\u0443\u043C\u043C\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432: ".concat(Math.pow(number7, 2) + Math.pow(number8, 2) + Math.pow(number9, 2)));
    console.log("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(Math.max(number7, number8, number9)));
    console.log("\u041D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(Math.min(number7, number8, number9)));
}
// Запуск всех задач
task1();
task2();
task3();
task4();
task5();
task6();
task7();
