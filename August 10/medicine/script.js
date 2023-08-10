let addbtn = document.getElementById('primarybtn');
let formwrapper = document.querySelector('.formwrapper');
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let form = document.querySelector('form');
let expirywrapper = document.querySelector('.expirywrapper');
let expbydate = document.getElementById('expbydate');
let expbydays = document.getElementById('expbydays');
let pack = document.getElementById('pack');
let batch = document.getElementById('batch');
let table = document.querySelector('table');
let dateinputdiv = document.getElementsByClassName('dateinputdiv')[0];
let closebtn = document.getElementById('closebtn');
let selected;

body.removeChild(formwrapper);

addbtn.addEventListener('click',() =>{
    body.appendChild(formwrapper);
    wrapper.style.opacity = '0.5'
})

expbydate.addEventListener('click',addExpbydate);

function addExpbydate(){
    dateinputdiv.innerHTML = '';
    dateinputdiv.innerHTML = `<input type='date' id='dateinput'>`;
    selected = 'date';
}

expbydays.addEventListener('click',addExpbydays);
function addExpbydays(){
    dateinputdiv.innerHTML = '';
    dateinputdiv.innerHTML = `<input type='date' id='dayinput'> <input type='number' id='daysnumber'>`;
    selected = 'day';
}

const packs = [
    {id:1, num:1},
    {id:2, num:2},
    {id:3, num:3},
    {id:4, num:4},
    {id:5, num:5}
]

const batches = [
    {packid:1, batch:'A1'},
    {packid:2, batch:'A2'},
    {packid:3, batch:'A3'},
    {packid:4, batch:'A4'},
    {packid:5, batch:'A5'}
]

packs.forEach(el =>{
    let option = document.createElement('option');
    option.value = el.num;
    option.innerText = el.num;
    pack.appendChild(option);
})

batches.forEach(el =>{
    let option = document.createElement('option');
    option.value = el.batch;
    option.innerText = el.batch;
    batch.appendChild(option);
})

pack.addEventListener('change',() =>{
    batch.removeAttribute('disabled');
    pack.children[0].removeAttribute('selected');
    let batchnum = batches.find(el => pack.value == el.packid)
    if(!document.querySelector(`option[value="${batchnum.batch}"]`).hasAttribute('selected')){
        document.querySelector(`option[value="${batchnum.batch}"]`).setAttribute('selected','');
    }
})

form.addEventListener('submit' ,(e) =>{
    e.preventDefault();
    const medicinenames = [];
    let trs = document.querySelectorAll('tr');
    trs.forEach(tr =>{
        medicinenames.push(tr.children[0].innerText.toLowerCase()); 
    })
    // let regex = new RegExp(`(${form.elements[0].value})`,'i')

    if(!medicinenames.includes(form.elements[0].value.toLowerCase()) && validateDate()){
        let tr = document.createElement('tr');
        let expdate = new Date(validateDate());
        tr.innerHTML = `<td>${form.elements[0].value}</td>
                        <td>${form.elements[3].value}</td>
                        <td>${expdate.toDateString()}</td>
                        <td>${form.elements[1].value}</td>
                        <td>${form.elements[2].value}</td>
                        <td><button id='editbtn' onClick='editMed(this)'>Edit</button>
                            <button id='delbtn' onClick='delMed(this)'>Delete</button></td>`
        table.appendChild(tr);
        notification(`${form.elements[0].value} added!`);
        clearInputs();
        body.removeChild(formwrapper);
        wrapper.style.opacity = '1';
    }
    if(medicinenames.includes(form.elements[0].value.toLowerCase())){
        notification('Medicine already exists!');
    }
    if(validateDate() == false){
        notification('Expiry date must be greater than today\'s date.')
    }
})


function clearInputs(){
    form.reset();
    dateinputdiv.innerHTML = '';
    document.querySelectorAll('option').forEach(el =>{
        el.removeAttribute('selected');
    })
    pack.children[0].setAttribute('selected','');
    batch.children[0].setAttribute('selected','');
    batch.setAttribute('disabled','');
}

function delMed(med){
    table.removeChild(med.parentElement.parentElement);
}


function validateDate(){
    let now = new Date();
    let selecteddate;
    if(selected == 'date'){
        dt1 = new Date(document.getElementById('dateinput').value);
        selecteddate = dt1.getTime();
    }
    else{
        dt2 = new Date(document.getElementById('dayinput').value);
        selecteddate = dt2.getTime() + document.getElementById('daysnumber').value*(1000*3600*24);
    }
    if(selecteddate > now.getTime()){
        return selecteddate;
    }
    else{
        return false;
    }
}

function notification(message){
    let notifi = document.createElement('div');
    notifi.setAttribute('class','notification');
    notifi.innerText = message;
    body.appendChild(notifi);

    setTimeout(() =>{
    body.removeChild(notifi);
    },3000)
}

closebtn.addEventListener('click', () =>{
    clearInputs();
    wrapper.style.opacity = '1';
    body.removeChild(formwrapper);
})