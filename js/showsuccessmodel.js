
function showSuccessModel() {
  const success = document.querySelector('#success').content.querySelector('.success');
  const resultSuccess = success.cloneNode(true);
  document.body.appendChild(resultSuccess);
}

export{showSuccessModel};
