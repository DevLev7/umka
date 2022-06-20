import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar]);
export default function reviews() {
    var swiperReviews = new Swiper('.reviews__inner-slider', {
        slidesPerView: 3.7,
        spaceBetween: 90,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.reviews__inner-slider .swiper-pagination',
        },
        breakpoints: {
            1440: {
                slidesPerView: 3.7,
                spaceBetween: 90,
            },
            1210: {
                slidesPerView: 3.2,
                spaceBetween: 55,
            },
            769: {
                slidesPerView: 2.3,
                spaceBetween: 40,
            },
            320: {
                slidesPerView: 1.2,
                spaceBetween: 40,
            },
            490: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
    });
}
