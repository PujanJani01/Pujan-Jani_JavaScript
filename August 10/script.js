
function prom(){
    let error = true;
    return new Promise((resolve,reject) => {
        if(!error){
            resolve("Promise completed")
        }
        else{
            reject("Promise rejected");
        }
    })
    .then(data => data)
    .catch(error => error)
}

async function func(){
    const store = await prom();
    console.log(store);
}
console.log("start");
func();
console.log("End");
