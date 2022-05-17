import gsap from 'gsap';
import { Swiper } from 'swiper';

const slider = new Swiper('.intro-slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
        690: {
            spaceBetween: 40,
        },
    },
});

export default function intro() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    /* Задаю внутренний отступ сверху для раздела intro, в зависимости от высоты header */

    const header = document.querySelector('.header');
    const headerHeight = header.clientHeight;

    const introPaddingTop = headerHeight + 167 + 'px';

    intro.style.setProperty('--intro-padding-top', introPaddingTop);

    /* Задаю автоматическое переключение слайдера через прогрессбар */

    let tl = gsap.timeline();

    slider.on('slideChangeTransitionStart', () => {
        initLineAnimation(tl);
    });

    initLineAnimation(tl);
}

function initLineAnimation(tl) {
    tl.restart();
    tl.clear();
    const progress = document.querySelector('.swiper-slide-active .intro-slider__progressbar-progress');
    tl.to(progress, { width: '100%', duration: 6, onComplete: () => slider.slideNext(), clearProps: 'all' });
}
