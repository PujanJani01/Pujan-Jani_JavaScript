// let arr = [{a:4},{b:5,c:6,e:4},{a:10},{c:3,d:2}];
// let arr2 = arr.sort((a,c) => Object.values(a).length - Object.values(c).length)
// console.log(arr2);


// let arr = [10,5,21,101,9];
// arr.sort();
// console.log(arr);


// Ascending Order
// let arr = [10,5,21,101,9];
// arr.sort((a,b) => a-b);
// console.log(arr);


// Descending Order
// let arr = [10,5,21,101,9];
// arr.sort((a,b) => b-a);
// console.log(arr);


// gives ERROR as toSorted() is not a function
// let arr = [10,5,21,101,9];
// let arr2 = arr.toSorted();
// console.log(arr);
// console.log(arr2);


// let arr = ['a','m','c','f','a'];
// arr.sort();
// console.log(arr);    // [ 'a', 'a', 'c', 'f', 'm' ]


// let arr = ['a','M','c','f','A'];
// arr.sort();
// console.log(arr);    // [ 'A', 'M', 'a', 'c', 'f' ]


// let arr = ['a','m',3,'f','5','P'];
// arr.sort();
// console.log(arr);    // [ 3, '5', 'P', 'a', 'f', 'm  ]


// let arr = [[3,1,2],[4,6,2]];
// arr.map((element) => element.sort());
// console.log(arr);   // [ [ 1, 2, 3 ], [ 2, 4, 6 ] ]


// let arr = [[3,1,2],[4,6,2]];
// arr.map((element) => element.sort());
// console.log(arr);


// let arr = [
//     {fname:'Pujan', age:18},
//     {fname:'maruti', age:10},
//     {fname:'zain', age:25},
//     {fname:'abhay', age:76},
//     {fname:'vishal', age:20}
// ]
// // arr.sort((a,b) => a.age - b.age);
// // console.log(arr);

// arr.sort((a,b) =>{
//     if(a.fname.toUpperCase() < b.fname.toUpperCase()){
//         return -1;
//     }
//     else if(a.fname.toUpperCase() > b.fname.toUpperCase()){
//         return 1;
//     }
//     return 0;
// });
// console.log(arr);


// let arr = [undefined,null,'Null',NaN,true,'Amit','Pujan',false,5,[],[3,6],{},{a:1},{A:1},'6','pujan'];
// arr.sort();
// console.log(arr);  
// [ [], [3,6], 5, '6', 'Amit', NaN, 'Null', 'Pujan', {}, {a:1}, {A:1}, false, null, 'pujan', true, undefined]


// let arr = ['3', 0, '9', '2f', '2af'];
// arr.sort();
// console.log(arr);


// let arr = [5,10,27,9];
// arr.sort(()=> Math.random() - 0.5);
// console.log(arr); 

// let dates = ['2023/05/06', '2022/12/25', '2024/01/01', '2023/03/18'];
// dates.sort();
// console.log(dates);

// let dates = ['2023-05-06', '2022-12-25', '2024-01-01', '2023-03-18'];
// dates.sort();
// console.log(dates);

// let arr = [19, 18.45,22,35];
// arr.sort();
// console.log(arr);

// let arr = ['pujan','bhaumik','sachin','jeel','vansh'];
// arr.sort((a,b) => a.length - b.length);
// console.log(arr);


// let arr = ['pujan','bhaumik','sachin','jeel','vansh'];
// arr.sort((a,b) =>{
//     if(a.at(-1) < b.at(-1)){
//         return -1;
//     }
//     else if(a.at(-1) > b.at(-1)){
//         return 1;
//     }
//     return 0;
// });
// console.log(arr);


// Doubt
// let arr = [10, 'pujan', 5, 'amit', 8, 'bansi'];
// arr.sort((a, b) => {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a - b;
//   } 
//   else if (typeof a !== 'string' && typeof b === 'string') {
//     if(a.toLowerCase < b.toLowerCase){
//         return -1;
//     }
//     else if(a.toLowerCase > b.toLowerCase){
//         return 1;
//     }
//     return 0;
// }
// });
// console.log(arr);


