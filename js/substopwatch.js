let timerStatus;
let time = 0;
let hour, min, sec;

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
    time++;
    substopwatch.innerText = getTimeFormatString();
}

function startClock() {
    printTime();
    stopClock();
    timerStatus = setTimeout(startClock, 1000);
}

function stopClock() {
    if (timerStatus != null) {
        clearTimeout(timerStatus);
    }
}

function lapClock() {
    
}

function resetsubClock() {
    mainstopwatch.innerText = "00:00:00";
    time = 0;
}

function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}