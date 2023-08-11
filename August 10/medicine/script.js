let addbtn = document.getElementById('primarybtn');
let formwrapper = document.querySelector('.formwrapper');
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let form = document.querySelector('form');
let expirywrapper = document.querySelector('.expirywrapper');
let expbydate = document.getElementById('expbydate');
let expbydays = document.getElementById('expbydays');
let table = document.querySelector('table');
let dateinputdiv = document.getElementsByClassName('dateinputdiv')[0];
let closebtn = document.getElementById('closebtn');
let medicinewrapper = document.querySelector('.medicinewrapper');
let selected;
const medicines = [];

body.removeChild(formwrapper);
addbtn.addEventListener('click', () => {
    body.appendChild(formwrapper);
    wrapper.style.opacity = '0.5'
    document.getElementById('submitbtn').value = 'Add medicine';
    expbydate.checked = false;
})

expbydate.addEventListener('change', addExpbydate);

function addExpbydate() {
    dateinputdiv.innerHTML = '';
    dateinputdiv.innerHTML = `<input type='date' id='dateinput'>`;
    selected = 'date';
}

expbydays.addEventListener('change', addExpbydays);
function addExpbydays() {
    dateinputdiv.innerHTML = '';
    dateinputdiv.innerHTML = `<input type='date' id='dayinput'> <input type='number' id='daysnumber'>`;
    selected = 'day';
}

const racks = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 }
]

const batches = [
    { rackid: 1, batch: 'A1' },
    { rackid: 2, batch: 'A2' },
    { rackid: 3, batch: 'A3' },
    { rackid: 4, batch: 'A4' },
    { rackid: 5, batch: 'A5' }
]

racks.forEach(el => {
    let option = document.createElement('option');
    option.value = el.num;
    option.innerText = el.num;
    form.elements["rack"].appendChild(option);
})

batches.forEach(el => {
    let option = document.createElement('option');
    option.value = el.batch;
    option.innerText = el.batch;
    form.elements["batch"].appendChild(option);
})

form.elements["rack"].addEventListener('change', () => {
    form.elements["rack"].children[0].selected = false;
    let batchnum = batches.find(el => form.elements["rack"].value == el.rackid)
    if (!document.querySelector(`option[value="${batchnum.batch}"]`).hasAttribute('selected')) {
        document.querySelector(`option[value="${batchnum.batch}"]`).selected = true;
    }
})

form.addEventListener('submit', addMed);

function addMed(e) {
    e.preventDefault();
    if (form.elements["medicine"].value.trim() != '') {
        if (validateName() && validateDate()) {
            let tr = document.createElement('tr');
            let expdate = new Date(validateDate());

            let medicine = {};
            medicine.medicinename = form.elements["medicine"].value.trim();
            medicine.qty = form.elements["qty"].value;
            medicine.expirydate = expdate.toLocaleDateString();
            medicine.rack = form.elements["rack"].value;
            medicine.batch = form.elements["batch"].value;
            medicines.push(medicine);

            tr.innerHTML = `<td>${form.elements["medicine"].value.trim()}</td>
                            <td>${form.elements["qty"].value}</td>
                            <td>${expdate.toLocaleDateString()}</td>
                            <td>${form.elements["rack"].value}</td>
                            <td>${form.elements["batch"].value}</td>
                            <td><button id='editbtn' onClick='editMed(this)'>Edit</button>
                                <button id='delbtn' onClick='delMed(this)'>Delete</button></td>`

            tr.id = `${form.elements["medicine"].value}-id`;
            table.appendChild(tr);
            notification(`${form.elements["medicine"].value} added!`);
            clearInputs();
            body.removeChild(formwrapper);
            wrapper.style.opacity = '1';
        }
        else {
            if (validateName() == false) {
                notification('Medicine already exists!');
            }
            if (validateDate() == false) {
                notification('Expiry date must be greater than today\'s date.')
            }
        }
    }
    else {
        notification('Medicine name can\'t be empty.');
    }
}


function clearInputs() {
    form.reset();
    dateinputdiv.innerHTML = '';
    document.querySelectorAll('option').forEach(el => {
        el.selected = false;
    })
    form.elements["rack"].children[0].selected = true;
    form.elements["batch"].children[0].selected = true;
}

function delMed(med) {
    table.removeChild(med.parentElement.parentElement);
}

