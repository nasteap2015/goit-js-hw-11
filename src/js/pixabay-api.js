'use strict';

import { gallery, input, loader } from '../main.js';

export function fetchImg() {
  loader.hidden = false;
  gallery.innerHTML = '';
  const options = new URLSearchParams({
    key: '43152818-b9b3fa9adc16b8bb91486a66f',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
