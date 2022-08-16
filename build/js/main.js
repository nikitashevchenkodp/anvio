const burgerBtn = document.querySelector('.burger');

const mobileNav = document.querySelector('.mobile__nav');
const pointBtn = document.querySelector('.mobile__nav__point');

const popup = document.querySelector('.mobile-popup');
const popupContent = popup.querySelector('.mobile-popup__content');
const mobileMenu = document.querySelector('.mobile__menu');
const locationMenu = document.querySelector('.location');

//Close popups when display becomes bigger than 1420px;
const resizeObserver = new ResizeObserver((entries) => entries.forEach(entry => {
    entry.contentRect.width >= 1420 && closePopup();
}))
resizeObserver.observe(document.body)

//Open and close mobile menu
document.querySelectorAll('.mobile__nav__item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.mobile__nav__item').forEach(item => item.classList.remove('mobile__nav__item--active'));
        popupContent.innerHTML = '';
        console.dir(this)
        if (this.classList.contains('burger')) {
            if (this.ariaExpanded == "false") {
                document.querySelectorAll('.mobile__nav__item').forEach(item => item.ariaExpanded = "false");
                this.classList.add('mobile__nav__item--active');
                this.ariaExpanded = "true";
                popupContent.innerHTML = '';
                popup.classList.add('mobile-popup__active');
                popupContent.appendChild(mobileMenu);
                mobileMenu.style.display = 'flex';
            } else {
                this.classList.remove('mobile__nav__item--active');
                this.ariaExpanded = "false"
                popupContent.innerHTML = '';
                popup.classList.remove('mobile-popup__active');
            }

        }
        if (this.classList.contains('mobile__nav__point')) {
            if (this.ariaExpanded == "false") {
                document.querySelectorAll('.mobile__nav__item').forEach(item => item.ariaExpanded = "false");
                this.classList.add('mobile__nav__item--active');
                this.ariaExpanded = "true";
                popupContent.innerHTML = '';
                popup.classList.add('mobile-popup__active');
                popupContent.appendChild(locationMenu);
                locationMenu.style.display = 'flex';
            } else {
                this.classList.remove('mobile__nav__container--active');
                this.ariaExpanded = "false";
                popupContent.innerHTML = '';
                popup.classList.remove('mobile-popup__active');
            }
        }
        this.lastElementChild.classList.contains('mobile__nav__phone') && console.log('phone');

    })
})



popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-popup')) {
        console.log('click');
        closePopup()
    }
});

function closePopup() {
    popup.classList.remove('mobile-popup__active');
    console.log('work');
    popupContent.innerHTML = '';
    document.querySelectorAll('.mobile__nav__item').forEach(container => container.classList.remove('mobile__nav__item--active'));
    document.querySelectorAll('.mobile__nav__item').forEach(container => container.ariaExpanded = "false");
    // document.querySelectorAll('.dropdown-body').forEach((item) => item.classList.remove('dropdown-body--open'));
    // document.querySelectorAll('.mobile-dropdown-body').forEach((item) => item.classList.remove('mobile-dropdown-body--open'));
}


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
function slider(parent, sliderSelector, tapeSelector, prevSelector, nextSelector, dotsSelector, slideSelector) {
    const sliderContainer = parent.querySelector(sliderSelector);
    const allSlides = parent.querySelector(tapeSelector);
    const prevControl = parent.querySelector(prevSelector);
    const nextControl = parent.querySelector(nextSelector);
    const slides = parent.querySelectorAll(slideSelector);

    const slidesQuantity = slides.length;
    let slideIndex = 1;
    let offset = 0;
    let step = +(window.getComputedStyle(parent).width.replace(/[a-zа-яё]/gi, ''))
    slides.forEach(slide => {
        slide.style.width = step + 'px'
        slide.style.height = window.getComputedStyle(parent).height
    })
    allSlides.style.width = (100 * slidesQuantity) + '%';
    allSlides.style.gridGap = "20px";
    allSlides.style.transition = '0.7s';

    createDots();
    const dots = parent.querySelectorAll(dotsSelector);
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

    function createDots() {
        const dotsContainer = document.createElement('ul');
        dotsContainer.classList.add('slider__dots');
        for (let i = 0; i < slidesQuantity; i++) {
            const dot = document.createElement('li');
            dot.classList.add('slider__dot');
            dotsContainer.appendChild(dot);
        }
        parent.appendChild(dotsContainer)
    }
}

