let createbtn = document.getElementById('createbtn');
let notes = document.getElementsByClassName('notes')[0];

createbtn.addEventListener('click',()=>{
    let note = document.createElement('div');
    note.classList.add('notediv');
    let nowdate = dateNow();
    note.innerHTML = `<textarea cols='20' rows='15' class='note' placeholder='Make a note'></textarea>
                      <button class='delbtn' onClick="delnote(this)">x</button>
                      <div class='timeanddate'>${nowdate}</div>`
    notes.appendChild(note);
})

function delnote(btn){
    let notetodelete = btn.parentElement;
    notes.removeChild(notetodelete);
}

function dateNow(){
    let now = new Date();
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let date = months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
    return date;
}


