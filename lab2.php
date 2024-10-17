<?php
//Task1
// Массив с элементами
$array = ['Привет, ', 'мир', '!'];

// Выводим строку
echo "#1\n" . implode('', $array) . "\n";

//Task2
// Массив с элементами
$array = ['Привет, ', 'мир', '!'];

// Замена первого элемента
$array[0] = 'Пока,';

// Вывод массива
echo "#2\n";
print_r($array);

//Task3
// Исходная строка
$string = '023m0df0dfg0';

// Получение позиций нулей
$positions = [];
for ($i = 0; $i < strlen($string); $i++) {
    if ($string[$i] === '0') {
        $positions[] = $i;
    }
}

// Вывод результата
echo "#3\n";
print_r($positions);

//Task4
// Исходный массив
$array = [];
for ($i = 0; $i < 10; $i++) {
    $array[] = mt_rand();
}

// Отбор чисел с цифрой 5
$withFive = array_filter($array, function($value) {
    return strpos((string) $value, '5') !== false;
});

// Вывод массивов
echo "#4\n";
print_r($array);
print_r(array_values($withFive));

//Task5
// Исходные массивы
$array1 = [1, 2, 3];
$array2 = ['a', 'b', 'c'];

// Функция для слияния
function merge_arrays($array1, $array2) {
    $result = [];
    $length = max(count($array1), count($array2));
    for ($i = 0; $i < $length; $i++) {
        if (isset($array1[$i])) $result[] = $array1[$i];
        if (isset($array2[$i])) $result[] = $array2[$i];
    }
    return $result;
}

// Сливаем массивы
$merged = merge_arrays($array1, $array2);

// Вывод массивов
echo "#5\n";
print_r($array1);
print_r($array2);
print_r($merged);

//Task6
// Создаем массив
$array = [];
for ($i = 0; $i < 10; $i++) {
    $array[] = mt_rand();
}

// Копия и сортировка
$original = $array;
rsort($array);

// Вывод массивов
echo "#6\n";
print_r($original);
print_r($array);

//Task7
// Исходные массивы
$array_ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
$array_en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Сортировка
sort($array_ru);
sort($array_en);

// Вывод результатов
echo "#7\n";
print_r($array_ru);
print_r($array_en);

//Task8
// Исходный массив
$array = ['orange', 'red', 'green', 'blue'];

// Сортировка по длине
usort($array, function($a, $b) {
    return strlen($a) <=> strlen($b);
});

// Вывод результата
echo "#8\n";
print_r($array);

//Task9
// Создаем массив
$array = [];
for ($i = 0; $i < 8; $i++) {
    $array[] = mt_rand(0, 50);
}

// Вычисления
$first_half_sum = array_sum(array_slice($array, 0, 4));
$second_half_sum = array_sum(array_slice($array, 4));
$quotient = $first_half_sum / $second_half_sum;

// Вывод результатов
echo "#9\n";
print_r($array);
echo "Сумма первой половины: $first_half_sum\n";
echo "Сумма второй половины: $second_half_sum\n";
echo "Частное: $quotient\n";

//Task10
// Создаем массив
$array = [];
for ($i = 0; $i < 10; $i++) {
    $array[] = mt_rand(-100, 100);
}

// Вычисление
$negative_count = count(array_filter($array, function($value) {
    return $value < 0;
}));

// Вывод результатов
echo "#10\n";
print_r($array);
echo "Количество отрицательных чисел: $negative_count\n";

//Task11
// Создаем массив
$array = [];
for ($i = 0; $i < 10; $i++) {
    $array[] = mt_rand(-50, 50);
}

// Фильтрация
$filtered = array_filter($array, function($value) {
    return $value < 0 && $value % 2 !== 0;
});

// Вывод массивов
echo "#11\n";
print_r($array);
print_r(array_values($filtered));

//Task12
// Исходная строка
$string = 'abc123xyz456';

// Поиск позиций
$first_digit_position = null;
$last_digit_position = null;
for ($i = 0; $i < strlen($string); $i++) {
    if (is_numeric($string[$i])) {
        if ($first_digit_position === null) {
            $first_digit_position = $i + 1;  // Нумерация с 1
        }
        $last_digit_position = $i + 1; // Нумерация с 1
    }
}

// Вывод результатов
echo "#12\n";
echo "Строка: $string\n";
echo "Первая цифра на позиции: $first_digit_position\n";
echo "Последняя цифра на позиции: $last_digit_position\n";

?>