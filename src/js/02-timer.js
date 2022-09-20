import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const body = document.querySelector("body")
const input = body.querySelector('#datetime-picker')
const btnStart = body.querySelector('[data-start]');
const daysTimer = body.querySelector('[data-days]');
const hoursTimer = body.querySelector('[data-hours]');
const minutesTimer = body.querySelector('[data-minutes]');
const secondsTimer = body.querySelector('[data-seconds]');

btnStart.disabled = true;

let selectedDay = new Date();

window.addEventListener('load', pageReload);
function pageReload() {}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
btnStart.addEventListener('click', onBtnClick);
function timerBig({ days, hours, minutes, seconds }) {
  daysTimer.textContent = addLeadingZero(`${days}`);
  hoursTimer.textContent = addLeadingZero(`${hours}`);
  minutesTimer.textContent = addLeadingZero(`${minutes}`);
  secondsTimer.textContent = addLeadingZero(`${seconds}`);
}
function onBtnClick(event) {
  intervalId = setInterval(() => {
    const msResult = selectedDay.getTime() - Date.now();
    const timer = convertMs(msResult);
    const { days, hours, minutes, seconds } = timer;
    if (msResult < 1000 || pageReload()) {
      clearInterval(intervalId);
      return;
    }
    timerBig(timer);
  }, 1000);
}

input.addEventListener('change', onInputClick);
function onInputClick(event) {
  const selectedTime = new Date(event.target.value);
  if (selectedTime.getTime() < Date.now()) {
    return Notiflix.Notify.failure('Please choose a date in the future');
  }
  btnStart.removeAttribute('disabled');
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDay = selectedDates[0];
    console.log(selectedDates[0]);
  },
};
flatpickr(input, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}




