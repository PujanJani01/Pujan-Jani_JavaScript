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

