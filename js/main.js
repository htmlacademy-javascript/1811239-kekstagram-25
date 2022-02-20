function checkStringLength(str, len) {
  if (str.length <= len) {
    return true;
  } else {
    return false;
  }
}


function getRandomNumber(min, max) {
  returnMath.random() * (max - min) + min
}
getRandomNumber(5, 15);
