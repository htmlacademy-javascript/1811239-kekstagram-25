import './util.js';
import './paint-picture.js';
import './full-screen-picture.js';
import './forma-pristine.js';
import { isEscapeKey } from './util.js';

const selectElement = document.querySelector('.img-upload__input');
selectElement.addEventListener('change', (event) => {
  document.body.classList.add('modal-open');
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const ownPicture = document.querySelector('.img-upload__preview');
  const target = event.target,
    files = target.files;
  if (FileReader && files && files.length) {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      ownPicture.children[0].src = fileReader.result;
    };
    fileReader.readAsDataURL(files[0]);
  }
  const closeButton = document.querySelector('.img-upload__cancel');
  closeButton.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
  });
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', (kbEvent) => {
    if (isEscapeKey(kbEvent)) {
      document.body.classList.remove('modal-open');
      imgUploadOverlay.classList.add('hidden');
    }
  });
});

