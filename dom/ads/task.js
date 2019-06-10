"use strict";

const rotators = document.getElementsByClassName(`rotator`);

for (const rotator of rotators) {
  const childrenItems = rotator.children;

  let rotatorCase = 1;  //запуск бесконечного цикла с "Лучший программист на земле"
  let dataSpeed = 1000; //первая скорость для запуска бесконечного цикла

  function rotatorChange() {

    for (let j = 0; j < childrenItems.length; j++) {
      childrenItems[j].classList.remove(`rotator__case_active`);
    }

    childrenItems[rotatorCase].classList.add(`rotator__case_active`);
    
    let dataColor = childrenItems[rotatorCase].getAttribute("data-color");
    childrenItems[rotatorCase].style.color = `${dataColor}`;

    dataSpeed = childrenItems[rotatorCase].getAttribute("data-speed");

    if (rotatorCase < childrenItems.length - 1) {
      rotatorCase++;
    } else {  
      rotatorCase = 0;
    }

    setTimeout(rotatorChange, `${dataSpeed}`);
  }  
  
  setTimeout(rotatorChange, `${dataSpeed}`);
}