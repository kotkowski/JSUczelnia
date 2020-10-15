//pobranie referencji
const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const next = document.querySelector('.lightbox .nextArrow');
const prev = document.querySelector('.lightbox .prevArrow');
let currentImage;

//zapisanie się na zdarzenie click
for (let idx = 0; idx < gallery.length; idx++) {
    const img = gallery[idx];
    img.addEventListener('click', showLightbox);
    img.setAttribute('id', 'id'+idx);
    //() -> showLightbox(img)
}

lightbox.addEventListener('click', hideLightbox);
next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);


function showLightbox(ev) {
    ev.stopPropagation();
    currentImage=ev.target;
    const lightbox=document.querySelector('.lightbox ');
    const img=document.querySelector('.lightbox .Image');
    const imgUrl=ev.target.src;
    img.src=imgUrl;
    lightbox.classList.add('visible');
    
}

function hideLightbox(){
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}

function changeLightbox(zmiana){
    let newImage = zmiana;
    if(newImage > gallery.length -1){
        newImage = 0;
    }
    if(newImage<0){
        newImage = gallery.length -1;
    }
    const obraz=document.querySelector('#id'+ newImage);
    currentImage=obraz;
    const lightbox=document.querySelector('.lightbox');
    const img=document.querySelector('.lightbox .Image');
    const imgUrl=obraz.src;
    img.src=imgUrl;
    img.setAttribute('onclick','hideLightbox()');
    lightbox.classList.add('visible');
}
function showId(){
    let index;
    for(let i = 0; i < gallery.length; i++) {
        const idx = 'id' + i;
        
        if(idx == currentImage.id){
            index = i;
        }
    }
    return index;
}


function changeImage(selector){
    changeLightbox(showId() + selector);
}

function nextImage(ev){
    ev.stopPropagation();
    changeImage(1);
}
function prevImage(ev){
    ev.stopPropagation();
    changeImage(-1);
}