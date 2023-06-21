/* Arrow function is a shorter form of function expression and  does not have its own this and arguments, it uses
    its parent's this and arguments */

// let a = 10;
// let b = 15;
// let c = 8;

// const sum = () =>{
//     return a+b+c;
// }
// console.log("sum :", sum()); 

//---------------------------------------------------------------------------------------------------------

// if there is only one statement in the function, we can write like this

// const form = () => console.log("Here is your form");
// form();

//---------------------------------------------------------------------------------------------------------

//if there is only one parameter, we can write parameter without parenthesis

// const person = fname => console.log(`First name is ${fname}`);
// person('pujan');

//---------------------------------------------------------------------------------------------------------

// Duplicate parameter are not allowed in arrow function

// const sum = (a,b,a) => {
//      console.log(a+b+a);   // ERROR
// }
// sum(1,2,3);  


// Duplicate parameter are allowed in normal function

// function sum(a,b,a){
//     console.log(a+b+a); // 8
// }
// sum(1,2,3);  // it will take b = 2 and a = 3