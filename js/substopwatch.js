let subTimerStatus;
let subTime = 0;
let subHour, subMin, subSec;

const subStopwatch = document.getElementById("substopwatch");
const subFirstButton = document.getElementById("subFirstButton");
const subSecondButton = document.getElementById("subSecondButton");
const subLapList = document.querySelector(".subLapList");


function subFirstBtnClick() {
    if (subFirstButton.innerText == "Lap") {
        if (subStopwatch.innerText != "00:00:00") {
            lapSubClock();
        }
    }
    else if (subFirstButton.innerText == "Reset") {
        subFirstButton.innerText = "Lap";
        resetsubClock();
        resetSubLap();
    }
}

function subSecondBtnClick() {
    if (subSecondButton.innerText == "Start") {
        subFirstButton.innerText = "Lap";
        subSecondButton.innerText = "Stop";
        startSubClock();
    }
    else if (subSecondButton.innerText == "Stop") {
        subFirstButton.innerText = "Reset";
        subSecondButton.innerText = "Start";
        stopSubClock();
    }
}

function printSubTime() {
    subTime++;
    subStopwatch.innerText = getSubTimeFormatString();
}

function startSubClock() {
    printSubTime();
    stopSubClock();
    subTimerStatus = setTimeout(startSubClock, 1000);
}

function stopSubClock() {
    if (subTimerStatus != null) {
        clearTimeout(subTimerStatus);
    }
}

function lapSubClock() {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = subStopwatch.innerText;
    li.appendChild(span);
    subLapList.prepend(li);
}

function resetSubLap() {
    const li = document.querySelectorAll("li");
    for (let i=0; i<li.length; i++) {
        subLapList.removeChild(li[i]);
    }
}

function resetsubClock() {
    subStopwatch.innerText = "00:00:00";
    subTime = 0;
}

function getSubTimeFormatString() {
    subHour = parseInt(String(subTime / (60 * 60)));
    subMin = parseInt(String((subTime - (subHour * 60 * 60)) / 60));
    subSec = subTime % 60;

    return String(subHour).padStart(2, '0') + ":" + String(subMin).padStart(2, '0') + ":" + String(subSec).padStart(2, '0');
}