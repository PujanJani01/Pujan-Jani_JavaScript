let emailtxt = document.querySelector('#email');
let passtxt = document.querySelector('#pass');

document.querySelector('#sumbitbtn').addEventListener('click', () =>{
    alert('Email: '+ emailtxt.value  + '  ' +  'Password: ' + passtxt.value);
})
console.log(emailtxt);