import opacity from './opacity';

export default function app() {
    if (document.querySelector('.media')) {
        const buttons = document.querySelectorAll('.media__filter-btn');
        const cards = document.querySelectorAll('.card');
        var btn1 = document.getElementById('loadMore');

        function filter(category, items) {
            items.forEach((item) => {
                const isItemFiltered = !item.classList.contains(category);
                const isShowAll = category.toLowerCase() === 'all';
                if (isItemFiltered && !isShowAll) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }
                if (isShowAll) {
                    btn1.style.display = 'flex';
                    for (let i = 7; i < box.length; i++) {
                        item.classList.add('hide');
                    }
                }
                btn1.addEventListener('click', function () {
                    btn1.style.display = 'none';
                });
                document.querySelector('.btn_type_all').addEventListener('click', function () {
                    btn1.style.display = 'flex';
                    for (let i = 7; i < box.length; i++) {
                        item.classList.add('hide');
                    }
                });
            });
        }

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let currentCategory = button.dataset.filter;
                filter(currentCategory, cards);
            });
        });
        document.querySelector('.btn_type_all').addEventListener('click', function () {
            opacity();
        });
    }
}
