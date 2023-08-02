let input1 = document.querySelector('.input1');
let btn1 = document.querySelector('.btn1');

btn1.addEventListener('click',()=>{
    const regex = new RegExp('(abc)', 'i');
    if(regex.test(input1.value)){
        alert('hello');
    }
})

//---------------------------------------------------------------------------------------------------------

let input2 = document.querySelector('.input2');
let write = document.querySelector('.write');

input2.addEventListener('input',()=>{
    document.querySelector('body').style.backgroundColor = input2.value;
    write.innerText = input2.value;
})

//---------------------------------------------------------------------------------------------------------

let input3 = document.querySelector('.input3');
