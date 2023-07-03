//  const names  = [
// {first_name: "Handnm", last_name: "L demo"},
// {first_name: "Q Wei", last_name: "Alxezx"},
// {first_name: "Pqwern", last_name: "Ruse"},
// {first_name: "Wiruyn", last_name: "Ruby"},
// {first_name: "Erpso", last_name: "Loal"},
// {first_name: "Demors", last_name: "Poet"},
// {first_name: "Aleos", last_name: "Lkeu"},
// ]

// const newArray = [];
// names.forEach((value)=>{
//     value.full_name = value.first_name + ' ' +value.last_name
//     newArray.push(value);
// })
// console.log(newArray);

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
// const newArray =[];
// users.forEach((value)=>{
//      if(value.age >= 18){
//         value.isMature = 'Yes';
//         newArray.push(value);
//      }
//      else {
//         value.isMature = 'No'
//         newArray.push(value);
//      }
// });
// console.log(newArray);

//------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4];
// const str = [];
// numbers.forEach((value) => str.push(String(value)));
// console.log(str);

//------------------------------------------------------------------------------------------------

// function intials(str){
//      let words = str.split(' ');
//      let firstChar = [];
//      words.forEach((word) => firstChar.push(word[0].toUpperCase()));
//      let short = firstChar.join('');
//      return short;
// }
// console.log(intials('George Raymond Richard Martin'));
// console.log(intials('george raymond Richard Martin'));

//------------------------------------------------------------------------------------------------

// function abc(str){
//     let words = str.split(' ');
//     let a = [];
//     words.forEach((word) => {
//       if(word.length >= 4 ){
//          a.push(word.at(0) + (word.length-2) + word.at(-1));
//       }
//       else
//         a.push(word);
//     })
//     let b = a.join(' ');
//     return b;
        
// }
// console.log(abc('Every developer likes to mix kubernetes and javascript'));

//------------------------------------------------------------------------------------------------

// const products = [
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

//  function count(arr){
//     let Clothes = []
//     let Electronics = []
//     arr.forEach((value) =>{
//         if(value.category == 'Clothes'){
//             Clothes.push(value.category);
//         }
//         else if(value.category == 'Electronics'){
//             Electronics.push(value.category);
//         }
//     })     
//     return {Clothes: Clothes.length, Electronics: Electronics.length};
//  } 
//  console.log(count(products));

// function priceAverage(arr){
//     let countClothes = 0;
//     let countElectronics = 0;
//     let countClothesPrice = 0;
//     let countElectronicsPrice = 0;
//     arr.forEach((value) =>{
//             if(value.category == 'Clothes'){
//                 countClothesPrice += value.price;
//                 countClothes ++;
//             }
//             else if(value.category == 'Electronics'){
//                 countElectronicsPrice += value.price;
//                 countElectronics++;
//             }
//     })
//     return {countClothesPriceAverage: countClothesPrice/countClothes, countElectronicPriceAverage: countElectronicsPrice/countElectronics }
//  } 
// console.log(priceAverage(products));

//------------------------------------------------------------------------------------------------

// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];
  

// function salaryAverage(arr) {
//     let countIt = 0;
//     let countHr = 0;
//     let countItSalary = 0;
//     let countHrSalary = 0;
//     arr.forEach((value) => {
//         if (value.department == 'IT') {
//             countItSalary += value.salary;
//             countIt++;
//         }
//         else if (value.department == 'HR') {
//             countHrSalary += value.salary;
//             countHr++;
//         }
//     })
//    return { "IT Salary Average": countItSalary / countIt, "HR Salary Average": countHrSalary / countHr }
// }
// console.log(salaryAverage(employees));

// function salary(arr){
//     let It = [];
//     let Hr = [];
//     arr.forEach((value) => {
//         if(value.department == 'IT'){
//                  It.push(value.salary);
//         }
//         else if(value.department == 'HR'){
//                  Hr.push(value.salary);
//         }
//     });
//     return {IT:It, HR: Hr }
//  } 

// console.log(salary(employees));


//----------------------------------------------------------------------------------------------

