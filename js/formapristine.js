const form = document.getElementById('upload-select-image');
const pristine = new Pristine(form, {
  classTo: 'text__el--description',
  errorTextParent: 'text__el--description',
  errorTextClass: 'text__error',
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const valid = pristine.validate();
});

const hashtagsOne = document.querySelector('.text__hashtags');
const textErrorHashtag = document.querySelector('.text__error-hashtag');

function validatehashtagsOn(value) {
  const hashTags = value.split(' ');
  for (let i = 0; i < hashTags.length; i++) {
    if (hashTags[i].startsWith('#') === false) {
      textErrorHashtag.textContent = 'тестовая ошибка';
      return false;

    }

  }
  return true;

  // const uniqueHashtags = new Set(hashTags);
}
pristine.addValidator(hashtagsOne, validatehashtagsOn, 'хештег должен начинаться с #,должен быть уникальным, хештег должен быть разделен пробелом');
// const elem = document.getElementById('');

// // A validator to check if the first letter is capitalized
// pristine.addValidator(elem, (value) => {
//   if (value.length && value[0] === value[0].toUpperCase()) {
//     return true;
//   }
//   return false;
// }, 'The first character must be capitalized', 2, false);
