export default function services() {
    if (document.querySelector('.services')) {
        let slides = document.querySelectorAll('.all__cards__item');
        let currentSlide = 0;
        function nextSlide() {
            slides[currentSlide].className = 'all__cards__item';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].className = 'all__cards__item now';
        }
        let autoSlide = setInterval(nextSlide, 5000);
    }
}
