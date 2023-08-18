/* function myFunc1() {
    return new Promise((resolve, reject) => {
        console.log("First function");
    });
}
async function myFunc2() {
    console.log("Inside 2");
    await myFunc1();
    console.log("HELLO");
}
myFunc2(); */

//-------------------------------------------------------------------------------------------------

/* function callbackFunc() {
    return fetch("https://randomuser.me/api/");
}

async function mainFunc(data) {
    console.log('Start');
    let res = await data;
    console.log('Waiting...');
    return res;

}
mainFunc(callbackFunc())
    .then(response => response.json())
    .then(data => console.log(data))
    .then(end => console.log("End"))
 */

//-------------------------------------------------------------------------------------------------

