let addMedbtn = document.getElementById('addMedBtn');
let addRecordBtn = document.getElementById('addRecordBtn');
let addOutRecoedBtn = document.getElementById('addOutRecoedBtn');
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let expirywrapper = document.querySelector('.expirywrapper');
let expbydate = document.getElementById('expbydate');
let expbydays = document.getElementById('expbydays');
let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let dateinputdiv = document.getElementsByClassName('dateinputdiv')[0];
let closebtn = document.querySelectorAll('.closebtn');
let medicinewrapper = document.querySelector('.medicinewrapper');
let suggestions1 = document.getElementById('suggestions1');
let suggestions2 = document.getElementById('suggestions2');
let selected;
let addMedicine;
const medicines = [];
const records = [];
let optionSelected;
let getQty;
let record;

addMedbtn.addEventListener('click', () => {
    form1.style.display = 'block';
    form2.style.display = 'none';
    form3.style.display = 'none';
    wrapper.style.opacity = '0.5'
    document.getElementById('submitbtn').value = 'Add medicine';
    expbydate.checked = false;
})

addRecordBtn.addEventListener('click', () => {
    form2.style.display = 'block';
    form1.style.display = 'none';
    form3.style.display = 'none';
    wrapper.style.opacity = '0.5';
    form2.elements['select'].children[0].selected = true;
    document.getElementById('submitRecordBtn').value = 'Add record';
})

addOutRecoedBtn.addEventListener('click', () => {
    form3.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
    wrapper.style.opacity = '0.5';
    form3.elements['select2'].children[0].selected = true;
    document.getElementById('outRecordBtn').value = 'Add out record';
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
    form1.elements["rack"].appendChild(option);
})

batches.forEach(el => {
    let option = document.createElement('option');
    option.value = el.batch;
    option.innerText = el.batch;
    form1.elements["batch"].appendChild(option);
})

form1.elements["rack"].addEventListener('change', () => {
    form1.elements["rack"].children[0].selected = false;
    let rackId = racks.find(el => el.num == form1.elements["rack"].value);
    let batchnum = batches.find(el => el.rackid == rackId.id)
    if (!document.querySelector(`option[value="${batchnum.batch}"]`).hasAttribute('selected')) {
        document.querySelector(`option[value="${batchnum.batch}"]`).selected = true;
    }
})

form1.addEventListener('submit', addMed);

function addMed(e) {
    e.preventDefault();
    if (addMedicine) {
        updateMed(addMedicine);
        addMedicine = null;
    }
    else {
        if (form1.elements["medicine"].value.trim() != '' && validateName()) {
            if (form1.elements['rack'].value != 'Select number of racks') {
                if (form1.elements['qty'].value != '') {
                    if (validateDate()) {
                        document.getElementById("expdatemessege").style.display = 'none';
                        let tr = document.createElement('tr');
                        let medicine = {};
                        medicine.medicinename = form1.elements["medicine"].value.trim();
                        medicine.qty = form1.elements["qty"].value;
                        medicine.expirydate = validateDate();
                        medicine.rack = form1.elements["rack"].value;
                        medicine.batch = form1.elements["batch"].value;
                        medicines.push(medicine);
                        // addtr();
                        tr.innerHTML = `<td>${medicine.medicinename.trim()}</td>
                        <td>${medicine.qty}</td>
                        <td>${addDays(medicine)}</td>
                        <td>${medicine.rack}</td>
                        <td>${medicine.batch}</td>
                        <td><button id='editbtn' onClick='editMed(this)'>Edit</button>
                            <button id='delbtn' onClick='delMed(this)'>Delete</button></td>`

                        tr.id = `${form1.elements["medicine"].value}-id`;
                        table1.appendChild(tr);
                        notification(`${form1.elements["medicine"].value} added!`);
                        clearInputs();
                        form1.style.display = 'none';
                        wrapper.style.opacity = '1';
                    }
                    else {
                        if (validateDate() == false) {
                            notification('Expiry date must be greater than today\'s date.')
                        }
                        if (validateDate() == undefined) {
                            document.getElementById("expdatemessege").style.display = 'block';
                        }
                    }
                    document.getElementById("qtymessege").style.display = 'none';
                }
                else {
                    document.getElementById("qtymessege").style.display = 'block';
                }
                document.getElementById("rackmessege").style.display = 'none';
            }
            else {
                document.getElementById("rackmessege").style.display = 'block';
            }
            document.getElementById("medicinemessege").style.display = 'none';

        }
        else {
            if (form1.elements["medicine"].value.trim() == '') {
                document.getElementById("medicinemessege").style.display = 'block';
            }
            if (validateName() == false) {
                notification('Medicine already exists!');
            }
        }
    }
}

