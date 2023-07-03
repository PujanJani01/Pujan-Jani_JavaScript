//  const names  = [
// {first_name: "Handnm", last_name: "L demo"},
// {first_name: "Q Wei", last_name: "Alxezx"},
// {first_name: "Pqwern", last_name: "Ruse"},
// {first_name: "Wiruyn", last_name: "Ruby"},
// {first_name: "Erpso", last_name: "Loal"},
// {first_name: "Demors", last_name: "Poet"},
// {first_name: "Aleos", last_name: "Lkeu"},
// ]

// // first method:
// for(let i=0; i<names.length;i++){
//     names[i].full_name = names[i].first_name + ' ' + names[i].last_name;
// }
// console.log(names);
 
// // second method:
// names.map((value)=>{
//     value.full_name = value.first_name + ' ' +value.last_name
//     return value;
// })
// console.log(names);
// console.log(newArray);

// // third method:
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
// const newArray = users.map((value)=>{
//      if(value.age >= 18){
//         value.isMature = 'Yes';
//         return value;
//      }
//      else {
//         value.isMature = 'No'
//         return value;
//      }
// });
// console.log(users);
// console.log(newArray);

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

// function flatObject(general){
//     if(typeof general === 'object'){
//       for(let key in general){
//         flatObject(general[key]);
//       }
//     }
//     else{
//       console.log(general);
//     }
// }

// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening", {a: 5}],
//   };
//   flatObject(nestedObject);

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

// const numbers = [1, 2, 3, 4];
// const str = numbers.map((value) => String(value));
// console.log(str);

//------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

// ------------------------------------------------------------------------------------------------

// const array =[
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" },
// 					{ "id": "1003", "type": "Blueberry" },
// 					{ "id": "1004", "type": "Devil's Food" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut2",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut3",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0004",
// 		"type": "donut1",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
//     {
// 		"id": "0005",
// 		"type": "donut5",
// 		"name": "Old Fashioned",
// 		"ppu": 0.49,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "hello" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
//     {
// 		"id": "0006",
// 		"type": "donut6",
// 		"name": "Old Fashioned",
// 		"ppu": 0.49,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]


// function toppingChocolate(arr){
//     let arr2 = arr.filter(value => value.topping.filter(topping => topping.type === 'Chocolate').length)
//     return arr2;
// }
// console.log(toppingChocolate(array)); 

// function toppingChocolateAndBatterRegular(arr){
//     let arr2 = arr.filter(value => value.batters.batter.filter(batter => batter.type === 'Regular').length && value.topping.filter(topping => topping.type === 'Chocolate').length)
//     return arr2;
// }
// console.log(toppingChocolateAndBatterRegular(array));   


// function toppingChocolateAndSugar(arr){
//     let arr2 = arr.filter(value => value.topping.some(topping => topping.type === 'Chocolate') && value.topping.some(topping => topping.type === 'Sugar'));
//     return arr2;
// }
// console.log(toppingChocolateAndSugar(array)); 


// function ppu(arr){
//     let ans = arr.filter((value) => value.ppu > 0.5);
//     return ans;
// }
// console.log(ppu(array));


// function batters(arr){
//     let arr3 = arr.map((value) => value.batters);
//     return arr3;
// }
// console.log(batters(array));

// function batters(arr){
//     let arr3 = arr.filter((value) => value.batters.batter.length >=2 );
//     return arr3;
// }
// console.log(batters(array));

//------------------------------------------------------------------------------------------------

// function intials(str){
//      let a = str.split(' ');
//      let b ='';
//      for(let i=0;i<a.length;i++){
//        b += a[i].charAt(0).toUpperCase();
//      }
//     return b;
// }
// console.log(intials('George Raymond Richard Martin'));
// console.log(intials('george raymond Richard Martin'));

// function intials(str){
//      let words = str.split(' ');
//      let firstChar = words.map((word) => word[0].toUpperCase());
//      let short = firstChar.join('');
//      return short;
// }
// console.log(intials('George Raymond Richard Martin'));
// console.log(intials('george raymond Richard Martin'));

//------------------------------------------------------------------------------------------------

// function abc(str){
//     let a = str.split(' ');
//     let b = '';
//         for(i=0;i<a.length; i++){
//             if(a[i].length <= 3){
//                 b+= a[i] + ' ';
//             }
//             else{
//             b += a[i].at(0) + a[i].slice(1,a[i].length-1).length + a[i].at(-1)+" ";
//             }
//         }
//     return b;
// }
// console.log(abc('Every developer likes to mix kubernetes and javascript'));


