import './build-in/lazyload';
import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';
import intro from './build-in/intro';
import initSliders from './custom/initSliders';
import menuBurger from './build-in/menuBurger';
import sectionScrolling from './build-in/sectionScrolling';
import statsScrolling from './build-in/statsScrolling';
import headerScrolling from './build-in/headerScrolling';
import moreButon from './build-in/moreButon';
import swipercharacters from './build-in/swipercharacters';
import tabs from './build-in/tabs';
import configuretabs from './build-in/configuretabs';
import gallerySwiper from './build-in/gallery';
import reviews from './build-in/reviews';
import plants from './build-in/plants';
import mapswiper from './build-in/mapswiper';
import cardsHover from './build-in/cardsHover';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';
// import validation from './build-in/validation';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    menuBurger();
    //sectionScrolling();
    statsScrolling();
    headerScrolling();
    gallerySwiper();
    moreButon();
    reviews();
    initSliders();
    intro();
    moreButon();
    editableTextContainer();
    // validation();
    swipercharacters();
    tabs();
    mapswiper();
    configuretabs();
    plants();
    cardsHover();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
