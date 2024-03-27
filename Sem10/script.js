// Задание 1

// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2

// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const moviesData = JSON.parse(data);
console.log(moviesData);

const divContentElem = document.querySelector('.movies_content');

moviesData.forEach((element) => {
  divContentElem.insertAdjacentHTML('beforeend',
    `
  <div class='movies_wrapper'>
    <img src="${element.image}" alt="${element.name}">
    <h2>${element.name}</h2>
    <p>Год: ${element.year}</p>
    <p>Режиссер: ${element.director}</p>
    <p>Бюджет: ${element.budget}</p>
    <p>Страна: ${element.country}</p>
    <p>Рейтинг: ${element.rating}</p>
    <p>Продолжительность: ${element.duration} мин</p>
    <p>Актеры: ${element.actors.join(', ')}</p>
    <p>Жанр: ${element.genre.join(', ')}</p>
    <p>${element.description}</p>
  </div>
  `);
});



