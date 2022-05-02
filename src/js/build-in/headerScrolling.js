export default function headerScrolling() {
    const header = document.querySelector('.header');

    if (header.classList.contains('header--white')) return;

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 100) {
            $('header').addClass('header--white');
        } else {
            /*Если меньше 100px удаляем класс для header*/
            $('header').removeClass('header--white');
        }
    });
}
