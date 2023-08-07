/* let a = 10;
let b = 20;

setTimeout(()=>{
    console.log('After timeout a = ' + a);
},200)


a = 15;
console.log(a);
console.log(b); */


//------------------------------------------------------------------------------------------------------

/* let a = 10;
console.log(a);

setTimeout(()=>{
    a = 20;
    console.log(a);
})
console.log(a);

a = 30;
console.log(a); */

//------------------------------------------------------------------------------------------------------

let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');


function startFunc(){
    let colors = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += colors[Math.floor(Math.random()*colors.length)];
    }
    document.querySelector('body').style.backgroundColor = color;
}
let changeBg;
startbtn.addEventListener('click',()=>{
    if(!changeBg){
        changeBg = setInterval(startFunc,1000);
    }
})

stopbtn.addEventListener('click',()=>{
    clearInterval(changeBg);
    changeBg = null;
})