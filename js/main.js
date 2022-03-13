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

const id = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
const avatar = ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'];
const message = ['Всё отлично!', 'В целом всё неплохо.Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'];
const appellation = ['Анна', 'Андрей', 'Денис', 'Игорь', 'Андрей', 'Марина', 'Сергей', 'Наталия', 'Ева', 'Светлана', 'Олеся', 'Жанна', 'Соня', 'София', 'Александра', 'Савва', 'Вася', 'Дима', 'Ульяна', 'Нина', 'Галина', 'Алла', 'Яна', 'Владимир', 'Лариса', 'Тоня',];

const result = [];


const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const generateRandomPost = () => ({
  id: getRandomArrayElement(id),
  avatar: getRandomArrayElement(avatar),
  name: getRandomArrayElement(appellation),
  message: getRandomArrayElement(message),

});


for (let i = 0; i < 25; i++) {
  result.push(generateRandomPost());
}
console.log(result);

