import './build-in/lazyload';
import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';
import intro from "./build-in/intro";
import initSliders from "./custom/initSliders";
import menuBurger from "./build-in/menuBurger";
import sectionScrolling from "./build-in/sectionScrolling";
import statsScrolling from "./build-in/statsScrolling";
import headerScrolling from "./build-in/headerScrolling";
import moreButon from "./build-in/moreButon";
// import gallery from "./build-in/gallery";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    menuBurger();
    //sectionScrolling();
    statsScrolling();
    headerScrolling();
    // gallery();
    moreButon();


    initSliders();
    intro();
    editableTextContainer();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
