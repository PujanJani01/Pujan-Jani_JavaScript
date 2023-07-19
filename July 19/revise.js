/* function properties(obj){
    return Object.entries(obj);
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(properties(student)); */


/* function deleteProp(obj,prop){
    console.log("Before deleting property: ",obj);
    delete obj[prop];
    console.log("After deleting property: ",obj);
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
    };
deleteProp(student,"rollno");
deleteProp(student,"sclass");
deleteProp(student,"marks"); */

/* function deleteProp({...obj},prop){
    console.log("Before deleting property: ",obj);
    delete obj[prop];
    console.log("After deleting property: ",obj);
}
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
    };
deleteProp(student,"rollno");
deleteProp(student,"sclass");
deleteProp(student,"marks"); */


/* function myAssign(target,source){
   for(let key in source){
       target[key] = source[key];
   }
   // source.f = 26;
   // target.f = 34;
   return target;
}
const obj1 = {a:9, b:15};
const obj2 = {b:15, c:6,d:21};
console.log(myAssign(obj1,obj2));
console.log(obj1);
console.log(obj2); */


/* const source = { a: 1 };
const target = { b: 2 };
Object.assign(target, source);
console.log(target);   // {a:1, b:2}
console.log(source);   // {a:1} */

/* const obj1 = { a: 12, b: 23 };
const obj2 = obj1;
const obj3 = { ...obj1 };
obj1.c = 23;
console.log(obj1.c, obj2.c, obj3.c);  // 23 23 undefined */

/* const obj1 = { a: 12, b: 23 };
const obj2 = { a: 44, b: 45 };
const obj3 = Object.assign(obj1, obj2);
obj2.a = 22;
console.log(obj1, obj2, obj3);  // {a:44,b:45} {a:22,b:45} {a:44,b:45} */

/* const obj1 = { a: 77, b: 67 };
const obj2 = { a: 90, b: 34 };
const obj3 = Object.assign(obj1, obj2);
obj1.a = 22;
console.log(obj3);  // {a:22, b:34}
console.log(obj1);  // {a:22, b:34}
console.log(obj2);  // {a:90, b:34} */

/* const obj1 = { a: 77, b: 67 };
const obj2 = { a: 90, b: 34 };
const obj3 = Object.assign({}, obj1, obj2);
obj1.a = 22;
console.log(obj3);  // {a:90,b:34} 
console.log(obj1);  // {a:22,b:67} 
console.log(obj2);  // {a:90,b:34}  */

/* const source = { a: { b: 1 } };
const target = {};
Object.assign(target, source);
console.log(target);  // { a: { b: 1 } }
console.log(source);  // { a: { b: 1 } } */

/* const source = { a: { b: 1 } };
const target = {};
Object.assign(target, JSON.parse(JSON.stringify(source)));
source.a.b = 2;
console.log(target);  // {a:{b:1}}
console.log(source);  // {a:{b:2}} */

/* const source = { a: 1 };
const target = Object.assign({}, source);
delete target.a;
console.log(source);  // {a:1}
console.log(target);  // {} */

/* const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result === source);  // false
console.log(result === target);  // true
console.log(source === target);  // false */

/* const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result === { a: 1, b: 2 });  // false */

/* const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
target.b = 234;
console.log(source);  // {b:2}
console.log(target);  // {a:1,b:234} */

/* const target = {};
const source = { a: 1 };
const result = Object.assign(target, source);
source.a = 2;
console.log(result);  // {a:1}
console.log(target);  // {a:1}
console.log(source);  // {a:2} */

/* const target = {};
const source = { a: { b: 1 } };
const result = Object.assign(target, source);
result.a.b = 2;
console.log(source);  // {a:{b:2}}
console.log(target);  // {a:{b:2}}
console.log(result);  // {a:{b:2}} */

/* const target = { a: { b: 1 } };
const source = { a: [2, 3, 4] };
const result = Object.assign(target, source);
console.log(result);  // {a: [2,3,4]}
console.log(target);  // {a: [2,3,4]}
console.log(source);  // {a: [2,3,4]} */

/* const target = { a: { b: 1 } };
const source = { a: [2, 3, 4] };
const result = Object.assign(target, source);
target.a[2] = 90;
console.log(result);  // {a:[2,3,90]}
console.log(target);  // {a:[2,3,90]}
console.log(source);  // {a:[2,3,90]} */

/* const target = { a: { b: { c: 1 } } };
const source = { a: { b: { d: 2 } } };
const result = Object.assign(target, source);
result.a.b.d = 3;
console.log(target);  // { a: { b: { d: 3 } } }
console.log(result);  // { a: { b: { d: 3 } } }
console.log(source);  // { a: { b: { d: 3 } } } */

