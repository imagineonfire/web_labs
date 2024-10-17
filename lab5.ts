export{}
// Функция для генерации случайного целого числа в заданном диапазоне
function randomInteger(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

// Задание 1
function task1() {
    const number1 = randomInteger(-100, 100);
    console.log('Task1:')
    console.log(`Число: ${number1}`);
    console.log(`Отрицательное: ${number1 < 0}`);
    console.log(`Четное: ${number1 % 2 === 0}`);
    console.log("\n");
}

// Задание 2
function task2() {
    const number2 = randomInteger(0, 9999);  // Выбран произвольный диапазон
    const number2Str = number2.toString();
    console.log(`Число: ${number2}`);
    console.log(`Первая цифра: ${number2Str.charAt(0)}`);
    console.log(`Последняя цифра: ${number2Str.charAt(number2Str.length - 1)}`);
    console.log(`Сумма первой и последней цифры: ${parseInt(number2Str.charAt(0)) + parseInt(number2Str.charAt(number2Str.length - 1))}`);
    console.log(`Количество цифр: ${number2Str.length}`);
    console.log("\n");
}

// Задание 3
function task3() {
    const str1 = "Пример строки";
    console.log(`Длина строки: ${str1.length}`);
    console.log(`Последний символ строки: ${str1.charAt(str1.length - 1)}`);
    console.log("Строка в обратном порядке:");
    for (let i = str1.length - 1; i >= 0; i--) {
        console.log(str1.charAt(i));
    }
    console.log("\n");
}

// Задание 4
function task4() {
    const str2 = "Первая строка";
    const str3 = "Вторая строка";
    const combinedStr = `${str2}&${str3}`;
    console.log(`Общая строка: ${combinedStr}`);
    console.log(`Длиннее строка: ${str2.length > str3.length ? str2 : str3}`);
    console.log("\n");
}

// Задание 5
function task5() {
    const number3 = randomInteger(1, 100);
    const number4 = randomInteger(1, 100);
    console.log(`Число 1: ${number3}`);
    console.log(`Число 2: ${number4}`);
    console.log(`Первые цифры совпадают: ${number3.toString().charAt(0) === number4.toString().charAt(0)}`);
    console.log(`Первое число делится на второе: ${number3 % number4 === 0}`);
    console.log(`Большее число: ${Math.max(number3, number4)}`); 
    console.log("\n");
}

// Задание 6
function task6() {
    const number3 = randomInteger(1, 100);
    const number4 = randomInteger(1, 100);
    console.log(`Число 1: ${number3}`);
    console.log(`Число 2: ${number4}`);
    console.log(`Остаток от деления: ${number3 % number4}`);
    console.log(`Сумма чисел: ${number3 - number4}`);
    console.log(`Произведение чисел: ${number3 / number4}`);
    console.log("\n");
}

// Задание 7
function task7() {
    const number7 = randomInteger(1, 50);
    const number8 = randomInteger(1, 50);
    const number9 = randomInteger(1, 50);
    console.log(`Число 1: ${number7}`);
    console.log(`Число 2: ${number8}`);
    console.log(`Число 3: ${number9}`);
    console.log(`Среднее арифметическое: ${(number7 + number8 + number9) / 3}`);
    console.log(`Сумма квадратов: ${number7 ** 2 + number8 ** 2 + number9 ** 2}`);
    console.log(`Наибольшее число: ${Math.max(number7, number8, number9)}`);
    console.log(`Наименьшее число: ${Math.min(number7, number8, number9)}`);
    console.log("\n");
}

// Запуск всех задач
task1();
task2();
task3();
task4();
task5();
task6();
task7();
