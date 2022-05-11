export default function animateText() {
    const title          = document.querySelector('.main-title'),
          titleVideo     = document.querySelector('.overview__video-description'),
          titleConfig    = document.querySelector('.configure-poster__text'),
          titleUmka      = document.querySelector('.configure__title'),
          titleWhy       = document.querySelector('.why__expert-title'),
          titleGet       = document.querySelector('.expert__expert-title'),
          titleMedia     = document.querySelector('.gallery__wrapper h2'),
          titleCharacter = document.querySelector('.characters__title'),
          titleReview    = document.querySelector('.reviews__inner h2'),
          titleOrder     = document.querySelector('.order__inner-content h2'),
          titleCenter    = document.querySelector('.all__title h2'),
          titlePlant     = document.querySelector('.plant__title h2'),
          titleContact   = document.querySelector('.callback__content-container__first h2')
    window.addEventListener('DOMContentLoaded', () => {
        title.classList.add('animateTextWhite')
    })

    window.addEventListener('scroll', () => {
        if(titleVideo.getBoundingClientRect().y <= 600) {
            titleVideo.classList.add('animateTextWhite')
        }
        if(titleConfig.getBoundingClientRect().y <= 800) {
            titleConfig.querySelectorAll('span')[0].classList.add('animateTextBlack')
            titleConfig.querySelectorAll('span')[1].classList.add('animateTextBlue')
        }
        if(titleUmka.getBoundingClientRect().y <= 650) {
            titleUmka.classList.add('animateTextWhite')
        }
        if(titleWhy.getBoundingClientRect().y <= 730) {
            titleWhy.classList.add('animateTextBlack')
        }
        if(titleGet.getBoundingClientRect().y <= 790) {
            titleGet.classList.add('animateTextWhite')
        }
        if(titleMedia.getBoundingClientRect().y <= 750) {
            titleMedia.classList.add('animateTextBlack')
        }
        if(titleCharacter.getBoundingClientRect().y <= 750) {
            titleCharacter.classList.add('animateTextBlack')
        }
        if(titleReview.getBoundingClientRect().y <= 720){
            titleReview.classList.add('animateTextBlack')
        }
        if(titleOrder.getBoundingClientRect().y <= 690) {
            titleOrder.classList.add('animateTextWhite')
        }
        if(titleCenter.getBoundingClientRect().y <= 690) {
            titleCenter.classList.add('animateTextBlack')
        }
        if(titlePlant.getBoundingClientRect().y <= 680) {
            titlePlant.classList.add('animateTextBlack')
        }
        if(titleContact.getBoundingClientRect().y <= 780) {
            titleContact.classList.add('animateTextWhite')
        }
    })
}

