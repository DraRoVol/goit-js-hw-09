import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let countdownInterval;

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      window.alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});

function startCountdown() {
  const selectedDate = new Date(dateTimePicker.value);
  const currentDate = new Date();
  const totalSeconds = Math.floor((selectedDate - currentDate) / 1000);

  if (totalSeconds <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  updateCountdown(totalSeconds);

  countdownInterval = setInterval(() => {
    const secondsLeft = Math.floor((selectedDate - new Date()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
      return;
    }
    updateCountdown(secondsLeft);
  }, 1000);
}

function updateCountdown(totalSeconds) {
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startButton.addEventListener("click", startCountdown);