function editMed(med) {
    body.appendChild(formwrapper);
    let tr = med.parentElement.parentElement;
    let medId = medicines.find(el => el.medicinename == tr.children[0].innerText);
    form.elements["medicine"].value = medId.medicinename;
    form.elements["qty"].value = medId.qty;
    form.elements["rack"].value = medId.rack;
    form.elements["batch"].value = medId.batch;
    expbydate.checked = true;
    addExpbydate();
    document.getElementById('dateinput').defaultValue = formatdate(tr);
    document.getElementById('submitbtn').value = 'Update medicine';
    updateMed(medId);
}

function validateDate() {
    let now = new Date();
    let selecteddate;
    if (selected == 'date') {
        dt1 = new Date(document.getElementById('dateinput').value);
        selecteddate = dt1.getTime();
    }
    else {
        dt2 = new Date(document.getElementById('dayinput').value);
        selecteddate = dt2.getTime() + document.getElementById('daysnumber').value * (1000 * 3600 * 24);
    }
    if (selecteddate >= now.getTime()) {
        return selecteddate;
    }
    else {
        return false;
    }
}

function notification(message) {
    let notifi = document.createElement('div');
    notifi.setAttribute('class', 'notification');
    notifi.innerText = message;
    body.appendChild(notifi);

    setTimeout(() => {
        body.removeChild(notifi);
    }, 3000)
}

closebtn.addEventListener('click', () => {
    clearInputs();
    wrapper.style.opacity = '1';
    body.removeChild(formwrapper);
})

function updateMed(medId) {
    form.removeEventListener('submit', addMed);
    form.addEventListener('submit', update);
    function update(e) {
        e.preventDefault();
        let trId = Array.from(table.children).find(tr => tr.id == `${medId.medicinename}-id`);
        if (form.elements["medicine"].value.trim() != '') {
            if (validateUpdate(trId.id) && validateDate()) {
                let expdate = new Date(validateDate());

                medId.medicinename = form.elements["medicine"].value;
                medId.qty = form.elements["qty"].value;
                medId.expirydate = expdate.toLocaleDateString();
                medId.rack = form.elements["rack"].value;
                medId.batch = form.elements["batch"].value;

                trId.children[0].innerText = medId.medicinename;
                trId.children[1].innerText = medId.qty;
                trId.children[2].innerText = medId.expirydate;
                trId.children[3].innerText = medId.rack;
                trId.children[4].innerText = medId.batch;

                trId.id = `${medId.medicinename}-id`;

                notification(`${medId.medicinename} updated!`);
                clearInputs();
                body.removeChild(formwrapper);
                wrapper.style.opacity = '1';
                form.removeEventListener('submit', update);
                form.addEventListener('submit', addMed);
            }
            else {
                if (validateUpdate() == false) {
                    notification('Medicine already exists!');
                }
                if (validateDate() == false) {
                    notification('Expiry date must be greater than today\'s date.')
                }
            }
        }
        else{
            notification('Medicine name can\'t be empty.');
        }
    }
}

function formatdate(tr) {
    let exp = new Date(tr.children[2].innerText);
    let formatdt;
    if (exp.getMonth() < 9 && exp.getDate() > 9) {
        formatdt = exp.getFullYear() + '-0' + (exp.getMonth() + 1) + '-' + exp.getDate();
    }
    else if (exp.getMonth() > 9 && exp.getDate() < 9) {
        formatdt = exp.getFullYear() + '-' + (exp.getMonth() + 1) + '-0' + exp.getDate();
    }
    else if (exp.getMonth() < 9 && exp.getDate() < 9) {
        formatdt = exp.getFullYear() + '-0' + (exp.getMonth() + 1) + '-0' + exp.getDate();
    }
    else {
        formatdt = exp.getFullYear() + '-' + (exp.getMonth() + 1) + '-' + exp.getDate();
    }
    return formatdt;
}

function validateName() {
    let value = medicines.findIndex(el => el.medicinename == form.elements["medicine"].value)
    if (value == -1) {
        return true;
    }
    else {
        return false;
    }
}

function validateUpdate(id) {
    let trs = Array.from(table.children).filter(el => el.id != id);
    let value = trs.findIndex(el => el.children[0].innerText == form.elements["medicine"].value)
    if (value == -1) {
        return true;
    }
    else {
        return false;
    }
}
