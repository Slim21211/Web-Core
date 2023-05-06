import Swiper, { Pagination } from 'swiper';

const swiperPrices = new Swiper('.prices-swiper', {
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    slidesPerView: 'auto',
    grabCursor: true,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        768: {
            initialSlide: 0,
            spaceBetween: 0,
            enabled: false
            }
        },
});