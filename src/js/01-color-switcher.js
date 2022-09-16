const body = document.querySelector("body")
const btnStart = body.querySelector('button[data-start]');
const btnStop = body.querySelector('button[data-stop]');

// console.log('btnStart', btnStart);
// console.log('btnStop', btnStop);

btnStart.addEventListener("click", clickStart);
btnStop.addEventListener("click", clickStop);

btnStop.disabled = true;
let timerColorChenge;

function clickStart(){
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerColorChenge = setInterval(() => {
        const bgcBody = getRandomHexColor();
        body.style.background = bgcBody;
    }, 1000)
};

function clickStop(){
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timerColorChenge)
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }