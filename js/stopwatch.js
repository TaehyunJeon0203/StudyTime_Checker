let timerStatus;
let time = 0;
const mainstopwatch = document.getElementById("mainstopwatch");
const substopwatch = document.getElementById("substopwatch");
let hour, min, sec;

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

function resetsubClock() {
    mainsubwatch.innerText = "00:00:00";
    time = 0;
}



function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}