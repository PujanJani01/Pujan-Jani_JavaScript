// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);


//----------------------------------------------------------------------------------------------------

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);

//----------------------------------------------------------------------------------------------------

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

//----------------------------------------------------------------------------------------------------

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

//----------------------------------------------------------------------------------------------------

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

//----------------------------------------------------------------------------------------------------

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);

//----------------------------------------------------------------------------------------------------

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);

//----------------------------------------------------------------------------------------------------

// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

//----------------------------------------------------------------------------------------------------

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

//----------------------------------------------------------------------------------------------------

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });

//----------------------------------------------------------------------------------------------------

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

//----------------------------------------------------------------------------------------------------

// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

//----------------------------------------------------------------------------------------------------

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);

//----------------------------------------------------------------------------------------------------

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

//----------------------------------------------------------------------------------------------------

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);
// console.log(source);

//----------------------------------------------------------------------------------------------------

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);
// console.log(source);

//----------------------------------------------------------------------------------------------------

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// props = Object.entries(student);
// console.log(props);

//----------------------------------------------------------------------------------------------------

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// console.log(student);
// delete student.rollno;
// console.log(student);

//----------------------------------------------------------------------------------------------------

// function operationObj(obj) {
//     obj = {...obj, c: 12}
//   }
//   let a = {  x: 34,  y: 56 }
//   operationObj(a);
//   console.log(a);
  
//----------------------------------------------------------------------------------------------------

// function operationObj(obj) {
//     obj.z = {...obj, c: 12}
//   }
//   let a = {
//     x: 34,
//     y: 56
//   }
//   operationObj(a);
//   console.log(a);
  
//----------------------------------------------------------------------------------------------------


