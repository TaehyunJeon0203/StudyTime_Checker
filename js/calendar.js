const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const yearMonth = document.querySelector(".year-month");

yearMonth.textContent = year + "." + (month + 1);

const lastOfLastMonth = new Date(year, month, 0);
const lastOfThisMonth = new Date(year, month + 1, 0);

const LLMDate = lastOfLastMonth.getDate();
const LLMDay = lastOfLastMonth.getDay();

const LTMDate = lastOfThisMonth.getDate();
const LTMDay = lastOfThisMonth.getDay();

const datesOfLastMonth = [];
const datesOfThisMonth = [...Array(LTMDate + 1).keys()].slice(1);
const datesOfNextMonth = [];

if (LLMDay !== 6) {
    for (let i=0; i<LLMDay+1; i++) {
        datesOfLastMonth.unshift(LLMDate - i);
    }
}

for (let i=1; i<7-LTMDay; i++) {
    datesOfNextMonth.push(i);
}

const dates = datesOfLastMonth.concat(datesOfThisMonth, datesOfNextMonth);

dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`; 
})

document.querySelector(".dates").innerHTML = dates.join('');