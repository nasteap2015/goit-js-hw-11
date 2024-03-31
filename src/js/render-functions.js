'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { lightbox } from '../main.js';

let markup = undefined;
const gallery = document.querySelector('.gallery');

export function renderImg(img) {
  gallery.innerHTML = '';
  if (img.hits.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: '#ef4040',
      progressBar: false,
      messageColor: '#fafafb',
      maxWidth: '432px',
    });
  } else {
    markup = img.hits
      .flatMap(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}"> <img class="gallery-image" src="${webformatURL}" alt="${tags}"/> </a>
              <ul class="gallery-item-info-list"><li class="gallery-item-info">Likes<span class="gallery-item-info-value">${likes}</span></li><li class="gallery-item-info">Views<span class="gallery-item-info-value">${views}</span></li><li class="gallery-item-info">Comments<span class="gallery-item-info-value">${comments}</span></li><li class="gallery-item-info">Downloads<span class="gallery-item-info-value">${downloads}</span></li></ul></li>`
      )
      .join('');
    gallery.insertAdjacentHTML('afterbegin', markup);
    lightbox.refresh();
  }
}
