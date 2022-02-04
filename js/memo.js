const memo = document.getElementById("memo");
const memoArea = document.getElementById("memoarea");
const addMemoBtn = document.getElementById("addmemobutton");
const saveMemoBtn = document.getElementById("savememobutton");

addMemoBtn.addEventListener("click" ,addMemo);

function addMemo() {
    const memoInput = document.createElement("input");
    memoInput.placeholder = "Please enter a note";
    memoArea.appendChild(memoInput); 
}

function enterNote() {

} 