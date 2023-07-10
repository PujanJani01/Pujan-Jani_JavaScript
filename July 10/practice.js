// function array_clone(arr){
//  return [...arr];
// }
// console.log(array_clone([1,2,4,0]));
// console.log(array_clone([1,2,[4,0]]));

//------------------------------------------------------------------------------------------------

// function first(arr,n=1){
//     return arr.filter((value,index,arr) => arr.indexOf(value) <= n-1 );
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


// function first(arr,n=1){
//     return arr.slice(0,n);
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

//------------------------------------------------------------------------------------------------

// function first(arr,n=1){
//     return arr.slice(-n);
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));

//------------------------------------------------------------------------------------------------

// function reverseNum(number){
//     let reversed  = number.toString().split('').reverse().join('');
//     return Number(reversed);
// }
// console.log(reverseNum(12345));
// console.log(reverseNum(32243));

//------------------------------------------------------------------------------------------------

// function swapKeyValue(obj){
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);
//     const newObj = {};
//     keys.forEach((key,index) =>{
//          newObj[values[index]] = key;
//     })
//     return newObj;
// }
// const obj = {fname: 'pujan', lname: 'jani', age:18};
// console.log(swapKeyValue(obj));

//------------------------------------------------------------------------------------------------

// function sumOfIndex(arr1,arr2){
//     let sumArr = [];
//         if(arr1.length < arr2.length){
//          for(let i = 0; i < arr2.length-arr1.length ; i++){
//             arr1.push(0);
//          }
//          arr1.forEach((value,index) =>{
//             sumArr.push(value + arr2[index]);
            
//           } );
//         }
//         else if(arr1.length > arr2.length){
//             for(let i = 0; i < arr1.length-arr2.length ; i++){
//                arr2.push(0);
//             }
//             arr1.forEach((value,index) =>{
//                sumArr.push(value + arr2[index]);
               
//              } );
//            }
//            else {
//             arr1.forEach((value,index) =>{
//                 sumArr.push(value + arr2[index]);
                
//               } );
//            }

//     return sumArr;
// }
// console.log(sumOfIndex([1,0,2,3,4,5],[3,5,6,7,8,13]));

//------------------------------------------------------------------------------------------------

// pending
// function nthLargest(arr,n){
//     let count = 0;
//       for(let i = 0; i<arr.length;i++){
//         //   let newArr = arr;
//           let a = Math.max(...newArr);
//            arr.splice(arr.indexOf(a));
//            count ++;
//           if(count == n){
//              return a;
//           }
//       }
// }
// console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));