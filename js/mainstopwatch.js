let mainTimerStatus;
let mainTime = 0;
let mainHour, mainMin, mainSec;

const mainStopwatch = document.getElementById("mainstopwatch");
const mainFirstButton = document.getElementById("mainFirstButton");
const mainSecondButton = document.getElementById("mainSecondButton");
const mainLapList = document.getElementById("mainLapList");


function mainFirstBtnClick() {
    if (mainFirstButton.innerText == "Lap") {

    }
    else if (mainFirstButton.innerText == "Reset") {
        mainFirstButton.innerText = "Lap";
        resetMainClock();
    }
}

function mainSecondBtnClick() {
    if (mainSecondButton.innerText == "Start") {
        mainFirstButton.innerText = "Lap";
        mainSecondButton.innerText = "Stop";
        startMainClock();
    }
    else if (mainSecondButton.innerText == "Stop") {
        mainFirstButton.innerText = "Reset";
        mainSecondButton.innerText = "Start";
        stopMainClock();
    }
}

function printMainTime() {
    mainTime++;
    mainStopwatch.innerText = getMainTimeFormatString();
}

function startMainClock() {
    printMainTime();
    stopMainClock();
    mainTimerStatus = setTimeout(startMainClock, 1000);
}

function stopMainClock() {
    if (mainTimerStatus != null) {
        clearTimeout(mainTimerStatus);
    }
}

function lapMainClock() {
    
}

function resetMainClock() {
    mainStopwatch.innerText = "00:00:00";
    mainTime = 0;
}

function getMainTimeFormatString() {
    mainHour = parseInt(String(mainTime / (60 * 60)));
    mainMin = parseInt(String((mainTime - (mainHour * 60 * 60)) / 60));
    mainSec = mainTime % 60;

    return String(mainHour).padStart(2, '0') + ":" + String(mainMin).padStart(2, '0') + ":" + String(mainSec).padStart(2, '0');
}


