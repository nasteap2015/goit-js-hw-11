'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api.js';
import { renderImg } from './js/render-functions.js';

const form = document.querySelector('form');
export const input = document.querySelector('input');
export const gallery = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionsDelay: 250,
});
export const loader = document.querySelector('.loader');
loader.setAttribute('hidden', true);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (event.target.elements.keyword.value === '') {
    iziToast.error({
      message: 'Please enter key word',
      position: 'topRight',
      backgroundColor: '#ef4040',
      progressBar: false,
      messageColor: '#fafafb',
    });
    return;
  }
  fetchImg()
    .then(img => renderImg(img))
    .catch(error => console.log(error));
  form.reset();
});
