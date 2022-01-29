let mainTimerStatus;
let mainTime = 0;
let mainHour, mainMin, mainSec;

const mainstopwatch = document.getElementById("mainstopwatch");
const mainFirstButton = document.getElementById("mainFirstButton");
const mainSecondButton = document.getElementById("mainSecondButton");


function mainFirstBtnClick() {
    if (mainFirstButton.innerText == "Lap") {
    }
    else if (mainFirstButton.innerText == "Reset") {
        mainFirstButton.innerText = "Lap";
        resetmainClock();
    }
}

function mainSecondBtnClick() {
    if (mainSecondButton.innerText == "Start") {
        mainFirstButton.innerText = "Lap";
        mainSecondButton.innerText = "Stop";
        startClock();
    }
    else if (mainSecondButton.innerText == "Stop") {
        mainFirstButton.innerText = "Reset";
        mainSecondButton.innerText = "Start";
        stopClock();
    }
}

function printTime() {
    mainTime++;
    mainstopwatch.innerText = getTimeFormatString();
}

function startClock() {
    printTime();
    stopClock();
    mainTimerStatus = setTimeout(startClock, 1000);
}

function stopClock() {
    if (mainTimerStatus != null) {
        clearTimeout(mainTimerStatus);
    }
}

function lapClock() {
    
}

function resetmainClock() {
    mainstopwatch.innerText = "00:00:00";
    mainTime = 0;
}

function getTimeFormatString() {
    mainHour = parseInt(String(mainTime / (60 * 60)));
    mainMin = parseInt(String((mainTime - (mainHour * 60 * 60)) / 60));
    mainSec = mainTime % 60;

    return String(mainHour).padStart(2, '0') + ":" + String(mainMin).padStart(2, '0') + ":" + String(mainSec).padStart(2, '0');
}


