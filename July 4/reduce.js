// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((preValue, currValue) => preValue + currValue)
// console.log(arr);
// console.log(arr2);

// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((preValue, currValue) => preValue + currValue, 10);
// console.log(arr);
// console.log(arr2);


// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((preValue, currValue) =>{
//     return preValue - currValue
// })
// console.log(arr);
// console.log(arr2);


// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((preValue, currValue) =>{
//     return preValue - currValue
// },10)
// console.log(arr);
// console.log(arr2);


// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((preValue, currValue) =>{
//     return preValue - currValue
// },-10)
// console.log(arr);
// console.log(arr2);


// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((preValue, currValue) =>{
//     return preValue*currValue;
// },10)
// console.log(arr);
// console.log(arr2);


// let arr = [{a:10,b:20},{a:15,b:5}];
// let arr2 = arr.reduce((preValue, currValue) =>{
//     return preValue.a - currValue.a;
// })
// console.log(arr);   // [{a:10,b:20},{a:15,b:5}]
// console.log(arr2)   // -5


// let arr = [{a:10,b:20},{a:15,b:5},{a:15,b:5}];
// let arr2 = arr.reduce((preValue, currValue) =>{
//     return preValue.a - currValue.a;
// })
// console.log(arr);   // [{a:10,b:20},{a:15,b:5}]
// console.log(arr2)   // NaN


// let arr = [{a:10,b:20},{a:15,b:5},{a:15,b:5}];
// let arr2 = arr.map(value => value.a).reduce((previous,current) => previous+current);
// console.log(arr);   
// console.log(arr2); // 40


// let arr = [[10,20],[15,5],[15,5]];
// let arr2 = arr.map(value => value.reduce((previous,current) => previous+current)).reduce((previous,current) => previous+current);
// console.log(arr);   
// console.log(arr2);  // 70


// let arr = [[10,20],[15,5],[15,5]];
// let arr2 = arr.map(value => value.reduce((previous,current) => previous+current));
// console.log(arr);   
// console.log(arr2); // [30,20,20]


// let arr=[{a:10,b:2},[7,23],{a:10,b:2},[7,23],{a:23,b:2},[7,23]]
// let arr2 = arr.map(element =>{
//     if(Array.isArray(element)){
//         return element.reduce((previous,current)=> previous*current);
//     }
//     else if(typeof element === 'object'){
//         return element.b;
//     }
// }).reduce((previous,current)=> previous*current);
// console.log(arr2);     // 33386248


// let arr=[{a:10,b:2},[7,23],{a:10,b:2},[7,23],{a:23,b:2},[7,23]]
// let arr2 = arr.map(element =>{
//     if(Array.isArray(element)){
//         return element.reduce((previous,current)=> previous+current);
//     }
//     else if(typeof element === 'object'){
//         return element.b;
//     }
// }).reduce((previous,current)=> previous*current);
// console.log(arr2);   // 216000


// let arr=[10,[7,23],2,[7,23],23,[7,23]]
// let arr2 = arr.map(element =>{
//     if(Array.isArray(element)){
//         return element.reduce((previous,current)=> previous+current);
//     }
//     else if(typeof element === 'number'){
//         return element;
//     }
// }).reduce((previous,current)=> previous*current);
// console.log(arr2);   // 12420000


// let arr=[10,[7,23],{a:23,b:2},[7,23],23,[7,23],{a:10,b:2}]
// let arr2 = arr.map(element =>{
//     if(Array.isArray(element)){
//         return element.reduce((previous,current)=> previous+current);
//     }
//     else if(typeof element === 'object'){
//         return element.a;
//     }
//     else return element;
// }).reduce((previous,current)=> previous*current);
// console.log(arr2);  // 1428300000


// let arr=[10,[7,23],{a:23,b:2,c:8},[7,23],23,[7,23],{a:10,b:2}]
// let arr2 = arr.map(element =>{
//     if(Array.isArray(element)){
//         return element.reduce((previous,current)=> previous+current);
//     }
//     else if(typeof element === 'object'){
//         for(let value in element){
//             return element[value];
//         }
//     }
//     else{
//         return element;
//     }
// }).reduce((previous,current)=> previous*current);
// console.log(arr2);


// let arr=[{a:23,b:2,c:8},{a:10,b:2}];
// let arr2 = arr.map(value =>{
//      if(typeof value === 'object'){
//         return Object.values(value).reduce((previous,current)=> previous+current);
//      }
// }).reduce((previous,current)=> previous+current);
// console.log(arr2);


