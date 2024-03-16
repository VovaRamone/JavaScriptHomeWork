"use strict";

// ``
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.classList.add('super-dropdown');
});
// []()
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btn = document.querySelector('.btn');
btn.classList.toggle('btn-secondary');
// []()
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuElems = document.querySelectorAll('.menu');
menuElems.forEach(element => {
    element.classList.remove('dropdown-menu');
});
// []()
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropDownElem = document.querySelector('.dropdown');
dropDownElem.insertAdjacentHTML('afterend', '<a href="#">link</a>');
// []()
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropDownMenuBtn = document.getElementById('dropdownMenuButton');
dropDownMenuBtn.id = 'superDropdown';
// []()
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const dropDownMenu = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
if (dropDownMenu) {
  dropDownMenu.dataset.dd = '3';
}
// []()
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropDownTog = document.querySelector('.dropdown-toggle');
if (dropDownTog) {
  dropDownTog.removeAttribute('type');
}
