// const array = [{},{},{},{}];
// const array2 = array.map((value) => {value.fname = 'pujan'; return value;});
// // const array2 = array.map((value) => value.fname = 'pujan');
// console.log(array);
// console.log(array2);

//--------------------------------------------------------------------------------------------------

// const arr = [1,2,3,4,5];
// const arr2 = arr.map((value,index) => value*index);
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// const arr = [{a:15, b: 20}];
// const arr2 = [{...arr}];
// const newArr = arr2.map((value) => value.b = 30);
// console.log(arr);
// console.log(arr2);
// console.log(newArr);

//--------------------------------------------------------------------------------------------------

// const arr = [15,20];
// const arr2 = [{...arr}];
// const newArr = arr2.map((value) => value.b = 30);
// console.log(arr);
// console.log(arr2);
// console.log(newArr);

//--------------------------------------------------------------------------------------------------

// const names  = [
// {first_name: "pujan", last_name: "jani"},
// {first_name: "pratham", last_name: "pandya"},
// {first_name: "Pavan", last_name: "chauhan"},
// {first_name: "rohan", last_name: "sharaf"},
// ]
// let b = names.map((value)=>value.full_name = value.first_name + ' ' +value.last_name)
// console.log(names);
// console.log(b);

//--------------------------------------------------------------------------------------------------

// function isArrayContainNumber(input){
//     let arr = input.map((value) => {
//         if(typeof value === "number" && !isNaN(value)){
//             return true;
//           }
//         // return false;
//     })
//     return arr.includes(true);
// }
  
//   console.log(isArrayContainNumber([1, 2, 3]));             
//   console.log(isArrayContainNumber(["1", "a", "h"]));       
//   console.log(isArrayContainNumber(["a", 3, "gh"]));        
//   console.log(isArrayContainNumber(["a", '3df', "gh"]));    

//--------------------------------------------------------------------------------------------------

// function isArrayContainNumber(input){
//     let arr = input.map((value) =>typeof value === "number" && !isNaN(value))
//     return arr.includes(true);
// }
  
//   console.log(isArrayContainNumber([1, 2, 3]));             
//   console.log(isArrayContainNumber(["1", "a", "h"]));       
//   console.log(isArrayContainNumber(["a", 3, "gh"]));        
//   console.log(isArrayContainNumber(["a", '3df', "gh"]));   

//--------------------------------------------------------------------------------------------------


// const arr = [{
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3:  5
// }]
// const arr2 = arr.map((value) => {
//     for(let key in value){
//         console.log(value[key]);
//     }
// })

//--------------------------------------------------------------------------------------------------

// const arr = [10,15,35,80,42];
// const arr2 = arr.map((value) => value > 40);
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// const str = ['hello world'];
// const arr = str.map((value) => value.split(''));
// console.log(str);
// console.log(arr);

//--------------------------------------------------------------------------------------------------

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{...obj1}];
// let arr2 = arr1.map((value) => value.b = 100);
// console.log(arr1)

//--------------------------------------------------------------------------------------------------

// let arr = ['pujan','vidhan', 'devang', 'veer'];
// let arr2 = arr.map((value) => value.charAt(0).toUpperCase() +  value.slice(1));
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// let arr = [[1,2], [3,4], [5,6,9], [7,8,10]];
// let arr2 = arr.map((value,index) => value[index]);
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// let arr = [[],[],[],[]];
// let arr2 = arr.map((value) => value[0] = 'fname');
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// let arr = [[1,2], [3,4], [5,6,9], [7,8,10]];
// let arr2 = arr.map((value) =>{
//        let a =  value.map((value) => value*2);
//        return a;
// });
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// Doubt
// let arr = [{a:10, b:[33,44]}];
// let arr2 = arr.map((value) =>{
//       for(let key in value){
//          if(Array.isArray(value[key])){
//               let a = value[key].map((value) => value*2 );
//               return a;
//          }
//       }    
// });
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// const fahrenheit= [32, 68, 86, 104];
// const celsius= fahrenheit.map((value) => (value - 32) * 5/9);
// console.log(celsius);

//--------------------------------------------------------------------------------------------------

// const arr = [
//     {fname: 'pujan', age: 18},
//     {fname: 'pujan', age: 18},
//     {fname: 'pujan', age: 18},
//     {fname: 'pujan', age: 18}
// ];
// const arr2 = arr.map((value) => delete value.age);
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// const arr = [1,2,3,4,5];
// const arr2 = arr.map((value) => value = 20);
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// const arr = [1,2,[4,5],{a:6,b:7},[8,9,10]];
// const arr2 = arr.map((value) => {
//     if(Array.isArray(value)){
//         return value;
//     }
//     else return false;
// });
// console.log(arr);
// console.log(arr2);

//--------------------------------------------------------------------------------------------------

// const arr = [10,20,30,40];
// const arr2 = arr.map((value,index,array) => value + array);
// console.log(arr);
// console.log(arr2);  // [ '1010,20,30,40', '2010,20,30,40', '3010,20,30,40', '4010,20,30,40' ]


// let a = 10 + [1,2,3,4];
// console.log(a);
// console.log(typeof a);

//--------------------------------------------------------------------------------------------------

