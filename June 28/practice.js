
// function howManyNumber(str){
//     let count = 0;
//     for(let i=0; i < str.length;i++){
//         if(Number(str[i])){
//             count++;
//         }
//         else if(str[i]==0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(howManyNumber('11154'));
// console.log(howManyNumber("assa0d")); 
// console.log(howManyNumber('agfh1'));
// console.log(howManyNumber('ag12sdf4'));
// console.log(howManyNumber('111'));

//------------------------------------------------------------------------------------------------------


// Doubt 

// let arr = [1,2,3,4,5];
// let result = map(arr);
// console.log(result);
// function map(callbackFn){
//     for(i=0;i<arr.length;i++){
//        callbackFn(arr[i]);
//     }
// };

// function callbackFn(value){
//       return value > 5;
// };

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5];
// let arr2 = arr.map((i) => i);
// console.log(arr2);             // [1,2,3,4,5]

// let arr = [1,2,3,4,5];
// let arr2 = arr.map((i) => i=5);
// console.log(arr2);          // [5,5,5,5,5]

// let arr = [1,2,3,4,5];
// let arr2 = arr.map((i) => i > 4);
// console.log(arr2);    // [false,false,false,false,true]

//------------------------------------------------------------------------------------------------------

// function assign(obj1,obj2){
//     return {...obj1,...obj2};
// }
// const a = {a:2,b:6};
// const b = {c:3,d:8};
// const c = assign(a,b);
// a.b = 4545;
// console.log(c);

//-------------------------------------------------------------------------------------------------------

// function mergeObject(target,source) {
//     for (var i = 1; i < arguments.length; i++) {
//         var source = arguments[i];
//         for (var key in source) {
//             if (source.hasOwnProperty(key)) {
//                 target[key] = source[key];
//             }
//         } 
//     }
//     return target;
// }
// const a = {a:2,b:6};
// const b = {c:3,d:8};
// let c = mergeObject(a,b)
// console.log(c);
// a.d = 5544;
// console.log(c);

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1);
// console.log(obj1.c.f);

// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1);
// console.log(arr2);

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);


//----------------------------------------------------------------------------------------------

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1}]);
// arr1[0].c = 5;
// console.log(arr2); 

// let arr1 = [{a:8, b:10}];
// let arr2 = [...arr1];
// let obj = Object.assign({},arr2);
// obj[0].b = 15;  
// console.log(arr2);


// for(i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

let arr1 = [{a:15,b:20}];
let arr2 = [...arr1[0]];
console.log(arr1);
console.log(arr2);