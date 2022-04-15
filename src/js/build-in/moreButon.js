export default function moreButon() {
    const mediaQuery = window.matchMedia('(max-width: 789px)');

    if (mediaQuery.matches) {
        window.onload = function () {
            let box = document.getElementsByClassName('why__item');
            let btn = document.getElementById('why__button');
            let count = box.length - 4;
            document.getElementById('count').innerHTML = count;
            for (let i = 4; i < box.length; i++) {
                box[i].style.display = 'none';
            }

            let countD = 4;
            btn.addEventListener('click', function () {
                let box = document.getElementsByClassName('why__item');
                countD += 4;
                if (countD <= box.length) {
                    for (let i = 0; i < countD; i++) {
                        box[i].style.display = 'flex';
                    }
                }
                btn.style.display = 'none';
            });
        };
    }
}
