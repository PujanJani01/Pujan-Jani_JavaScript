let wrapper = document.querySelector('.wrapper');
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');
let dateinputdiv = document.getElementsByClassName('dateinputdiv')[0];
let suggestions1 = document.getElementById('suggestions1');
let suggestions2 = document.getElementById('suggestions2');
let selected;
let addMedicine;
let medicines = [];
let records = [];
let outRecords = [];
let optionSelected;
let record;
let medicine;

let medcount = 0;
let recordcount = 0;
let outrecordcount = 0;


addRecord();
addOutRecord();
addMed();

// when user click on a add medicine button, it opens medicine form
document.getElementById('addMedBtn').addEventListener('click', () => {
    form1.style.display = 'block';
    form2.style.display = 'none';
    form3.style.display = 'none';
    wrapper.style.opacity = '0.5'
    document.getElementById('submitbtn').value = 'Add medicine';
    document.getElementById('expbydate').checked = false;
})

// when user click on a add record button, it opens record form
document.getElementById('addRecordBtn').addEventListener('click', () => {
    form2.style.display = 'block';
    form1.style.display = 'none';
    form3.style.display = 'none';
    wrapper.style.opacity = '0.5';
    form2.elements['select'].children[0].selected = true;
    document.getElementById('submitRecordBtn').value = 'Add record';
})

// when user click on a add out record button, it opens out record form
document.getElementById('addOutRecoedBtn').addEventListener('click', () => {
    form3.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
    wrapper.style.opacity = '0.5';
    form3.elements['select2'].children[0].selected = true;
    document.getElementById('outRecordBtn').value = 'Add out record';
})

// when user select expiry by date, it shows date input
document.getElementById('expbydate').addEventListener('change', addExpbydate);
function addExpbydate() {
    dateinputdiv.innerHTML = '';
    dateinputdiv.innerHTML = `<input type='date' id='dateinput'>`;
    selected = 'date';
}

// when user select expiry by days, it shows date and days input
document.getElementById('expbydays').addEventListener('change', addExpbydays);
function addExpbydays() {
    dateinputdiv.innerHTML = '';
    dateinputdiv.innerHTML = `<input type='date' id='dayinput'> <input type='number' id='daysnumber' placeholder='Enter number of days' required>`;
    selected = 'day';
}

// array of object which contains rack id and rack number
const racks = [
    { id: 1, num: 'Rack-1' },
    { id: 2, num: 'Rack-2' },
    { id: 3, num: 'Rack-3' },
    { id: 4, num: 'Rack-4' },
    { id: 5, num: 'Rack-5' }
]

// array of object which contains rack id and batch number
const batches = [
    { rackid: 1, batch: 'A1' },
    { rackid: 2, batch: 'A2' },
    { rackid: 3, batch: 'A3' },
    { rackid: 4, batch: 'A4' },
    { rackid: 5, batch: 'A5' }
]

// add rack options in rack select field
racks.forEach(el => {
    let option = document.createElement('option');
    option.value = el.num;
    option.innerText = el.num;
    form1.elements["rack"].appendChild(option);
})

// add batch options in batch field which is disabled
batches.forEach(el => {
    let option = document.createElement('option');
    option.value = el.batch;
    option.innerText = el.batch;
    form1.elements["batch"].appendChild(option);
})

// when rack is selected, batch will be selected automatically accordingly rack number
form1.elements["rack"].addEventListener('change', () => {
    form1.elements["rack"].children[0].selected = false;
    let rackId = racks.find(el => el.num == form1.elements["rack"].value);
    let batchnum = batches.find(el => el.rackid == rackId.id)
    if (!document.querySelector(`option[value="${batchnum.batch}"]`).hasAttribute('selected')) {
        document.querySelector(`option[value="${batchnum.batch}"]`).selected = true;
    }
})

