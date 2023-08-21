let searchbar = document.getElementById('searchbar');
let products = document.querySelector('.products');
let productsnames = document.getElementsByClassName('productname');
let nomatchfoundMessege = document.getElementsByClassName('nomatchfound')[0];
let productData;

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => addData(data))
.catch(error => console.log('ERROR'))

function addData(data){
    products.innerHTML = data.map(el => `<div class="product">
    <div class="product-img">
        <img src=${el.image} alt="product">
    </div>
    <div class="product-details">
        <h3 class="productname">${el.title}</h3>
        <p class="productprice">$${el.price}</p>
    </div>
</div>`).join("");
productData = data;
}

searchbar.addEventListener('input', () => {
    if (searchbar.value.trim() == '') {
        for(let i=0; i < productsnames.length;i++){
            products.appendChild(productsnames[i].parentElement.parentElement);
        }
    }
    else{
        let show = [];
        let hide = [];
        for(let i=0; i < productsnames.length;i++){
            if (productsnames[i].innerText.includes(searchbar.value.trim())) {
                show.push(productsnames[i].parentElement.parentElement);
            }
            else{
                hide.push(productsnames[i].parentElement.parentElement)
            }
        }
        showProducts(show);
        hideProducts(hide);
        console.log(show);
        console.log(hide);
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