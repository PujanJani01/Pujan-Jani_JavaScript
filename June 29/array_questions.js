//  const names  = [
// {first_name: "Handnm", last_name: "L demo"},
// {first_name: "Q Wei", last_name: "Alxezx"},
// {first_name: "Pqwern", last_name: "Ruse"},
// {first_name: "Wiruyn", last_name: "Ruby"},
// {first_name: "Erpso", last_name: "Loal"},
// {first_name: "Demors", last_name: "Poet"},
// {first_name: "Aleos", last_name: "Lkeu"},
// ]

// first method:
// for(let i=0; i<names.length;i++){
//     names[i].full_name = names[i].first_name + ' ' + names[i].last_name;
// }
// console.log(names);

// second method:
// names.map((value)=>value.full_name = value.first_name + ' ' +value.last_name)
// console.log(names);

// third method:
// for(let value of names){
//     value.full_name = value.first_name + ' ' +value.last_name;
// }
// console.log(names);

//------------------------------------------------------------------------------------------------

// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//    ]

// users.map((value)=>{
//      if(value.age >= 18){
//         value.isMature = 'Yes';
//      }
//      else {
//         value.isMature = 'No'
//      }
// });

// console.log(users);

//------------------------------------------------------------------------------------------------

// let arr = [1,2,3,5]
// console.log(arr[-1]);

//------------------------------------------------------------------------------------------------

// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// const flatArray = nestedArray.flat();
// for(let value of flatArray){
//     console.log(value);
// }  

//------------------------------------------------------------------------------------------------

// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
//   };

// for(let key in nestedObject){
//     if(Array.isArray(nestedObject[key])){
//       for(let index in nestedObject[key]){
//       console.log(nestedObject[key][index]);
//       }
//     }
//     else if(typeof nestedObject[key] === 'object'){
//       for(let insideKey in nestedObject[key]){
//         console.log(nestedObject[key][insideKey]);
//       }
//     }
//     else{
//       console.log(nestedObject[key]);
//     }
// }

//------------------------------------------------------------------------------------------------

// function isArrayContainNumber(input){
//   for(let i=0; i<input.length; i++){
//     if(typeof input[i] === "number" && !isNaN(input[i])){
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isArrayContainNumber([1, 2, 3]));             
// console.log(isArrayContainNumber(["1", "a", "h"]));       
// console.log(isArrayContainNumber(["a", 3, "gh"]));        
// console.log(isArrayContainNumber(["a", '3df', "gh"]));    

//------------------------------------------------------------------------------------------------
