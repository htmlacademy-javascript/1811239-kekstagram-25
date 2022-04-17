function showSuccessModel() {
  const success = document.querySelector('#success').content.querySelector('.success');
  const resultSuccess = success.cloneNode(true);
  document.body.appendChild(resultSuccess);
}

// const CloseModelForm = document.querySelector('.success__inner');
// const CloseButtonModelForm = document.querySelector('.success__button');
// CloseButtonModelForm.addEventListener('click', () => {
//   CloseButtonModelForm.classList.add('hidden');
//   CloseModelForm .classList.remove('hidden');
// });

export { showSuccessModel };
