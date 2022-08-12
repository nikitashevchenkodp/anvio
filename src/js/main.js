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
    trigger.addEventListener('click', function () {
        body.classList.toggle(activeClass);
        trigger.style.color = window.getComputedStyle(trigger).color === 'rgb(255, 0, 0)' ? 'black' : 'rgb(255, 0, 0)';
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

//Slider

function slider(parentSelector, sliderSelector, tapeSelector, prevSelector, nextSelector, dotsSelector, slideSelector) {
    const parent = document.querySelector(parentSelector);
    const sliderContainer = parent.querySelector(sliderSelector);
    const allSlides = parent.querySelector(tapeSelector);
    const prevControl = parent.querySelector(prevSelector);
    const nextControl = parent.querySelector(nextSelector);
    const slides = parent.querySelectorAll(slideSelector);
    const dots = parent.querySelectorAll(dotsSelector);
    const slidesQuantity = slides.length;

    let slideIndex = 1;
    let offset = 0;
    let step = +window.getComputedStyle(sliderContainer).width.replace(/\D/g, "");
    allSlides.style.width = (100 * slidesQuantity) + '%';
    allSlides.style.transition = '0.7s';

    activeDots(slideIndex)

    prevControl.addEventListener('click', () => {
        if (offset === 0) {
            offset = -step * (slidesQuantity - 1)
            slideIndex = slides.length;
        } else {
            offset += step
            slideIndex -= 1
        }
        allSlides.style.transform = `translateX(${offset}px)`;
        activeDots(slideIndex)


    })
    nextControl.addEventListener('click', () => {
        if (offset === (-step * (slidesQuantity - 1))) {
            offset = 0
            slideIndex = 1
        } else {
            offset -= step
            slideIndex += 1
        }
        allSlides.style.transform = `translateX(${offset}px)`
        activeDots(slideIndex)
    })

    function activeDots(index) {
        dots.forEach(dot => dot.classList.remove('slider__dot--active'));
        dots.forEach((dot, i) => {
            index === (i + 1) ? dot.classList.add('slider__dot--active') : console.log('no')
        })
    }
}

slider('.slider', '.slider__wrapper', '.slider__container', '.slider__controll--prev', '.slider__controll--next', '.slider__dot', '.slide')