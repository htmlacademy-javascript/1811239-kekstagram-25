import './chengepictureslider.js';

function openBigPic(Newphoto) {
  const commentsCount = Newphoto.comments.length;
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
  // Newphoto.comments.forEach((item) => {
  //   const element = Onecomment.cloneNode(true);
  //   const Oneavatar = element.querySelector('.social__picture');
  //   const CommentsText = element.querySelector('.social__text');
  //   Oneavatar.src = item.avatar;
  //   CommentsText.textContent = item.message;
  //   fragment.appendChild(element);
  // });
  for (let i = 0; i < 6; i++) {
    const item = Newphoto.comments[i];
    const element = Onecomment.cloneNode(true);
    const Oneavatar = element.querySelector('.social__picture');
    const CommentsText = element.querySelector('.social__text');
    Oneavatar.src = item.avatar;
    CommentsText.textContent = item.message;
    fragment.appendChild(element);
  }
  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.textContent = `5 из${Newphoto.comments.length}`;
  document.querySelector('.social__comments').appendChild(fragment);

  const uploadComments = document.querySelector('.social__comments-loader');
  uploadComments.addEventListener('click', () => {
    const commentOnPage = document.querySelector('.social__comments').children.length;
    if (commentOnPage < commentsCount) {
      for (let i = commentOnPage; (i < commentOnPage + 5) && (i < Newphoto.comments.length); i++) {
        const item = Newphoto.comments[i];
        const element = Onecomment.cloneNode(true);
        const Oneavatar = element.querySelector('.social__picture');
        const CommentsText = element.querySelector('.social__text');
        Oneavatar.src = item.avatar;
        CommentsText.textContent = item.message;
        fragment.appendChild(element);
      }
      document.querySelector('.social__comments').appendChild(fragment);
      socialCommentCount.textContent = `${document.querySelector('.social__comments').children.length} из${Newphoto.comments.length}`;
    }
    if (document.querySelector('.social__comments').children.length >= Newphoto.comments.length) {
      uploadComments.classList.add('hidden');
    }
    // imgBigPicture.classList.add('hidden');
  });

  const CloseButton = document.querySelector('.big-picture__cancel');
  CloseButton.addEventListener('click', () => {
    imgBigPicture.classList.add('hidden');
    uploadComments.classList.remove('hidden');
  });
}

export { openBigPic };
