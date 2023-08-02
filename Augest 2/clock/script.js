let clock = document.querySelector('.clockbody')
let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

setInterval(()=>{
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();
    second.style.transform = `rotate(${6*sec}deg)`
    minute.style.transform = `rotate(${6*min}deg)`
    hour.style.transform = `rotate(${30*hr+min/2}deg)`
},1000)