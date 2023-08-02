let btn = document.querySelector('#generatebtn');
let randomPass = document.querySelector('#randompass');

btn.addEventListener('click', () =>{
    // randomPass.value = String.fromCharCode(Math.floor(65 + Math.random()*68)) +''+ Math.floor(Math.random()*100 + 50);
    randomPass.value = Math.floor(10000 + Math.random()*10000);
})