let searchbar = document.getElementById('searchbar');
let products = document.querySelector('.products');
let productsnames = document.querySelectorAll('.productname');
let nomatchfoundMessege = document.getElementsByClassName('nomatchfound')[0];

searchbar.addEventListener('input', () => {
    if (searchbar.value.trim() == '') {
        productsnames.forEach(productname => {
            products.appendChild(productname.parentElement.parentElement);
            // products.removeChild(nomatchfoundMessege);
        })
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
    }
    // if(products.)
})

function showProducts(show) {
    show.forEach(el => {
        products.appendChild(el);
        // products.removeChild(nomatchfoundMessege);
    })
}

function hideProducts(hide) {
    hide.forEach(el => {
        if(products.contains(el)){
            products.removeChild(el);
        }
    })
}