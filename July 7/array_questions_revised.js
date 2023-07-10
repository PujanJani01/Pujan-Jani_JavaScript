//  const names  = [
// {first_name: "Handnm", last_name: "L demo"},
// {first_name: "Q Wei", last_name: "Alxezx"},
// {first_name: "Pqwern", last_name: "Ruse"},
// {first_name: "Wiruyn", last_name: "Ruby"},
// {first_name: "Erpso", last_name: "Loal"},
// {first_name: "Demors", last_name: "Poet"},
// {first_name: "Aleos", last_name: "Lkeu"},
// ]
// function addFullName(array){
//     let newArray = array.map((value)=>{
//         value.full_name = value.first_name + ' ' +value.last_name
//         return value;
//     })
//     return newArray
// }
// console.log(addFullName(names));

//------------------------------------------------------------------------------------------------------

// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//    ]
//    function isMature(array){
//     const newArray = array.map((value)=>{
//         if(value.age >= 18){
//            value.isMature = 'Yes';
//            return value;
//         }
//         else {
//            value.isMature = 'No'
//            return value;
//         }
//    });
//    return newArray;
//  }
// console.log(isMature(users));

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,5]
// console.log(arr[-1]);

//------------------------------------------------------------------------------------------------------

// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   function flatArray(array){
//     const flatArr = array.flat();
//     flatArr.forEach(value => console.log(value));
//   }
// flatArray(nestedArray);

//------------------------------------------------------------------------------------------------------

// function flatObject(general){
//     if(typeof general === 'object'){
//         Object.values(general).forEach(value => flatObject(value))
//     }
//     else{
//         console.log(general);
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

//------------------------------------------------------------------------------------------------------

// function isArrayContainNumber(input){
//   return input.some(value => typeof value === "number" && !isNaN(value))
// }

// console.log(isArrayContainNumber([1, 2, 3]));             
// console.log(isArrayContainNumber(["1", "a", "h"]));       
// console.log(isArrayContainNumber(["a", 3, "gh"]));        
// console.log(isArrayContainNumber(["a", '3df', "gh"]));

//------------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4];
// const str = numbers.map((value) => String(value));
// const str2 = numbers.map(String);
// console.log(str);
// console.log(str2);

//------------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

//------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------

// function intials(str){
//      let words = str.split(' ');
//      let firstChar = words.map((word) => word[0].toUpperCase()).join('');
//      return firstChar;
// }
// console.log(intials('George Raymond Richard Martin'));
// console.log(intials('george raymond Richard Martin'));

//------------------------------------------------------------------------------------------------------

// function numeronyms(str){
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
// console.log(numeronyms('Every developer likes to mix kubernetes and javascript'));

//------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------

// const names = ['Pujan','Bhuamik','Jeel','Sachin','Bhakti','Rudra','Meghana','Vansh','Prakhar'];

// function groupAlphabetically(array){
//     let group = {};
//     let firstChar = array.map((word) => word[0].toUpperCase());
//     firstChar.map((char) => {
//         let nameChar = array.filter((word) => word[0].toUpperCase() === char);
//         group[char] = nameChar;
//     });
//     return group;
// };
// console.log(groupAlphabetically(names));

//------------------------------------------------------------------------------------------------------

// let flatArr = [];
// function myFlat(arr,depth=1){
//         arr.forEach((value) =>{ 
//             if(Array.isArray(value) && depth>0){
//                 myFlat(value,depth-1);
//             }
//             else 
//                 flatArr.push(value);
//     });
// };
// const arr1 = [1,2,3,[4,5,[6,[8,[8]]]]]
// myFlat(arr1,2);
// myFlat(arr1,Infinity);
// console.log(flatArr);


// let flatArr = [];
// function myFlat(arr){
//         arr.forEach((value) =>Array.isArray(value)? myFlat(value) : flatArr.push(value) );
// };
// const arr1 = [1,2,3,[4,5,[6,[8,[8]]]]]
// myFlat(arr1);
// console.log(flatArr);

//------------------------------------------------------------------------------------------------------

// const newArray = [];
// function myFilter(array,callbackFn){
//    for(let i=0;i<array.length;i++){
//     if(callbackFn(array[i],i,array) === true){
//         newArray.push(array[i]);
//     }
//    }
// }
// const arr = [1,2,3,4,5];
// myFilter(arr, (value,index,array) => value >2);
// console.log(newArray);

//------------------------------------------------------------------------------------------------------

// const newArray = [];
// function myMap(array,callbackFn){
//    for(let i=0;i<array.length;i++){
//         newArray.push(callbackFn(array[i],i,array));
//    }
// }
// const arr = [1,2,3,4,5];
// myMap(arr, (value,index,array) => value*2);
// console.log(newArray);

