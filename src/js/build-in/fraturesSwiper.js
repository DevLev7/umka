import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow]);
export default function mapswiper() {
    var thanksSwiperNew = new Swiper('.fraturesswiper', {
        modules: [Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow],

        effect: 'coverflow',
        // grabCursor: true,
        // loop: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: -2,
            stretch: '-92%',
            depth: 100,
            modifier: -1,
            slideShadows: false,
        },
        breakpoints:{
            500: {
                stretch: '-95%',
                slidesPerView: 1.5,
            },
        },
        pagination: {
            el: '.features .swiper-pagination',
        },
    });
}
