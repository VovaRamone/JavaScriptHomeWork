"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function findMaxNumber(num1, num2, num3) {
    const maxNumber = Math.max(num1, num2, num3);
    console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${maxNumber}.`);
}

const number1 = Number.parseFloat(prompt("Введите первое число:"));
const number2 = Number.parseFloat(prompt("Введите второе число:"));
const number3 = Number.parseFloat(prompt("Введите третье число:"));

findMaxNumber(number1, number2, number3);
