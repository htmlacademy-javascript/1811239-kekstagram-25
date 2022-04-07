function openBigPic(Newphoto) {
  const imgBigPicture = document.querySelector('.big-picture');
  imgBigPicture.classList.remove('hidden');
  document.querySelector('.big-picture__img').children[0].src = Newphoto.url;

  const foundLikes = document.querySelector('.likes-count');
  foundLikes.textContent = Newphoto.likes;

  const foundDescription = document.querySelector('.social__caption');
  foundDescription.textContent = Newphoto.description;

  const comments = [...document.querySelectorAll('.social__comment')];
  const Onecomment = document.querySelector('.social__comment');
  comments.forEach((comment) => {
    comment.remove();
  });
  const fragment = document.createDocumentFragment();
  Newphoto.comments.forEach((item) => {
    const element = Onecomment.cloneNode(true);
    const Oneavatar = element.querySelector('.social__picture');
    const CommentsText = element.querySelector('.social__text');
    Oneavatar.src = item.avatar;
    CommentsText.textContent = item.message;
    fragment.appendChild(element);
  });
  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.textContent = `5 из${Newphoto.comments.length}`;
  document.querySelector('.social__comments').appendChild(fragment);

  const CloseButton = document.querySelector('.big-picture__cancel');
  CloseButton.addEventListener('click', () => {
    imgBigPicture.classList.add('hidden');
  });
}

export { openBigPic };
