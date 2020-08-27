import '../css/content.css'

const undersore =   document.getElementsByClassName('underscore');
const img       =   document.querySelector('.img');

const arrayGallery = new Array(
    "../src/assets/img-01.jpg",
    "../src/assets/img-02.jpg",
    "../src/assets/img-03.jpg",
    "../src/assets/img-04.jpg",
)

/* arrayGallery.forEach(element => {
    undersore[element].onclick = ()=>{
        img.src = arrayGallery[element];
    }
});
 */

 for (let i = 0; i < undersore.length; i++) {
    undersore[i].onclick = function(){
        img.src = arrayGallery[i];
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    }
    
 }

/*  for( let i in arrayGallery){
     undersore[i].onclick() = ()=>{
         console.log(arrayGallery[i]);
     }
 } */

/*  undersore.addEventListener('onclick', ()=>{
     for (const i in arrayGallery) {
        img.src = arrayGallery[i];
     }
 }) */