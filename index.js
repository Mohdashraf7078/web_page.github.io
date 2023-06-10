const btn = document.querySelector('.menu');
const cut = document.getElementById('cut');
const menubar = document.querySelector('.menubar')

btn.addEventListener('click', () => {
    menubar.style.left = `0`;
})

cut.addEventListener('click', () => {
    menubar.style.left = `-10rem`;
})