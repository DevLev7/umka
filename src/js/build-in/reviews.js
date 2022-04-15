import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar]);
export default function reviews() {
    var swiperReviews = new Swiper('.reviews__inner-slider', {
        slidesPerView: 3.7,
        spaceBetween: 55,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1210: {
                slidesPerView: 3.7,
                spaceBetween: 40,
                pagination: {
                    el: '.reviews .swiper-pagination',
                },
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            490: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
    });
}
