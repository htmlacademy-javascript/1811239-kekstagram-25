import './util.js';
import './data.js';
import './paintpic.js';
import './popup.js';
import './fullscreenpic.js';
import './formapristine.js';

function checkStringLength(str, len) {
  if (str.length <= len) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('12', 1);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
getRandomNumber(5, 15);

const selectElement = document.querySelector('.img-upload__input');
selectElement.addEventListener('change', (event) => {
  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const OwnPic = document.querySelector('.img-upload__preview');
  // const EffectsPreviewPic = document.querySelector('#effect-none');
  const tgt = event.target || window.event.srcElement,
    files = tgt.files;
  if (FileReader && files && files.length) {
    const fr = new FileReader();
    fr.onload = function () {
      OwnPic.children[0].src = fr.result;
      // EffectsPreviewPic.children[0].src = fr.result;
      // новый ком
      // маленькая картинка,фильтр
    };
    fr.readAsDataURL(files[0]);
  }
  const CloseButton = document.querySelector('.img-upload__cancel');
  CloseButton.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
  });
  imgUploadOverlay.classList.remove('hidden');
  // OwnPic.children[0].src = event.target.files[0];

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

export { getRandomNumber };
