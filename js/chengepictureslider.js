function changePictureSize(item) {
  //const pictureSize = 100;
  const sizeValue = document.querySelector('.scale__control--value');
  if (item.target.textContent === 'Уменьшить') {
    const scaleValue = parseInt(sizeValue.value) - 25;
    if (scaleValue >= 25) {
      sizeValue.value = scaleValue;
      document.querySelector('.img-upload__preview img').style.transform = `scale(${scaleValue / 100})`;

    }
  } else {
    const scaleValue = parseInt(sizeValue.value) + 25;
    if (scaleValue <= 100) {
      sizeValue.value = scaleValue;
      document.querySelector('.img-upload__preview img').style.transform = `scale(${scaleValue / 100})`;
    }
  }
}
// var num = parseInt("071", 8);
const buttonDoSmall = document.querySelector('.scale__control--smaller');
const buttonDoBigger = document.querySelector('.scale__control--bigger');
buttonDoSmall.addEventListener('click', (event) => {
  changePictureSize(event);
});
buttonDoBigger.addEventListener('click', (event) => {
  changePictureSize(event);
});

//var t = document.querySelector('.img-upload__preview').children[0];
//t.classList.add('effects__preview--chrome');
const efectButton = document.querySelectorAll('.effects__item');
efectButton.forEach((item) => {
  item.addEventListener('click', (event) => {
    //console.log(event);
    switch (event.target.textContent) {
      case 'Превью фото без эффекта':
        document.querySelector('.img-upload__preview').children[0].classList.add = ('effects__preview--none');
        break;
      case 'Превью эффекта Хром':
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--chrome');
        // document.querySelector('.img-upload__preview').children[0].style.filter = 'effects__preview--chrome';
        break;
      case 'Превью эффекта Сепия':
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--sepia');
        // alert('Сепия');
        break;
      case 'Превью эффекта Марвин':
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--marvin');
        break;
      case 'Превью эффекта Фобос':
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--phobos');
        break;
      case 'Превью эффекта Зной':
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--heat');
        break;
    }
  });
});

export { changePictureSize };
