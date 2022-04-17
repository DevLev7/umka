export default function features() {
    let card = document.querySelectorAll('.features__img-slide');
    let point = document.querySelector('.features__list');
    // let test = document.querySelector('.all__container');

    for (let i = 0; i < point.children.length; i++) {
        console.log(point.children[i].querySelector('.features__item-title'));
        point.children[i].querySelector('.features__item-title').addEventListener('mouseover', function (event) {
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
