function checkStringLength(str, len) {
  if (str.length <= len) {
    return true;
  } else {
    return false;
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}
getRandomNumber(5, 15);
