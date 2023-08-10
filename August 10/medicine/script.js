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

body.removeChild(formwrapper);

addbtn.addEventListener('click',() =>{
    body.appendChild(formwrapper);
    wrapper.style.opacity = '0.5'
})

expbydate.addEventListener('click',addExpbydate);

function addExpbydate(){
    if(expirywrapper.contains(document.querySelector('.dayinput'))){
        expirywrapper.removeChild(document.querySelector('.dayinput'));
    }
    let dateinput = document.createElement('div');
    dateinput.classList.add('dateinput');
    dateinput.innerHTML = `<input type='date' id='dateinput'>`;
    expirywrapper.appendChild(dateinput);
    expbydate.removeEventListener('click',addExpbydate);
}

expbydays.addEventListener('click',addExpbydays);
function addExpbydays(){
    if(expirywrapper.contains(document.querySelector('.dateinput'))){
        expirywrapper.removeChild(document.querySelector('.dateinput'));
    }
    let dayinput = document.createElement('div');
    dayinput.classList.add('dayinput');
    dayinput.innerHTML = `<input type='date' id='dayinpu'> <input type='number'>`;
    expirywrapper.appendChild(dayinput);
    expbydays.removeEventListener('click',addExpbydays);
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
    let batchnum = batches.find(el => pack.value == el.packid)
    document.querySelector(`option[value="${batchnum.batch}"]`).setAttribute('selected','');
})

form.addEventListener('submit' ,(e) =>{
    e.preventDefault();
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${form.elements[0].value}</td>
                    <td>${form.elements[3].value}</td>
                    <td>${document.getElementById('dateinput').value}</td>
                    <td>${form.elements[1].value}</td>
                    <td>${form.elements[2].value}</td>
                    `
    table.appendChild(tr);
    body.removeChild(formwrapper);
    wrapper.style.opacity = '1';
})
