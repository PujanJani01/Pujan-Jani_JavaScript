

let form = document.querySelector('.formwrapper');
let form2 = document.querySelector('.signupwrapper');
let table = document.querySelector('table');
let users = [];
let updatebtn = document.getElementById('updatebtn');
var regularExpression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,16}$/;

function signuppageload(){
    form.style.display = 'flex';
    form2.style.display = 'none';
    clearlogin();
}
function loginpageload(){
    form2.style.display = 'flex';
    form.style.display = 'none';
}

form.addEventListener('submit', readData);

function readData(e){
    e.preventDefault();
    if (regularExpression.test(form.elements[4].value)) {
        if (form.elements[4].value == form.elements[5].value) {
            let user = {};
            user.fname = form.elements[1].value;
            user.lname = form.elements[2].value;
            user.email = form.elements[3].value;
            user.password = form.elements[4].value;
            users.push(user);
            if (users.every(el => el.uname != form.elements[0].value)) {
                user.uname = form.elements[0].value;
                addRow();
                clearInput();
                document.getElementById('unamemessege').innerText = '';
                document.getElementById('passmessege').innerText = '';
            }
            else {
                document.getElementById('unamemessege').innerText = 'username already exits!'
            }
        }
        else {
            document.getElementById('passmessege').innerText = 'password and confirm password is not matching'
        }
    }
    else {
        document.getElementById('passmessege').innerText = 'Invalid format'
    }
}


function clearInput() {
    for (let i = 0; i < form.length - 1; i++) {
        form.elements[i].value = '';
    }
}

function addRow() {
    let tr = document.createElement('tr');
    users.forEach(el => {
        tr.innerHTML = ` <td>${el.uname}</td>
                         <td>${el.fname}</td>
                         <td>${el.lname}</td>
                         <td>${el.email}</td>
                         <td>${el.password}</td>
                         <td><button id='editbtn' onClick='editRow(this)'>Edit</button><button id='delbtn' onClick='delRow(this)'>Delete</button></td>`
        table.appendChild(tr);
    })
}

function editRow(tdbtn) {
    var edittr = tdbtn.parentElement.parentElement.children;
    for (let i = 0; i < edittr.length - 2; i++) {
        form.elements[i].value = edittr[i].innerText;
    }
    updateRow(edittr);
}

function updateRow(tr) {
    form.removeEventListener('submit',readData);
    form.addEventListener('submit',update);
        function update(e) {
            e.preventDefault();
            for (let i = 0; i < tr.length - 2; i++) {
                tr[i].innerText = form.elements[i].value;
            }
            clearInput();
        }

}

function delRow(tdbtn) {
    var deltr = tdbtn.parentElement.parentElement;
    table.removeChild(deltr);
}


let loginbtn = document.getElementById('loginbtn');
let username = document.getElementById('username');
let password = document.getElementById('pass');

form2.addEventListener('submit',(e)=>{
     e.preventDefault();
     let booleanArr = [];
     document.querySelectorAll('tr').forEach(el =>{
        let children = el.children;
        if(username.value == children[0].innerText && password.value == children[4].innerText){
            booleanArr.push(true);
          }
         else{
            booleanArr.push(false);
         } 
     })
     if(booleanArr.includes(true)){
        alert('Login Successfully!');
      }
     else{
       alert('username or password does not match');
     }
})

function clearlogin(){
    username.value = '';
    password.value = '';
}
