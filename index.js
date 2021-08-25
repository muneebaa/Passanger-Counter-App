let count = 0;
let countStr = []

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetBtn = document.getElementById("reset-btn")
let saveBtn = document.getElementById("save-btn")
let incrementBtn = document.getElementById("increment-btn")
const entriesFromLocalStorage = JSON.parse(localStorage.getItem("entries") || '[]')

// This is important
countStr = entriesFromLocalStorage;

saveEl.innerHTML = entriesFromLocalStorage


console.log(countStr)
console.log(saveEl.innerHTML )


incrementBtn.addEventListener("click", function () {
    count = count + 1;
    countEl.innerHTML = count;
})


saveBtn.addEventListener("click", function () {
    countStr.push(count)
    saveEl.innerHTML = countStr
    localStorage.setItem("entries", JSON.stringify(countStr))
    count = 0;
    countEl.innerHTML = 0;


})


resetBtn.addEventListener("click", function () {
    saveEl.innerHTML = "";
    localStorage.clear()
})






















// function increment(){
//     count += 1;
//     countEl.innerHTML = count
// }


// function save(){
//     countStr = count + " - "
//     saveEl.textContent += countStr
//     localStorage.setItem("entries", JSON.stringify(countStr))
//     countEl.textContent = 0
//     count = 0
// }


// function reset(){
//     saveEl.textContent = ""
//     localStorage.clear()
// }

