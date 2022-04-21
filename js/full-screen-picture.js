import { isEscapeKey } from './util.js';
const COMMENTS_SIZE = 5;

function replaceCommentsLoader() {
  const uploadComments = document.querySelector('.social__comments-loader');
  const uploadComentsClone = uploadComments.cloneNode(true);
  document.querySelector('.big-picture__social').replaceChild(uploadComentsClone, uploadComments);
}

function openBigPicture(newPhoto) {
  const uploadComments = document.querySelector('.social__comments-loader');
  uploadComments.classList.remove('hidden');
  document.body.classList.add('modal-open');
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

  for (let i = 0; i < COMMENTS_SIZE && i <= newPhoto.comments.length - 1; i++) {
    const item = newPhoto.comments[i];
    const element = oneComment.cloneNode(true);
    const oneAvatar = element.querySelector('.social__picture');
    const commentsText = element.querySelector('.social__text');
    oneAvatar.src = item.avatar;
    commentsText.textContent = item.message;
    fragment.appendChild(element);
  }

  const socialCommentCount = document.querySelector('.social__comment-count');
  document.querySelector('.social__comments').appendChild(fragment);
  socialCommentCount.textContent = `${document.querySelector('.social__comments').children.length} из ${newPhoto.comments.length} комментариев`;

  if (document.querySelector('.social__comments').children.length >= newPhoto.comments.length) {
    uploadComments.classList.add('hidden');
  }

  uploadComments.addEventListener('click', () => {
    const commentOnPage = document.querySelector('.social__comments').children.length;
    if (commentOnPage < commentsCount) {
      for (let i = commentOnPage; (i < commentOnPage + COMMENTS_SIZE) && (i < newPhoto.comments.length); i++) {
        const item = newPhoto.comments[i];
        const element = oneComment.cloneNode(true);
        const oneAvatar = element.querySelector('.social__picture');
        const commentsText = element.querySelector('.social__text');
        oneAvatar.src = item.avatar;
        commentsText.textContent = item.message;
        fragment.appendChild(element);
      }
      document.querySelector('.social__comments').appendChild(fragment);
      socialCommentCount.textContent = `${document.querySelector('.social__comments').children.length} из ${newPhoto.comments.length} комментариев`;
    }
    if (document.querySelector('.social__comments').children.length >= newPhoto.comments.length) {
      uploadComments.classList.add('hidden');
    }
  });

  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    imgBigPicture.classList.add('hidden');
    uploadComments.classList.remove('hidden');
    document.body.classList.remove('modal-open');
    replaceCommentsLoader();
  });

  document.addEventListener('keydown', (e) => {
    if (isEscapeKey(e)) {
      imgBigPicture.classList.add('hidden');
      uploadComments.classList.remove('hidden');
      document.body.classList.remove('modal-open');
      replaceCommentsLoader();
    }
  });
}

export { openBigPicture };
