
import { getPhotos } from './api.js';
import { openBigPicture } from './full-screen-picture.js';


const sortByDefaultButton = document.querySelector('#filter-default');
const shafflePhotosButton = document.querySelector('#filter-random');
const sortPhotosByCommentsButton = document.querySelector('#filter-discussed');
const templateFragment = document.querySelector('#picture').content;
const picture = templateFragment.querySelector('.picture');
let newElementPictures = [];

const renderPictures = (photos, buttonElement) => {
  const fragment = document.createDocumentFragment();
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  buttonElement.classList.add('img-filters__button--active');
  document.querySelectorAll('.picture').forEach((el) => el.remove());
  photos.forEach((newPhoto) => {

    const element = picture.cloneNode(true);
    const foundPictures = element.querySelector('.picture__img');
    const foundComments = element.querySelector('.picture__comments');
    const foundLikes = element.querySelector('.picture__likes');

    foundPictures.src = newPhoto.url;
    foundComments.textContent = newPhoto.comments.length;
    foundLikes.textContent = newPhoto.likes;
    element.addEventListener('click', () => {
      openBigPicture(newPhoto);
    });
    fragment.appendChild(element);
  });
  document.querySelector('.pictures').appendChild(fragment);
};

getPhotos()
  .then((data) => {
    newElementPictures = data;
    sortByDefault();
  });

function shafflePhotos() {
  const photos = [...newElementPictures].sort(() => Math.random() - 0.5).slice(0, 10);
  renderPictures(photos, shafflePhotosButton);
}

function sortPhotosByComments() {
  const photos = [...newElementPictures].sort((a, b) => b.comments.length - a.comments.length);
  renderPictures(photos, sortPhotosByCommentsButton);
}

function sortByDefault() {
  renderPictures(newElementPictures, sortByDefaultButton);
}

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const shafflePhotosDebounce = debounce(() => shafflePhotos(), 500);
const sortPhotosByCommentsDebounce = debounce(() => sortPhotosByComments(), 500);
const sortByDefaultDebounce = debounce(() => sortByDefault(), 500);
shafflePhotosButton.addEventListener('click', shafflePhotosDebounce);
sortPhotosByCommentsButton.addEventListener('click', sortPhotosByCommentsDebounce);
sortByDefaultButton.addEventListener('click', sortByDefaultDebounce);

export { debounce };
