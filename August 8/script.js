/* function sumOfSquare(a, b) {
    new Promise((resolve, reject) => {
        if (a & b) {
            resolve(a, b);
        }
        else {
            reject("Invalid values!");
        }
    }).then((values) => {
        console.log(a ** 2 + b ** 2);
    }).catch((error) => {
        console.log(error);
    })
}
sumOfSquare(5, 6);  // 61
sumOfSquare(0, 6);  // "Invalid values!"
sumOfSquare(5, 0);  // "Invalid values!"
sumOfSquare(0, 0);  // "Invalid values!" */

//----------------------------------------------------------------------------------------------

/* function BookTicket(){
 let available = true;
  return new Promise((resolve,reject) => {
     if(available){
        resolve();
     }
     else{
        reject();
     }
  })
  .then((value) =>{
     return "Ticket available";
  }, (value) =>{
     return "Ticket not available";
  })
  .then((value) =>{
    console.log(value);
  })
}
BookTicket(); */

//----------------------------------------------------------------------------------------------

/* function average(a,b,c,d,sum){
   return sum(a,b,c,d)/4;
}

function sum(a,b,c,d){
    return a+b+c+d;
}
console.log(average(1,2,3,4,sum)); */

//----------------------------------------------------------------------------------------------

/* function first() {
    let promise =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise Resolved First`);
        }, 1000);
    }).then((value) =>{
         console.log("hello");
         console.log(promise);
    })
    return promise;
}
first(); */

//----------------------------------------------------------------------------------------------

/* const cart = ['watch','mobile','TV'];

createOrder(cart,function(){
    proceedToPay(orderId);
});

const promise = createOrder(cart);

promise.then(function(){
    proceedToPay(orderId);
}); */

const API = "https://api.github.com/users/akshaymarch7"



