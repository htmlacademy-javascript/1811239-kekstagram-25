// const bodyElement = document.body;
// console.log( 'bodyElement');

const bigPicture = document.querySelector('.bigPicture');
const secondElementHTML = '<div class="big-picture__img"></div>';
bigPicture.insertAdjacentHTML('beforeend', secondElementHTML);

import {} from '<main.js>';


const templateFragment = document.querySelector('<div class="big-picture__img"></div>').content; // Находим фрагмент с содержимым темплейта

const template = templateFragment.querySelector('big-picture__img'); // В фрагменте находим нужный элемент

const fragment = document.createDocumentFragment();

for (let i = 0; i < 6; i++) {
  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  element.classList.add('big-picture\'+ {  i + 1}'); // Добавляем порядковый класс, который начинается с единицы, а не с нуля, поэтому 'i + 1'
  element.children[0].textContent = i; // Записываем содержимое
  fragment.appendChild(element);
}

bigPicture[1].appendChild(fragment);
