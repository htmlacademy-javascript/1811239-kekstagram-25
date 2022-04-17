function showSuccessModel() {
  const success = document.querySelector('#success').content.querySelector('.success');
  const resultSuccess = success.cloneNode(true);
  document.body.appendChild(resultSuccess);
  const SuccessButton = document.querySelector('.success__button');

  SuccessButton.addEventListener('click', () => {
    const bigPicture = document.querySelector('.big-picture');
    const imgUpload = document.querySelector('.img-upload__overlay');
    const successModal = document.querySelector('.success');
    bigPicture.classList.add('hidden');
    imgUpload.classList.add('hidden');
    successModal.classList.add('hidden');
    document.body.classList.remove('modal-open');


  });
  document.addEventListener('keydown', (e) => {
    if (e.code==='Escape') {
      const bigPicture = document.querySelector('.big-picture');
      const imgUpload = document.querySelector('.img-upload__overlay');
      const successModal = document.querySelector('.success');
      bigPicture.classList.add('hidden');
      imgUpload.classList.add('hidden');
      successModal.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

// const CloseModelForm = document.querySelector('.success__inner');
// const CloseButtonModelForm = document.querySelector('.success__button');
// CloseButtonModelForm.addEventListener('click', () => {
//   CloseButtonModelForm.classList.add('hidden');
//   CloseModelForm .classList.remove('hidden');
// });

export { showSuccessModel };
