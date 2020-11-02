//Menu
const navSlide = () => {
    const iconMenu = document.querySelector('.btn-Menu');
    const nav = document.querySelector('.menu');

    //Onclick do icon do menu
    iconMenu.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
    })
}
navSlide();

//Dark Mode
const darkMode = () => {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#darkMode');

    checkbox.addEventListener('change', () => {
        html.classList.toggle('dark');
    })
}
darkMode();
