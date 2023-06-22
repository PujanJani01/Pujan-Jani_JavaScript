/* when object is taken as parameter in function, if we change any property of object in function, property of 
   object outside the function will be also changed */

// function change(obj){
//     obj.age = 20;
//     console.log(obj.age); 
// }
// const obj1 = {
//     age : 18
// }
// console.log(obj1.age);  // 18
// change(obj1);           // 20
// console.log(obj1.age);  // 20

//---------------------------------------------------------------------------------------------------------

// solution

// function change(obj){
//     obj.age = 20;
//     console.log(obj.age); 
// }
// const obj1 = {
//     age : 18
// }
// obj2 = {...obj1};
// console.log(obj1.age);  // 18
// change(obj2);           // 20
// console.log(obj1.age);  // 18
// console.log(obj2.age);  // 20


// function change(...obj){
//     obj.age = 20;
//     console.log(obj.age); 
// }
// const obj1 = {
//     age : 18
// }
// console.log(obj1.age);  // 18
// change(obj1);           // 20
// console.log(obj1.age);  // 18