'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value === '') {
    iziToast.error({
      message: 'Please enter key word',
      position: 'topRight',
      backgroundColor: '#ef4040',
      progressBar: false,
    });
  } else {
    fetchImg()
      .then(img => renderImg(img))
      .catch(erroe => console.log(error));
  }
  form.reset();
});
