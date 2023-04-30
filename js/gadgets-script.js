const swiperGadgets = new Swiper('.repair-gadgets-swiper', {
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

const gadgets = document.querySelectorAll('.gadgets-wrapper__item');
const expandGadgetsButton = document.querySelector('.gadgets-expand-button');
const expandGadgetsButtonValue = expandGadgetsButton.textContent;
const collapseGadgetButtonValue = "Скрыть";
const gadgetsWrapper = document.querySelector('.repair-gadgets__item:nth-child(2)');

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    for (let i = 0; i < gadgets.length; i++) {
        if (i > 2) {
            gadgets[i].classList.add('gadgets-wrapper__item_hidden');
        }
    }
}

if (window.innerWidth > 1120) {
    for (let i = 0; i < gadgets.length; i++) {
        if (i > 3) {
            gadgets[i].classList.add('gadgets-wrapper__item_hidden');
        }
    }
}

expandGadgetsButton.addEventListener('click', function() {
    if (expandGadgetsButton.textContent === expandGadgetsButtonValue) {
        expandGadgetsButton.textContent = collapseGadgetButtonValue;
        expandGadgetsButton.classList.remove('gadgets-expand-button');
        expandGadgetsButton.classList.add('gadgets-collapse-button');
        if (window.innerWidth >= 768 && window.innerWidth < 1120) {
            gadgetsWrapper.classList.add('repair-gadgets__item_medium');
            gadgetsWrapper.classList.remove('repair-gadgets__item');
        } else if (window.innerWidth >= 1120) {
            gadgetsWrapper.classList.add('repair-gadgets__item_large');
            gadgetsWrapper.classList.remove('repair-gadgets__item'); 
        }
        gadgetsWrapper.classList.add('repair-gadgets__item_medium');
        gadgetsWrapper.classList.remove('repair-gadgets__item');

        for (let i = 0; i < gadgets.length; i++) {
            gadgets[i].classList.remove('gadgets-wrapper__item_hidden');
        }
    } else {            
        expandGadgetsButton.textContent = "Показать все";
        expandGadgetsButton.classList.remove('gadgets-collapse-button');
        expandGadgetsButton.classList.add('gadgets-expand-button');
        gadgetsWrapper.classList.remove('repair-gadgets__item_medium');
        gadgetsWrapper.classList.add('repair-gadgets__item');
        for (let i = 0; i < gadgets.length; i++) {
            if (window.innerWidth >= 1120) {
                if (i > 3) {
                    gadgets[i].classList.add('gadgets-wrapper__item_hidden');
                }
                gadgetsWrapper.classList.remove('repair-gadgets__item_large');
                gadgetsWrapper.classList.add('repair-gadgets__item');
            } else {
                if (i > 2) {
                    gadgets[i].classList.add('gadgets-wrapper__item_hidden');
                }
            }
        }
    }
});