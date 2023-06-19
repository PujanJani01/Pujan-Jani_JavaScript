
// Shallow Copy

// let obj1 = {
//     age: 18
// };
// obj2 = obj1;
// obj2.age = 20;
// console.log(obj1);
// console.log(obj2);

//-------------------------------------------------------------------------------------------------------

// let obj1 = {
//     age: 18
// };
// // obj2 = Object.assign({}, obj1);
// // obj2 = Object.create(obj1);
// obj2 = { ...obj1};

// obj2.age = 20;
// console.log(obj1);
// console.log(obj2);



// Partially Deep Copy :  Doesn't work for nested object

// let obj1 = {
//     age: 18,
//     fullname: {
//          fname: "Pujan",
//          lname: "Jani"
//     }
// };
// // obj2 = Object.assign({}, obj1);
// // obj2 = Object.create(obj1);
// obj2 = { ...obj1};

// obj2.age = 20;
// obj2.fullname.fname = "Vijay";
// console.log(obj1);
// console.log(obj2);



// Solution : Deep Copy

// let obj1 = {
//     age: 18,
//     fullname: {
//          fname: "Pujan",
//          lname: "Jani"
//     }
// };
// obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.age = 20;
// obj2.fullname.fname = "Vijay";
// obj2.fullname.lname = "Sharma";
// console.log(obj1);
// console.log(obj2);

//-------------------------------------------------------------------------------------------------------

// When there is function instead  of nested  object, there is some problem in function and date() type.

// let obj1 = {
//     age: 18,
//     fullname: {
//          fname: "Pujan",
//          lname: "Jani"
//     },
//     salary: function (params) {
//          return 3000;
//     },
//     DOB: new Date()
// };
// obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.age = 20;
// obj2.fullname.fname = "Vijay";
// obj2.fullname.lname = "Sharma";
// console.log(obj1);
// console.log(obj2);



// Solution
// Installation - npm i lodash
// const _= require('lodash'); 
// let obj1 = {
//     age: 18,
//     fullname: {
//          fname: "Pujan",
//          lname: "Jani"
//     },
//     salary: function (params) {
//          return 3000;
//     },
//     DOB: new Date()
// };
// obj2 = _.cloneDeep(obj1);
// obj2.age = 20;
// obj2.fullname.fname = "Vijay";
// obj2.fullname.lname = "Sharma";
// console.log(obj1);
// console.log(obj2);