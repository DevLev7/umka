export default function features() {
    let card = document.querySelectorAll('.features__img-slide');
    let point = document.querySelector('.features__list');

    if(card.length > 1) {
        for (let i = 0; i < point.children.length; i++) {
            point.children[i].querySelector('.features__item').addEventListener('mouseover', function (event) {
                getImage();
            });
        }
    }

    function getImage() {
        const random = Math.floor(Math.random() * card.length);
        for (let i = 0; i < card.length; i++) {
            card[i].classList.remove('now');
            card[random].classList.add('now');
        }
    }
}
