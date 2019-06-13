"use strict";

const botMessages = [
    `Здрааааасьте`,
    `Пффф, вот еще!`,
    ` `,
    `Что надо то? `,
    `Дома нет никто! `,
    `Извините, не расслышал...`,
    `Маловероятно, то Вы нас заинтересуете `,
    `У нас то всё хорошо, а у Вас?`,
    `Ну это, как бы я бот... чего Вы хотите от бота добиться?`,
    `Напишите завтра!`,
    `Я передам Ваше послание... нашему дворнику :р`,
    `Ваше сообщение почему-то стёрлось в моем чате...`,
    `У нас уже закрыто!`
];

let timeHHMM = null;

const chatSidebar = document.querySelector(`.chat-widget__side`);
const chatPopUp = document.querySelector(`.chat-widget`);
const messageClientInput = document.getElementById(`chat-widget__input`);
const messageToChat = document.getElementById(`chat-widget__messages`);

function showChat() {
    chatPopUp.classList.toggle(`chat-widget_active`);
}

function getDate() {
    const timeCurrent = new Date;
    let timeHH = timeCurrent.getHours();
        if (timeHH < 10) {
            timeHH = `0${timeHH}`;
        }
    let timeMM = timeCurrent.getMinutes();
        if (timeMM < 10) {
            timeMM = `0${timeMM}`;
        }
    timeHHMM = `${timeHH}:${timeMM}`;
}

chatSidebar.addEventListener(`click`, showChat);

messageClientInput.addEventListener(`keydown`, e => {
    if (messageClientInput.value) {
        if (e.keyCode === 13) {
            getDate();

            messageToChat.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + timeHHMM + `</div>
                    <div class="message__text">` + messageClientInput.value + `</div>
                </div>`;
                messageClientInput.value = ``;

            setTimeout(function() {
                getDate();

                messageToChat.innerHTML += `
                    <div class="message">
                        <div class="message__time">` + timeHHMM + `</div>
                        <div class="message__text">` + botMessages[Math.floor(Math.random() * botMessages.length)] + `</div>
                    </div>`;
                messageClientInput.value = ``;
            }, 500);
        }
    }
});