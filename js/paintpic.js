import { getPhotos } from './api.js';
import { openBigPic } from './fullscreenpic.js';


const sortByDefaultButton = document.querySelector('#filter-default');
const shafflePhotosButton = document.querySelector('#filter-random');
const sortPhotosByCommentsButton = document.querySelector('#filter-discussed');
const templateFragment = document.querySelector('#picture').content;
const picture = templateFragment.querySelector('.picture');
let newElementPictures = [];

getPhotos()
  .then((data) => {
    newElementPictures = data;
    sortByDefault();
  });

function shafflePhotos() {
  const fragment = document.createDocumentFragment();
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  shafflePhotosButton.classList.add('img-filters__button--active');
  const photos = [...newElementPictures].sort(() => Math.random() - 0.5).slice(0, 10);
  document.querySelectorAll('.picture').forEach((el) => el.remove());
  photos.forEach((newPhoto) => {

    const element = picture.cloneNode(true);
    const Foundpic = element.querySelector('.picture__img');
    const Foundcomments = element.querySelector('.picture__comments');
    const Foundlike = element.querySelector('.picture__likes');

    Foundpic.src = newPhoto.url;
    Foundcomments.textContent = newPhoto.comments.length;
    Foundlike.textContent = newPhoto.likes;
    element.addEventListener('click', () => {
      openBigPic(newPhoto);
    });
    fragment.appendChild(element);
  });
  document.querySelector('.pictures').appendChild(fragment);

}

function sortPhotosByComments() {
  const fragment = document.createDocumentFragment();
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  sortPhotosByCommentsButton.classList.add('img-filters__button--active');
  document.querySelectorAll('.picture').forEach((el) => el.remove());
  const photos = [...newElementPictures].sort((a, b) => b.comments.length - a.comments.length);
  photos.forEach((newPhoto) => {

    const element = picture.cloneNode(true);
    const Foundpic = element.querySelector('.picture__img');
    const Foundcomments = element.querySelector('.picture__comments');
    const Foundlike = element.querySelector('.picture__likes');

    Foundpic.src = newPhoto.url;
    Foundcomments.textContent = newPhoto.comments.length;
    Foundlike.textContent = newPhoto.likes;
    element.addEventListener('click', () => {
      openBigPic(newPhoto);
    });
    fragment.appendChild(element);
  });
  document.querySelector('.pictures').appendChild(fragment);

}

function sortByDefault() {
  const fragment = document.createDocumentFragment();
  document.querySelectorAll('.picture').forEach((el) => el.remove());
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  sortByDefaultButton.classList.add('img-filters__button--active');
  newElementPictures.forEach((newPhoto) => {

    const element = picture.cloneNode(true);
    const Foundpic = element.querySelector('.picture__img');
    const Foundcomments = element.querySelector('.picture__comments');
    const Foundlike = element.querySelector('.picture__likes');

    Foundpic.src = newPhoto.url;
    Foundcomments.textContent = newPhoto.comments.length;
    Foundlike.textContent = newPhoto.likes;
    element.addEventListener('click', () => {
      openBigPic(newPhoto);
    });
    fragment.appendChild(element);
  });
  document.querySelector('.pictures').appendChild(fragment);

}

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const shafflePhotosDebounce = debounce(() => shafflePhotos(),500);
const sortPhotosByCommentsDebounce = debounce(() => sortPhotosByComments(),500);
const sortByDefaultDebounce = debounce(() => sortByDefault(),500);
shafflePhotosButton.addEventListener('click', shafflePhotosDebounce);
sortPhotosByCommentsButton.addEventListener('click', sortPhotosByCommentsDebounce);
sortByDefaultButton.addEventListener('click', sortByDefaultDebounce);

export { debounce };
