import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function statsScrolling() {
    const statsList = document.querySelector('.stats__img-wrapper');
    const statFirst = document.querySelector('.stats-img-1');
    const statSecond = document.querySelector('.stats-img-2');
    const statThird = document.querySelector('.stats-img-3');

    let tl = gsap.timeline();
    tl.to(statFirst, { opacity: 0, delay: 0.5, duration: 0.5 });
    tl.to(statSecond, { opacity: 1, duration: 0.5 }, '-=0.1');
    tl.to(statSecond, { opacity: 0, delay: 0.5, duration: 0.5 });
    tl.to(statThird, { opacity: 1, duration: 0.5 }, '-=0.1');

    let tlMobile = gsap.timeline();

    tlMobile.to(statFirst, { duration: 0.11 });
    tlMobile.to(statFirst, { opacity: 0, duration: 0.5 });
    tlMobile.to(statSecond, { opacity: 1, duration: 0.5 }, '-=0.1');
    tlMobile.to(statSecond, { opacity: 0, delay: 0.5, duration: 0.5 });
    tlMobile.to(statThird, { opacity: 1, duration: 0.3 }, '-=0.2');

    ScrollTrigger.matchMedia({
        '(min-width: 1081px)': function () {
            ScrollTrigger.create({
                animation: tl,
                trigger: statsList,
                start: '20% center',
                end: '85% 40%',
                scrub: true,
                pin: true,
            });
        },
        '(max-width: 1080px)': function () {
            ScrollTrigger.create({
                animation: tl,
                trigger: statsList,
                start: '20% center',
                end: '75% 40%',
                scrub: true,
                pin: true,
            });
        },
        '(max-width: 960px)': function () {
            tl.kill();

            ScrollTrigger.create({
                animation: tlMobile,
                trigger: statsList,
                start: 'top center',
                end: '60% 50%',
                scrub: true,
                pin: true,
            });
        },
    });

    /* Задаю высоты общего блока с фотографий с белым фоном */

    if (window.innerWidth <= 960) {
        const imgBlock = document.querySelector('.stats__img-block');
        const images = document.querySelectorAll('.stats__img');
        let height = 0;

        images.forEach((img) => {
            if (img.clientHeight >= height) height = img.clientHeight;
        });

        imgBlock.style.height = height + 'px';
    }
}
