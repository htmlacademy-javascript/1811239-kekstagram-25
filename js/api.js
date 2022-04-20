import { showSuccessModel, showAlert, showErrorModal } from './modal.js';

const GET_DATA = 'https://25.javascript.pages.academy/kekstagram/data';
const SENT_DATA = 'https://25.javascript.pages.academy/kekstagramasdf';

function getPhotos() {
  return fetch(GET_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        showAlert('Ошибка, попробуйте позже', 2000);
      }
    })
    .then((data) => data)
    .catch(() => {
      showAlert('Ошибка, попробуйте позже', 2000);
    });
}

function sentData(data) {
  debugger;
  fetch(SENT_DATA, {
    method: 'POST',
    body: data
  })
    .then((response) => {
      if (response.ok) {
        showSuccessModel();
      }
      else {
        showErrorModal();
      }
    })
    .catch(() => {
      showErrorModal();
    });
}

export { sentData, getPhotos };
