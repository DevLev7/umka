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
import features from './build-in/features';
import fraturesSwiper from './build-in/fraturesSwiper';
import timer from './build-in/timer';
import calculateConfig from './build-in/calculate';
import why from './build-in/why';
import validation from './build-in/validation';
import masks from './build-in/masks';
import medianew from './build-in/media';
import opacity from './build-in/opacity';
import modals from './build-in/modals';
import aos from './build-in/aos';
import services from './build-in/services';
import cookie from './build-in/cookie';
import animateText from './build-in/animateText'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    validation();

    aos();
    masks();
    plants();
    reviews();
    headerScrolling();
    medianew();
    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    menuBurger();
    opacity();
    cookie();
    services();
    modals();
    statsScrolling();
    gallerySwiper();
    moreButon();
    initSliders();
    intro();
    moreButon();
    editableTextContainer();
    swipercharacters();
    tabs();
    mapswiper();
    configuretabs();
    cardsHover();
    features();
    fraturesSwiper();
    timer();
    why();
    calculateConfig();
    animateText();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
    
    const menuItems = document.querySelectorAll('.header__menu li')
    let url = window.location.href
    menuItems.forEach(menuItem => {
        if(url.indexOf(menuItem.getAttribute('data-page')) !== -1 ) {
            menuItem.classList.add('activeMenuItem')
        }
    })
});
