"use strict";

const interestGroup = document.querySelectorAll(`input.interest__check`);

for (let group of interestGroup) {
    
    group.addEventListener(`click`, e => {

        if ( !group.closest(`.interests_active`) && group.checked === true) {
            const currentParent = group.closest(`.interest`);
            const currentInterestGroup = currentParent.querySelectorAll(`.interest__check`);

            for (let item of currentInterestGroup) {
                item.checked = true;                
            }

        } else if ( !group.closest(`.interests_active`) && group.checked === false) {
            const currentParent = group.closest(`.interest`);
            const currentInterestGroup = currentParent.querySelectorAll(`.interest__check`);

            for (let item of currentInterestGroup) {
                item.checked = false;                
            }

        }
        
    });
}