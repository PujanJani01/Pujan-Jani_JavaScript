// let arr = [{a:10,b:[15,20]},{a:10,b:15}];
// let arr2 = arr.map((value) => (value.b || []).map((value) => value*2));
// console.log(arr2);             // ERROR


// let arr = [{a:10,b:[15,20]},{a:10,b:15}];
// let arr2 = arr.map((value) => value?.b.map((value) => value*2));
// console.log(arr2);            // ERROR

//-----------------------------------------------------------------------------------------------------------

// let arr = [];
// let arr2 = arr.map((value) => value);
// console.log(arr2);   // []

//-----------------------------------------------------------------------------------------------------------

//  function count(arr){
//     let countClothes = []
//     let countElectronics = []
//     arr.filter((value) =>{
//         if(value.category == 'Clothes'){
//             countClothes.push(value.category);
//         }
//         else if(value.category == 'Electronics'){
//             countElectronics.push(value.category);
//         }
//     })     
//     return {Clothes:countClothes.length, Electronics: countElectronics.length};
//  } 

//  const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];

//   console.log(count(products));

//-----------------------------------------------------------------------------------------------------------

// let flatArr = [];
// function myFlat(arr,depth=1){
//         arr.map((value) =>{ 
//             if(Array.isArray(value) && depth>0){
//                 myFlat(value,depth-1);
//             }
//             else 
//                 flatArr.push(value);
//     });
// };
// const arr1 = [1,2,3,[4,5,[6,[8,[8]]]]]
// myFlat(arr1,2);
// console.log(flatArr);

//----------------------------------------------------------------------------------------------------

// let a = {fname:'pujan',age:18};
// let b =null;
// console.log({...a,prop:b.prop});

//----------------------------------------------------------------------------------------------------

// let a = {fname:'pujan',age:18};
// const abc = ({fname,age}) =>{
//       return {fname, age};
// }
// console.log(abc(a));

//----------------------------------------------------------------------------------------------------

// const arr5 = [1, [2], 4, 5];
// console.log(arr5.flat(undefined)); // [1, 2, 4, 5]