function clearInputs() {
    form1.reset();
    form2.reset();
    form3.reset();
    dateinputdiv.innerHTML = '';
    document.querySelectorAll('option').forEach(el => {
        el.selected = false;
    })
    form1.elements["rack"].children[0].selected = true;
    form1.elements["batch"].children[0].selected = true;
    suggestions1.innerHTML = '';
    suggestions2.innerHTML = '';
}

function delMed(med) {
    table1.removeChild(med.parentElement.parentElement);
    let tr = med.parentElement.parentElement;
    let medId = medicines.find(el => el.medicinename == tr.children[0].innerText);
    medicines.splice(medicines.indexOf(medId), 1);
}

function editMed(med) {
    form1.style.display = 'block';
    let tr = med.parentElement.parentElement;
    let medId = medicines.find(el => el.medicinename == tr.children[0].innerText);
    form1.elements["medicine"].value = medId.medicinename;
    form1.elements["qty"].value = medId.qty;
    form1.elements["rack"].value = medId.rack;
    form1.elements["batch"].value = medId.batch;
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

closebtn.forEach(el => {
    el.addEventListener('click', () => {
        clearInputs();
        if (form1.style.display == 'block') {
            form1.style.display = 'none';
        }
        else if (form2.style.display == 'block') {
            form2.style.display = 'none';
        }
        else if (form3.style.display == 'block') {
            form3.style.display = 'none';
        }
        wrapper.style.opacity = '1';
        addMedicine = null;
    })
})

function updateMed(medId) {
    let trId = Array.from(table1.children).find(tr => tr.id == `${medId.medicinename}-id`);
    if (form1.elements["medicine"].value.trim() != '') {
        if (validateUpdate(trId.id) && validateDate()) {
            medId.medicinename = form1.elements["medicine"].value;
            medId.qty = form1.elements["qty"].value;
            medId.expirydate = validateDate();
            medId.rack = form1.elements["rack"].value;
            medId.batch = form1.elements["batch"].value;

            trId.children[0].innerText = medId.medicinename;
            trId.children[1].innerText = medId.qty;
            trId.children[2].innerText = addDays(medId);
            trId.children[3].innerText = medId.rack;
            trId.children[4].innerText = medId.batch;

            trId.id = `${medId.medicinename}-id`;

            notification(`${medId.medicinename} updated!`);
            clearInputs();
            form1.style.display = 'none';
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
    let value = medicines.findIndex(el => el.medicinename == form1.elements["medicine"].value)
    if (value == -1) {
        return true;
    }
    else {
        return false;
    }
}

function validateUpdate(id) {
    let trs = Array.from(table1.children).filter(el => el.id != id);
    let value = trs.findIndex(el => el.children[0].innerText == form1.elements["medicine"].value)
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

form2.elements["searchmedicine1"].addEventListener('input', () => {
    optionSelected = false;
    if (form2.elements["searchmedicine1"].value.trim() == '') {
        suggestions1.innerHTML = '';
    }
    else {
        suggestions1.style.display = 'block';
        let show = [];
        medicines.forEach(med => {
            let regex = new RegExp(`(${form2.elements["searchmedicine1"].value.trim().slice(0, form2.elements["searchmedicine1"].value.trim().indexOf(' |'))})`, 'i');
            if (med.medicinename.match(regex)) {
                show.push(med);
            }
            // else{
            //     let suggestion = document.createElement('div');
            //     suggestion.classList.add('suggestion');
            //     suggestion.innerText = 'No match found';
            //     suggestions1.appendChild(suggestion);
            // }
        })
        showProducts(show);
    }
})


function showProducts(show) {
    suggestions1.innerHTML = '';
    show.forEach(el => {
        // let suggestion = document.createElement('option');
        // suggestion.value = el.medicinename;
        // suggestion.classList.add('suggestion');
        let suggestion = document.createElement('div');
        // suggestion.id = `${el.medicinename}Id`;
        suggestion.classList.add('suggestion');
        suggestion.innerText = el.medicinename;
        suggestions1.appendChild(suggestion);
    })

    document.querySelectorAll('.suggestion').forEach(el => {
        el.addEventListener('click', () => {
            let getMed = show.find(med => med.medicinename == el.innerText)
            form2.elements["searchmedicine1"].value = `${getMed.medicinename} | ${getMed.rack} | ${getMed.batch}`;
            form2.elements["getqty"].value = getMed.qty;
            suggestions1.style.display = 'none';
            optionSelected = true;
            getQty = getMed.qty;
        })
    })
}




form2.addEventListener('submit', getRecord);

function getRecord(e) {
    e.preventDefault();
    if (optionSelected == true && getQty <= Number(form2.elements["getqty"].value) && validateRecord()) {
        let record = {};
        record.medicinename = form2.elements["searchmedicine1"].value.trim().slice(0, form2.elements["searchmedicine1"].value.trim().indexOf(' |'));
        record.qty = form2.elements["getqty"].value;
        record.rack = form2.elements["searchmedicine1"].value.slice(form2.elements["searchmedicine1"].value.indexOf('| ') + 1, form2.elements["searchmedicine1"].value.lastIndexOf('|'));
        record.batch = form2.elements["searchmedicine1"].value.slice(form2.elements["searchmedicine1"].value.lastIndexOf('| ') + 1);
        record.select = form2.elements["select"].value;
        records.push(record);

        addRecord();
        notification("Record added!");
        clearInputs();
        form2.style.display = 'none';
        wrapper.style.opacity = '1';
    }
}

function addRecord() {
    table2.innerHTML = `<thead>
                           <th>Medicine</th>
                           <th>Qty</th>
                           <th>Rack</th>
                           <th>Batch</th>
                           <th>Select</th>
                        </thead>`;
    records.forEach(record => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${record.medicinename}</td>
        <td>${record.qty}</td>
        <td>${record.rack}</td>
        <td>${record.batch}</td>
        <td>${record.select}</td>`
        table2.appendChild(tr);
    })
}

form3.elements["searchmedicine2"].addEventListener('input', () => {
    optionSelected = false;
    if (form3.elements["searchmedicine2"].value.trim() == '') {
        suggestions2.innerHTML = '';
    }
    else {
        suggestions2.style.display = 'block';
        let show = [];
        records.forEach(record => {
            let regex = new RegExp(`(${form3.elements["searchmedicine2"].value.trim()})`, 'i');
            if (record.medicinename.match(regex)) {
                show.push(record);
            }
            // else{
            //     let suggestion = document.createElement('div');
            //     suggestion.classList.add('suggestion');
            //     suggestion.innerText = 'No match found';
            //     suggestions2.appendChild(suggestion);
            // }
        })
        showProducts2(show);
    }
})


function showProducts2(show) {
    suggestions2.innerHTML = '';
    show.forEach(el => {
        let suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.innerText = el.medicinename;
        suggestions2.appendChild(suggestion);
    })

    document.querySelectorAll('.suggestion').forEach(el => {
        el.addEventListener('click', () => {
            let getRecord = records.find(record => record.medicinename == el.innerText)
            form3.elements["searchmedicine2"].value = `${getRecord.medicinename} | ${getRecord.rack} | ${getRecord.batch}`;
            form3.elements["outqty"].value = getRecord.qty;
            form3.elements["select2"].value = getRecord.qty;
            suggestions2.style.display = 'none';
            optionSelected = true;
            record = getRecord;
        })
    })
}

form3.addEventListener('submit', outRecord);

function outRecord(e) {
    e.preventDefault();
    if (Number(form3.elements["outqty"].value) <= record.qty) {
        record.qty = record.qty - Number(form3.elements["outqty"].value);
        clearInputs();

        let tr = Array.from(table2.children).find(el => el.children[0].innerText == record.medicinename)
        tr.children[1].innerText = record.qty;
        tr.children[4].innerText = record.select;
        form3.style.display = 'none';
        wrapper.style.opacity = '1';
    }
}

function validateRecord() {
    let value = records.findIndex(el => el.medicinename == form2.elements["searchmedicine1"].value.trim().slice(0, form2.elements["searchmedicine1"].value.trim().indexOf(' |')));
    if (value == -1) {
        return true;
    }
    else {
        return false;
    }
}