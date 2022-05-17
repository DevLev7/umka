export default function why() {
    if(document.querySelector('.why__wrapper') !== null) {
        let whySection = $('.why__wrapper');
        $(window).scroll(function () {
            var wt = $(window).scrollTop();
            var wh = $(window).height();
            var et = $(whySection).offset().top;
            var eh = $(whySection).outerHeight();
            var dh = $(document).height();
            if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
                whySection.addClass('visible');
            }
        });
    }
}
