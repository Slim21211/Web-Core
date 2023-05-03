const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.site-wrapper__item:nth-child(1)');
const mainBlock = document.querySelector('.site-wrapper__item:nth-child(2)');
const closeMenu = document.querySelector('.menu-close');
const mobileMenuList = document.querySelectorAll('.mobile-menu-list__item');

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

for (let i = 0; i < mobileMenuList.length; i++) {
    mobileMenuList[i].addEventListener('click', function() {
        mobileMenuList.forEach(function(elem){
            elem.classList.remove('mobile-menu-list__item_active');
        })
        mobileMenuList[i].classList.add('mobile-menu-list__item_active');
    })
}