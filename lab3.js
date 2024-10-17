function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// Задание 1
let number = randomInteger(-100, 100);
console.log(`Число: ${number}`);
console.log(`Отрицательное: ${number < 0 ? 'да' : 'нет'}`);
console.log(`Четное: ${number % 2 === 0 ? 'да' : 'нет'}`);
console.log('-----------------------------');

// Задание 2
number = randomInteger(100, 9999);
let numberStr = number.toString();
let firstDigit = parseInt(numberStr[0]);
let lastDigit = parseInt(numberStr[numberStr.length - 1]);

console.log(`Число: ${number}`);
console.log(`Первая цифра: ${firstDigit}`);
console.log(`Последняя цифра: ${lastDigit}`);
console.log(`Сумма первой и последней цифры: ${firstDigit + lastDigit}`);
console.log(`Количество цифр: ${numberStr.length}`);
console.log('-----------------------------');

// Задание 3
let str = "Пример строки";
console.log(`Длина строки: ${str.length}`);
console.log(`Последний символ: ${str[str.length - 1]}`);
console.log("Строка с конца: " + str.split('').reverse().join(''));
console.log('-----------------------------');

// Задание 4
let str1 = "Первая строка";
let str2 = "Вторая строчечка";
let combined = `${str1} & ${str2}`;

console.log(`Комбинированная строка: ${combined}`);
console.log(`Длиннее строка: ${str1.length > str2.length ? str1 : str2}`);
console.log('-----------------------------');

// Задание 5
let num1 = randomInteger(1, 100);
let num2 = randomInteger(1, 100);

console.log(`Первое число: ${num1}`);
console.log(`Второе число: ${num2}`);
console.log(`Совпадают первые цифры: ${num1.toString()[0] === num2.toString()[0]}`);
console.log(`Первое делится на второе: ${num2 !== 0 && num1 % num2 === 0}`);
console.log(`Большее число: ${num1 > num2 ? num1 : num2}`);
console.log('-----------------------------');

// Задание 6
num1 = randomInteger(1, 100);
num2 = randomInteger(1, 100);

console.log(`Первое число: ${num1}`);
console.log(`Второе число: ${num2}`);
console.log(`Остаток от деления: ${num1 % num2}`);
console.log(`Сумма: ${num1 + num2}`);
console.log(`Произведение: ${num1 * num2}`);
console.log('-----------------------------');

// Задание 7
num1 = randomInteger(1, 50);
num2 = randomInteger(1, 50);
num3 = randomInteger(1, 50);
num4 = randomInteger(1, 50);


let average = (num1 + num2 + num3 + num4) / 4;
let sumOfSquares = num1**2 + num2**2 + num3**2 + num4**2;
let max = Math.max(num1, num2, num3, num4);
let min = Math.min(num1, num2, num3, num4);

console.log(`Числа: ${num1}, ${num2}, ${num3}, ${num4}`);
console.log(`Среднее арифметическое: ${average}`);
console.log(`Сумма квадратов: ${sumOfSquares}`);
console.log(`Наибольшее: ${max}`);
console.log(`Наименьшее: ${min}`);
