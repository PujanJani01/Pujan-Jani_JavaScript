let searchbar = document.getElementById('searchbar');
let products = document.querySelector('.products');
let productsnames = document.querySelectorAll('.productname');
let nomatchfoundMessege = document.getElementsByClassName('nomatchfound')[0];
if(products.hasChildNodes()){
     products.removeChild(nomatchfoundMessege);
}
searchbar.addEventListener('input', () => {
    if (searchbar.value.trim() == '') {
        productsnames.forEach(productname => {
            products.appendChild(productname.parentElement.parentElement);
            // products.removeChild(nomatchfoundMessege);
        })
        hideMessage();
    }
    else {
        let show = [];
        let hide = [];
        productsnames.forEach(productname => {
            let regex = new RegExp(`(${searchbar.value.trim()})`, 'i');
            if (productname.innerText.match(regex)) {
                show.push(productname.parentElement.parentElement);
            }
            else {
                hide.push(productname.parentElement.parentElement);
            }
        })
        showProducts(show);
        hideProducts(hide);

        if (show.length == 0) {
            showMessage();
        } else {
            hideMessage();
        }
    }
})

function showProducts(show) {
    show.forEach(el => {
        products.appendChild(el);
    })
}

function hideProducts(hide) {
    hide.forEach(el => {
        if(products.contains(el)){
            products.removeChild(el);
        }
    })
}

function showMessage() {
    products.appendChild(nomatchfoundMessege);
}

function hideMessage() {
    products.removeChild(nomatchfoundMessege);
}