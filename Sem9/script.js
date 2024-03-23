"use strict";

// ``
// []()
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
// То есть при печати в input'е тег span также должен меняться.
const inputElem = document.getElementById('from');
const spanElem = document.querySelector('span');

inputElem.addEventListener('input', (event) => {
  spanElem.textContent = event.target.value;
});
// []()
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const msgBtn = document.querySelector('.messageBtn');
const msgElem = document.querySelector('.message');

msgBtn.addEventListener('click', () => {
  msgElem.classList.add('animate_animated', 'animate_fadeInLeftBig');
  msgElem.style.visibility = 'visible';
});
// []()
// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
//  Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля 
//  (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, 
//  необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, select');
    let formIsValid = true;

    inputs.forEach((input) => {
        if (!input.value.trim()) {
            input.style.border = '3px solid red';
            input.classList.add('error');
            formIsValid = false;
        } else {
            input.classList.remove('error');
            input.style.border = '1px solid black';
        }
    });

    if (formIsValid) {
        form.submit();
    }
});

form.addEventListener('input', (event) => {
    const input = event.target;

    if (!input.value.trim()) {
        input.classList.add('error');
        input.style.border = '3px solid red';
    } else {
        input.classList.remove('error');
        input.style.border = '1px solid black';
    }
});
