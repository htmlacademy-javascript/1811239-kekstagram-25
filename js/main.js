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
  // закрытие окна на кнопку esc
  // document.addEventListener('big-picture__preview', (e) => {
  //   if(e.keyCode === 27) {document. imgUploadOverlay('upload-file').hidden= 1;}
  // });
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

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, );
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomNumber,isEscapeKey, isEnterKey, showAlert, debounce };
