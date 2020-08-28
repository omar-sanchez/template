import '../css/header.css'

const menu      = document.querySelector('.toggle');
const listmenu  = document.querySelector('.listmenu');
menu.addEventListener('click',() =>{
    menu.classList.toggle('active');
    listmenu.classList.toggle('active');
})