const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.site-wrapper__item:nth-child(1)');
const mainBlock = document.querySelector('.site-wrapper__item:nth-child(2)');
const closeMenu = document.querySelector('.menu-close');
const mobileMenuList = document.querySelectorAll('.mobile-menu-list__item');
const feedback = document.querySelector('.feedback');
const openFeedback = document.querySelector('.repair-icon');
const closeFeedback = feedback.querySelector('.close-button');
const callback = document.querySelector('.callback');
const openCallback = mobileMenu.querySelector('.menu-call');
const openCallbackTablet = document.querySelector('.call');
const closeCallback = callback.querySelector('.close-button');
const menuBlur = document.querySelector('.menu-blur');
const feedbackBlur = document.querySelector('.feedback-blur');
const callbackBlur = document.querySelector('.callback-blur');
const openFeedbackWeb = document.querySelector('.open-feedback');

menuIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('site-wrapper__item_hidden');
    mainBlock.classList.add('site-wrapper__item_hidden');
    menuBlur.classList.remove('menu-blur_hidden');
});

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.add('site-wrapper__item_hidden');
    mainBlock.classList.remove('site-wrapper__item_hidden');
    menuBlur.classList.add('menu-blur_hidden');
});

menuBlur.addEventListener('click', function() {
    mobileMenu.classList.add('site-wrapper__item_hidden');
    mainBlock.classList.remove('site-wrapper__item_hidden');
    menuBlur.classList.add('menu-blur_hidden');
});

openFeedback.addEventListener('click', function() {
    feedback.classList.remove('feedback_hidden');
    feedbackBlur.classList.remove('feedback-blur_hidden');
});

openFeedbackWeb.addEventListener('click', function() {
    feedback.classList.remove('feedback_hidden');
    feedbackBlur.classList.remove('feedback-blur_hidden');
});

closeFeedback.addEventListener('click', function() {
    feedback.classList.add('feedback_hidden');
    feedbackBlur.classList.add('feedback-blur_hidden');
});

feedbackBlur.addEventListener('click', function() {
    feedback.classList.add('feedback_hidden');
    feedbackBlur.classList.add('feedback-blur_hidden');
});

openCallback.addEventListener('click', function() {
    callback.classList.remove('callback_hidden');
    callbackBlur.classList.remove('callback-blur_hidden');
});
openCallbackTablet.addEventListener('click', function() {
    callback.classList.remove('callback_hidden');
    callbackBlur.classList.remove('callback-blur_hidden');
});

closeCallback.addEventListener('click', function() {
    callback.classList.add('callback_hidden');
    callbackBlur.classList.add('callback-blur_hidden');
});

callbackBlur.addEventListener('click', function() {
    callback.classList.add('callback_hidden');
    callbackBlur.classList.add('callback-blur_hidden');
});

for (let i = 0; i < mobileMenuList.length; i++) {
    mobileMenuList[i].addEventListener('click', function() {
        mobileMenuList.forEach(function(elem){
            elem.classList.remove('mobile-menu-list__item_active');
        })
        mobileMenuList[i].classList.add('mobile-menu-list__item_active');
    })
}

