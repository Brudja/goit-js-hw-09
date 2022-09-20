import Notiflix from 'notiflix';

const formEL = document.querySelector('.form');
const delayEL = formEL.querySelector('[name="delay"]');
const stepEL = formEL.querySelector('[name="step"]');
const amountEL = formEL.querySelector('[name="amount"]');
const btnEL = formEL.querySelector('[type="submit"]');


function getPromise(position, delayEL) {
 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delayEL });
      } else {
        reject({ position, delayEL });
      }
    }, delayEL);
  });
}
formEL.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { amount, step, delay } = event.target.elements;
  let amountValue = Number(amount.value);
  let stepValue = Number(step.value);
  let delayValue = Number(delay.value);
  for (let index = 0; index < amountValue; index += 1) {
    getPromise(index, delayValue)
      .then(({ position, delayEL}) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayEL}ms`
        );
      })
      .catch(({ position, delayEL}) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayEL}ms`
        );
      });
    delayValue += stepValue;
  }
}