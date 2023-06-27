// let abc = 'hello world';
// abc.replace('world',' ');
// console.log(abc);


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


// let a = { e: 2, f:4};
// let b = [1,2,3,4];
// let c = Object.assign(b,a);
// console.log(c);             // return array


// let a = { e: 2, f:4};
// let b = [1,2,3,4];
// let c = Object.assign(a,b);
// console.log(c);              // return object


//  let obj1=[1,2,3,4];
//  let obj2={x : { y : 3 , z:{a : 1 } } };
//  let obj3=[5 , p = { q : 7 , r : { s : 10 } },6 , 7 , 8];
//  let obj4=Object.assign(obj3,obj1,obj2);
//  console.log(obj1);
//  console.log(obj2);
//  console.log(obj3);
//  console.log(obj4);


// let a ='hello';
// let b ={d: 'world'};
// let c = Object.assign(b,a);
// console.log(c);         // return object


// let a ='hello';
// let b ={d: 'world'};
// let c = Object.assign(a,b);
// console.log(c);         // [String: 'hello'] { d: 'world' }


// TypeError: Cannot assign to read only property '0' of object '[object String]'
// let a ='hello';
// let b = [1,2,3,4];
// let c = Object.assign(a,b);
// console.log(c);


// let a ='hello';
// let b = [1,2,3,4];
// let c = Object.assign(b,a);
// console.log(c);            // [ 'h', 'e', 'l', 'l', 'o' ]


// let a = 12012;
// let b ={d: 'world'};
// let c = Object.assign(a,b);
// console.log(c);          // [Number: 12012] { d: 'world' }


// let a = 12012;
// let b ={d: 'world'};
// let c = Object.assign(b,a);
// console.log(c);          // { d: 'world' }


// let a = 12012;
// let b = [1,2,3,4];
// let c = Object.assign(a,b);
// console.log(c);    // [Number: 12012] { '0': 1, '1': 2, '2': 3, '3': 4 }
 

// let a = 12012;
// let b = [1,2,3,4];
// let c = Object.assign(b,a);
// console.log(c);          // [ 1, 2, 3, 4 ]


// TypeError: Cannot convert undefined or null to object
// let a = null;
// let b = {a: 2};
// let c = Object.assign(a,b);
// console.log(c);

// let a = null;
// let b = {a: 2};
// let c = Object.assign(b,a);
// console.log(c);                // { a: 2 }


// function assign(obj1,obj2){
//     return {...obj1,...obj2};
// }
// let obj1 = {a:14};
// let obj2 = {b:34};
// let obj3 = assign(obj1,obj2);
// obj3.a = 20;
// console.log(obj1);

// let obj = Object.assign(5,5);
// console.log(obj);

// let obj = Object.assign(5,4);
// console.log(obj);

// let obj = Object.assign(true,true);
// console.log(obj);

// let obj = Object.assign(false,true);
// console.log(obj);

