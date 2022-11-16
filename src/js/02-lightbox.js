"use strict";


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryCollection = document.querySelector('.gallery');

function createMarkupCollection (galleryItems){
    return galleryItems.map((galleryItem) => {
        return `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
      </a>`
    }).join('');
}

createMarkupCollection(galleryItems);

galleryCollection.innerHTML = createMarkupCollection(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay:250});


