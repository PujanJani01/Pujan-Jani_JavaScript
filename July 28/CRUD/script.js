// let form = document.querySelector('.formwrapper');
// let table = document.querySelector('table');
// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     if(form.elements[3].value == form.elements[4].value){
//         let tr = document.createElement('tr');
//         for(let i=0; i<form.length-2;i++){
//             let td = document.createElement('td');
//             td.innerText = form.elements[i].value;
//             tr.appendChild(td);
//             form.elements[i].value = '';
//         }
//         for(let i=0; i<form.length-1;i++){
//             form.elements[i].value = '';
//         }
//         var editbtn = document.createElement('button');
//         editbtn.id = 'editbtn';
//         editbtn.innerText = 'Edit'
//         tr.appendChild(editbtn);
//         table.appendChild(tr);
//     }
//     else{
//         alert('password and confirm password is not matching')
//     }
//     document.querySelectorAll('#editbtn').forEach(el =>{
//        el.addEventListener('click',() =>{
//             let tds = document.querySelectorAll('td');
//             for(let i=0; i<form.length-2;i++){
//                 for(let j=i;j<=i;j++){
//                     form.elements[i].value = tds[j].innerText;
//                 }
//             }
//         })
//     })
// })


let form = document.querySelector('.formwrapper');
let table = document.querySelector('table');
let users = [];
let updatebtn = document.getElementById('updatebtn');
var regularExpression  = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,16}$/;
// const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$");

form.addEventListener('submit', (e) => {
    e.preventDefault();
        if(regularExpression.test(form.elements[3].value)){
            if (form.elements[3].value == form.elements[4].value) {
                let user = {};
                user.fname = form.elements[0].value;
                user.lname = form.elements[1].value;
                user.email = form.elements[2].value;
                user.password = form.elements[3].value;
                users.push(user);
                addRow();
                clearInput();
                // editRow();
            }
            else {
                alert('password and confirm password is not matching')
            }
        }
        else{
            alert('Invalid password format');
        }
})

function clearInput() {
    for (let i = 0; i < form.length - 2; i++) {
        form.elements[i].value = '';
    }
}

function addRow() {
    let tr = document.createElement('tr');
    users.forEach(el => {
        tr.innerHTML = `<td>${el.fname}</td>
                         <td>${el.lname}</td>
                         <td>${el.email}</td>
                         <td>${el.password}</td>
                         <td><button id='editbtn' onClick='editRow(this)'>Edit</button></td>
                         <td><button id='delbtn' onClick='delRow(this)'>Delete</button></td>`
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
    updatebtn.removeAttribute('disabled');
    updatebtn.addEventListener('click', update);
    // if (form.elements[3].value == form.elements[4].value) {
        function update() {
            for (let i = 0; i < tr.length - 2; i++) {
                tr[i].innerText = form.elements[i].value;
            }
            updatebtn.removeEventListener('click', update);
            clearInput();
        }
    // }<
}

function delRow(tdbtn) {
    var deltr = tdbtn.parentElement.parentElement;
    table.removeChild(deltr);
}

