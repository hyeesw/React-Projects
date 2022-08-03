const hamburger_but = document.querySelector('.hamburger');
const menu = document.querySelector('.nav_mid');
const icon = document.querySelector('.nav_right');

    /*@@@@@@@ 여기  @@@@@@@*/
    hamburger_but.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})