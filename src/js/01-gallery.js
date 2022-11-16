"use strict";

// Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого 
// зображення.
// Підключення скрипту і стилів бібліотеки модального вікна 
// . Використовуй CDN сервіс jsdelivr і додай у проект посилання на 
// мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. 
// Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні 
// перед відкриттям. Використовуй готову розмітку модального вікна із 
// зображенням з прикладів бібліотеки basicLightbox.


import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryCollection = document.querySelector('.gallery');

function createMarkupCollection (galleryItems){
    return galleryItems.map((galleryItem) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
          <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
          />
        </a>
      </div>`
    }).join('');
}

createMarkupCollection(galleryItems);

galleryCollection.innerHTML = createMarkupCollection(galleryItems);

galleryCollection.addEventListener('click', imageClick);

function imageClick (event) {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        return;
    }
    console.dir(event.target)

    const instance = basicLightbox.create(`
        <img src='${event.target.dataset.source}' width="800" height="600">
    `)

    console.log(event.target.dataset.source)

    instance.show();

    galleryCollection.addEventListener('keydown', (event) => {
        if(event.code === 'Escape') {
            instance.close();
        }
    });
}