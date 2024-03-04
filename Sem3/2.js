"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function calculateSalary(number) {
    const tax = number * 0.13;
    const salaryAfterTax = number - tax;
    console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax.toFixed(2)}.`);
}

const userInput = prompt("Введите число:");
const number9 = Number.parseFloat(userInput);

if (Number.isNaN(number9) || !Number.isFinite(number9)) {
    console.log("Значение задано неверно");
} else {
    calculateSalary(number9);
}
