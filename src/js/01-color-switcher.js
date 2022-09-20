const body = document.querySelector("body")
const btnStart = body.querySelector('button[data-start]');
const btnStop = body.querySelector('button[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

btnStart.addEventListener("click", clickStart);
btnStop.addEventListener("click", clickStop);

let timerColorChenge;

function clickStart(){
    timerColorChenge = setInterval(() => {
        const bgcBody = getRandomHexColor();
        body.style.background = bgcBody;
    }, 1000);
    btnStart.disabled = true
};

function clickStop(){
    clearInterval(timerColorChenge);
    btnStart.disabled = false;
};