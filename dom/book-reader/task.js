"use strict";

const fontSizeSelector = document.querySelectorAll(`div.book__control_font-size > a.font-size`);
const fontSizeSelectorLength = fontSizeSelector.length;

const colorSelector = document.querySelectorAll(`div.book__control_color > a.color`);
const colorSelectorLength = colorSelector.length;

const BackgroundColorSelector = document.querySelectorAll(`div.book__control_background > a.color`);
const BackgroundColorSelectorLength = BackgroundColorSelector.length;

const bookContent = document.querySelector(`div.book__content`);

for (let i = 0; i < fontSizeSelectorLength; i++) {
    fontSizeSelector.item(i).addEventListener(`click`, fontSizeChanger);

    function fontSizeChanger(event) {
        event.preventDefault();
        
        if (this.classList.contains(`font-size_small`)) {
            fontSizeClassRemover();   
            this.classList.add(`font-size_active`);

            bookContent.classList.remove(`book_fs-big`);
            bookContent.classList.add(`book_fs-small`);
        } else if (this.classList.contains(`font-size_big`)) {
            fontSizeClassRemover();
            this.classList.add(`font-size_active`);

            bookContent.classList.remove(`book_fs-small`);
            bookContent.classList.add(`book_fs-big`);
        } else {
            fontSizeClassRemover();
            this.classList.add(`font-size_active`);

            bookContent.classList.remove(`book_fs-small`);
            bookContent.classList.remove(`book_fs-big`);
        }
    }

    function fontSizeClassRemover() {
        for (let j = 0; j < fontSizeSelectorLength; j++) {
            fontSizeSelector.item(j).classList.remove(`font-size_active`);
        }
    }
    
}


for (let i = 0; i < colorSelectorLength; i++) {
    colorSelector.item(i).addEventListener(`click`, colorChanger);

    function colorChanger(event) {
        event.preventDefault();

        if (this.classList.contains(`color_active`) !== true) {
            for (let j = 0; j < colorSelectorLength; j++) {
                colorSelector.item(j).classList.remove(`color_active`);
            }
            this.classList.add(`color_active`);
        }
        
        if (this.classList.contains(`color_gray`)) {            
            bookContent.classList.remove(`book_color-whitesmoke`);
            bookContent.classList.add(`book_color-gray`);

        } else if (this.classList.contains(`color_whitesmoke`)) {
            bookContent.classList.remove(`book_color-gray`);
            bookContent.classList.add(`book_color-whitesmoke`);

        } else {
            bookContent.classList.remove(`book_color-whitesmoke`);
            bookContent.classList.remove(`book_color-gray`);
        }

    }
}


for (let i = 0; i < BackgroundColorSelectorLength; i++) {
    BackgroundColorSelector.item(i).addEventListener(`click`, BackgroundColorChanger);

    function BackgroundColorChanger(event) {
        event.preventDefault();

        if (this.classList.contains(`color_active`) !== true) {
            for (let j = 0; j < colorSelectorLength; j++) {
                BackgroundColorSelector.item(j).classList.remove(`color_active`);
            }
            this.classList.add(`color_active`);
        }
        
        if (this.classList.contains(`color_gray`)) {            
            bookContent.classList.remove(`book_bg-black`);
            bookContent.classList.add(`book_bg-gray`);

        } else if (this.classList.contains(`color_black`)) {
            bookContent.classList.remove(`book_bg-grey`);
            bookContent.classList.add(`book_bg-black`);

        } else {
            bookContent.classList.remove(`book_bg-black`);
            bookContent.classList.remove(`book_bg-gray`);
        }
        
    }
}