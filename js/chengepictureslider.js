const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
let currentEffect='';
const allEffects = document.querySelectorAll('.effects__radio');
function changePictureSize(item) {
  //const pictureSize = 100;
  const sizeValue = document.querySelector('.scale__control--value');
  if (item.target.textContent === 'Уменьшить') {
    const scaleValue = Number(sizeValue.value) - 25;
    if (scaleValue >= 25) {
      sizeValue.value = scaleValue;
      document.querySelector('.img-upload__preview img').style.transform = `scale(${scaleValue / 100})`;

    }
  } else {
    const scaleValue = Number(sizeValue.value) + 25;
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

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  const newValue = sliderElement.noUiSlider.get();
  valueElement.value = newValue;
  if( currentEffect==='chrome'){
    document.querySelector('.img-upload__preview').children[0].style.filter=`grayscale(${newValue})`;

  }
});

allEffects.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.value === 'chrome'){
      sliderElement.noUiSlider.updateOptions({range: {
        min: 0,
        max: 100,
      },
      start: 80,
      format: {
        to: function (value) {
          if (Number.isInteger(value)) {
            return value.toFixed(0);
          }
          return value.toFixed(1);
        },
        from: function (value) {
          return parseFloat(value);
        },
      },});
    }
  }
  );
});

const efectButton = document.querySelectorAll('.effects__item');
efectButton.forEach((item) => {
  item.addEventListener('click', (event) => {
    //console.log(event);
    switch (event.target.textContent) {
      case 'Превью фото без эффекта':
        document.querySelector('.img-upload__preview').children[0].classList = [];
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--none');
        break;
      case 'Превью эффекта Хром':
        document.querySelector('.img-upload__preview').children[0].classList = [];
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--chrome');
        currentEffect='chrome';
        // document.querySelector('.img-upload__preview').children[0].style.filter = 'effects__preview--chrome';
        break;
      case 'Превью эффекта Сепия':
        document.querySelector('.img-upload__preview').children[0].classList = [];
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--sepia');
        // alert('Сепия');
        break;
      case 'Превью эффекта Марвин':
        document.querySelector('.img-upload__preview').children[0].classList = [];
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--marvin');
        break;
      case 'Превью эффекта Фобос':
        document.querySelector('.img-upload__preview').children[0].classList = [];
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--phobos');
        break;
      case 'Превью эффекта Зной':
        document.querySelector('.img-upload__preview').children[0].classList = [];
        document.querySelector('.img-upload__preview').children[0].classList.add('effects__preview--heat');
        break;
    }
  });
});

export { changePictureSize };
