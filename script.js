let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const quotesDisplay = document.getElementById('quotes');

const motivationalQuotes = [
    "Keep going, you’re doing great!",
    "Stay focused and keep pushing!",
    "You got this!",
    "Believe in yourself!",
    "Every step forward is progress."
];

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    alert("Time's up!");
                    showRandomQuote();
                    isRunning = false;
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isRunning = false;
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quotesDisplay.textContent = motivationalQuotes[randomIndex];
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
