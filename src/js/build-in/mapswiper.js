import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow]);
export default function mapswiper() {
    var thanksSwiperNew = new Swiper('.mapswiperNew', {
        modules: [Navigation, Pagination, Autoplay, EffectFade, Scrollbar, EffectCoverflow],

        effect: 'coverflow',
        grabCursor: true,
        loop: true,
        slidesPerView: 1.5,
        coverflowEffect: {
            rotate: -2,
            stretch: '-90%',
            depth: 100,
            modifier: -1,
            slideShadows: false,
        },
    });
}
