import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow]);
export default function plants() {
    var plantsSwiper = new Swiper('.plant__inner_slider', {
        slidesPerView: 1.2,
        // loop: true,
        reverseDirection: true,
        spaceBetween: 35,
        initialSlide: 1,
        navigation: {
            nextEl: '.plant__inner_slider .swiper-button-next',
            prevEl: '.plant__inner_slider .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 1.2,
                // loop: true,
                reverseDirection: true,
                spaceBetween: 35,
                initialSlide: 1,
            },
        },

        // centeredSlides: true,
    });
    var thanksSwiper = new Swiper('.plant__inner_thanks', {
        modules: [Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        coverflowEffect: {
            rotate: -2,
            stretch: '-80%',
            depth: 200,
            modifier: -1,
            slideShadows: false,
        },
        breakpoints: {
            320: {
                effect: false,
                slidesPerView: 2.3,
                spaceBetween: 15,
                centeredSlides: false,
            },
            1024: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                loop: true,
                slidesPerView: 1.5,
                coverflowEffect: {
                    rotate: -2,
                    stretch: '-80%',
                    depth: 200,
                    modifier: -1,
                    slideShadows: false,
                },
            },
        },
    });
}
