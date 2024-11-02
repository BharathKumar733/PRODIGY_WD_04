let seconds = 0;
let tens = 0;
let mins = 0;

const getSeconds = document.querySelector('.seconds');
const getTens = document.querySelector('.tens');
const getMins = document.querySelector('.mins');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
let interval;

// Start timer
btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

// Stop timer
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

// Reset timer
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
});

function startTimer() {
    tens++;

    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '00';
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '00';
    }
    if (mins > 9) {
        getMins.innerHTML = mins;
    }
}
