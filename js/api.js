import { showSuccessModel } from './showsuccessmodel.js';

const GET_DATA = 'https://25.javascript.pages.academy/kekstagram/data';
const SENT_DATA = 'https://25.javascript.pages.academy/kekstagram';
function getPhotos() {
  return fetch(GET_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        return 'ошибка получения фото';
      }
    })
    .then((data) => data)
    .catch(() => {
      // обработка ошибки
    });
}

function sentData(data) {
  fetch(SENT_DATA, {
    method: 'POST',
    body: data
  })
    .then((response) => {
      if (response.ok) {
        showSuccessModel();
      }
      else {
        // обработка ошибки
      }
    })
    .catch(() => {
      // обработка ошибки
      // console.log(error);
    });
}

export { sentData, getPhotos };
