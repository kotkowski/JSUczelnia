//pobranie referencji
const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const next = document.querySelector('.lightbox .nextArrow');
const prev = document.querySelector('.lightbox .prevArrow');

//zapisanie się na zdarzenie click
for (let idx = 0; idx < gallery.length; idx++) {
    const img = gallery[idx];
    img.addEventListener('click', showLightbox);
    //() -> showLightbox(img)
}

lightbox.addEventListener('click', hideLightbox);
next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);


function showLightbox(ev) {
    ev.stopPropagation();
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox .image');
    const imgUrl = ev.target.src;
    selected = ev.target;
    img.src = imgUrl;
    lightbox.classList.add('visible');
}

function hideLightbox(){
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}

function nextImage(ev){
    ev.stopPropagation();
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox .image');
    const imgUrl = ev.target.src;
}
function prevImage(ev){
    ev.stopPropagation();
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox .image');
    img.src = selected.
    
}