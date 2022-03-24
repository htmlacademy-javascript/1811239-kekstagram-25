import { generateRandomPhoto } from './data.js';

const templateFragment = document.querySelector('#picture').content;
const picture = templateFragment.querySelector('.picture');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 6; i++) {
  const element = picture.cloneNode(true);
  const Newphoto = generateRandomPhoto();
  const Foundpic = element.querySelector('.picture__img');
  const Foundcomments = element.querySelector('.picture__comments');
  const Foundlike = element.querySelector('.picture__likes');

  Foundpic.src = Newphoto.url;
  Foundcomments.textContent = Newphoto.comments.length;
  Foundlike.textContent = Newphoto.likes;
  // element.classList.add(`big-picture/${i + 1}`);
  fragment.appendChild(element);
}
document.querySelector('.pictures').appendChild(fragment);
