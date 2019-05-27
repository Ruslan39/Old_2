"use strict";

const modal = document.getElementsByClassName('modal');
modal.item(0).classList.add(`modal_active`);

const modalСlose = document.querySelectorAll('div.modal__content div.modal__close');

const modalCloseLength = modalСlose.length;
for (let i = 0; i < modalCloseLength; i++) {
  modalСlose.item(i).onclick = function() {
    modal.item(i).classList.remove('modal_active');

    if (i == 0) {
      let repeat = function() {
        modal.item(0).classList.add('modal_active');
      }
      setTimeout(repeat, 1000);
    }

  }
}

const showSuccess = document.getElementsByClassName('show-success');  
  showSuccess.item(0).onclick = function() {
    modal.item(0).classList.remove('modal_active');
    modal.item(1).classList.add('modal_active');
  }