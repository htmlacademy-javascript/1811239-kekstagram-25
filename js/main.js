function checkStringLength(str, len) {
  if (str.length <= len) {
    return true;
  } else {
    return false;
  }
}
checkStringLength('12',1);

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomNumber(5, 15);

// let writeComment = [];
// console.log(message);

// {
//   id: 24;
//   avatar: 'img/avatar-1.svg';
//   message: 'Всё отлично!';
//   name: 'Анна';
// }
