"use strict";

const tabs = document.getElementsByClassName(`tab`);
    const tabsLength = tabs.length;
const tabsContent = document.getElementsByClassName(`tab__content`);
    const tabsContentLength = tabsContent.length;

for (let i = 0; i < tabsLength; i++) {

    tabs.item(i).addEventListener(`click`, function() {

        if ( (tabs.item(i).classList.contains(`tab_active`) ) == false) {

            for (let j = 0; j < tabsLength; j++) {
                tabs.item(j).classList.remove(`tab_active`);
                tabs.item(i).classList.add(`tab_active`);

                tabsContent.item(j).classList.remove(`tab__content_active`);
                tabsContent.item(i).classList.add(`tab__content_active`);
            }
        }
        
    })
    
}