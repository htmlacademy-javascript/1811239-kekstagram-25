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

const name = ['Анна', 'Андрей', 'Денис','Игорь','Андрей','Марина','Сергей','Наталия','Ева','Светлана','Олеся','Жанна','Соня','София','Александра','Савва','Вася','Дима','Ульяна','Нина','Галина','Алла','Яна','Владимир','Лариса','Тоня',];
const id = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
const result = [];

for (let i = 0; i < 25; i++) {
   result.push(generateRandomPost());
}

// const message = titles.join();

// console.log(message);
