
async function getData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}
getData().then(data => showData(data))
    .catch(error => console.log("ERROR"))


function showData(data) {
    
    document.querySelector('.container').innerHTML = data.map(product => ` <div class="card">
         <div class="imgdiv">
               <image src= ${product.image} alt="img" class='img'>
         </div>
         <div class="details">
                <h4>${product.title}</h4>
                <p>$${product.price}</p>
         </div>
      </div>`).join(' ');
}