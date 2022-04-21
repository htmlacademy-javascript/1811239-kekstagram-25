import { showSuccessModel, showAlert, showErrorModal } from './modal.js';

const GET_DATA = 'https://25.javascript.pages.academy/kekstagram/data';
const SENT_DATA = 'https://25.javascript.pages.academy/kekstagram';
const ALERT_TIME = 2000;
function getPhotos() {
  return fetch(GET_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        showAlert('Ошибка, попробуйте позже', ALERT_TIME);
      }
    })
    .then((data) => data)
    .catch(() => {
      showAlert('Ошибка, попробуйте позже', ALERT_TIME);
    });
}

function sentData(data) {
  const submitButton = document.querySelector('.img-upload__submit');
  submitButton.setAttribute('disabled', true);
  fetch(SENT_DATA, {
    method: 'POST',
    body: data
  })
    .then((response) => {
      document.querySelector('.img-upload__input').value = '';
      if (response.ok) {
        showSuccessModel();
      }
      else {
        showErrorModal();
      }
    })
    .catch(() => {
      showErrorModal();
    })
    .finally(() => {
      submitButton.removeAttribute('disabled');
    });
}

export { sentData, getPhotos };
