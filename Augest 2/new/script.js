let input1 = document.querySelector('.input1');
let btn1 = document.querySelector('.btn1');

btn1.addEventListener('click',()=>{
    const regex = new RegExp('(abc)', 'i');
    if(regex.test(input1.value)){
        alert('hello');
    }
})

//---------------------------------------------------------------------------------------------------------

let input2 = document.querySelector('.input2');
let write = document.querySelector('.write');

input2.addEventListener('input',()=>{
    document.querySelector('body').style.backgroundColor = input2.value;
    write.innerText = input2.value;
})

//---------------------------------------------------------------------------------------------------------

let state = document.querySelector('.state');
let city = document.querySelector('.city');

state.addEventListener('change',()=>{
    if(state.value == 'Gujarat'){
        city.innerHTML = `<option value="Ahmedabad">Ahmedabad</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Surat">Surat</option>
        <option value="Vadodara">Vadodara</option>`
        city.removeAttribute('disabled');
    }
    else if(state.value == 'Maharastra'){
        city.innerHTML = `<option value="Mumbai">Mumbai</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Nashik">Nashik</option>
        <option value="Pune">Pune</option>`
        city.removeAttribute('disabled');
    }
    else if(state.value == 'Rajasthan'){
        city.innerHTML = `<option value="Ajmer">Ajmer</option>
        <option value="Bikaner">Bikaner</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Jodhpur">Jodhpur</option>
        <option value="Udaipur">Udaipur</option>`
        city.removeAttribute('disabled');
    }
})
