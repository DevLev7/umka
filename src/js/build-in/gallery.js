// export default function gallery() {
//     const gallery = document.querySelector(".mySwiper");
//     let mySwiper;
//     function mobileSlider() {
//         if (window.innerWidth <= 533 && gallery.dataset.mobile == "false") {
//             mySwiper = new Swiper(gallery, {
//                 effect: "cards",
//                 grabCursor: true,

//                 pagination: {
//                     el: ".swiper-pagination",
//                 },
//             });
//             gallery.dataset.mobile = "true";
//         }
//         if (window.innerWidth > 534) {
//             gallery.dataset.mobile = "false";
//             mySwiper.destroy();
//         }
//     }
//     mobileSlider();
//     window.innerWidth("resize", () => {
//         mobileSlider();
//     });
// }

import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow } from 'swiper';
export default function gallerySwiper() {
    var gallerySwiper = new Swiper('.mySwiper', {
        // modules: [Pagination, EffectCards],
        // effect: 'cards',
        // cardsEffect: {
        //     slideShadows: false,
        // },

        // grabCursor: true,
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        modules: [Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        // loop: true,
        coverflowEffect: {
             rotate: -2,
            stretch: '-90%',
            depth: 200,
            modifier: -1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper__nav .swiper-pagination',
        },
    });
}
