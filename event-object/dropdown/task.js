"use strict";

const dropdownButton = document.getElementsByClassName(`dropdown__value`);
    const dropdownButtonLength = dropdownButton.length;
const dropdownList = document.getElementsByClassName(`dropdown__list`);
    const dropdownListLength = dropdownList.length;
const dropdownLinks = document.getElementsByClassName(`dropdown__link`);
    const dropdownLinksLength = dropdownLinks.length;

for (let i = 0; i < dropdownButtonLength; i++) {
    dropdownButton.item(i).addEventListener(`click`, function() {
        dropdownList.item(i).classList.toggle(`dropdown__list_active`);
        for (let j = 0; j < dropdownListLength; j++) {
            if (dropdownList.item(j).classList.contains(`dropdown__list_active`) && j != i) {
                dropdownList.item(j).classList.remove(`dropdown__list_active`);                
            }            
        }

        let dropdownLinksFiltered = Array.from(dropdownLinks).filter(function(dropdownLinks) {
            if (dropdownLinks.closest(`ul.dropdown__list_active`)) {            
                return true;
            };
        });

        for (let k = 0; k < dropdownLinksFiltered.length; k++) {
            dropdownLinksFiltered[k].addEventListener(`click`, function(event) {
                event.preventDefault();
                dropdownList.item(i).classList.remove(`dropdown__list_active`);
                dropdownButton.item(i).textContent = dropdownLinksFiltered[k].textContent;
            })
        }

    });
}   