// Timer fields
const hoursElement = document.querySelector('.hours'),
    minutesElement = document.querySelector('.minutes'),
    secondsElement = document.querySelector('.seconds'),
    millisecondsElement = document.querySelector('.milliseconds');

// Buttons
const startButton = document.querySelector('.start'),
    pauseButton = document.querySelector('.pause'),
    stopButton = document.querySelector('.stop'),
    newButton = document.querySelector('.new');

// Variables
let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    interval,
    counter = 0; // for number of circles
    disabled = true;
// Listeners

startButton.addEventListener('click', () => {
    clearInterval(interval);
    newButton.disabled = !disabled;
    interval = setInterval(startTimer, 10)
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    clearTimer();
    disableBtn()
    results-block.remove();
})

newButton.addEventListener('click', () => {
    clearInterval(interval);
    counter++;
    const results = document.querySelector('.results');
    const block = document.createElement('div');
    block.style.margin = '10px';
    block.style.lineHeight = '1.3em';
    block.innerText = `#${counter}
     ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}:${addZero(milliseconds)}`
    results.append(block);
    clearInterval(interval);
    clearTimer();
    interval = setInterval(startTimer, 10);
})

clearTimer()

// function updateClock(currentValue, currentElement, nextValue, nextElement) {
//     currentValue = 0;
//     currentElement.textContent = addZero(currentValue);
//     nextValue++;
//     nextElement.textContent = addZero(nextValue);
// }

// updateClock(milliseconds, millisecondsElement, seconds, secondsElement) 



function startTimer() {
    milliseconds++;
    millisecondsElement.textContent = addZero(milliseconds);

    if (milliseconds > 99) {
        milliseconds = 0;
        millisecondsElement.textContent = addZero(milliseconds);
        seconds++;
        secondsElement.textContent = addZero(seconds);
    }

    // Seconds

    secondsElement.textContent = addZero(seconds);

    if (seconds > 59) {
        seconds = 0;
        secondsElement.textContent = addZero(seconds);
        minutes++;
        minutesElement.textContent = addZero(minutes);
    }

    // Minutes
    
    minutesElement.textContent = addZero(minutes);

    if (minutes > 59) {
        minutes = 0;
        minutesElement.textContent = addZero(minutes);
        hours++;
        hoursElement.textContent = addZero(hours);
    }

    // Hours 

    if(hours > 24) {
        clearTimer()
    }
}


function clearTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    hoursElement.textContent = '00'
    minutesElement.textContent = '00'
    secondsElement.textContent = '00'
    millisecondsElement.textContent = '00'
}

function addZero(num) {
    if (num >= 0 && num <10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function disableBtn () {
    if (disabled) {
        newButton.disabled = true
    }
}
disableBtn()

