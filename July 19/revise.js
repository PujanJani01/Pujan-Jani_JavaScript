/* function properties(obj){
    return Object.entries(obj);
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(properties(student)); */


/* function deleteProp(obj,prop){
    console.log("Before deleting property: ",obj);
    delete obj[prop];
    console.log("After deleting property: ",obj);
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
    };
deleteProp(student,"rollno");
deleteProp(student,"sclass");
deleteProp(student,"marks"); */

/* function deleteProp({...obj},prop){
    console.log("Before deleting property: ",obj);
    delete obj[prop];
    console.log("After deleting property: ",obj);
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
    };
deleteProp(student,"rollno");
deleteProp(student,"sclass");
deleteProp(student,"marks"); */


/* function myAssign(target,source){
   for(let key in source){
       target[key] = source[key];
   }
   // source.f = 26;
   // target.f = 34;
   return target;
}
const obj1 = {a:9, b:15};
const obj2 = {b:15, c:6,d:21};
console.log(myAssign(obj1,obj2));
console.log(obj1);
console.log(obj2); */


/* const source = { a: 1 };
const target = { b: 2 };
Object.assign(target, source);
console.log(target);   // {a:1, b:2}
console.log(source);   // {a:1} */

/* const obj1 = { a: 12, b: 23 };
const obj2 = obj1;
const obj3 = { ...obj1 };
obj1.c = 23;
console.log(obj1.c, obj2.c, obj3.c);  // 23 23 undefined */

/* const obj1 = { a: 12, b: 23 };
const obj2 = { a: 44, b: 45 };
const obj3 = Object.assign(obj1, obj2);
obj2.a = 22;
console.log(obj1, obj2, obj3);  // {a:44,b:45} {a:22,b:45} {a:44,b:45} */

/* const obj1 = { a: 77, b: 67 };
const obj2 = { a: 90, b: 34 };
const obj3 = Object.assign(obj1, obj2);
obj1.a = 22;
console.log(obj3);  // {a:22, b:34}
console.log(obj1);  // {a:22, b:34}
console.log(obj2);  // {a:90, b:34} */

/* const obj1 = { a: 77, b: 67 };
const obj2 = { a: 90, b: 34 };
const obj3 = Object.assign({}, obj1, obj2);
obj1.a = 22;
console.log(obj3);  // {a:90,b:34} 
console.log(obj1);  // {a:22,b:67} 
console.log(obj2);  // {a:90,b:34}  */

/* const source = { a: { b: 1 } };
const target = {};
Object.assign(target, source);
console.log(target);  // { a: { b: 1 } }
console.log(source);  // { a: { b: 1 } } */

/* const source = { a: { b: 1 } };
const target = {};
Object.assign(target, JSON.parse(JSON.stringify(source)));
source.a.b = 2;
console.log(target);  // {a:{b:1}}
console.log(source);  // {a:{b:2}} */

/* const source = { a: 1 };
const target = Object.assign({}, source);
delete target.a;
console.log(source);  // {a:1}
console.log(target);  // {} */

/* const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result === source);  // false
console.log(result === target);  // true
console.log(source === target);  // false */

/* const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result === { a: 1, b: 2 });  // false */

/* const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
target.b = 234;
console.log(source);  // {b:2}
console.log(target);  // {a:1,b:234} */

/* const target = {};
const source = { a: 1 };
const result = Object.assign(target, source);
source.a = 2;
console.log(result);  // {a:1}
console.log(target);  // {a:1}
console.log(source);  // {a:2} */

/* const target = {};
const source = { a: { b: 1 } };
const result = Object.assign(target, source);
result.a.b = 2;
console.log(source);  // {a:{b:2}}
console.log(target);  // {a:{b:2}}
console.log(result);  // {a:{b:2}} */

/* const target = { a: { b: 1 } };
const source = { a: [2, 3, 4] };
const result = Object.assign(target, source);
console.log(result);  // {a: [2,3,4]}
console.log(target);  // {a: [2,3,4]}
console.log(source);  // {a: [2,3,4]} */

/* const target = { a: { b: 1 } };
const source = { a: [2, 3, 4] };
const result = Object.assign(target, source);
target.a[2] = 90;
console.log(result);  // {a:[2,3,90]}
console.log(target);  // {a:[2,3,90]}
console.log(source);  // {a:[2,3,90]} */

/* const target = { a: { b: { c: 1 } } };
const source = { a: { b: { d: 2 } } };
const result = Object.assign(target, source);
result.a.b.d = 3;
console.log(target);  // { a: { b: { d: 3 } } }
console.log(result);  // { a: { b: { d: 3 } } }
console.log(source);  // { a: { b: { d: 3 } } } */

/* function operationObj(obj) {
    obj = {...obj, c: 12}
}
let a = {  x: 34,  y: 56 }
operationObj(a);
console.log(a);  // {  x: 34,  y: 56 } */
  
/* function operationObj(obj) {
    obj = {...obj, c: 12};
    return obj;
}
let a = {  x: 34,  y: 56 }
operationObj(a);
console.log(a);  // {  x: 34,  y: 56 }
console.log(operationObj(a));  // {  x: 34,  y: 56, c: 12 } */


/* function operationObj(obj) {
  obj.z = {...obj, c: 12}
}
let a = {
  x: 34,
  y: 56
}
operationObj(a);
console.log(a);  // {x:34, y: 56, z: {x:34, y:56, c: 12}} */
  

/* let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1)  // [{a: 23, b: 45, c: 5}]
console.log(arr2)  // [{a: 23, b: 45, c: 5}]
console.log(obj1)  // {a: 23, b: 45} */

/* let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
obj1.c.f = 30;
console.log(arr1); // [{ a: 23, b: 45, c: 5 }]
console.log(arr2); // [{ a: 23, b: 45, c: 5 }]
console.log(obj1); // { a: 23, b: 45, c: { f: 30 } } */

let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
obj1.c.f = 30;
console.log(arr1);


  

