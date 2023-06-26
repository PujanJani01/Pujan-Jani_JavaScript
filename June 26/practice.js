// let obj1 = {a:10, b:22};
// let obj2 = Object.assign({a: 20}, obj1);
// // console.log(obj2);
// obj2.a = 30;
// console.log(obj1);


// let obj1 = {a: 10, b: 63};
// let obj2 = {a: 20};
// let obj3 = Object.assign(obj2, obj1);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// obj2.a = 15;
// console.log(obj3);


// let obj1 = {a: 10, b: 63};
// let obj2 = {a: 20};
// let obj3 = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// obj1.a = 15;
// console.log(obj3);


// let obj1={a:10,b:20}
// let obj2 = Object.assign({a:12},obj1);
// obj1.a=22;
// console.log(obj1.a);
// console.log(obj2.a);


// let obj1 = {a:15 , b:20}
// let obj2 = {a:22}
// let obj3 = Object.assign (obj1 ,obj2)
// obj1.a=25;
// console.log(obj3.a);


// console.log(20>10>5);        // false  // 20 > 5 is true and true > 5 is false
// console.log(20>10<5);        // true


// const target = { a:1, b: { c: 1 } } ;
// const source = { a:0, b: { d: 2 } } ;
// const result = Object.assign(target, source);
// target.a = 3;      // won't make changes in source
// source.a = 3;      // won't make changes in target
// target.b.c = 5;    // will make changes in source
// source.b.c = 5;    // will make changes in target
// console.log(target);
// console.log(source);


