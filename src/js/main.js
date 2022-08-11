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
    popup.classList.toggle('popup__active');
    popupContent.appendChild(locationMenu);
    locationMenu.style.display = 'flex';
})






//Custom dropdown

function dropdown(parentNode, dropBodySelector, activeClass) {
    const dropBody = parentNode.querySelector(dropBodySelector);
    parentNode.addEventListener('click', () => {
        dropBody.classList.toggle(activeClass);
        parentNode.querySelector('span').style.color = window.getComputedStyle(parentNode.querySelector('span')).color == "rgb(255, 0, 0)" ? "black" : "rgb(255, 0, 0)";
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

const dropdownDesktop = (parentNode, triggerSelector, bodySelector, activeClass) => {
    const trigger = parentNode.querySelector(triggerSelector);
    const body = parentNode.querySelector(bodySelector);
    trigger.addEventListener('click', () => {
        trigger.style.color = window.getComputedStyle(trigger).color === 'rgb(255, 0, 0)' ? 'black' : 'rgb(255, 0, 0)';
        body.classList.toggle(activeClass);
    })
}
//Desktop dropdowns
const dropdownList = document.querySelectorAll('.dropdown-container');
dropdownList.forEach((item) => {
    dropdownDesktop(item, '.dropdown-trigger', '.dropdown-body', 'dropdown-body--open');
});

//Mobile dropdowns
const mobileDropdownList = document.querySelectorAll('.mobile-dropdown-container');
mobileDropdownList.forEach((item) => {
    dropdownDesktop(item, '.mobile-dropdown-trigger', '.mobile-dropdown-body', 'mobile-dropdown-body--open');
});


//Selects
// const selectsMobile = document.querySelectorAll('.select');

// const selectsDrop = (parentNode, triggerSelector, bodySelector, activeClass, placeSelector) => {
//     const trigger = parentNode.querySelector(triggerSelector);
//     const body = parentNode.querySelector(bodySelector);
//     const place = document.querySelector(placeSelector)
//     console.log(trigger);
//     console.log(body);
//     console.log(place);
//     trigger.addEventListener('click', () => {
//         trigger.style.color = window.getComputedStyle(trigger).color === 'rgb(255, 0, 0)' ? 'black' : 'rgb(255, 0, 0)';
//         body.classList.add(activeClass);
//         place.appendChild(body.cloneNode(true))
//         console.log('i work')
//     })
// }

// selectsMobile.forEach((item) => {
//     selectsDrop(item, '.mobile-dropdown-trigger', '.mobile-dropdown-body', 'mobile-dropdown-body--open', '.for_dropdown');
// });