/* function operationObj(obj) {
    obj = {...obj, c: 12}
}
let a = {  x: 34,  y: 56 }
operationObj(a);
console.log(a);  // {  x: 34,  y: 56 } */

/* function operationObj(obj) {
    obj = {...obj, c: 12};
    return obj;
}
let a = {  x: 34,  y: 56 }
operationObj(a);
console.log(a);  // {  x: 34,  y: 56 }
console.log(operationObj(a));  // {  x: 34,  y: 56, c: 12 } */


/* function operationObj(obj) {
  obj.z = {...obj, c: 12}
}
let a = {
  x: 34,
  y: 56
}
operationObj(a);
console.log(a);  // {x:34, y: 56, z: {x:34, y:56, c: 12}} */


/* let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1)  // [{a: 23, b: 45, c: 5}]
console.log(arr2)  // [{a: 23, b: 45, c: 5}]
console.log(obj1)  // {a: 23, b: 45} */

/* let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
arr2[0].c = 5;
obj1.c.f = 30;
console.log(arr1); // [{ a: 23, b: 45, c: 5 }]
console.log(arr2); // [{ a: 23, b: 45, c: 5 }]
console.log(obj1); // { a: 23, b: 45, c: { f: 30 } } */

/* let obj1 = { a: 23, b: 45, c: { f: 990 } };
let arr1 = [{ ...obj1 }];
let arr2 = arr1;
obj1.c.f = 30;
console.log(arr1); // [{ a: 23, b: 45, c: { f: 30 } }]
console.log(arr2); // [{ a: 23, b: 45, c: { f: 30 } }]
console.log(obj1); // { a: 23, b: 45, c: { f: 30 } } */

/* let obj1 = { a: 23, b: 45 };
let arr1 = Object.assign([], [{ ...obj1 }]);
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1); // [{a: 23, b: 45, c: 5}]
console.log(arr2); // [{a: 23, b: 45, c: 5}]
console.log(obj1); // {a: 23, b: 45} */

/* let obj1 = { a: 23, b: 45 };
let arr1 = Object.assign({}, [{ ...obj1 }]);
let arr2 = arr1;
arr2[0].c = 5;
console.log(arr1); // { '0': {a: 23, b: 45, c: 5}}
console.log(arr2); // { '0': {a: 23, b: 45, c: 5}}
console.log(obj1); // {a: 23, b: 45, c: 5} */

/* let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], arr1);
arr2[0].c = 5;
console.log(arr1);  //  [{a: 23, b: 45, c: 5 }]
console.log(arr2);  //  [{a: 23, b: 45, c: 5 }]
console.log(obj1);  //  {a: 23, b: 45 } */

/* let obj1 = { a: 23, b: 45 };
let arr1 = [{ ...obj1 }];
let arr2 = Object.assign([], [{...arr1[0]}]);
arr2[0].c = 5;
console.log(arr1);  // [{ a: 23, b: 45}]
console.log(arr2);  // [{ a: 23, b: 45, c: 5}]
console.log(obj1);  //  {a: 23, b: 45 } */

/* let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
let obj2 = Object.assign({}, obj1);
let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
obj2.c.h = 67;
console.log(obj1, obj2, obj3); 
// { a: 34, b: 56, c: { h: 67, j: 90 } }
// { a: 34, b: 56, c: { h: 67, j: 90 } }
// { a: 34, b: 56, c: { k: 44} } */


//------------------------------------------------------------------------------------------------------

/* function addFullName(arr){
    arr.forEach(person => person.full_name = person.first_name + " " + person.last_name);
    return arr;
}
const names  = [
    {first_name: "Handnm", last_name: "L demo"},
    {first_name: "Q Wei", last_name: "Alxezx"},
    {first_name: "Pqwern", last_name: "Ruse"},
    {first_name: "Wiruyn", last_name: "Ruby"},
    {first_name: "Erpso", last_name: "Loal"},
    {first_name: "Demors", last_name: "Poet"},
    {first_name: "Aleos", last_name: "Lkeu"},
]
console.log(addFullName(names)); */


/* function add_isMature(arr){
    arr.forEach(person =>{
        if(person.age >= 18)
            person.isMature = "Yes"
        else
           person.isMature = "No";
    });
    return arr;
}
const users  = [
    {first_name: "Handnm", last_name: "L demo", age: 17},
    {first_name: "Q Wei", last_name: "Alxezx", age: 30},
    {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
    {first_name: "Widfruyn", last_name: "Ruby", age: 11},
    {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
    {first_name: "Dedfgmors", last_name: "Poet", age: 60},
    {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
]
console.log(add_isMature(users)); */


