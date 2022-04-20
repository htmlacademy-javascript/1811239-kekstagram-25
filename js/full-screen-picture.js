import './chenge-picture-slider.js';

function openBigPicture(newPhoto) {
  const commentsCount = newPhoto.comments.length;
  const imgBigPicture = document.querySelector('.big-picture');
  imgBigPicture.classList.remove('hidden');
  document.querySelector('.big-picture__img').children[0].src = newPhoto.url;

  const foundLikes = document.querySelector('.likes-count');
  foundLikes.textContent = newPhoto.likes;

  const foundDescription = document.querySelector('.social__caption');
  foundDescription.textContent = newPhoto.description;

  const comments = [...document.querySelectorAll('.social__comment')];
  const oneComment = document.querySelector('.social__comment');
  comments.forEach((comment) => {
    comment.remove();
  });

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 6; i++) {
    const item = newPhoto.comments[i];
    const element = oneComment.cloneNode(true);
    const oneAvatar = element.querySelector('.social__picture');
    const commentsText = element.querySelector('.social__text');
    oneAvatar.src = item.avatar;
    commentsText.textContent = item.message;
    fragment.appendChild(element);
  }
  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.textContent = `5 из${newPhoto.comments.length}`;
  document.querySelector('.social__comments').appendChild(fragment);

  const uploadComments = document.querySelector('.social__comments-loader');
  uploadComments.addEventListener('click', () => {
    const commentOnPage = document.querySelector('.social__comments').children.length;
    if (commentOnPage < commentsCount) {
      for (let i = commentOnPage; (i < commentOnPage + 5) && (i < newPhoto.comments.length); i++) {
        const item = newPhoto.comments[i];
        const element = oneComment.cloneNode(true);
        const oneAvatar = element.querySelector('.social__picture');
        const commentsText = element.querySelector('.social__text');
        oneAvatar.src = item.avatar;
        commentsText.textContent = item.message;
        fragment.appendChild(element);
      }
      document.querySelector('.social__comments').appendChild(fragment);
      socialCommentCount.textContent = `${document.querySelector('.social__comments').children.length} из${newPhoto.comments.length}`;
    }
    if (document.querySelector('.social__comments').children.length >= newPhoto.comments.length) {
      uploadComments.classList.add('hidden');
    }

  });

  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    imgBigPicture.classList.add('hidden');
    uploadComments.classList.remove('hidden');
  });
}

export { openBigPicture };
