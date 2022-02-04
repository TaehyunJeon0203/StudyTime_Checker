let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const yearMonthArea = document.getElementById("yearmonthArea");

let yearAndMonth = year + "." + (month + 1);
yearMonthArea.innerText = yearAndMonth;
