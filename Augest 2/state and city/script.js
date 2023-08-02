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