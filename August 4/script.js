let fileuplaod = document.getElementById('fileupload');
let showfile = document.getElementById('showfile');
let errormessege = document.getElementById('errormessege')
let uploadtype = ['image/jpeg', 'image/png']
fileuplaod.addEventListener('change', () => {
    if (fileuplaod.files.length > 0 && uploadtype.includes(fileuplaod.files.item(0).type)) {
        let filesize = Math.round(fileuplaod.files.item(0).size / 1024);

        if (filesize >= 4096) {
            errormessege.innerText = 'Image size is bigger than 4MB, please select image below 4MB size';
            errormessege.style.color = 'red';
            showfile.innerHTML = '';
        }
        else {
            showfile.innerHTML = `<img src='${URL.createObjectURL(fileuplaod.files.item(0))}' class='uploadedimg'></img>`;
            errormessege.innerText = `file size is ${filesize}KB`;
            errormessege.style.color = 'green';
        }
    }
    else {
        showfile.innerHTML = '';
        errormessege.innerText = 'Please select JPG / PNG image format';
        errormessege.style.color = 'red';
    }
})