import './util.js';
import './data.js';
import './paintpic.js';
import './full-screen-picture.js';
import './forma-pristine.js';

const selectElement = document.querySelector('.img-upload__input');
selectElement.addEventListener('change', (event) => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const ownPicture = document.querySelector('.img-upload__preview');
  const tgt = event.target || window.event.srcElement,
    files = tgt.files;
  if (FileReader && files && files.length) {
    const fr = new FileReader();
    fr.onload = function () {
      ownPicture.children[0].src = fr.result;
    };
    fr.readAsDataURL(files[0]);
  }
  const closeButton = document.querySelector('.img-upload__cancel');
  closeButton.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
  });
  imgUploadOverlay.classList.remove('hidden');
});

const fieldset = document.querySelector('.img-upload__text');
const textHashtags = document.querySelector('.text__hashtags');

textHashtags.onsubmit = function (evt) {
  if (name.value !== '#') {
    evt.preventDefault();
  }
};
fieldset.onsubmit = function (evt) {
  if (name.value !== '#') {
    evt.preventDefault();
  }
};

