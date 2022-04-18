import { sentData } from './api.js';
const form = document.getElementById('upload-select-image');
const pristine = new Pristine(form, {
  classTo: 'text__el--description',
  errorTextParent: 'text__el--description',
  errorTextClass: 'text__error',
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (pristine.validate()) {
    sentData(new FormData(e.target));
  }
});

const hashtagsOne = document.querySelector('.text__hashtags');
const descriptionOne = document.querySelector('.text__description');
const textErrorHashtag = document.querySelector('.text__error-hashtag');

function validatehashtagsOn(value) {
  if (value === '') {
    return true;
  }

  const hashTags = value.split(' ');
  for (let i = 0; i < hashTags.length; i++) {
    if (hashTags[i].startsWith('#') === false) {
      textErrorHashtag.textContent = 'хештег должен начинаться с #';
      return false;

    }

  }
  const uniqueHashtags = new Set(hashTags);
  if (hashTags.length !== uniqueHashtags.size) {
    textErrorHashtag.textContent = 'хештеги должны быть уникальными';
    return false;
  }
  return true;

}


function validateDescription(value) {
  if (value.length > 140) {
    textErrorHashtag.textContent = 'описание должно быть не больше 140 символов';
    return false;
  }

  textErrorHashtag.textContent = '';
  return true;

}
pristine.addValidator(hashtagsOne, validatehashtagsOn, 'хештег должен начинаться с #,должен быть уникальным, хештег должен быть разделен пробелом');
pristine.addValidator(descriptionOne, validateDescription, 'ограничение длинны описания');

