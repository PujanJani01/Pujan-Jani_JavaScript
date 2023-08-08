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

// callback hell
createOrder(cart,function(){ 
    proceedToPay(orderId,function(){
        showOrderSummary(payInfo,function(){
            updateWalletBalance();
        })
    });
});

// promise
createOrder(cart) // suppose it is promise got from API
.then(orderId => proceedToPay(orderId))
.then(payInfo => showOrderSummary(payInfo))
.then(payInfo => updateWalletBalance(payinfo)); */


/* const API = "https://api.github.com/users/akshaymarch7";
let user = fetch(API);
console.log(user); */

//----------------------------------------------------------------------------------------------

// https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138

/* const loadImage = url => {
    return new Promise(function(resolve, reject) {
  
      //Open a new XHR
      var request = new XMLHttpRequest();
      request.open('GET', url);
  
      // When the request loads, check whether it was successful
      request.onload = function() {
        if (request.status === 200) {
          // If successful, resolve the promise
          resolve(request.response);
        } else {
          // Otherwise, reject the promise
          reject(Error('An error occurred while loading image. error code:' + request.statusText));
        }
      };
  
      request.send();
    });
  
  };

  const embedImage = url => {
  loadImage(url).then(function(result) {
      const img = new Image();
      var imageURL = window.URL.createObjectURL(result);
      img.src = imageURL;
      document.querySelector('body').appendChild(img);
    },
    function(err) {
      console.log(err);
    });
}

embedImage("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"); */


//----------------------------------------------------------------------------------------------


// Synchronous

/* function fun1(){
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is ending");
}
function fun2(){
    console.log("fun2 is starting");
}
fun1(); */

// Asynchronous

/* function fun1(){
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is ending");
}
function fun2(){
    setTimeout(()=>{
        console.log("fun2 is starting");
    },2000)
}
fun1(); */


//----------------------------------------------------------------------------------------------

// let waitbtn = document.getElementById('waitbtn');

// Synchronous

/* waitbtn.addEventListener('click',() => {
    console.log('js is starting.');

    let start = new Date().getTime();
    // console.log(new Date().getTime() - start);

    while(new Date().getTime() - start < 3000);
    console.log('Its done!');
}) */

// Asynchronous

/* waitbtn.addEventListener('click',() => {
    console.log('js is starting.');
  setTimeout(() =>{
    console.log("Its done!");
  },3000)
}) */

//----------------------------------------------------------------------------------------------

/* function getRollNo(){
    setTimeout(() => {
        console.log('API getting roll no');
        let rollno = [1,2,3,4,5];
        console.log(rollno);

        setTimeout((rollno) => {
            const biodata = {
                name : 'pujan',
                age : 18
            }
            console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} years old.`);

            setTimeout((name) =>{
                biodata.gender = 'male';
                console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} years old. I am ${biodata.gender}`);
            },2000, biodata.name)
        },2000, rollno[1])
    },2000)
}
getRollNo(); */ 


//  above code using promise

/* const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
         let rollno = [1,2,3,4,5];
             resolve(rollno);
            //  reject("Something went wrong");
    },2000)
})
.then((rollno) =>{
        console.log(rollno);
        // getBiodata(rollno[1]).then((txt) => console.log(txt));
        return getBiodata(rollno[1]);
})
.then((text) =>{
    console.log(text);
})
.catch((error) =>{
    console.log(error);
})

function getBiodata(indexData){
    return new Promise((resolve,reject) => {
        setTimeout((indexData) =>{
            const biodata = {
                name: 'pujan',
                age : 18
            }
            resolve(`My roll no is ${indexData}. My name is ${biodata.name} and I am ${biodata.age} years old.`)
        },2000, indexData)
    })
} */

// get prom
//----------------------------------------------------------------------------------------------

// doubt abour browser console behaviour

/* function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise Resolved First`);
        }, 1000);
    });
}
// first().then((value) => console.log(value))
console.log(first()); */
  
//----------------------------------------------------------------------------------------------

