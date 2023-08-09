// const API = "https://api.github.com/users/akshaymarch7";
// let user = fetch(API);

// async function getData(){
//     const data = await fetch(API);
//     const datajson = data.json();
//     return datajson;
// }
// getData().then(obj => console.log(obj));

// fetch(API).then((response) => response.json()).then(data => console.log(data));


//---------------------------------------------------------------------------------------------------


/* function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}
let promise = job();
promise
.then(function() {
    console.log('Success 1');
})
.then(function() {
    console.log('Success 2');
})
.then(function() {
    console.log('Success 3');
})
.catch(function() {
    console.log('Error 1');
})
.then(function(a) {
    console.log('Success 4');
}); */

//---------------------------------------------------------------------------------------------------

/* function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
let promise = job(true);
promise
.then(function(data) {
    console.log(data);
    return job(false);
})
.catch(function(error) {
    console.log(error);
    return 'Error caught';
})
.then(function(data) {
    console.log(data);
    return job(true);
})
.catch(function(error) {
    console.log(error);
}); */

//---------------------------------------------------------------------------------------------------


// doubt

/* function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
let promise = job(true);
promise
.then(function(data) {
    console.log(data);
    return job(true);
})
.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }
    return job(true);
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
    return job(false);
})
.then(function(data) {
    console.log(data);
    return job(true);
})
.catch(function(error) {
    console.log(error);
    return 'Error caught';
})
.then(function(data) {
    console.log(data);
    return new Error('test');
})
.then(function(data) {
    console.log('Success:', data.message);
})
.catch(function(data) {
    console.log('Error:', data.message);
}); */


//---------------------------------------------------------------------------------------------------

/* function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("hello world");
        },2000)
    }).then(data => console.log(data));
}
job(); */


/* function job(data){
   return new Promise((resolve,reject) => {
      if(Number(data)){
           if(data%2 == 0){
              setTimeout(() =>{
                  resolve("even");
              },2000)
           }
           else{
            setTimeout(() =>{
                resolve("odd");
            },1000)
           }
      }
      else{
         reject("ERROR: data must be a number");
      }
   })
   .then(data => console.log(data))
   .catch(error => console.log(error))
}
job("num");
job(11);
job(6); */


//-----------------------------------------------------------------------------------------------------


/* function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolving', delay);
            resolve('done ' + delay);
        }, delay);
    });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log('All done');
    data.forEach((text) =>{
        console.log(text);
    });
}); */

//-----------------------------------------------------------------------------------------------------

/* let arr = [1,2,3,4,5];
async function getNumbers(){
    console.log("Hello");
    const numbers = await arr;
    console.log(numbers);
    console.log("Bye");
}
console.log("Start");
getNumbers();
console.log("waiting..."); */


/* let obj = {a: 10, b: 20, c: 30};
async function getNumbers(){
    console.log("Hello");
    const numbers = await obj;
    console.log(numbers);
    console.log("Bye");
}
console.log("Start");
getNumbers();
console.log("waiting..."); */


/* async function func1(){
    console.log("func1");
    return "hello";
}
async function func2(){
    console.log("Start");
    const data = await func1();
    console.log(data);
    console.log("End");
}
func2();
console.log("waiting..."); */


/* async function func1(){
    setTimeout(() =>{
        console.log("func1");
    },3000)
    return "hello";
}
async function func2(){
    console.log("Start");
    const data = await func1();
    console.log(data);
    console.log("End");
}
func2();
console.log("waiting..."); */


//-----------------------------------------------------------------------------------------------------

// const API = fetch("https://www.boredapi.com/api/activity/");

// console.log(API.data.activity);  
// // TypeError: Cannot read properties of undefined (reading 'activity')

/* API
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)); */


/* async function getData(){
    try {
        const response = await fetch("https://www.boredapi.com/api/activity/");
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
getData().then(res => console.log(res)); */

//-----------------------------------------------------------------------------------------------------

