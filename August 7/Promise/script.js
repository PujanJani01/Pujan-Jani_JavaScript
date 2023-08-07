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

let promise = new Promise(function (resolve, reject) {
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

getData();
