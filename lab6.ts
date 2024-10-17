// Задание 1: Фраза из массива
function task1() {
    const array = ['Привет, ', 'мир', '!'];
    console.log(`#1\n${array.join('')}`);
}

// Задание 2: Замена первого элемента массива
function task2() {
    const array = ['Привет, ', 'мир', '!'];
    array[0] = 'Пока,';
    console.log(`#2\n`, array);
}

// Задание 3: Массив позиций нулей
function task3() {
    const string = '023m0df0dfg0';
    const positions: number[] = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '0') {
            positions.push(i);
        }
    }
    console.log(`#3\n`, positions);
}

// Задание 4: Массовы с элементами содержащими 5
function task4() {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 101));
    const withFive = array.filter(value => value.toString().includes('5'));
    console.log(`#4\n`, array, withFive);
}

// Задание 5: Слияние массивов
function task5() {
    const array1 = [1, 2, 3];
    const array2 = ['a', 'b', 'c'];
    const merged: (number | string)[] = [];
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (i < array1.length) merged.push(array1[i]);
        if (i < array2.length) merged.push(array2[i]);
    }
    console.log(`#5\n`, array1, array2, merged);
}

// Задание 6: Сортировка по убыванию
function task6() {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 101));
    const sorted = [...array].sort((a, b) => b - a);
    console.log(`#6\n`, array, sorted);
}

// Задание 7: Сортировка дней недели
function task7() {
    const arrayRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const arrayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(`#7\n`, arrayRu.sort(), arrayEn.sort());
}

// Задание 8: Сортировка цветов по длине
function task8() {
    const array = ['orange', 'red', 'green', 'blue'];
    array.sort((a, b) => a.length - b.length);
    console.log(`#8\n`, array);
}

// Задание 9: Суммы половин массива
function task9() {
    const array = Array.from({length: 8}, () => Math.floor(Math.random() * 51));
    const firstHalfSum = array.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const secondHalfSum = array.slice(4).reduce((sum, num) => sum + num, 0);
    const quotient = firstHalfSum / secondHalfSum;
    console.log(`#9\n`, array, `Сумма первой половины: ${firstHalfSum}`, `Сумма второй половины: ${secondHalfSum}`, `Частное: ${quotient}`);
}

// Задание 10: Количество отрицательных чисел
function task10() {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 201) - 100);
    const negativeCount = array.filter(num => num < 0 && num % 3 == 0).length;
    console.log(`#10\n`, array, `Количество отрицательных чисел: ${negativeCount}`);
}

// Задание 11: Оставить положительные и четные
function task11() {
    const array = Array.from({length: 10}, () => Math.floor(Math.random() * 101) - 50);
    const filtered = array.filter(num => num > 0 && num % 2 === 0);
    console.log(`#11\n`, array, filtered);
}

// Задание 12: Позиции первой и последней цифры
function task12() {
    const string = 'abc123xyz456';
    let firstDigitPosition: number | null = null;
    let lastDigitPosition: number | null = null;
    for (let i = 0; i < string.length; i++) {
        if (/\d/.test(string[i])) {
            if (firstDigitPosition === null) {
                firstDigitPosition = i + 1;
            }
            lastDigitPosition = i + 1;
        }
    }
    console.log(`#12\nСтрока: ${string}`, `Первая цифра на позиции: ${firstDigitPosition}`, `Последняя цифра на позиции: ${lastDigitPosition}`);
}

// Запуск всех задач
task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();
task12();
