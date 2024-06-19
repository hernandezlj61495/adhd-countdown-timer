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

const motivationalImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

const startSound = new Audio('start-sound.mp3');
const pauseSound = new Audio('pause-sound.mp3');
const endSound = new Audio('end-sound.mp3');

function startTimer() {
    if (!isRunning) {
        startSound.play();
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    endSound.play();
                    alert("Time's up!");
                    showRandomQuote();
                    showRandomImage();
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
    if (isRunning) {
        pauseSound.play();
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isRunning = false;
    updateDisplay();
    showRandomImage();
}

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quotesDisplay.textContent = motivationalQuotes[randomIndex];
}

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * motivationalImages.length);
    document.getElementById('motivation-img').src = motivationalImages[randomIndex];
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
showRandomImage();
