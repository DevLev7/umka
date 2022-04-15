import Swiper, {Navigation, Pagination, Autoplay, EffectFade, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar]);
export default function swipercharacters() {
   

    var swiper = new Swiper(".myswipernew", {
        centeredSlides: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            
        },
    });
}