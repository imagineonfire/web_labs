<?php
//Task1
// Взять рандомное число в диапазоне от -100 до 100
$number = mt_rand(-100, 100);

// Проверка на отрицательность и четность
$isNegative = $number < 0;
$isEven = $number % 2 === 0;

// Вывод результатов
echo "Число: $number\n";
echo $isNegative ? "Число отрицательное\n" : "Число неотрицательное\n";
echo $isEven ? "Число четное\n" : "Число нечетное\n";


//Task 2
// Взять рандомное число
$number = mt_rand();

// Преобразовать число в строку для работы с цифрами
$numberStr = (string) $number;
$firstDigit = $numberStr[1];
$lastDigit = $numberStr[strlen($numberStr) - 2];

// Вычисления
$sumFirstLast = (int) $firstDigit + (int) $lastDigit;
$numDigits = strlen($numberStr);

// Вывод результатов
echo "Число: $number\n";
echo "Первая цифра: $firstDigit\n";
echo "Последняя цифра: $lastDigit\n";
echo "Сумма первой и последней цифры: $sumFirstLast\n";
echo "Количество цифр: $numDigits\n";


//Task 3
// Придумать строку
$string = "Hello, PHP!";

// Длина строки и последний символ
$length = strlen($string);
$lastChar = $string[$length - 1];

// Перебор символов с конца
$reverse = strrev($string);

// Вывод результатов
echo "Строка: $string\n";
echo "Длина строки: $length\n";
echo "Последний символ: $lastChar\n";
echo "Символы с конца: $reverse\n";


//Task 4
// Придумать 2 строки
$string1 = "Hello";
$string2 = "World";

// Соединение строк
$combinedString = $string1 . "&" . $string2;

// Сравнение длин
$longerString = strlen($string1) >= strlen($string2) ? $string1 : $string2;

// Вывод результатов
echo "Общая строка: $combinedString\n";
echo "Длинная строка: $longerString\n";


//Task 5
// Взять 2 рандомных числа
$number1 = mt_rand(1, 100);
$number2 = mt_rand(1, 100);

// Проверки и сравнения
$firstDigitMatch = substr((string)$number1, 0, 1) === substr((string)$number2, 0, 1);
$divisible = $number1 % $number2 === 0;
$largerNumber = $number1 > $number2 ? $number1 : $number2;

// Вывод результатов
echo "Число 1: $number1\n";
echo "Число 2: $number2\n";
echo $firstDigitMatch ? "Первые цифры совпадают\n" : "Первые цифры не совпадают\n";
echo $divisible ? "Первое число делится на второе\n" : "Первое число не делится на второе\n";
echo "Большее число: $largerNumber\n";


//Task 6
// Взять 2 рандомных числа
$number1 = mt_rand(1, 100);
$number2 = mt_rand(1, 100);

// Вычисления
$remainder = $number1 % $number2;
$sum = $number1 + $number2;
$product = $number1 * $number2;

// Вывод результатов
echo "Число 1: $number1\n";
echo "Число 2: $number2\n";
echo "Остаток от деления: $remainder\n";
echo "Сумма: $sum\n";
echo "Произведение: $product\n";


//Task 7
// Взять 3 рандомных числа
$number1 = mt_rand(1, 50);
$number2 = mt_rand(1, 50);
$number3 = mt_rand(1, 50);

// Вычисления
$average = ($number1 + $number2 + $number3) / 3;
$sumOfSquares = $number1**2 + $number2**2 + $number3**2;
$maxNumber = max($number1, $number2, $number3);
$minNumber = min($number1, $number2, $number3);

// Вывод результатов
echo "Число 1: $number1\n";
echo "Число 2: $number2\n";
echo "Число 3: $number3\n";
echo "Среднее арифметическое: $average\n";
echo "Сумма квадратов: $sumOfSquares\n";
echo "Наибольшее число: $maxNumber\n";
echo "Наименьшее число: $minNumber\n";
?>
