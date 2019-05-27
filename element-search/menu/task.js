"use strict";

const mainMenu = document.querySelectorAll(`nav.header > ul.menu_main > li.menu__item > a.menu__link`);
const menuSub = document.querySelectorAll(`nav.header ul.menu_sub`);

mainMenu.item(1).onclick = function() {
    menuSub.item(0).classList.toggle(`menu_active`);
    menuSub.item(1).classList.remove(`menu_active`);
    return false;
}

mainMenu.item(2).onclick = function() {
    menuSub.item(1).classList.toggle(`menu_active`);
    menuSub.item(0).classList.remove(`menu_active`);
    return false;
}

const mainMenuBottom = document.querySelectorAll(`nav.bottom > ul.menu_main > li.menu__item > a.menu__link`);
const menuSubBottom = document.querySelectorAll(`nav.bottom ul.menu_sub`);

mainMenuBottom.item(1).onclick = function() {
    menuSubBottom.item(0).classList.toggle(`menu_active`);
    menuSubBottom.item(1).classList.remove(`menu_active`);
    return false;
}

mainMenuBottom.item(2).onclick = function() {
    menuSubBottom.item(1).classList.toggle(`menu_active`);
    menuSubBottom.item(0).classList.remove(`menu_active`);
    return false;
}