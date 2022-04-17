export default function moreButon() {
    let card = document.querySelectorAll('.all__cards__item');
    let point = document.querySelector('.svg-map');
    let test = document.querySelector('.all__container');

    for (let i = 0; i < point.children.length; i++) {
        point.children[i].addEventListener('mouseenter', function (event) {
            getImage();
        });
    }


    function getImage() {
       const random = Math.floor(Math.random() * card.length);
        for (let i = 0; i < point.children.length; i++) {
            card[i].classList.remove('now');
            card[random].classList.add('now');
            
        }
    }
    

}






   