document.querySelectorAll('.slider').forEach(sliderItem => {
    slider(sliderItem, '.slider__wrapper', '.slider__container', '.slider__controll--prev', '.slider__controll--next', '.slider__dot', '.slide')
})

//Mobile menu selects
const mobSelect = (parentNode, triggerSelector, bodySelector, bodyChildrenSelector, activeClass, containerSelector) => {
    const trigger = parentNode.querySelector(triggerSelector);
    const body = parentNode.querySelector(bodySelector);
    const container = document.querySelector(containerSelector);
    const children = parentNode.querySelectorAll(bodyChildrenSelector);
    trigger.addEventListener('click', function () {
        console.log(container);
        console.log(containerSelector);
        container.innerHTML = "";
        body.classList.toggle(activeClass);
        container.appendChild(body)
        trigger.style.color = window.getComputedStyle(trigger).color === 'rgb(255, 0, 0)' ? 'black' : 'rgb(255, 0, 0)';

    })

    children.forEach(child => {
        child.addEventListener('click', () => {
            trigger.innerText = child.dataset.value;
            body.classList.remove(activeClass);
            trigger.style.color = 'black';
            container.innerHTML = "";
        })
    })
}

const mobilesSelects = document.querySelector('.mobile__selects').querySelectorAll('.select');
mobilesSelects.forEach(selectItem => {
    mobSelect(selectItem, '.mobile-select-trigger', '.mobile-select-body', '.mobile-select-body__item', 'mobile-select-body--open', '.for_dropdown');
})

//Big Popup;

const triggers = document.querySelectorAll('[data-modal]');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        document.querySelector('.big-popup').classList.add('big-popup__active')
        document.body.style.overflow = "hidden";
        closePopup();
    })
})

document.querySelector('.big-popup').addEventListener('click', (e) => {
    if (e.target.classList.contains('big-popup')) {
        document.querySelector('.big-popup').classList.remove('big-popup__active')
        document.body.style.overflow = "";
    }
})

document.querySelector('.big-popup-close').addEventListener('click', () => {
    document.querySelector('.big-popup').classList.remove('big-popup__active')
    document.body.style.overflow = "";
})


//Swiper
const swiperBig = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        '540': {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false,
        },
        '900': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1350': {
            slidesPerView: 5,
            spaceBetween: 20,
        },


    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperEntertaiment = new Swiper(".guestSwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        '540': {
            slidesPerView: 2.5,
            spaceBetween: 20,
            centeredSlides: false,
        },
        '900': {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        '1350': {
            slidesPerView: 4,
            spaceBetween: 20,
        },

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiperReview = new Swiper(".reviewSwiper", {
    slidesPerView: 1.5,
    loop: true,
    // centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        '540': {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        '900': {
            slidesPerView: 3.2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        '1350': {
            slidesPerView: 4.2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        '1600': {
            slidesPerView: 4.5,
            spaceBetween: 15,
            centeredSlides: true,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const saleSwiper = new Swiper(".saleSwiper", {
    slidesPerView: 1.2,
    loop: true,
    // centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        '450': {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        '540': {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        '900': {
            slidesPerView: 3.2,
            spaceBetween: 20,
        },
        '1350': {
            slidesPerView: 4.2,
            spaceBetween: 20,
        },
        '1600': {
            slidesPerView: 4.5,
            spaceBetween: 15,
        },



    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiperPreview = new Swiper(".swiperPreview", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: false,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        '800': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '1380': {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },


    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Tabs

function tabs(parentNode, tabControlSelector, tabContentSelector, tabActiveClass) {
    const allTabsControll = parentNode.querySelectorAll(tabControlSelector);
    const allTabsContent = parentNode.querySelectorAll(tabContentSelector);
    showTab()

    function showTab(tabIndex = 0) {
        allTabsContent.forEach((tab, i) => {
            if (i == tabIndex) {
                tab.classList.remove('hide')
                tab.classList.add('show')
            } else {
                tab.classList.add('hide')
                tab.classList.remove('show')
            }
        })
    }

    allTabsControll.forEach((tabControll, i) => {
        tabControll.addEventListener('click', () => {
            allTabsControll.forEach(tab => tab.classList.remove(tabActiveClass))
            tabControll.classList.add(tabActiveClass)
            showTab(i)
        })
    })
}

tabs(document.querySelector('.big-tabs__container'), '.big-tabs__header__control', '.big-tabs__item', 'big-tabs__header__control--active');