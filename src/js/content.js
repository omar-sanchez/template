import '../css/content.css'

const undersore =   document.getElementsByClassName('underscore');
const img       =   document.querySelector('.img');

const arrayGallery = new Array(
    "assets/img-01.jpg",
    "assets/img-02.jpg",
    "assets/img-03.jpg",
    "assets/img-04.jpg",
)
 for (let i = 0; i < undersore.length; i++) {
    undersore[i].onclick = function(){
        img.src = arrayGallery[i];
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    }
 }
