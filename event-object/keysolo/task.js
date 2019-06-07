"use strict";

class Game {
constructor(container) {
this.container = container;
this.wordElement = container.querySelector('.word');
this.winsElement = container.querySelector('.status__wins');
this.lossElement = container.querySelector('.status__loss');
this.timer = container.querySelector(`.countDown`);

this.wordLength = null;
this.timerStart = null;

this.reset();

this.registerEvents();
}


reset() {
this.setNewWord();
 
this.winsElement.textContent = 0;
this.lossElement.textContent = 0;

this.countDown();
}

countDown() {
let dateEnd = new Date().getTime() + (this.wordLength * 1000);
 
const timeLeft = () => {
const dateCurrent = new Date().getTime();
const secLeft = Math.floor((dateEnd - dateCurrent) / 1000);

this.timer.textContent = `${secLeft}`;

if (secLeft <= 0) {
this.timer.textContent = 0;
this.fail();
} else {
this.timerStart = setTimeout(timeLeft);
}
}

this.timerStart = setTimeout(timeLeft);
}

registerEvents() {
let currentSymbolToType = this.currentSymbol.textContent.toLowerCase().charCodeAt(0);

let comparison = (event) => {
currentSymbolToType = this.currentSymbol.textContent.charCodeAt(0);

if (currentSymbolToType == event.key.toLowerCase().charCodeAt(0)) {
this.success();
} else {
this.fail();
}
}

document.addEventListener(`keypress`, comparison);
}

success() {
this.currentSymbol.classList.add('symbol_correct');
this.currentSymbol = this.currentSymbol.nextElementSibling;

if (this.currentSymbol !== null) {
return;
}

if (++this.winsElement.textContent === 10) {
alert('Победа!');
this.reset();
}

this.setNewWord();
this.countDown();
}

fail() {
if (++this.lossElement.textContent === 5) {
alert('Вы проиграли!');
this.reset();
}

this.setNewWord();
this.countDown();
}

setNewWord() {
if (this.timerStart) {
clearInterval(this.timerStart);
}

const word = this.getWord();
this.renderWord(word);
}

getWord() {
const words = [
'bob',
'awesome',
'netology',
'hello',
'kitty',
'rock',
'youtube',
'popcorn',
'cinema',
'love',
'javascript'
],
index = Math.floor(Math.random() * words.length);

return words[index];
}

renderWord(word) {
const html = [...word]
.map(
(s, i) =>
`<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
)
.join('');
this.wordElement.innerHTML = html;

this.currentSymbol = this.wordElement.querySelector('.symbol_current');

this.wordLength = word.length + 1;
}
}

new Game(document.getElementById('game'));