// when user submit medicine form 
form1.addEventListener('submit', getMed);
function getMed(e) {
    e.preventDefault();
    if (addMedicine) {
        updateMed(addMedicine);
        addMed();
        addMedicine = null;
    }
    else {
        if (form1.elements["medicine"].value.trim() != '' && validateName() && form1.elements['rack'].value != 'Select number of racks' && form1.elements['qty'].value != '' && validateDate()) {
            removeMessege();

            medcount = getData("medcount");
            medcount++;

            let medicine = {};

            medicine.id = `medicine${medcount}`;
            medicine.medicinename = form1.elements["medicine"].value.trim();
            medicine.qty = form1.elements["qty"].value;
            medicine.expirydate = validateDate();
            medicine.rack = form1.elements["rack"].value;
            medicine.batch = form1.elements["batch"].value;
            medicines.push(medicine);
            // console.log(medicines);
            setData(medicines,"medicines");
            setData(medcount,"medcount");
            addMed();
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
            if (form1.elements["medicine"].value.trim() == '') {
                document.getElementById("medicinemessege").style.display = 'block';
            }
            if (validateName() == false) {
                notification('Medicine already exists!');
            }
            if (form1.elements['rack'].value == 'Select number of racks') {
                document.getElementById("rackmessege").style.display = 'block';
            }
            if (form1.elements['qty'].value == '') {
                document.getElementById("qtymessege").style.display = 'block';
            }

        }
    }
}