// let arr=[{a:23,b:2,c:8},{a:10,b:2}];
// let arr2 = arr.map(element =>{
//      if(typeof element === 'object'){
//         let a = 0;
//         for(let key in element){ 
//             a +=  element[key];
//         }
//         return a;
//      }
// }).reduce((previous,current)=> previous+current);
// console.log(arr2);


// let arr=[{a:23,b:2,c:8},{a:10,b:2}];
// let arr2 = arr.map(element =>{
//      if(typeof element === 'object'){
//         let a = 0;
//         for(let key in element){ 
//             a =  element[key];  // because of overwrite, we will get only last value of object
//         }
//         return a;
//      }
// });
// console.log(arr2);  // [8,2]


// let arr=[{a:23,b:2,c:8},{a:10,b:2}];
// let arr2 = arr.map(element =>{
//      if(typeof element === 'object'){
//         let a = 0;
//         for(let key in element){ 
//             return element[key];  // because of return statement in for in loop, we will get only first value of object
//         }
//         return a;
//      }
// });
// console.log(arr2);  // [23,10]


// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce((previous, current) => {
//   if (previous.indexOf(current) === -1) {
//     previous.push(current);
//   }
//   return previous;
// }, []);
// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]


// let arr = [];
// let ans = arr.reduce((previous,current)=> previous-current);
// console.log(arr2);           // TypeError: Reduce of empty array with no initial value

// let arr = [];
// let ans = arr.reduce((previous,current)=> previous-current, 10);
// console.log(arr2);     // 10

// let arr = [];
// let ans = arr.reduce((previous,current)=> previous-current,[10]);
// console.log(arr2);   // [10]

// let arr = [];
// let ans = arr.reduce((previous,current)=> previous-current, {a:10});
// console.log(arr2);   // {a: 10}

// let arr = [{a:10}];
// let ans = arr.reduce((previous,current)=> previous-current,{a:10});
// console.log(arr2);  // NaN

// let arr = [[10]];
// let ans = arr.reduce((previous,current)=> previous-current,20);
// console.log(arr2);  // 10

// let arr = [[10],[25]];
// let ans = arr.reduce((previous,current)=> previous-current,20);
// console.log(arr2); // -15

// let arr = [[10,3],[25]];
// let ans = arr.reduce((previous,current)=> previous-current,20);
// console.log(arr2);  // NaN

// let arr = [[10],[25]];
// let ans = arr.reduce((previous,current)=> previous+current,20);
// console.log(arr2); // string - 201025

// let arr = [1,2,3,4,5];
// let ans = arr.reduce((previous,current)=> previous+current,[]);
// console.log(arr2);  // string - 12345 


// let arr = [10,15,20,25,30];
// let ans = arr.reduce((previous,current)=> previous+current,undefined);
// console.log(arr2);  // NaN

// let arr = [10,15,20,25,30];
// let ans = arr.reduce((previous,current)=> previous+current,null);
// console.log(arr2);  // 100

// let arr = [10,15,20,25,30];
// let ans = arr.reduce((previous,current)=> previous+current,[]);
// console.log(arr2);  // string - 1015202530

// let arr = [10,15,20,25,30];
// let ans = arr.reduce((previous,current)=> previous+current,{});
// console.log(arr2);  // [object Object]1015202530


// let arr = [1,20,13,4,5];
// let ans = arr.sort().reduce((a,c) => [a+c]).map(value => value);
// console.log(arr);  // [1,13,20,4,5]
// console.log(arr2);  // [ '142045' ]

// let arr = [{a:4},{b:5,c:6},{a:10},{c:3,d:2}];
// let ans = arr.reduce((a,c) => Object.assign(a,c))
// console.log(arr2);

// let arr = [{a:4},{b:5,c:6},{a:10},{c:3,d:2}];
// let ans = arr.reduce((a,c) =>{return {...a,...c}})
// console.log(arr2);

// let arr = ['Js','practice','exercices'];
// let ans = arr.reduce((a,c) => a + ' ' + c);
// console.log(arr2);

// let arr = [3,8,1,6,0];
// let ans = arr.reduce((a,c) => a < c); 
// console.log(ans);

// let arr = [3,8,1,6,0];
// let ans = arr.reduce((a,c) => a > c ? a : c); 
// console.log(ans);   // 8

// let arr = [3,8,1,6,0];
// let ans = arr.reduce((a,c) => a < c ? a : c); 
// console.log(ans);   // 0

const a = ["Js","css"];
const b = a.reduce((a,c) => a.toString() + ',' + c.toString());
console.log(b);