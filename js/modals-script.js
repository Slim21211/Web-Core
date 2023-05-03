const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.site-wrapper__item:nth-child(1)');
const mainBlock = document.querySelector('.site-wrapper__item:nth-child(2)');
const closeMenu = document.querySelector('.menu-close');

console.log(mainBlock);

menuIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('site-wrapper__item_hidden');
    mainBlock.classList.add('site-wrapper__item_hidden');
})

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.add('site-wrapper__item_hidden');
    mainBlock.classList.remove('site-wrapper__item_hidden');
})