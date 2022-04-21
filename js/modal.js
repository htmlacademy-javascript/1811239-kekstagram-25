import { isEscapeKey } from './util.js';

function clearImgUpload() {
  const imgUpload = document.querySelector('.img-upload__overlay');
  imgUpload.classList.add('hidden');
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

function closeSuccessModal() {
  document.querySelector('.success').remove();
  const bigPicture = document.querySelector('.big-picture');
  clearImgUpload();
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeSuccessModal);
}

function showSuccessModel() {
  document.body.classList.add('modal-open');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  const success = document.querySelector('#success').content.querySelector('.success');
  const resultSuccess = success.cloneNode(true);
  document.body.appendChild(resultSuccess);

  resultSuccess.addEventListener('click', () => {
    closeSuccessModal();
  });

  document.addEventListener('keydown', (event) => {
    if (isEscapeKey(event)) {
      closeSuccessModal();
    }
  });
}

function closeErrorModal() {
  clearImgUpload();
  document.querySelector('.error').remove();
  document.body.classList.remove('modal-open');
}

function showErrorModal() {
  clearImgUpload();
  const error = document.querySelector('#error').content.querySelector('.error');
  const errorCopy = error.cloneNode(true);
  document.body.classList.add('modal-open');
  document.body.appendChild(errorCopy);

  document.querySelector('.error').addEventListener('click', () => {
    closeErrorModal();
  });

  document.addEventListener('keydown', (event) => {
    if (isEscapeKey(event)) {
      closeErrorModal();
    }
  });
}

// Функция вывода сообщения с ошибкой на экран
const showAlert = (message, time) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '50px 250px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = 1.5;
  alertContainer.style.backgroundImage = 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, time);
};

export { showSuccessModel, showAlert, showErrorModal };
