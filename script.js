const startBtn = document.querySelector("#button-start")
const stopBtn = document.querySelector("#button-stop")
const resetBtn = document.querySelector("#button-reset")
const tens = document.querySelector("#tens")
const sec = document.querySelector("#seconds")
let tensValue = 0
let secValue = 0
let i = 0
let x = 0

function start (){
    var intervalId = window.setInterval(function(){
        if (x === 0){
            tensValue++
        if (tensValue < 10){
            tensValue = "0" + tensValue
        }
        if (tensValue == 100){
            tensValue = 0
            secValue++
            if (secValue < 10){
                secValue = "0" + secValue
            }
        }
        tens.textContent = tensValue
        sec.textContent = secValue
        }
    }, 10);
}


stopBtn.addEventListener("click",function(){
    x = 1
})
startBtn.addEventListener("click",start)
startBtn.addEventListener("click",function(){
    x = 0
})
resetBtn.addEventListener("click", function(){
    window.location.reload();
})