// function abc(str){
//     let words = str.split(' ');
//     let a = words.map((word) => {
//       if(word.length >= 4 ){
//          return word.at(0) + (word.length-2) + word.at(-1);
//       }
//       return word;
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
//     { name: "Product 8", price: 90, category: "Furniture" },
//     { name: "Product 8", price: 90, category: "Furniture" },
//   ];


// function priceAverage(array){
//     let group = {};
//     let products = array.map((product) => product.category);
//     products.forEach((category) => {
//         let categoryName = array.filter((value) => category == value.category);
//         let sum= 0;
//         categoryName.forEach((value)=> sum += value.price);
//         group[category+' average price'] = sum/categoryName.length;
//     });
//     return group;
// };
// console.log(priceAverage(products));

// function count(array){
//     let group = {};
//     let products = array.map((product) => product.category);
//     products.forEach((category) => {
//         let categoryName = array.filter((value) => category == value.category);
//         group[category] = categoryName.length;
//     });
//     return group;
// };
// console.log(count(products));

//------------------------------------------------------------------------------------------------

// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Sophie", salary: 75000, department: "QA" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "Emily", salary: 80000, department: "QA" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];
  

// function salaryAverage(array){
//     let group = {};
//     let employees = array.map((employee) => employee.department);
//     employees.forEach((department) => {
//         let departmentName = array.filter((value) => value.department == department);
//         let sum= 0;
//         departmentName.forEach((value)=> sum += value.salary);
//         group[department +' average salary'] = sum/departmentName.length;
//     });
//     return group;
// };
// console.log(salaryAverage(employees));

// function salary(array){
//     let group = {};
//     let  employees= array.map((employee) => employee.department);
//     employees.forEach((department) => {
//         let departmentName = array.filter((value) => value.department == department);
//         let salaries = departmentName.map((value) => value.salary);
//         group[department] = salaries;
//     });
//     return group;
// };
// console.log(salary(employees));

//----------------------------------------------------------------------------------------------

// const names = ['Pujan','Bhuamik','Jeel','Sachin','Bhakti','Rudra','Meghana','Vansh','Prakhar'];

// function groupAlphabetically(array){
//     let group = {};
//     let firstChar = array.map((word) => word[0].toUpperCase());
//     firstChar.forEach((char) => {
//         let nameChar = array.filter((word) => word[0].toUpperCase() === char);
//         group[char] = nameChar;
//     });
//     return group;
// };
// console.log(groupAlphabetically(names));

//----------------------------------------------------------------------------------------------

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


// let flatArr = [];
// function myFlat(arr){
//         arr.map((value) =>Array.isArray(value)? myFlat(value) : flatArr.push(value) );
// };
// const arr1 = [1,2,3,[4,5,[6,[8,[8]]]]]
// myFlat(arr1);
// console.log(flatArr);

//----------------------------------------------------------------------------------------------

// const newArray = [];
// function myFilter(array){
//    for(let i=0;i<array.length;i++){
//     if(callbackFn(array[i],i,array) === true){
//         newArray.push(array[i]);
//     }
//    }
// }
// function callbackFn(value,index,array){
//     return value > 2;
// }
// const arr = [1,2,3,4,5];
// myFilter(arr);
// console.log(newArray);

//----------------------------------------------------------------------------------------------

// const newArray = [];
// function myMap(array){
//    for(let i=0;i<array.length;i++){
//         newArray.push(callbackFn(array[i],i,array));
//    }
// }
// function callbackFn(value,index,array){
//     return value*2;
// }
// const arr = [1,2,3,4,5];
// myMap(arr);
// console.log(newArray);

//----------------------------------------------------------------------------------------------

// const input= [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Mike", salary: 65000, department: "QA" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//     { name: "David", salary: 70000, department: "QA" },
//   ];

  
// function groupAlphabetically(array){
//     let group = {};
//     let firstChar = array.map((word) => word.name[0].toUpperCase());
//     firstChar.forEach((char) => {
//         let nameChar = array.filter((word) => word.name[0].toUpperCase() === char);
//         group[char] = nameChar;
//     });
//     return group;
// };
// console.log(groupAlphabetically(input));


// function groupByDepartment(array){
//     let group = {};
//     let employees = array.map((employee) => employee.department);
//     employees.forEach((department) => {
//         let departmentName = array.filter((value) => value.department === department);
//         group[department] = departmentName;
//     });
//     return group;
// };
// console.log(groupByDepartment(input));