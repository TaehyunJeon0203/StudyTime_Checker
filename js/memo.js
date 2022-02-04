const memo = document.getElementById("memo");
const memoArea = document.getElementById("memoarea");
const addMemoBtn = document.getElementById("addmemobutton");
const saveMemoBtn = document.getElementById("savememobutton");

addMemoBtn.addEventListener("click" ,addMemo);
saveMemoBtn.addEventListener("click", handleMemoSubmit);

function saveMemo() {
    localStorage.setItem(MEMO_KEY, JSON.stringify(memo));
}

function addMemo() {
    const memoInput = document.createElement("input");
    memoInput.placeholder = "Please enter a note";
    memoArea.appendChild(memoInput); 
}

function paintMemo() {
    const h1 = document.createElement("h1");
    h1.id = "newMemo";
    document

}

function handleMemoSubmit() {
    const newMemo = memoInput.value;
    memoInput.value = "";
    const newMemoObj = {
        text: newMemo,
        id: Date.now(),
    };
    memo.push(newMemoObj);
    saveMemo();
}

function enterNote() {

} 