/* let arr = [1,2,3,5]
console.log(arr[-1]);       // undefined
console.log(arr.at(-1));    // 5 */


/* function printArrayItems(arr){
    const flatArr = nestedArray.flat(Infinity);
    for(let value of flatArr){
        console.log(value);
    }
}
const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    {a:10, b:11, c: 12}
];
printArrayItems(nestedArray); */


/* function printObjItems(obj){
    for(let key in obj){
        if(typeof obj[key] == "object")
            printObjItems(obj[key])
        else 
            console.log(obj[key]);
    }
}
const nestedObject = {
    name: "Vishal Kukreja",
    age: 32,
    address: {
      street: "123 Mumbai fashion St",
      city: "Midtown",
      state: "MH",
    },
    hobbies: ["reading", "drawing", "gardening"],
  };
 printObjItems(nestedObject); */


/*  function isContainsNumber(arr){
    return arr.some(el => typeof el === "number");
 }
 console.log(isContainsNumber([1,2,3]));
 console.log(isContainsNumber(["1", "a", "h"]));
 console.log(isContainsNumber(["a", 3 , "gh"]));
 console.log(isContainsNumber(["a", "3df", "gh"]));  */


/* function numToString(arr){
   return arr.map(el => String(el));
}
 const numbers = [1, 2, 3, 4];
 console.log(numToString(numbers)); */


/* const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num, index, array) => {
  array.push(num * 2);
  return num * 2;
});
console.log(numbers, doubled);  // [1,2,3,4,2,4,6,8] [2,4,6,8] */


/* var donuts = [
    {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0002",
        "type": "donut2",
        "name": "Raised",
        "ppu": 0.45,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0003",
        "type": "donut3",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0004",
        "type": "donut1",
        "name": "Old Fashioned",
        "ppu": 0.5,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Maple" }
            ]
    }
] */

/* function chocolateTopping(arr){
    return arr.filter(donut => donut.topping.find(topping => topping.type === "Chocolate"));
}
console.log(chocolateTopping(donuts)); */

/* function chocolateTopping_regularBatter(arr){
    return arr.filter(donut => donut.topping.find(topping => topping.type === "Chocolate") && donut.batters.batter.find(batter => batter.type === "Regular"));
}
console.log(chocolateTopping_regularBatter(donuts)); */

/* function chocolateSugarTopping(arr){
    return arr.filter(donut => donut.topping.find(topping => topping.type === "Chocolate") && donut.topping.find(topping => topping.type === "Sugar"));
}
console.log(chocolateSugarTopping(donuts)); */

/* function greterThanPpu(arr,num){
    return arr.filter(donut => donut.ppu > num);
}
console.log(greterThanPpu(donuts,0.5)); */

/* function allBatters(arr){
    return arr.map(donut => donut.batters);
}
console.log(allBatters(donuts)); */

/* function twoOrGreaterBatter(arr){
    return arr.filter(donut => donut.batters.batter.length >= 2);
}
console.log(twoOrGreaterBatter(donuts)); */


/* function shortForm(str){
    return str.split(" ").map(word => word[0].toUpperCase()).join("");
}
console.log(shortForm("George Raymond Richard Martin"));
console.log(shortForm("george raymond Richard Martin")); */


/* function abc(str){
    let words = str.split(" ");
    return  words.map(word =>{
        if(word.length >3){
            return word[0] + word.slice(1,-1).length + word.at(-1)
        }
        return word;
    }).join(" ");
}
console.log(abc("Every developer likes to mix kubernetes and javascript")); */


/* const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 6", price: 70, category: "Furniture" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
]; */

/* function countCategory(arr){
  let res = {};
  let categories = arr.map(product => product.category);
  categories.forEach(category => {
       let singleCategory = arr.filter(el => el.category == category)
       res[category] = singleCategory.length;
  })
  return res;
}
console.log(countCategory(products)); */

/* function priceAverage(arr){
  let res = {};
  let categories = arr.map(product => product.category);
  categories.forEach(category => {
       let singleCategory = arr.filter(el => el.category == category)
       let sum = 0;
       singleCategory.forEach(value => sum+= value.price);
       res[category + " price average"] = sum/singleCategory.length;
  })
  return res;
}
console.log(priceAverage(products)); */


/* const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
    { name: "David", salary: 50000, department: "QA" },
]; */

