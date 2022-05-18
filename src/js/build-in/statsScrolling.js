export default function statsScrolling() {
    const list      = document.querySelectorAll('.stats__list .stats__item-wrapper'),
          listItem1 = document.querySelectorAll('.stats__list .stats__item-wrapper')[0],
          listItem2 = document.querySelectorAll('.stats__list .stats__item-wrapper')[1],
          listImg1  = document.querySelector('.stats__img-wrapper .stats-img-1'),
          listImg2  = document.querySelector('.stats__img-wrapper .stats-img-2'),
          listImg3  = document.querySelector('.stats__img-wrapper .stats-img-3')

    window.addEventListener('scroll', () => {
        if(list.length > 1 && window.innerWidth > 1024) {
            if(listItem1.getBoundingClientRect().top < 110 && !listImg1.classList.contains('stats-img-hide')) {
                listImg1.classList.add('stats-img-hide')
                listImg2.classList.remove('stats-img-hide')
            }else if (listItem1.getBoundingClientRect().top > 110 && !listImg2.classList.contains('stats-img-hide')) {
                listImg1.classList.remove('stats-img-hide')
                listImg2.classList.add('stats-img-hide')
            }
            if(listItem2.getBoundingClientRect().top < 0 && !listImg2.classList.contains('stats-img-hide')) {
                listImg2.classList.add('stats-img-hide')
                listImg3.classList.remove('stats-img-hide')
            } else if(listItem2.getBoundingClientRect().top > 0 && !listImg3.classList.contains('stats-img-hide')) {
                listImg3.classList.add('stats-img-hide')
                listImg2.classList.remove('stats-img-hide')
            }
        }
    })
}