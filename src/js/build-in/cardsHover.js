export default function moreButon() {
    let card = document.querySelectorAll('.all__cards__item');
    let point = document.querySelector('.svg-map');
    let test = document.querySelector('.all__container');
    
// Так как почти на всех страницах есть all__cards__item делаем проверку, чтобы данный скрипт не ломал весь js
    if(card.length > 1 && window.location.href.indexOf('services') == -1) {
        for (let i = 0; i < point.children.length; i++) {
            point.children[i].addEventListener('mouseenter', function (event) {
                getImage();
            });
        }
    }

    function getImage() {
       const random = Math.floor(Math.random() * card.length);
        for (let i = 0; i < point.children.length; i++) {
            card[i].classList.remove('now');
            card[random].classList.add('now');
            
        }
    }
    

}






   