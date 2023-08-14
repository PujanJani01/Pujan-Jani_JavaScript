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
let addMedicine;
const medicines = [];

addbtn.addEventListener('click', () => {
    formwrapper.style.display = 'block';
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
    dateinputdiv.innerHTML = `<input type='date' id='dayinput'> <input type='number' id='daysnumber' placeholder='Enter number of days' required>`;
    selected = 'day';
}

const racks = [
    { id: 1, num: 'Rack-1' },
    { id: 2, num: 'Rack-2' },
    { id: 3, num: 'Rack-3' },
    { id: 4, num: 'Rack-4' },
    { id: 5, num: 'Rack-5' }
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
    let rackId = racks.find(el => el.num == form.elements["rack"].value);
    let batchnum = batches.find(el => el.rackid == rackId.id)
    if (!document.querySelector(`option[value="${batchnum.batch}"]`).hasAttribute('selected')) {
        document.querySelector(`option[value="${batchnum.batch}"]`).selected = true;
    }
})

form.addEventListener('submit', addMed);

function addMed(e) {
    e.preventDefault();
    if (addMedicine) {
        updateMed(addMedicine);
        addMedicine = null;
    }
    else {
        if (form.elements["medicine"].value.trim() != '' && validateName()) {
            if (form.elements['rack'].value != 'Select number of racks') {
                if (form.elements['qty'].value != '') {
                    if (validateDate()) {
                        // let tr = document.createElement('tr');
                        let medicine = {};
                        medicine.medicinename = form.elements["medicine"].value.trim();
                        medicine.qty = form.elements["qty"].value;
                        medicine.expirydate = validateDate();
                        medicine.rack = form.elements["rack"].value;
                        medicine.batch = form.elements["batch"].value;
                        medicines.push(medicine);
                        addtr();
                        notification(`${form.elements["medicine"].value} added!`);
                        clearInputs();
                        formwrapper.style.display = 'none';
                        wrapper.style.opacity = '1';
                    }
                    else {
                        if (validateDate() == false) {
                            notification('Expiry date must be greater than today\'s date.')
                        }
                        if (validateDate() == undefined) {
                            notification('Please select expiry date')
                        }
                    }

                }
                else {
                    notification('Please select medicine quantity.');
                }
            }
            else {
                notification('Please select number of racks.')
            }
        }
        else {
            if (form.elements["medicine"].value.trim() == '') {
                notification('Medicine name can\'t be empty.');
            }
            if (validateName() == false) {
                notification('Medicine already exists!');
            }
        }
    }
}

function addtr() {
    table.innerHTML = `<thead>
                          <th>Medicine</th>
                          <th>Qty</th>
                          <th>Expiry date</th>
                          <th>Rack</th>
                          <th>Batch</th>
                          <th>Action</th>
                       </thead>`;
                       
    medicines.forEach(med => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${med.medicinename.trim()}</td>
                    <td>${med.qty}</td>
                    <td>${addDays(med)}</td>
                    <td>${med.rack}</td>
                    <td>${med.batch}</td>
                    <td><button id='editbtn' onClick='editMed(this)'>Edit</button>
                        <button id='delbtn' onClick='delMed(this)'>Delete</button></td>`

        tr.id = `${form.elements["medicine"].value}-id`;
        table.appendChild(tr);
    })

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
    let tr = med.parentElement.parentElement;
    let medId = medicines.find(el => el.medicinename == tr.children[0].innerText);
    medicines.splice(medicines.indexOf(medId), 1);
}

function editMed(med) {
    formwrapper.style.display = 'block';
    let tr = med.parentElement.parentElement;
    let medId = medicines.find(el => el.medicinename == tr.children[0].innerText);
    form.elements["medicine"].value = medId.medicinename;
    form.elements["qty"].value = medId.qty;
    form.elements["rack"].value = medId.rack;
    form.elements["batch"].value = medId.batch;
    if (medId.expirydate.bydate) {
        expbydate.checked = true;
        addExpbydate();
        document.getElementById('dateinput').defaultValue = formatdate(medId);
    }
    else {
        expbydays.checked = true;
        addExpbydays();
        document.getElementById('dayinput').defaultValue = formatdate(medId);
        document.getElementById('daysnumber').defaultValue = medId.expirydate.days;
    }

    document.getElementById('submitbtn').value = 'Update medicine';
    addMedicine = medId;
}

function validateDate() {
    let now = new Date();
    let selecteddate;
    if (selected == undefined) {
        return undefined;
    }
    else if (selected == 'date') {
        dt1 = new Date(document.getElementById('dateinput').value);
        selecteddate = dt1.getTime();
        if (selecteddate >= now.getTime()) {
            return { date: new Date(selecteddate).toLocaleDateString(), days: 0, bydate: true };
        }
        else {
            return false;
        }
    }
    else {
        dt2 = new Date(document.getElementById('dayinput').value);
        selecteddate = dt2.getTime() + document.getElementById('daysnumber').value * (1000 * 3600 * 24);
        if (selecteddate >= now.getTime()) {
            return { date: new Date(dt2.getTime()).toLocaleDateString(), days: document.getElementById('daysnumber').value, bydate: false };
        }
        else {
            return false;
        }
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
    formwrapper.style.display = 'none';
    wrapper.style.opacity = '1';
    addMedicine = null;
})

function updateMed(medId) {
    let trId = Array.from(table.children).find(tr => tr.id == `${medId.medicinename}-id`);
    if (form.elements["medicine"].value.trim() != '') {
        if (validateUpdate(trId.id) && validateDate()) {
            medId.medicinename = form.elements["medicine"].value;
            medId.qty = form.elements["qty"].value;
            medId.expirydate = validateDate();
            medId.rack = form.elements["rack"].value;
            medId.batch = form.elements["batch"].value;

            trId.children[0].innerText = medId.medicinename;
            trId.children[1].innerText = medId.qty;
            trId.children[2].innerText = addDays(medId);
            trId.children[3].innerText = medId.rack;
            trId.children[4].innerText = medId.batch;

            trId.id = `${medId.medicinename}-id`;

            notification(`${medId.medicinename} updated!`);
            clearInputs();
            formwrapper.style.display = 'none';
            wrapper.style.opacity = '1';
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
    else {
        notification('Medicine name can\'t be empty.');
    }
}

function formatdate(medId) {
    let exp = new Date(medId.expirydate.date);
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

function addDays(med) {
    let date = new Date(med.expirydate.date).getTime() + med.expirydate.days * (1000 * 3600 * 24);;
    return new Date(date).toLocaleDateString();
}