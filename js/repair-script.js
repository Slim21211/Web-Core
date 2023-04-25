const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    slidesPerView: 'auto',
    grabCursor: true,
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

const labels = document.querySelectorAll('.label-wrapper__item');
const expandButton = document.querySelector('.expand');
const labelWrapper = document.querySelector('.label-wrapper');
const repairMain = document.querySelector('.repair-main');
const expandButtonValue = expandButton.textContent;
const collapseButtonValue = "Скрыть";

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    for (let i = 0; i < labels.length; i++) {
        if (i > 5) {
            labels[i].classList.add('label-wrapper__item_hidden');
        }
    }
}

if (window.innerWidth >= 1120) {
    for (let i = 0; i < labels.length; i++) {
        if (i > 7) {
            labels[i].classList.add('label-wrapper__item_hidden');
        }
    }
}

expandButton.addEventListener('click', function() {

    if (expandButton.textContent === expandButtonValue) {
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove('label-wrapper__item_hidden');
        }
        labelWrapper.classList.add('label-wrapper-medium');
        repairMain.classList.add('repair-main_expanded');
        expandButton.textContent = collapseButtonValue;
        expandButton.classList.remove('expand');
        expandButton.classList.add('collapse');
    } else {
        for (let i = 0; i < labels.length; i++) {
            if (window.innerWidth >= 1120) {
                if (i > 7) {
                    labels[i].classList.add('label-wrapper__item_hidden');
                }
            } else {
                if (i > 5) {
                    labels[i].classList.add('label-wrapper__item_hidden');
                }
            }
        }
        
        labelWrapper.classList.remove('label-wrapper_expanded');
        repairMain.classList.remove('repair-main_expanded');
        expandButton.textContent = "Показать все";
        expandButton.classList.remove('collapse');
        expandButton.classList.add('expand');
    }
});