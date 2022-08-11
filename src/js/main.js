const burgerBtn = document.querySelector('.burger');

const mobileNav = document.querySelector('.mobile__nav');
const pointBtn = document.querySelector('.mobile__nav__point');

const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup__content');
const mobileMenu = document.querySelector('.mobile__menu')
const locationMenu = document.querySelector('.location');

burgerBtn.addEventListener('click', () => {
    popupContent.innerHTML = '';
    popup.classList.toggle('popup__active')
    popupContent.appendChild(mobileMenu)
    mobileMenu.style.display = 'flex';
})

pointBtn.addEventListener('click', () => {
    popupContent.innerHTML = '';
    popup.classList.toggle('popup__active')
    popupContent.appendChild(locationMenu)
    locationMenu.style.display = 'flex';
})






//Custom dropdown

function dropdown(parentNode, dropBodySelector, activeClass) {
    const dropBody = parentNode.querySelector(dropBodySelector)

    parentNode.addEventListener('click', () => {
        dropBody.classList.toggle(activeClass)
    })
}

// dropdown('.mobile__link', '.dropdown', document.querySelector('.mobile__item'));

// const dropDownMenuItems = document.querySelectorAll('.dropJs');
// console.log(dropDownMenuItems);
// document.querySelectorAll('a').forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault()
//     })
// })

// for (let i = 0; i < dropDownMenuItems.length; i++) {
//     dropdown('span', 'ul', dropDownMenuItems[i]);
// }

//Mobile dropdown

const mobileDropdownContainer = document.querySelectorAll('.mobile__item-dropJs');

mobileDropdownContainer.forEach((item) => {
    console.log(item);
    dropdown(item, '.mobile__dropdown', 'mobile__dropdown--open')
});