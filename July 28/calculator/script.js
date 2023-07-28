let btns = document.querySelectorAll('.btn');
let display = document.getElementById('display')
display.value = '';
let result = document.getElementsByClassName('res')[0];
let clearAll = document.getElementsByClassName('clearAll')[0];
let clear = document.getElementsByClassName('clear')[0];

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
       display.value += btn.innerText;
})
})

result.addEventListener('click' , resultEnter);
function resultEnter(){
    display.value = eval(display.value);
}

clearAll.addEventListener('click', () =>{
    display.value = '';
})

clear.addEventListener('click', () =>{
    display.value = display.value.slice(0,display.value.length-1);
})

display.addEventListener('keypress' ,(e) =>{
    if(e.code == 'Enter' ){
        resultEnter();
    }
})