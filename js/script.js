const menuList = document.querySelectorAll('.list__item');
const readMoreButton = document.querySelector('.continue');
const readMoreButtonValue = readMoreButton.textContent;
const readLessButtonValue = "Скрыть";
const hiddenTextOne = document.querySelector('.hidden-text-1')
const hiddenTextTwo = document.querySelector('.hidden-text-2')
const hiddenTextThree = document.querySelector('.hidden-text-3')

console.log(menuList);

for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('click', function(evt) {
        for (let k = 0; k < menuList.length; k++) {
            menuList[k].classList.remove('list__item_item-switched');
        }
    menuList[i].classList.add('list__item_item-switched'); 
    })
}

readMoreButton.addEventListener('click', function() {
    if (readMoreButton.textContent === readMoreButtonValue) {
        hiddenTextOne.classList.remove('hidden-text-1');
        hiddenTextTwo.classList.remove('hidden-text-2');
        hiddenTextThree.classList.remove('hidden-text-3');
        readMoreButton.textContent = readLessButtonValue;
        readMoreButton.classList.remove('continue');
        readMoreButton.classList.add('return');
    } else {
        hiddenTextOne.classList.add('hidden-text-1');
        hiddenTextTwo.classList.add('hidden-text-2');
        hiddenTextThree.classList.add('hidden-text-3');
        readMoreButton.textContent = readMoreButtonValue;
        readMoreButton.classList.add('continue');
        readMoreButton.classList.remove('return');
    }
})