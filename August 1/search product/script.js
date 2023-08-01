let searchbar = document.getElementById('searchbar');
// let products = document.querySelectorAll('.product');
let productsnames = document.querySelectorAll('.productname');
let nomatchfoundMessege = document.getElementsByClassName('nomatchfound')[0];

searchbar.addEventListener('input',()=>{
    // if(searchbar.value.trim() == ''){
    //     products.forEach(el =>{
    //         // el.style.display = 'flex';
    //         nomatchfoundMessege.style.display = 'none';
    //     })
    // }
    // else{
        productsnames.forEach(productname =>{
            if(productname.innerText.toLowerCase().includes(searchbar.value.trim().toLowerCase())){
                productname.parentElement.parentElement.style.display = 'flex';
                nomatchfoundMessege.style.display = 'none';
            }
            else{
                productname.parentElement.parentElement.style.display = 'none';
                nomatchfoundMessege.style.display = 'block';
            }
        })
    // } 
    

})