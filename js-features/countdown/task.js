"use strict";

/* Задача №1, Повышенный уровень сложности #1 */

const timer = function() {
    const myTimer = document.getElementById('timer');

    let time = myTimer.textContent;
    let arr = time.split(':');   
    let hour = arr[0];
    let min = arr[1];
    let sec = arr[2];    

    if (sec == 0) {
        if (min == 0) {
            if (hour == 0) {
                
                clearInterval(сountdown);        
                alert('Вы победили в конкурсе!');
                return;
            }
            
            hour--;
            min = 60;
            sec = 60;

            if (hour < 10) {
                hour = '0' + hour;
            }
        }

        min--;
        sec = 60;

        if (min < 10) {
            min = '0' + min;
        }
    }

    sec--;

    if (sec < 10) {
        sec = '0' + sec;
    }

    time = `${hour}:${min}:${sec}`;

    document.getElementById('timer').innerHTML = time;       
}

const сountdown = setInterval(timer, 1000);