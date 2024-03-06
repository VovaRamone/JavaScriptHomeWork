"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Создаём массив из 5 случайных чисел в диапазоне от 0 до 9
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));

console.log("Сгенерированный массив:", randomArray);

// 1
const sum = randomArray.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов массива:", sum);

// 2
const min = Math.min(...randomArray);
console.log("Минимальное значение в массиве:", min);

// 3
const indexesOfThree = randomArray.reduce((acc, curr, index) => {
  if (curr === 3) {
    acc.push(index);
  }
  return acc;
}, []);
console.log("Индексы элементов, равных 3:", indexesOfThree);