function addMed() {
    if (getData("medicines") != null) {
        table1.innerHTML = `<thead>
                                <th>Medicine</th>
                                <th>Qty</th>
                                <th>Expiry date</th>
                                <th>Rack</th>
                                <th>Batch</th>
                                <th>Action</th>
                            </thead>`;
        medicines = getData("medicines");
        medicines.forEach(medicine => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${medicine.medicinename}</td>
                            <td>${medicine.qty}</td>
                            <td>${addDays(medicine)}</td>
                            <td>${medicine.rack}</td>
                            <td>${medicine.batch}</td>
                            <td><button id='editbtn' onClick='editMed(this)'>Edit</button>
                                <button id='delbtn' onClick='delMed(this)'>Delete</button></td>`

            // tr.id = `${medicine.medicinename}-id`;
            table1.appendChild(tr);
        })
    }

}

// removes field required messege when field is filled
function removeMessege() {
    document.getElementById("expdatemessege").style.display = 'none';
    document.getElementById("medicinemessege").style.display = 'none';
    document.getElementById("rackmessege").style.display = 'none';
    document.getElementById("qtymessege").style.display = 'none';
    document.getElementById("searchmedicine1messege").style.display = 'none';
    document.getElementById("getqtymessege").style.display = 'none';
}

// reset forms
function clearInputs() {
    form1.reset();
    form2.reset();
    form3.reset();
    dateinputdiv.innerHTML = '';
    suggestions1.innerHTML = '';
    suggestions2.innerHTML = '';
    removeMessege();
}

// delete particullar medicine from the table
function delMed(med) {
    table1.removeChild(med.parentElement.parentElement);
    let tr = med.parentElement.parentElement;
    let medId = medicines.find(el => el.medicinename == tr.children[0].innerText);
    medicines.splice(medicines.indexOf(medId), 1);
}

// when user click on edit button for specific medicine, form opens and fields are filled with that medicine data
function editMed(med) {
    form1.style.display = 'block';
    let tr = med.parentElement.parentElement;
    let medId = getData("medicines").find(el => el.medicinename == tr.children[0].innerText);
    form1.elements["medicine"].value = medId.medicinename;
    form1.elements["qty"].value = medId.qty;
    form1.elements["rack"].value = medId.rack;
    form1.elements["batch"].value = medId.batch;
    if (medId.expirydate.bydate) {
        document.getElementById('expbydate').checked = true;
        addExpbydate();
        document.getElementById('dateinput').defaultValue = formatdate(medId);
    }
    else {
        document.getElementById('expbydays').checked = true;
        addExpbydays();
        document.getElementById('dayinput').defaultValue = formatdate(medId);
        document.getElementById('daysnumber').defaultValue = medId.expirydate.days;
    }

    document.getElementById('submitbtn').value = 'Update medicine';
    addMedicine = medId;
}

// when user click on update medicine button this function will be called, it will update specific medicine object and table row
function updateMed(medId) {
    // let trId = Array.from(table1.children).find(tr => tr.id == `${medId.medicinename}-id`);
    if (form1.elements["medicine"].value.trim() != '') {
        if (validateUpdate(medId.id) && validateDate()) {
            medicines = getData("medicines");
            medicines.forEach(el => {
                if (medId.id == el.id) {
                    el.medicinename = form1.elements["medicine"].value;
                    el.qty = form1.elements["qty"].value;
                    el.expirydate = validateDate();
                    el.rack = form1.elements["rack"].value;
                    el.batch = form1.elements["batch"].value;
                }
            })
            setData(medicines,"medicines");
            addMed();
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

// checks if selected date is greater than or equal to today's date
function validateDate() {
    let now = new Date();
    let selecteddate;
    if (selected == undefined) {
        return undefined;
    }
    else if (selected == 'date' && document.getElementById('dateinput').value != null) {
        dt1 = new Date(document.getElementById('dateinput').value);
        selecteddate = dt1.getTime();
        if (selecteddate >= now.getTime() - 1000 * 3600 * 24) {
            return { date: new Date(selecteddate).toLocaleDateString(), days: 0, bydate: true };
        }
        else {
            return false;
        }
    }
    else {
        dt2 = new Date(document.getElementById('dayinput').value);
        selecteddate = dt2.getTime() + document.getElementById('daysnumber').value * (1000 * 3600 * 24);
        if (selecteddate >= now.getTime() - 1000 * 3600 * 24) {
            return { date: new Date(dt2.getTime()).toLocaleDateString(), days: document.getElementById('daysnumber').value, bydate: false };
        }
        else {
            return false;
        }
    }

}

// user gets notification on specific events
function notification(message) {
    let notifi = document.createElement('div');
    notifi.setAttribute('class', 'notification');
    notifi.innerText = message;
    document.getElementsByClassName('notification-div')[0].appendChild(notifi);

    setTimeout(() => {
        document.getElementsByClassName('notification-div')[0].removeChild(notifi);
    }, 3000)
}

// when user click close button on form, it closes form
document.querySelectorAll('.closebtn').forEach(el => {
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

        document.querySelectorAll('p').forEach(el => el.style.display = 'none');
    })
})

/* when user click on update button, form fields will filled automaticaly,
 so to fill date field this function formate date in necessary formate */
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

// while adding medicine, it checks if medicine is already exists or not
function validateName() {
    if (getData("medicines") != null) {
        let value = getData("medicines").findIndex(el => el.medicinename == form1.elements["medicine"].value)
        if (value == -1) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

// while updating medicine, it checks if medicine is already exists or not except itself
function validateUpdate(id) {
    medicines = getData("medicines");
    let meds = medicines.filter(el => el.id != id);
    let value = meds.findIndex(el => el.medicinename == form1.elements["medicine"].value)
    if (value == -1) {
        return true;
    }
    else {
        return false;
    }
}

// if user is adding expiry date by days, it will add days in date and give final expiry date
function addDays(med) {
    let date = new Date(med.expirydate.date).getTime() + med.expirydate.days * (1000 * 3600 * 24);;
    return new Date(date).toLocaleDateString();
}

// search medicine from medicine table 
form2.elements["searchmedicine1"].addEventListener('input', (e) => {
    document.getElementById("searchmedicine1messege").style.display = 'none';
    optionSelected = false;
    if (form2.elements["searchmedicine1"].value.trim() == '') {
        suggestions1.innerHTML = '';
        optionSelected = false;
    }
    else {
        let show = [];
        suggestions1.style.display = 'block';
        getData("medicines").forEach(med => {
            let regex;
            if (e.target.value.trim().includes('|')) {
                regex = new RegExp(`(${e.target.value.trim().slice(0, e.target.value.trim().indexOf(' |'))})`, 'i');
            }
            else {
                regex = new RegExp(`(${e.target.value.trim()})`, 'i');
            }
            if (med.medicinename.match(regex)) {
                show.push(med);
            }
        })
        showProducts(show);
    }
})

// if medicine is there in medicine table it will show suggestions below search field
function showProducts(show) {
    suggestions1.innerHTML = '';
    if (show.length == 0) {
        let suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.innerText = 'No match found';
        suggestions1.appendChild(suggestion);
        console.log(show);
    }
    else {
        show.forEach(el => {
            let suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.innerText = el.medicinename;
            suggestions1.appendChild(suggestion);
        })
    }
    document.querySelectorAll('.suggestion').forEach(el => {
        el.addEventListener('click', () => {
            let getMed = getData("medicines").find(med => med.medicinename == el.innerText)
            form2.elements["searchmedicine1"].value = `${getMed.medicinename} | ${getMed.rack} | ${getMed.batch}`;
            form2.elements["getqty"].value = getMed.qty;
            suggestions1.style.display = 'none';
            optionSelected = true;
            medicine = getMed;
        })
    })
}

// when user clicks add record button on form, data will be added to the reocrds - array of object
form2.addEventListener('submit', getRecord);
function getRecord(e) {
    e.preventDefault();
    let out = Number(form2.elements["getqty"].value);
    if (optionSelected == true && form2.elements["select"].value != 'Select number' && out <= medicine.qty) {
        let value = isContains();
        if (value != false) {
            records =getData("records");
            records.forEach(el => {
                if (value.id == el.id) {
                    el.qty = Number(el.qty) + Number(out);
                    value.qty = el.qty;
                }
            })
            setData(records,"records");
            addRecord();
            updateMedicine(out);

        }
        else {
            removeMessege();
            recordcount = getData("recordcount")
            recordcount++;

            let record = {};
            record.id = `record${recordcount}`;
            record.medicinename = form2.elements["searchmedicine1"].value.trim().slice(0, form2.elements["searchmedicine1"].value.trim().indexOf(' |'));
            record.qty = form2.elements["getqty"].value;
            record.rack = form2.elements["searchmedicine1"].value.slice(form2.elements["searchmedicine1"].value.indexOf('| ') + 1, form2.elements["searchmedicine1"].value.lastIndexOf('|'));
            record.batch = form2.elements["searchmedicine1"].value.slice(form2.elements["searchmedicine1"].value.lastIndexOf('| ') + 1);
            record.select = form2.elements["select"].value;
            records.push(record);
            setData(records,"records");
            setData(recordcount,"recordcount");
            addRecord();
            updateMedicine(out);
        }
        document.getElementById('selectmessege').style.display = 'none';
        notification("Record added!");
        optionSelected = false;
        clearInputs();
        form2.style.display = 'none';
        wrapper.style.opacity = '1';
    }
    else {
        if (Number(medicine.qty) < out) {
            notification(`Only ${medicine.qty} quantity is available`)
        }
        if (form2.elements["searchmedicine1"].value.trim() == '') {
            document.getElementById("searchmedicine1messege").style.display = 'block';
        }
        if (form2.elements["getqty"].value == '') {
            document.getElementById("getqtymessege").style.display = 'block';
        }
        if (optionSelected == false) {
            notification('please select medicine');
        }
        if (form2.elements["select"].value == "Select number")
            document.getElementById('selectmessege').style.display = 'block';
    }
}

// record will be added to the records table
function addRecord() {
    if (getData("records") != null) {
        table2.innerHTML = `<thead>
                              <th>Medicine</th>
                              <th>Qty</th>
                              <th>Rack</th>
                              <th>Batch</th>
                              <th>Select</th>
                            </thead>`;
        records = getData("records");
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
}

function updateMedicine(out) {
    medicines = getData("medicines");
    medicines.forEach(el => {
        if (medicine.id == el.id) {
            el.qty = Number(el.qty) - Number(out);
            medicine.qty = el.qty;
        }
    })
    setData(medicines,"medicines");
    addMed();
    clearInputs();
}

// search record from records table 
form3.elements["searchmedicine2"].addEventListener('input', (e) => {
    optionSelected = false;
    if (form3.elements["searchmedicine2"].value.trim() == '') {
        suggestions2.innerHTML = '';
        optionSelected = false;
    }
    else {
        suggestions2.style.display = 'block';
        let show = [];
        if (getData("records") != null) {
            getData("records").forEach(record => {
                if (e.target.value.trim().includes('|')) {
                    regex = new RegExp(`(${e.target.value.trim().slice(0, e.target.value.trim().indexOf(' |'))})`, 'i');
                }
                else {
                    regex = new RegExp(`(${e.target.value.trim()})`, 'i');
                }
                if (record.medicinename.match(regex)) {
                    show.push(record);
                }
            })
        }
        showProducts2(show);
    }
})

// if record is there in records table it will show suggestions below search field
function showProducts2(show) {
    suggestions2.innerHTML = '';
    if (show.length == 0) {
        let suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.innerText = 'No match found';
        suggestions2.appendChild(suggestion);
    }
    else {
        show.forEach(el => {
            let suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.innerText = el.medicinename;
            suggestions2.appendChild(suggestion);
        })
    }
    document.querySelectorAll('.suggestion').forEach(el => {
        el.addEventListener('click', () => {
            let getRecord = getData("records").find(record => record.medicinename == el.innerText)
            form3.elements["searchmedicine2"].value = `${getRecord.medicinename} | ${getRecord.rack} | ${getRecord.batch}`;
            suggestions2.style.display = 'none';
            optionSelected = true;
            record = getRecord;
        })
    })
}

// when user clicks add out record button on form, data will be added to the outReocrds - array of object
form3.addEventListener('submit', getoutRecord);
function getoutRecord(e) {
    e.preventDefault();
    let out = Number(form3.elements["outqty"].value);
    if (optionSelected == true && form3.elements['searchmedicine2'].value != '' && form3.elements["select2"].value != "Select number" && form3.elements["outqty"].value != "") {
        if (out <= record.qty) {
            removeMessege();

            outrecordcount = getData("outrecordcount");
            outrecordcount++ ;
            let outRecord = {};

            outRecord.id = `outrecord${outrecordcount}`;
            outRecord.medicinename = record.medicinename;
            outRecord.qty = out
            outRecord.rack = record.rack;
            outRecord.batch = record.batch;
            outRecord.select = form3.elements["select2"].value;
            outRecords.push(outRecord);

            setData(outRecords,"outRecords");
            setData(outrecordcount,"outrecordcount");
            addOutRecord();
            updateRocord(out);

            document.getElementById('select2messege').style.display = 'none';
            document.getElementById('searchmedicine2messege').style.display = 'none';
            document.getElementById('outqtymessege').style.display = 'none';
            notification("Out Record added!");
            optionSelected = false;
            clearInputs();
            form3.style.display = 'none';
            wrapper.style.opacity = '1';
        }
        else {
            if (out > record.qty) {
                notification(`Only ${record.qty} quantity is available`);
            }
        }
    }
    else {
        if (optionSelected == false) {
            notification('please select record!')
        }
        if (form3.elements['searchmedicine2'].value == '') {
            document.getElementById('searchmedicine2messege').style.display = 'block';
        }
        if (form3.elements["select2"].value == "Select number") {
            document.getElementById('select2messege').style.display = 'block';
        }
        if (form3.elements["outqty"].value == "") {
            document.getElementById('outqtymessege').style.display = 'block';
        }
    }
}

// quantity will be updated of selected record in out record form
function updateRocord(out) {
    records = getData("records");
    records.forEach(el => {
        if (record.id == el.id) {
            el.qty = Number(el.qty) - Number(out);
        }
    })
    setData(records,"records");
    addRecord();
    clearInputs();
}

// out record will be added to the out records table
function addOutRecord() {
    if (getData("outRecords") != null) {
        table3.innerHTML = `<thead>
                                <th>Medicine</th>
                                <th>Qty</th>
                                <th>Rack</th>
                                <th>Batch</th>
                                <th>Select</th>
                            </thead>`;
        outRecords = getData("outRecords");
        outRecords.forEach(record => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${record.medicinename}</td>
                        <td>${record.qty}</td>
                        <td>${record.rack}</td>
                        <td>${record.batch}</td>
                        <td>${record.select}</td>`
            table3.appendChild(tr);
        })
    }
}

// to close suggestion box when user click anywhere on the page 
document.querySelector('body').addEventListener('click', () => {
    suggestions1.style.display = 'none';
    suggestions2.style.display = 'none';
})

// checks if record is already there in records or not 
function isContains() {
    if (getData("records") != null) {
        let value = getData("records").find(el => el.medicinename == form2.elements["searchmedicine1"].value.trim().slice(0, form2.elements["searchmedicine1"].value.trim().indexOf(' |')))
        if (!value) {
            return false;
        }
        else {
            return value;
        }
    }
    else {
        return false;
    }
}

// get data from local storage
function setData(item, itemstr){
    localStorage.setItem(itemstr, JSON.stringify(item));
}

// set data in local storage
function getData(item){
    let data = JSON.parse(localStorage.getItem(item));
    return data;
}

