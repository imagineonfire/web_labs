//задание 1
let helloArray = ['Привет, ','мир','!'];
console.log(helloArray.join(''));
console.log("\n");

//Задание 2
helloArray[0] = 'Пока, ';
console.log(helloArray);
console.log("\n");

//Задание 3
let string = '023m0df0dfg0';
let positions = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] === '0') {
        positions.push(i);
    }
}
console.log('Позиции 0 в строке: ', positions);
console.log("\n");

//Задание 4
let randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 10000));
let filteredArray = randomArray.filter(num => num.toString().includes('11'));
console.log(randomArray);
console.log(filteredArray);
console.log("\n");

//Задание 5
function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (arr1[i] !== undefined) {
            mergedArray.push(arr1[i]);
        }
        if (arr2[i] !== undefined) {
            mergedArray.push(arr2[i]);
        }
    }
    
    return mergedArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c'];
let resultArray = mergeArrays(array1, array2);

console.log("#Задание: Слияние массивов");
console.log("Первый массив:", array1);
console.log("Второй массив:", array2);
console.log("Результирующий массив:", resultArray);
console.log("\n");

//Задание 6
let array = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
let sortedArray = [...array].sort((a, b) => b - a);
console.log('Исходный массив:', array);
console.log('Отсортированный массив:', sortedArray);
console.log("\n");

//Задание 7
let weekdaysRU = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let weekdaysEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let sortedWeekdaysRU = [...weekdaysRU].sort();
let sortedWeekdaysEN = [...weekdaysEN].sort();

console.log('Русский алфавитный порядок:', sortedWeekdaysRU);
console.log('Английский алфавитный порядок:', sortedWeekdaysEN);
console.log("\n");

//Задание 8
let colors = ['orange', 'red', 'green', 'blue'];
colors.sort((a, b) => a.length - b.length);
console.log('Сортировка по длине строки:', colors);
console.log("\n");

//Задание 9
let array8 = Array.from({length: 8}, () => Math.floor(Math.random() * 51));
let firstHalfSum = array8.slice(0, 4).reduce((acc, val) => acc + val, 0);
let secondHalfSum = array8.slice(4).reduce((acc, val) => acc + val, 0);
let quotient = firstHalfSum / secondHalfSum;

console.log('Массив:', array8);
console.log('Сумма первой половины:', firstHalfSum);
console.log('Сумма второй половины:', secondHalfSum);
console.log('Частное:', quotient);
console.log("\n");

//Заднаие 10
let tenRandomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100);
let negativeCount = tenRandomNumbers.filter(num => num < 0).length;


console.log("Массив:", tenRandomNumbers);
console.log("Количество отрицательных чисел:", negativeCount);
console.log("\n");

//Задание 11
let anotherRandomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101) - 50);
let positiveEvenNumbers = anotherRandomNumbers.filter(num => num > 0 && num % 2 === 0);


console.log("Массив:", anotherRandomNumbers);
console.log("Положительные и четные числа:", positiveEvenNumbers);
console.log("\n");

//Задание 12
let mixedString = "abc123def456gh789";
let firstDigitIndex = mixedString.search(/\d/); // Позиция первой цифры (начиная с 0)
let lastDigitIndex = mixedString.search(/\d(?=[^0-9]*$)/); // Позиция последней цифры (начиная с 0)

// Увеличиваем индекс на 1 для отображения в формате 1-основания
console.log("#Задание: Позиции цифр ");
console.log("Строка:", mixedString);
console.log("Первая цифра на позиции:", firstDigitIndex + 1);
console.log("Последняя цифра на позиции:", lastDigitIndex + 1);