"use strict";

/* Задача №2, Повышенный уровень сложности #1 */

const cookie = document.getElementById('cookie');

let previousDateOfClick = new Date;

function changeSizesAndCounter() {    
    const clicker__counter = document.getElementById(`clicker__counter`);
    clicker__counter.textContent++;

    if (clicker__counter.textContent % 2 !== 0) {
        cookie.width +=20;
    }   else {
        cookie.width -=20;
    }

    const clicker__speed = document.getElementById(`clicker__speed`);

    let currentDateOfClick = new Date();    
    let deltaDateOfClick = (currentDateOfClick - previousDateOfClick) / 1000;
    let speedOfClicking = 1 / deltaDateOfClick;

    clicker__speed.textContent = speedOfClicking.toFixed(2);
    
    previousDateOfClick = currentDateOfClick;
}

cookie.onclick = changeSizesAndCounter;