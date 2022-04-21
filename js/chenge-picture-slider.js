const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
let currentEffect = '';
const newPicUplouded = document.querySelector('.img-upload__preview img');
const STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

function changePictureSize(item) {
  const sizeValue = document.querySelector('.scale__control--value');
  if (item.target.textContent === 'Уменьшить') {
    const scaleValue = Number(sizeValue.value) - STEP;
    if (scaleValue >= MIN_SCALE) {
      sizeValue.value = scaleValue;
      newPicUplouded.style.transform = `scale(${scaleValue / MAX_SCALE})`;

    }
  } else {
    const scaleValue = Number(sizeValue.value) + STEP;
    if (scaleValue <= MAX_SCALE) {
      sizeValue.value = scaleValue;
      newPicUplouded.style.transform = `scale(${scaleValue / MAX_SCALE})`;
    }
  }
}

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
  if (currentEffect === 'original') {
    newPicUplouded.style.filter = `(${newValue})`;
  }
  if (currentEffect === 'chrome') {
    newPicUplouded.style.filter = `grayscale(${newValue})`;
  }
  if (currentEffect === 'sepia') {
    newPicUplouded.style.filter = `sepia(${newValue})`;
  }
  if (currentEffect === 'invert') {
    newPicUplouded.style.filter = `invert(${newValue}%)`;
  }
  if (currentEffect === 'blur') {
    newPicUplouded.style.filter = `blur(${newValue}px)`;
  }
  if (currentEffect === 'brightness') {
    newPicUplouded.style.filter = `brightness(${newValue})`;
  }

});

const setSliderOptions = function (from, to, step) {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: from,
      max: to,
    },
    start: to,
    step: step,
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
};
const efectButton = document.querySelectorAll('.effects__item');
efectButton.forEach((item) => {
  item.addEventListener('click', (event) => {
    switch (event.target.textContent) {
      case 'Превью фото без эффекта':
        document.querySelector('.img-upload__effect-level').classList.add('hidden');
        newPicUplouded.classList = [];
        newPicUplouded.classList.add('effects__preview--none');
        currentEffect = 'none';
        break;
      case 'Превью эффекта Хром':
        document.querySelector('.img-upload__effect-level').classList.remove('hidden');
        newPicUplouded.classList = [];
        newPicUplouded.classList.add('effects__preview--chrome');
        setSliderOptions(0, 1, 0.1);
        currentEffect = 'chrome';
        break;
      case 'Превью эффекта Сепия':
        document.querySelector('.img-upload__effect-level').classList.remove('hidden');
        newPicUplouded.classList = [];
        newPicUplouded.classList.add('effects__preview--sepia');
        setSliderOptions(0, 1, 0.1);
        currentEffect = 'sepia';
        break;
      case 'Превью эффекта Марвин':
        document.querySelector('.img-upload__effect-level').classList.remove('hidden');
        newPicUplouded.classList = [];
        newPicUplouded.classList.add('effects__preview--marvin');
        setSliderOptions(0, 100, 1);
        currentEffect = 'invert';
        break;
      case 'Превью эффекта Фобос':
        document.querySelector('.img-upload__effect-level').classList.remove('hidden');
        newPicUplouded.classList = [];
        newPicUplouded.classList.add('effects__preview--phobos');
        setSliderOptions(0, 3, 0.1);
        currentEffect = 'blur';
        break;
      case 'Превью эффекта Зной':
        document.querySelector('.img-upload__effect-level').classList.remove('hidden');
        newPicUplouded.classList = [];
        newPicUplouded.classList.add('effects__preview--heat');
        setSliderOptions(1, 3, 0.1);
        currentEffect = 'brightness';
        break;
    }
  });
});

export { changePictureSize };
