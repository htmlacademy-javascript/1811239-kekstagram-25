function showSuccessModel() {
  const success = document.querySelector('#success').content.querySelector('.success');
  const resultSuccess = success.cloneNode(true);
  document.body.appendChild(resultSuccess);
}

const CloseModelForm = document.querySelector('#success');
const CloseButtonModelForm = document.querySelector('.success__button');
CloseButtonModelForm.addEventListener('click', () => {
  CloseModelForm.classList.add('hidden');
  // uploadComments.classList.remove('hidden');
});

export { showSuccessModel };
