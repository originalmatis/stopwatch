const startBtn = document.querySelector("#button-start")
const stopBtn = document.querySelector("#button-stop")
const resetBtn = document.querySelector("#button-reset")
const tens = document.querySelector("#tens")
const sec = document.querySelector("#seconds")
let tensValue = 00
let secValue = 00
let i = 0

var intervalId = window.setInterval(function(){
    tensValue++
    if (tensValue < 10){
        tensValue = "0" + tensValue
        console.log(tensValue)
    }
}, 10);