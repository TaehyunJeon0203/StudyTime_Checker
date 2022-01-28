let timerStatus;
let time = 0;
let hour, min, sec;

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
    time++;
    mainstopwatch.innerText = getTimeFormatString();
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

function resetmainClock() {
    mainstopwatch.innerText = "00:00:00";
    time = 0;
}

function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}


