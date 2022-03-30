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

import './util.js';
import './data.js';
import './paintpic.js';
import './popup.js';
import './fullscreenpic.js';
export {getRandomNumber};
