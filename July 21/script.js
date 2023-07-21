let inputbox = document.getElementById('randompass');
let chars = document.getElementById('charcount');
let lower = document.getElementById('lowercase');
let upper = document.getElementById('uppercase');
let number = document.getElementById('number');
let specialchars = document.getElementById('specialchars');

lower.addEventListener('click', () => {
    if (lower.hasAttribute('checked')) {
        lower.removeAttribute('checked')
    }
    else {
        lower.setAttribute('checked', '');
    }
})
upper.addEventListener('click', () => {
    if (upper.hasAttribute('checked')) {
        upper.removeAttribute('checked')
    }
    else {
        upper.setAttribute('checked', '');
    }
})
number.addEventListener('click', () => {
    if (number.hasAttribute('checked')) {
        number.removeAttribute('checked')
    }
    else {
        number.setAttribute('checked', '');
    }
})
specialchars.addEventListener('click', () => {
    if (specialchars.hasAttribute('checked')) {
        specialchars.removeAttribute('checked')
    }
    else {
        specialchars.setAttribute('checked', '');
    }
})

document.querySelector('#generatebtn').addEventListener('click', () => {
    var str = '';
    if (lower.hasAttribute('checked')) {
        str = 'abcdefghijklmnopqrstuvwxyz';
        document.querySelector('.error').style.display = 'none';
    }
    if (upper.hasAttribute('checked')) {
        str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        document.querySelector('.error').style.display = 'none';
    }
    if (number.hasAttribute('checked')) {
        str += '0123456789';
        document.querySelector('.error').style.display = 'none';
    }
    if (specialchars.hasAttribute('checked')) {
        str += '@#$!.%^&*?/|_+-';
        document.querySelector('.error').style.display = 'none';
    }
    if(!lower.hasAttribute('checked') && !upper.hasAttribute('checked') && !number.hasAttribute('checked') && !specialchars.hasAttribute('checked')){
        document.querySelector('.error').style.display = 'block';
    }
    var pass = '';
    for (let i = 1; i <= chars.value; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    inputbox.value = pass;
})


let clearbtn = document.getElementById('clear');
clearbtn.addEventListener('click',() =>{
    inputbox.value = '';
})

let copybtn = document.getElementById('copy');
copybtn.addEventListener('click',() =>{
    // inputbox.select();
    // document.execCommand('copy');
    navigator.clipboard.writeText(inputbox.value);
    // console.log(navigator);
})

let cutbtn = document.getElementById('cut');
cutbtn.addEventListener('click',() =>{
    navigator.clipboard.writeText(inputbox.value);
    inputbox.value = '';
})


let textarea = document.getElementById('txtbox');

textarea.addEventListener('input', () =>{
    document.getElementsByClassName('textlength')[0].innerHTML = textarea.value.length;
    document.getElementsByClassName('wordlength')[0].innerHTML = textarea.value.split(' ').length;
})

