/* let colorname = document.querySelector('.colorname');
let colorbtn = document.getElementById('colorbtn');

colorbtn.addEventListener('click',()=>{
    let randomcolor = Math.floor(Math.random()*16777215).toString(16);
    colorname.innerText = '#' + randomcolor;
    document.querySelector('body').style.backgroundColor = '#' + randomcolor;
}) */

let colorname = document.querySelector('.colorname');
let colorbtn = document.getElementById('colorbtn');
let letters = '0123456789ABCDEF';

colorbtn.addEventListener('click',()=>{
    let color = '#';
    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    colorname.innerText = color;
    document.querySelector('body').style.backgroundColor = color;
})