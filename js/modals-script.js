const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.site-wrapper__item:nth-child(1)');
const mainBlock = document.querySelector('.site-wrapper__item:nth-child(2)');
const closeMenu = document.querySelector('.menu-close');
const mobileMenuList = document.querySelectorAll('.mobile-menu-list__item');
const feedback = document.querySelector('.feedback');
const openFeedback = document.querySelector('.repair-icon');
const closeFeedback = feedback.querySelector('.close-button');

document.addEventListener('click', function(event) {
    if (event.target === menuIcon) {
        mobileMenu.classList.remove('site-wrapper__item_hidden');
        mainBlock.classList.add('site-wrapper__item_hidden');
        console.log('1');
    }
    if (event.target === closeMenu) {
        mobileMenu.classList.add('site-wrapper__item_hidden');
        mainBlock.classList.remove('site-wrapper__item_hidden');
        console.log('2');
    }
    if (!event.target.closest('.mobile-menu') && event.target != menuIcon && !event.target.closest('.feedback') && event.target != openFeedback) {
        mobileMenu.classList.add('site-wrapper__item_hidden');
        mainBlock.classList.remove('site-wrapper__item_hidden');
        feedback.classList.add('feedback_hidden');
        mainBlock.classList.remove('site-wrapper__item_transparent');
        mobileMenu.classList.remove('site-wrapper__item_transparent');
        console.log('3');
    }
    if (event.target === openFeedback) {
        if (window.innerWidth < 768) {
            mainBlock.classList.add('site-wrapper__item_hidden');
        }
        feedback.classList.remove('feedback_hidden');
        mainBlock.classList.add('site-wrapper__item_transparent');
        mobileMenu.classList.add('site-wrapper__item_transparent');
        console.log('4');
    }
    if (event.target === closeFeedback) {
        if (window.innerWidth < 768) {
            mainBlock.classList.remove('site-wrapper__item_hidden');
        }
        feedback.classList.add('feedback_hidden');
        mainBlock.classList.remove('site-wrapper__item_transparent');
        mobileMenu.classList.remove('site-wrapper__item_transparent');
        console.log('5');
    }
})

for (let i = 0; i < mobileMenuList.length; i++) {
    mobileMenuList[i].addEventListener('click', function() {
        mobileMenuList.forEach(function(elem){
            elem.classList.remove('mobile-menu-list__item_active');
        })
        mobileMenuList[i].classList.add('mobile-menu-list__item_active');
    })
}

