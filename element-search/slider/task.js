"use strict";

const sliderPrev = document.getElementsByClassName(`slider__arrow_prev`);
const sliderNext = document.getElementsByClassName(`slider__arrow_next`);

const sliderItems = document.getElementsByClassName(`slider__item`);
const sliderItemsLength = sliderItems.length;

const sliderDots = document.getElementsByClassName(`slider__dot`);
const sliderDotsLength = sliderDots.length;

let currentSlide = 0;

sliderNext.item(0).onclick = function() {

    if (currentSlide == (sliderItemsLength - 1)) {
        sliderItems.item(0).classList.add(`slider__item_active`);
        sliderDots.item(0).classList.add(`slider__dot_active`);
        sliderItems.item(currentSlide).classList.remove(`slider__item_active`);
        sliderDots.item(currentSlide).classList.remove(`slider__dot_active`);
        currentSlide = 0;

    } else if (currentSlide == 0) {
        sliderItems.item(1).classList.add(`slider__item_active`);
        sliderDots.item(1).classList.add(`slider__dot_active`);
        sliderItems.item(0).classList.remove(`slider__item_active`);
        sliderDots.item(0).classList.remove(`slider__dot_active`);
        currentSlide++;

    } else {
        sliderItems.item(+currentSlide + 1).classList.add(`slider__item_active`);
        sliderDots.item(+currentSlide + 1).classList.add(`slider__dot_active`);
        sliderItems.item(currentSlide).classList.remove(`slider__item_active`);
        sliderDots.item(currentSlide).classList.remove(`slider__dot_active`);
        currentSlide++;
    }
}

sliderPrev.item(0).onclick = function() {
    
    if (currentSlide == sliderItemsLength) {
        sliderItems.item(sliderItemsLength - 2).classList.add(`slider__item_active`);
        sliderDots.item(sliderItemsLength - 2).classList.add(`slider__dot_active`);
        sliderItems.item(sliderItemsLength - 1).classList.remove(`slider__item_active`);
        sliderDots.item(sliderItemsLength - 1).classList.remove(`slider__dot_active`);
        currentSlide = sliderItemsLength - 2;

    } else if (currentSlide == 0) {
        sliderItems.item(sliderItemsLength - 1).classList.add(`slider__item_active`);
        sliderDots.item(sliderItemsLength - 1).classList.add(`slider__dot_active`);
        sliderItems.item(0).classList.remove(`slider__item_active`);
        sliderDots.item(0).classList.remove(`slider__dot_active`);
        currentSlide = (sliderItemsLength - 1);

    } else {
        sliderItems.item(+currentSlide - 1).classList.add(`slider__item_active`);
        sliderDots.item(+currentSlide - 1).classList.add(`slider__dot_active`);
        sliderItems.item(currentSlide).classList.remove(`slider__item_active`);
        sliderDots.item(currentSlide).classList.remove(`slider__dot_active`);
        currentSlide--;
    }
}

for (let i = 0; i < sliderDotsLength; i++) {
    sliderDots.item(i).onclick = function() {
        
        for (let i = 0; i < sliderDotsLength; i++) {
            if (sliderItems.item(i).classList.contains(`slider__item_active`)) {
                sliderItems.item(i).classList.remove(`slider__item_active`);
                sliderDots.item(i).classList.remove(`slider__dot_active`);
            }
        }

        sliderItems.item(i).classList.add(`slider__item_active`);
        sliderDots.item(i).classList.add(`slider__dot_active`);

        currentSlide = i;
    }
}