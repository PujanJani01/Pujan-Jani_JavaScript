let searchbar = document.getElementById('searchbar');
// let products = document.querySelectorAll('.product');
let productsnames = document.querySelectorAll('.productname');
let nomatchfoundMessege = document.getElementsByClassName('nomatchfound')[0];

searchbar.addEventListener('input',()=>{
        productsnames.forEach(productname =>{
            let regex = new RegExp(`(${searchbar.value})`,'i');
            if(productname.innerText.search(regex) != -1){
            // if(productname.innerText.match(regex)){
                productname.parentElement.parentElement.style.display = 'flex';
                nomatchfoundMessege.style.display = 'none';
            }
            else{
                productname.parentElement.parentElement.style.display = 'none';
                nomatchfoundMessege.style.display = 'block';
            }
        })
})