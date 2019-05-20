"use strict";

const holes = document.getElementsByClassName('hole');
let killedMoles = document.getElementById('dead');
let misseсShots = document.getElementById('lost');

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = function() {
        if (holes[i].className.includes('hole_has-mole')) {
            killedMoles.textContent++;
            
            if (killedMoles.textContent == 10) {
                alert('Победа!');

                killedMoles.textContent = 0;
                misseсShots.textContent = 0;
            }

        } else {
            misseсShots.textContent++;

            if (misseсShots.textContent == 5) {
                alert('Вы проиграли!');

                killedMoles.textContent = 0;
                misseсShots.textContent = 0;
            }           
        }
    };
}