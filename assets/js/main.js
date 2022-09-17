const btn = document.querySelector('.menu__btn');
const navList = document.querySelector('.nav-list');

btn.addEventListener('click', () => {
   btn.classList.toggle('menu__btn-active');
   navList.classList.toggle('nav-list-active');
   document.body.classList.toggle('lock');
});