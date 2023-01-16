import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


// // Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
const imagesMarcup = createImgCards(galleryItems);



galleryContainer.insertAdjacentHTML(`beforeend`, imagesMarcup);

galleryContainer.addEventListener(`click`, onGalleryContainerClick);




function createImgCards (galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return`
       <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
   }
   )
       .join(``);
}



function onGalleryContainerClick(evt)
{
    evt.preventDefault();
   

    if (evt.target.nodeName !== "IMG") {
        return
    }

     
    
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionPosition: "bottom`",
    captionDelay: "250ms",
});