//------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------

// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// let arr2 = arr1.map(item => item);
// arr2[2].b = 45;
// console.log(arr1);  // [{a: 34}, {a: 45}, {a:12,b:45}, {a:5}, {a:78}]
// console.log(arr2);  // [{a: 34}, {a: 45}, {a:12,b:45}, {a:5}, {a:78}]

//------------------------------------------------------------------------------------------------------

// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// let arr2 = arr1.map(item => item.a * 2);
// console.log(arr1);  // [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}]
// console.log(arr2)  // [ 68, 90, 24, 10, 156 ]


// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// let arr2 = arr1.map(item => item.a = item.a * 2);
// console.log(arr1);  // [{a: 68}, {a: 90}, {a:24}, {a:10}, {a:156}]
// console.log(arr2)  // [ 68, 90, 24, 10, 156 ]

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // ERROR

//------------------------------------------------------------------------------------------------------

// const example = ({ a, b, c }) => {
//     console.log(a, b, c);    // undefined undefined undefined
// };
// example(0, 1, 2);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5];

// function squareSum(array){
//     let arr2 = array.map(value => value**2).reduce((a,c) => a+c);
//     return arr2;
// }
// console.log(squareSum(arr));   // 55

//------------------------------------------------------------------------------------------------------

// const students = [
//         { name: 'Alice', age: 20, grade: 'A' },
//         { name: 'Bob', age: 18, grade: 'B' },
//         { name: 'Charlie', age: 19, grade: 'A' },
//         { name: 'David', age: 20, grade: 'C' },
//       ];
    
//     function sortByAge(array){
//         array.sort((a,c) => a.age - c.age);
//         return array;
//     }
//     console.log(sortByAge(students));
    
    
//     function sortByGrade(array){
//         array.sort((a,c) =>{
//             if(a.grade < c.grade){
//                 return -1;
//             }
//             else if(a.grade < c.grade){
//                 return 1;
//             }
//             return 0;
//         });
//         return array;
//     }
//     console.log(sortByGrade(students));
    
//     function sortByName(array){
//         array.sort((a,c) =>{
//             if(a.name < c.name){
//                 return -1;
//             }
//             else if(a.name < c.name){
//                 return 1;
//             }
//             return 0;
//         });
//         return array;
//     }
//     console.log(sortByName(students));
    
//     function ageSum(array){
//         let sum = array.map(el =>el.age).reduce((a,c) => a+c);
//         return sum;
//     }
//     console.log(ageSum(students));   // 77
    
//     function ageAverage(array){
//         let ageArr = array.map(el =>el.age)
//         let ageSum =ageArr.reduce((a,c) => a+c);
//         let average = ageSum/ageArr.length;
//         return average
//     }
//     console.log(ageAverage(students));     // 19.25

//------------------------------------------------------------------------------------------------------

// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// function flatArray(array){
//     const flatArr = array.reduce((a,c) => a.concat(c));
//     return flatArr;
// }
// console.log(flatArray(nestedArray));

//------------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function evenSquare(array){
//     const even = array.filter(value => value%2 == 0).map(even => even**2);
//     return even;
// }
// console.log(evenSquare(numbers));

//------------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// function duplicateFilter(array){
//     const arr = array.filter((value,index,array) => array.indexOf(value) === index)
//     return arr;
// }
// console.log(duplicateFilter(numbers));

//------------------------------------------------------------------------------------------------------

// const words = ['apple', 'banana', 'orange'];

// function containsA(array){
//     let word = array.find(str => str.includes('a'));
//     return word;
// }
// console.log(containsA(words));

//------------------------------------------------------------------------------------------------------

// const numbers = [2, 4, 6, 8, 9, 10];

// function firstOdd(array){
//     let oddNum = array.findIndex(value => value%2 != 0);
//     return oddNum;
// }
// console.log(firstOdd(numbers));  // 4

//------------------------------------------------------------------------------------------------------

// function factorial(num){
//     return num > 1 ? num*factorial(num-1) : num=1;
// }
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));

//------------------------------------------------------------------------------------------------------

// const people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'Alice', age: 18 },
//     { name: 'David', age: 21 }
//   ];

// function firstCharA(array){
//     let person = array.findIndex(person => person.name[0] == 'A' && person.age < 20 );
//     return person;
// }
// console.log(firstCharA(people));

//------------------------------------------------------------------------------------------------------