/* function averageSalary(arr){
    let res = {};
    let departments = arr.map(employee => employee.department);
    departments.forEach(department =>{
       let singleDepartment = arr.filter(el => el.department == department);
       let sum = 0;
       singleDepartment.forEach(value => sum+=value.salary)
       res[department + ' Salary Average'] = sum/ singleDepartment.length;
   })
   return res;
}
console.log(averageSalary(employees)); */

/* function groupSalaryByDepartment(arr){
    let res = {};
    let departments = arr.map(employee => employee.department);
    departments.forEach(department =>{
       let singleDepartment = arr.filter(el => el.department == department);
       res[department + ' Salary Average'] = singleDepartment.map(el => el.salary );
   })
   return res;
}
console.log(groupSalaryByDepartment(employees)); */


/* function groupByFirstChar(arr){
  let res = {};
  let firstChar = arr.map(word =>  word[0].toUpperCase());
  firstChar.forEach(char => {
     let words = arr.filter(el => el[0].toUpperCase() == char)
     res[char] = words;
  })
  return res;
}
let names = ["Jeel" , "Prakhar" , "Bhakti", "Vansh", "Meghna", "Bhaumik", "Pujan", "Rudra", "Sachin" , "Dhruval"]
console.log(groupByFirstChar(names)); */


/* const input = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
]; */

/* function groupByFirstChar(arr){
  let res = {};
  let firstChar = arr.map(person =>  person.name[0].toUpperCase());
  firstChar.forEach(char => {
     let words = arr.filter(el => el.name[0].toUpperCase() == char)
     res[char] = words;
  })    
  return res;
}
console.log(groupByFirstChar(input)); */

/* function groupByDepartMent(arr){
  let res = {};
  let firstChar = arr.map(person =>  person.department);
  firstChar.forEach(department => {
     let departmentName = arr.filter(el => el.department == department)
     res[department] = departmentName;
  })
  return res;
}
console.log(groupByDepartMent(input)); */


/* let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
let arr2 = arr1.map(item => item);
arr2[2].b = 45;
console.log(arr1);  //  [{a: 34}, {a: 45}, {a:12, b: 45}, {a:5}, {a:78}]
console.log(arr2);  //  [{a: 34}, {a: 45}, {a:12, b: 45}, {a:5}, {a:78}] */


/* let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
let arr2 = arr1.map(item => item.a * 2);
console.log(arr1);  // [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }]
console.log(arr2);  // [68, 90, 24, 10, 156] */


/* let arr = [1,2,3,4,5];
let arr2 = arr.reduce((a, c) => a + c).map(item => item);
console.log(arr2); // TypeError: .map is not a function */


/* const example = ({ a, b, c }) => {
    console.log(a, b, c);
};
example(0, 1, 2); // undefined undefined undefined */


/* function sumOfSquares(arr){
  return arr.map(value => value**2).reduce((a,c) => a+c);
}
let arr = [1,2,3,4,5];
console.log(sumOfSquares(arr)); */


/* const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 18, grade: 'B' },
    { name: 'Charlie', age: 19, grade: 'A' },
    { name: 'David', age: 20, grade: 'C' },
]; */

/* function sortByAge(arr){
    arr.sort((a,b) => a.age - b.age);
    return arr;
}
console.log(sortByAge(students)); */

/* function sortByGrade(arr){
    arr.sort((a,b) =>{
        if(a.grade < b.grade)
            return -1;
        else if(a.grade > b.grade)
            return 1;
        return 0;
    });
    return arr;
}
console.log(sortByGrade(students)); */

/* function sortByName(arr){
    arr.sort((a,b) =>{
        if(a.name[0].toUpperCase() < b.name[0].toUpperCase())
            return -1;
        else if(a.name[0].toUpperCase() > b.name[0].toUpperCase())
            return 1;
        return 0;
    });
    return arr;
}
console.log(sortByName(students)); */

/* function sortByName(arr){
    return arr.map(el => el.age).reduce((a,c) => a+c)/arr.length;
}
console.log(sortByName(students)); */

/* function sortByName(arr){
    return arr.map(el => el.age).reduce((a,c) => a+c);
}
console.log(sortByName(students)); */


/* function flatArr(arr){
   return arr.reduce((a,c) => a.concat(c));
}
const nestedArray = [[1, 2], [3, 4], [5, 6]]
console.log(flatArr(nestedArray)); */


/* function squareOfEven(arr){
    return arr.filter(value => value%2 ==0 ).map(value => value**2);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(squareOfEven(numbers)); */


