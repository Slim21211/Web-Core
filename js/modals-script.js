const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.site-wrapper__item:nth-child(1)');
const mainBlock = document.querySelector('.site-wrapper__item:nth-child(2)');
const closeMenu = document.querySelector('.menu-close');

document.addEventListener('click', function(event) {
    if (event.target === menuIcon) {
        mobileMenu.classList.remove('site-wrapper__item_hidden');
        mainBlock.classList.add('site-wrapper__item_hidden');
    }
    if (event.target === closeMenu) {
        mobileMenu.classList.add('site-wrapper__item_hidden');
        mainBlock.classList.remove('site-wrapper__item_hidden');
    }
    if (!event.target.closest('.mobile-menu') && event.target != menuIcon) {
        mobileMenu.classList.add('site-wrapper__item_hidden');
        mainBlock.classList.remove('site-wrapper__item_hidden');
    }
})

