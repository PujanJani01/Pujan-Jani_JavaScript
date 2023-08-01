// var amountAfterGst = Number(myamount.value) + (Number(myamount.value) * 18 / 100);
let myamount = document.getElementById('amount');
const promos = ['OFF25', 'OFF50', 'OFF75'];
let promoinput = document.getElementsByClassName('promoinput')[0];
let checkbtn = document.querySelector('.checkpromo');
let promomessage = document.querySelector('.promomessage');
let summaryAmount = document.getElementById('summaryamount');
let totalAmount = document.getElementById('totalamount');
let totalPay = document.getElementById('totalpay');


myamount.addEventListener('input', () => {
    if(myamount.value.trim() == ''){
        clearAmount();
    }
    else if (Number(myamount.value)) {
        setValue();
    }
})

function setValue(){
    var amountAfterGst = Number(myamount.value) + (Number(myamount.value) * 18 / 100);
    summaryAmount.innerText = 'Rs.' + amountAfterGst.toFixed(3);
    totalAmount.innerText = 'Rs.' + amountAfterGst.toFixed(3);
    totalPay.innerText = 'Rs.' + amountAfterGst.toFixed(3);
}

promoinput.addEventListener('input', () => {
    if(promoinput.value.trim() == ''){
      checkbtn.setAttribute('disabled','');      
    }
    else{
        checkbtn.removeAttribute('disabled');
    }
})


checkbtn.addEventListener('click', () => {
    var promocode = promoinput.value.toUpperCase();
        if (promos.includes(promocode)) {
            if (Number(myamount.value) > 500 && Number(myamount.value) < 1000) {
                if (promocode == 'OFF25') {
                    promomessage.innerHTML = promocode + ' Applied' + '<button onClick="removePromoCode()" id="removebtn">X<button>';
                    promomessage.style.color = 'green';
                    off25();
                }
                else {
                    promomessage.innerText = promocode + " Not Applicable";
                    promomessage.style.color = 'orange';
                    setValue();
                    discountdiv.style.display = 'none';        
                }
            }
            else if (Number(myamount.value) > 1000 && Number(myamount.value) < 2000) {
                if (promocode == 'OFF25' || promocode == 'OFF50') {
                    promomessage.innerHTML = promocode + ' Applied' + '<button onClick="removePromoCode()" id="removebtn">X<button>';
                    promomessage.style.color = 'green';
                    if (promocode == 'OFF25') {
                        off25();
                    }
                    else if (promocode == 'OFF50') {
                        off50();
                    }
                }
                else {
                    promomessage.innerText = promocode + " Not Applicable";
                    promomessage.style.color = 'orange';
                    setValue();
                    discountdiv.style.display = 'none';        
                }
            }
            else if (Number(myamount.value) > 2000) {
                if (promocode == 'OFF25' || promocode == 'OFF50' || promocode == 'OFF75') {
                    promomessage.innerHTML = promocode + ' Applied' + '<button onClick="removePromoCode()" id="removebtn">X<button>';
                    promomessage.style.color = 'green';
                    if (promocode == 'OFF25') {
                        off25();
                    }
                    else if (promocode == 'OFF50') {
                        off50();
                    }
                    else if (promocode == 'OFF75') {
                        off75();
                    }
                }
            }
            else {
                promomessage.innerText = promocode + " Not Applicable";
                promomessage.style.color = 'orange';
                setValue();
                discountdiv.style.display = 'none';        
            }
        }
        else {
            promomessage.innerText = "Invalid promocode";
            promomessage.style.color = 'red';
            setValue();
            discountdiv.style.display = 'none';        
        }
})
let discountdiv = document.querySelector('.discount');
let discountedprice = document.getElementById('discountprice');

function off25() {
        var amountAfterGst = Number(myamount.value) + (Number(myamount.value) * 18 / 100);
        let amountAfter25 = amountAfterGst - amountAfterGst * 25 / 100;
        let discount25 = amountAfterGst * 25 / 100
        summaryAmount.innerText = 'Rs.' + amountAfterGst.toFixed(3);
        discountedprice.innerText = 'Rs.' + discount25.toFixed(3);
        totalAmount.innerText = 'Rs.' + amountAfter25.toFixed(3);
        totalPay.innerText = 'Rs.' + amountAfter25.toFixed(3);
        discountdiv.style.display = 'flex';
        discountdiv.style.justifyContain = 'space-between';
}

function off50() {
        var amountAfterGst = Number(myamount.value) + (Number(myamount.value) * 18 / 100);
        let amountAfter50 = amountAfterGst - amountAfterGst * 50 / 100;
        let discount50 = amountAfterGst * 50 / 100
        summaryAmount.innerText = 'Rs.' + amountAfterGst.toFixed(3);
        discountedprice.innerText = 'Rs.' + discount50.toFixed(3);
        totalAmount.innerText = 'Rs.' + amountAfter50.toFixed(3);
        totalPay.innerText = 'Rs.' + amountAfter50.toFixed(3);
        discountdiv.style.display = 'flex';
        discountdiv.style.justifyContain = 'space-between';
}
    
function off75() {
    var amountAfterGst = Number(myamount.value) + (Number(myamount.value) * 18 / 100);
    let amountAfter75 = amountAfterGst - amountAfterGst * 75 / 100;
    let discount75 = amountAfterGst * 75 / 100
    summaryAmount.innerText = 'Rs.' + amountAfterGst.toFixed(3);
    discountedprice.innerText = 'Rs.' + discount75.toFixed(3);
    totalAmount.innerText = 'Rs.' + amountAfter75.toFixed(3);
    totalPay.innerText = 'Rs.' + amountAfter75.toFixed(3);
    discountdiv.style.display = 'flex';
    discountdiv.style.justifyContain = 'space-between';
}

function clearAmount(){
    summaryAmount.innerText = 'Rs.00';
    discountedprice.innerText = 'Rs.00';
    totalAmount.innerText = 'Rs.00';
    totalPay.innerText = 'Rs.00';
}

function removePromoCode(){
    promomessage.innerText = '';
    promoinput.value = '';
    discountdiv.style.display = 'none';
    setValue();
}