let hrs = document.getElementById('hrs')
let min = document.getElementById('Min')
let sec = document.getElementById('Sec')
let ahrs = document.getElementById('ahrs')
let amin = document.getElementById('aMin')
let aSec = document.getElementById('aSec')
let audio = document.getElementById('audio')
var alarmNew = document.getElementById('alarmNew')
var alarmStop= document.getElementById('alarmstop')
let hours;
let minutes;
//Setting time using Date() function
setInterval(()=>{
let time = new Date()
hrs.innerHTML= time.getHours()
min.innerHTML = time.getMinutes()
sec.innerHTML = time.getSeconds()
},1000)
//setting Alarm by taking user input
alarmNew.addEventListener('click',()=>{
ahrs.innerHTML= prompt("Enter hours")
amin.innerHTML =prompt("Enter Minutes")
})
setInterval(()=>{
    if(hrs.innerHTML === ahrs.innerHTML && min.innerHTML === amin.innerHTML){
        audio.play()
    }
},1000)
//Button to Stop the alarm
alarmStop.addEventListener('click',()=>{
    location.reload()
})