import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function headerScrolling() {
    const header = document.querySelector('.header');

    if (header.classList.contains('header--white')) return;

    ScrollTrigger.create({
        trigger: header,
        start: 'bottom 10px',
        end: '0',
        onEnter: () => header.classList.add('header--white'),
        onEnterBack: () => header.classList.remove('header--white'),
    });
    if (innerWidth <= 414) {
        ScrollTrigger.create({
            trigger: header,
            start: 'bottom 1px',
            // markers: true,
            end: '0',
            onLeave: () => header.classList.add('header--white'),
            onEnterBack: () => header.classList.remove('header--white'),
        });
    }
}
