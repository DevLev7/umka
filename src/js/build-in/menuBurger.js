export default function menuBurger() {
    const burger = document.querySelector('.header__burger')
    const menuBurger = document.querySelector('.menu-burger');
    const closeButton = document.querySelector('.menu-burger__close-button');

    burger.addEventListener('click', () => {
        menuBurger.classList.add('active');
    })

    closeButton.addEventListener('click', () => {
        menuBurger.classList.remove('active')
    })
}