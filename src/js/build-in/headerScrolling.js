import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function headerScrolling() {
    const header = document.querySelector('.header');

    if (header.classList.contains('header--white')) return;

    ScrollTrigger.create({
        trigger: header,
        start: 'bottom 13%',
        end: 'bottom bottom',
        onEnter: () => header.classList.add('header--white'),
        onEnterBack: () => header.classList.remove('header--white'),
    })
}