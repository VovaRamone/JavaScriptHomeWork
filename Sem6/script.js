"use strict";

// ``
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const SLElem = document.getElementById("super_link");
console.log(SLElem);
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinks = document.querySelectorAll(".card-link");

cardLinks.forEach(link => {
  link.textContent = "ссылка";
});
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodies = document.querySelectorAll(".card-body");
const cardLinksInCardBody = [];

cardBodies.forEach(body => {
  const links = body.querySelectorAll(".card-link");
  
  cardLinksInCardBody.push(...links);
});

console.log(cardLinksInCardBody);
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const elemWithDN50 = document.querySelector('[data-number="50"]');

console.log(elemWithDN50);
// []()
// 5. Выведите содержимое тега title в консоль.
const title = document.title;

console.log(title);
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector('.card-title');
const parentElem = cardTitle.parentNode;

console.log(parentElem);
// []()
// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragraph = document.createElement('p');
paragraph.textContent = 'Привет';
const cardElem = document.querySelector('.card');
cardElem.insertBefore(paragraph, cardElem.firstChild);
// []()
// 8. Удалите тег h6 на странице.
const h6Elem = document.querySelector('h6');

if (h6Elem) {
    h6Elem.remove();
} else {
    console.log('Элемент h6 не найден');
}
