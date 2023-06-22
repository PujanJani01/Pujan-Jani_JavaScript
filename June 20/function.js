// Without defining parameters and arguments

// let a = 10;
// let b = 15;

// function sum(){
//     return a+b;
// }
// console.log("sum :", sum()); 

// Output - Sum : 25

//---------------------------------------------------------------------------------------------------------

// With defining parameters and arguments

// let a = 10;
// let b = 15;

// function sum(a,b){
//     return a+b;
// }
// console.log("sum :", sum(a,b)); 

// Output - Sum : 25

//---------------------------------------------------------------------------------------------------------

//  defining only arguments

// let a = 10;
// let b = 15;

// function sum(){
//     return a+b;
// }
// console.log("sum :", sum(a,b)); 

// Output - Sum : 25

//---------------------------------------------------------------------------------------------------------

//  defining only parameters 

// let a = 10;
// let b = 15;

// function sum(a,b){
//     return a+b;
// }
// console.log("sum :", sum()); 

// Output - Sum : NaN

//---------------------------------------------------------------------------------------------------------

// function is not returning any value

// function hello(){
//     console.log('Hello!');
// }
// hello();

//---------------------------------------------------------------------------------------------------------

/* when it will invoke, will print "Hello!" but also give undefined because here function doesn't return 
   anything */

// function hello(){
//     console.log('Hello!');
// }
// console.log(hello());

//---------------------------------------------------------------------------------------------------------

// function hello(){
//     console.log('Hello!');
//     return 'JS';
// }
// console.log(hello());


// function hello(){
//     console.log('Hello!');
//     return 'JS';
// }
// const x = hello();
// console.log(x);

//---------------------------------------------------------------------------------------------------------

// function hello(x){
//     return x;
// }
// console.log(hello('pujan'));

//---------------------------------------------------------------------------------------------------------

// function expression
// we can also create function like this 

// const job = function(){
//     console.log("Intern");
// }
// job();

//---------------------------------------------------------------------------------------------------------

// we can also give name to the function expression, so function can call itself

// const factorial = function fact(n){
//      result = (n<2)? 1 : n*fact(n-1);
//      return result;
// }
// console.log(factorial(4));


//  function call itself in function declaration

// function factorial(n){
//      result = (n<2)? 1 : n*factorial(n-1);
//      return result;
// }
// console.log(factorial(6));

//---------------------------------------------------------------------------------------------------------

// object as parameter
// if we change some property of object in function, it will also affect outside the function

// function change(college){
//      college.batch = 1;
// }

// let college = {
//     div : 'A1',
//     batch: 2
// }
// console.log(college);
// change(college);
// console.log(college);

//---------------------------------------------------------------------------------------------------------

// array as parameter
// if we change some index of array in function, it will also affect outside the function

// function change(num){
//      num[2] = 7;
// }
// let num = [1,3,5,7,9];

// console.log(num);
// change(num);
// console.log(num);

//---------------------------------------------------------------------------------------------------------

// function can be defined based on the condition

// var num = 2;
// var num = 4;
// if(num>2){
//     square = function(num){
//         return num*num;
//     }
//       console.log(square(num)); 
// }
// else console.log('Invalid');


// it will give error because function is called before and defintion is in the if block.

// var num;
// console.log(square(5)); 
// if(num>2){
//     square = function(num){
//         return num*num;
//     }
// }
// else console.log('Invalid');


// it will give error
// var num;
// if(num>2){
//     square = function(num){
//         return num*num;
//     }
// }
// else console.log('Invalid');
// console.log(square(5)); 

//---------------------------------------------------------------------------------------------------------

// function hoisting

//function only supports with function declarations

// console.log(square(5)); 
// function square(num)
// {
//    return num*num;
// }


// don't work with function expressions
// var num;
// console.log(square(5)); 
// const square = function(num)
// {
//   return num*num;
// }

//---------------------------------------------------------------------------------------------------------

// using the argument object

// for any sepcific argument, we can access it like array index but it is not array

// function oddSum(a,b,c,d,e){
//     console.log('the first argument is ', arguments[0]);
//     return a+b+c+d+e;
//   }
//   console.log(oddSum(1,3,5,7,9));


// when we don't know the total number of argument

// function oddSum(a,b,c,d,e){
//   console.log('the total number of arguments is ', arguments.length);
//   return a+b+c+d+e;
// }
// console.log(oddSum(1,3,5,7,9));


// function oddSum(a,b,c,d,e){
//   console.log('the total number of arguments is ', arguments.length-1);
//   return a+b+c+d+e;
// }
// console.log(oddSum(1,3,5,7,9));


// it doest not work with arrow function

// const oddSum = (a,b,c,d,e) =>{
//    console.log('the first argument is ', arguments[0]);
//    return a+b+c+d+e;
//  }
//  console.log(oddSum(1,3,5,7,9));

//---------------------------------------------------------------------------------------------------------

// self-invoking function

// (function(){
//    console.log('self-invoking function');
// })();