/* const promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
         resolve();
        }
        else{
            reject();
        }
         console.log("promise completed");
    },1000)
})

promise.then(function(){
    console.log("promise resolved");
})
.catch(function(){
    console.log('promise rejected');
}) */

//-----------------------------------------------------------------------------------------------

/* new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
         resolve({username: 'pujan', password: '1234'});
        }
        else{
            reject("ERROR");
        }
         console.log("promise completed");
    },1000)
}).then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){ 
    console.log(error);
})
.finally(()=> console.log("Promise is either resolved or rejected")) */

//-----------------------------------------------------------------------------------------------

/* async function abc(){
    console.log(1);
    await console.log(2);
    console.log(3);
    await console.log(6);
     console.log(7);
}
abc();
console.log(4);
console.log(5); */

//-----------------------------------------------------------------------------------------------

/* let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'pujan', password: '1234' });
        }
        else {
            reject("ERROR");
        }
        console.log("promise completed");
    }, 1000)
})

// console.log(promise);

async function consumePromise() {
    try {
        const repsonse = await promise;
        console.log(repsonse);
        // console.log(promise);
    } catch (error) {
        console.log(error);
        // console.log(promise);
    }
}

consumePromise();


async function getData(){
    try {
        const repsonse = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(repsonse);
        const data = await repsonse.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } 
}

getData(); */


//-----------------------------------------------------------------------------------------------

/* let a = 10;
var promise = new Promise(function(resolve,reject){
    if(a){
        resolve(a)
    }
    else{
        reject('ERROR');
    }
})
.then((a)=>{
 console.log(a);
 return a;
})
.catch((error)=>{
    console.log(error);
})

async function abc(){
    let res = await promise;
    console.log(res);
}
abc();
console.log(abc());
console.log(promise); */

//-----------------------------------------------------------------------------------------------

/* async function abc(){
    let a = 5;
    await console.log("Sum : ");
    console.log(a+b);
}
abc();
let b = 10; */

//-----------------------------------------------------------------------------------------------

/* let promise1 = new Promise((resolve,reject) =>{
    let error = false;
    if(!error){
        resolve(1);
    }
    else{
        reject(0);
    }
})
.then((value)=>{
    return  new Promise((resolve) =>{
          resolve(value);
    }).then((value)=>{
          console.log(value);
    })
})
.catch((value) =>{
    console.log("Error");
}) */