import { getPhotos } from './api.js';
import { openBigPic } from './fullscreenpic.js';

const templateFragment = document.querySelector('#picture').content;
const picture = templateFragment.querySelector('.picture');
const fragment = document.createDocumentFragment();

getPhotos()
  .then((data) => {
    data.forEach((newPhoto) => {

      const element = picture.cloneNode(true);
      const Foundpic = element.querySelector('.picture__img');
      const Foundcomments = element.querySelector('.picture__comments');
      const Foundlike = element.querySelector('.picture__likes');

      Foundpic.src = newPhoto.url;
      Foundcomments.textContent = newPhoto.comments.length;
      Foundlike.textContent = newPhoto.likes;
      // element.classList.add(`big-picture/${i + 1}`);
      element.addEventListener('click', () => {
        openBigPic(newPhoto);
      });
      fragment.appendChild(element);
    });
    document.querySelector('.pictures').appendChild(fragment);

  });

