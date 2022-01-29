let subTimerStatus;
let subTime = 0;
let subHour, subMin, subSec;

const substopwatch = document.getElementById("substopwatch");
const subFirstButton = document.getElementById("subFirstButton");
const subSecondButton = document.getElementById("subSecondButton");


function subFirstBtnClick() {
    if (subFirstButton.innerText == "Lap") {
    }
    else if (subFirstButton.innerText == "Reset") {
        subFirstButton.innerText = "Lap";
        resetsubClock();
    }
}

function subSecondBtnClick() {
    if (subSecondButton.innerText == "Start") {
        subFirstButton.innerText = "Lap";
        subSecondButton.innerText = "Stop";
        startClock();
    }
    else if (subSecondButton.innerText == "Stop") {
        subFirstButton.innerText = "Reset";
        subSecondButton.innerText = "Start";
        stopClock();
    }
}

function printTime() {
    subTime++;
    substopwatch.innerText = getTimeFormatString();
}

function startClock() {
    printTime();
    stopClock();
    subTimerStatus = setTimeout(startClock, 1000);
}

function stopClock() {
    if (subTimerStatus != null) {
        clearTimeout(subTimerStatus);
    }
}

function lapClock() {
    
}

function resetsubClock() {
    mainstopwatch.innerText = "00:00:00";
    subTime = 0;
}

function getTimeFormatString() {
    subHour = parseInt(String(subTime / (60 * 60)));
    subMin = parseInt(String((subTime - (subHour * 60 * 60)) / 60));
    subSec = subTime % 60;

    return String(subHour).padStart(2, '0') + ":" + String(subMin).padStart(2, '0') + ":" + String(subSec).padStart(2, '0');
}