/* function duplicates(arr){
    return arr.filter((value,i,arr) => arr.indexOf(value) == i).sort((a,b) => a-b);
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(duplicates(numbers)); */


/* function contains(arr){
    return arr.find(el => el.includes('a'));
}
const words = ['apple', 'banana', 'orange'];
console.log(contains(words)); */


/* function firstOddIndex(arr){
    return arr.indexOf(arr.find(value => value%2 != 0));
}
const numbers = [2, 4, 6, 8, 9, 10];
console.log(firstOddIndex(numbers)); */


/* const people = [
    { name: 'Alice', age: 18 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 21 }
];

function indexOfFirstPerson(arr){
   return arr.find(el => el.name[0] == 'A' && el.age < 20);
}
console.log(indexOfFirstPerson(people)); */


/* function fun_name(arrayOfArray, array){
    return arrayOfArray.some(el => el.sort().every((value,index) => value == array.sort()[index]));
}
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));  // true
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));  // true
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));  // false
console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));  // true */

/* function fun_name(arrayOfArray, array){
    return arrayOfArray.some(el => el.every((value) => array.includes(value)));
}
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));  // true
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));  // true
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));  // false
console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));  // true */


/* function fun_name(arrayOfArray, array){
    return arrayOfArray.some(el => el.every((value,index) => value == array[index]));
}
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));  // true
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));  // true
console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));  // false
console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));  // true */


/* function union(arr1,arr2){
    return arr1.concat(arr2).filter((el,i,arr) => arr.indexOf(el) == i).sort((a,b) => a-b);
}
console.log(union([1, 2, 3], [100, 2, 1, 10])); */


/* function difference(arr1,arr2){
    let flatArr1 = arr1.flat(Infinity);
    let flatArr2 = arr2.flat(Infinity);
    let res = [];

    flatArr1.forEach(value =>{
        if(!flatArr2.includes(value))
            res.push(String(value));
    })
    flatArr2.forEach(value =>{
        if(!flatArr1.includes(value))
            res.push(String(value));
    })
    return res.sort((a,b) => a-b);
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10])); */


/* function findNumber(arr){
    return arr.filter(value => Number(value))
}
console.log(findNumber([NaN, 0, 15, false, -22, '',undefined, 47, null])); */


/* function num_string_range(start,end,step){
    let res = [];
    if(typeof start == 'string' && typeof end == 'string'){
        if(start.charCodeAt(0) < end.charCodeAt(0)){
            for(let i = start.charCodeAt(0); i<=end.charCodeAt(0); i+=step){
                res.push(String.fromCharCode(i));
            }
        }
        if(start.charCodeAt(0) > end.charCodeAt(0)){
            for(let i = start.charCodeAt(0); i>=end.charCodeAt(0); i-=step){
                res.push(String.fromCharCode(i));
            }
        }
    }
    else if(typeof start == 'number' && typeof end == 'number'){
        if(start < end){
            for(let i = start; i<=end; i+=step){
                res.push(i);
            }
        }
        if(start > end){
            for(let i = start; i>=end; i-=step){
                res.push(i);
            }
        }
    }
    return res;
}
console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5)); */


/* function remove_array_element(arr,num){
    return arr.filter(value => value != num);
}
console.log(remove_array_element([2, 5, 9, 6], 5)); */


/* function contains(arr,num){
   return arr.includes(num);
}
console.log(contains([2, 5, 9, 6],5));
console.log(contains([2, 5, 9, 6],10)); */


/* function countNestedArr(arr){
  let count = 0;
  arr.forEach(el =>{
    if(Array.isArray(el))
        count ++ ;
  })
  return count;
}
console.log(countNestedArr([2,8,[6],3,3,5,3,4,[5,4]]));
console.log(countNestedArr([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));
console.log(countNestedArr([1,5,2,6,4,23,89])); */


/* function maxArrLength(arr) {
    let max = 0;
    arr.forEach(el => {
        if (Array.isArray(el) && max < el.length)
            max = el.length;
    })
    return max;
}
console.log(maxArrLength([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]));
console.log(maxArrLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));
console.log(maxArrLength([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]]));
console.log(maxArrLength([1, 5, 2, 6, 4, 23, 89])); */


/* function isFactorChain(arr){
    let res = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]%arr[i] == 0){
            res.push(true);
        }
        else{
            res.push(false);
        }
    }
    return res.every(el => el==true)
}
console.log(isFactorChain([2, 4, 8, 16, 32]));
console.log(isFactorChain([2, 4, 16, 32, 68]));
console.log(isFactorChain([2, 4, 16, 32, 64])); */