// function fun_name(arrayOfArray, array){
//   let a = arrayOfArray.some(arr => arr.sort().every((value,index) => value == array.sort()[index]));
//   return a;
// }
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [22, 15],[88, 90]], [15, 22]));

//------------------------------------------------------------------------------------------------------

// function fun_name(arrayOfArray, array){
//   let a = arrayOfArray.some(arr => arr.every((value,index) => value == array[index]));
//   return a;
// }
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [22, 15],[88, 90]], [22, 15]));

//------------------------------------------------------------------------------------------------------

// function union(arr1,arr2){
//     let arr = arr1.concat(arr2).filter((value,index,array) => array.indexOf(value) === index).sort((a,b) => a-b);
//     return arr;
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));

//------------------------------------------------------------------------------------------------------

// function difference(array1, array2) {
//     var arr = [].sort((a,b) => a-b);
//     array1.flat(Infinity).forEach((value) => {
//        if(!array2.flat(Infinity).includes(value)){
//            arr.push(value);
//        }
//       })
//      array2.flat(Infinity).forEach((value) => {
//         if(!array1.flat(Infinity).includes(value)){
//             arr.push(value);
//         }
//     } )
//     return arr;
//     }
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//------------------------------------------------------------------------------------------------------

// function findPair(numbers, target) {
//     let result = [];
//     for (let i = 0; i < numbers.length; i++) {
//       for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] + numbers[j] === target) {
//           result.push(numbers[i], numbers[j]);
//           break;
//         }
//       }
//       if (result.length > 0) break;
//     }
//     return result;
//   }
//   console.log(findPair([10,20,10,40,50,60,70], 100));

//------------------------------------------------------------------------------------------------------

// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let arr2 = arr.filter(value => Number(value));
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

// function num_string_range(start, end, step) {
//     let arr = []
//     if(typeof start == 'string' && typeof end == 'string'){
//         if(start.charCodeAt(0) < end.charCodeAt(0)){
//             for(let i= start.charCodeAt(0); i<=end.charCodeAt(0); i+= step){
//                 arr.push(String.fromCharCode(i));
//            }
//         }
//         else if(start.charCodeAt(0) > end.charCodeAt(0)){
//             for(let i= start.charCodeAt(0); i>=end.charCodeAt(0); i-= step){
//                 arr.push(String.fromCharCode(i));
//            }
//         }
//     }
//     else {
//         if(start < end){
//             for(let i= start; i<=end; i += step){
//                 arr.push(i);
//            }
//         }
//         else if(start > end){
//             for(let i= start; i>=end; i -= step){
//                 arr.push(i);
//            }
//         }
//     }
//     return arr;
//   }
  
//   console.log(num_string_range('a', 'z', 2));
//   console.log(num_string_range('Z', 'A', 2));
//   console.log(num_string_range(0, -5, 1));
//   console.log(num_string_range(0, 25, 5));
//   console.log(num_string_range(20, 5, 5));

//------------------------------------------------------------------------------------------------------

// function remove_array_element(arr,num){
//     let arr2 = arr.filter(value => value != num);
//     return arr2;
// }
// console.log(remove_array_element([2, 5, 9, 6], 5));

//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------

// function contains(arr,num){
//     if(typeof num == 'string' || typeof num == 'number' ){
//         return arr.includes(num);
//     }
// }
// console.log(contains([2,5,9,6],5));
// console.log(contains([2,5,9,6],10));

//------------------------------------------------------------------------------------------------------------------------

// function countArray(arr){
//     let count = arr.filter(element => Array.isArray(element)).length;
//     return count;
// }
// console.log(countArray([2,8,[6],3,3,5,3,4,[5,4]]));
// console.log(countArray([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));

//------------------------------------------------------------------------------------------------------------------------

// function countArray(arr){
//     let count = arr.filter(element => Array.isArray(element)).reduce((a,c) => a.length >= c.length ? a.length : c.length,0);
//     return count;
// }
// console.log(countArray([2,8,[6],3,3,5,3,4,[5,4]]));  // 2
// console.log(countArray([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));   // 3
// console.log(countArray([2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]]));  // 3
// console.log(countArray([1,5,2,6,4,23,89]));  // 0

//------------------------------------------------------------------------------------------------------------------------

// function isFactorChain(arr){
//     let ans = [];
//    for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1]%arr[i] == 0){
//             ans.push(true);
//         }
//         else{
//             ans.push(false);
//         }
//    }
//    return ans.every(boolean => boolean === true);
// }
// console.log(isFactorChain([2, 4, 8, 16, 32]));
// console.log(isFactorChain([2, 4, 16, 32, 64]));
// console.log(isFactorChain([2, 4, 16, 32, 68]));

