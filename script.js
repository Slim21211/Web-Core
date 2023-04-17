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

let labels = document.querySelectorAll('.label-wrapper__item');
let expandButton = document.querySelector('.expand');
let collapseButton = document.querySelector('.collapse');
let labelWrapper = document.querySelector('.label-wrapper');
let repairMain = document.querySelector('.repair-main');
console.log(expandButton);

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    for (i = 0; i < labels.length; i++) {
        if (i > 5) {
            labels[i].classList.add('label-wrapper__item_hidden');
        }
    }
    collapseButton.classList.add('collapse_hidden');
}

if (window.innerWidth >= 1120) {
    for (i = 0; i < labels.length; i++) {
        if (i > 7) {
            labels[i].classList.add('label-wrapper__item_hidden');
        }
    }
    collapseButton.classList.add('collapse_hidden');
}


expandButton.addEventListener('click', function(env) {
    env.preventDefault();

    for (i = 0; i < labels.length; i++) {
        labels[i].classList.remove('label-wrapper__item_hidden');
    }
    labelWrapper.classList.add('label-wrapper-medium');
    repairMain.classList.add('repair-main_expanded');
    expandButton.classList.add('expand_hidden');
    expandButton.classList.remove('expand');
    collapseButton.classList.add('collapse');
    collapseButton.classList.remove('collapse_hidden');
});

collapseButton.addEventListener('click', function(env) {
    env.preventDefault();

    for (i = 0; i < labels.length; i++) {
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
    expandButton.classList.remove('expand_hidden');
    expandButton.classList.add('expand');
    collapseButton.classList.remove('collapse');
    collapseButton.classList.add('collapse_hidden');
});


