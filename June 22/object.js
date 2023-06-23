// how to Declare an Object in JS

// using object literals

// const obj = {
//     fname : 'pujan',
//     lname : 'jani',
//     age : 18
// }

//-------------------------------------------------------------------------------------------------

// spread operator

// function sum(a,b,c,d,e){
//     return a+b+c+d+e;
// }
// let arr = [1,2,3,4,5]
// console.log(sum(...arr));

//-------------------------------------------------------------------------------------------------

// Accessing Object properties

// using dot

// const obj = {
//     fname : 'pujan',
//     lname : 'jani',
//     age : 18
// }
// console.log(obj);
// console.log(obj.fname);
// console.log(obj.lname);
// console.log(obj.age);


// using square bracket

// const obj = {
//     fname : 'pujan',
//     lname : 'jani',
//     age : 18
// }
// console.log(obj);
// console.log(obj['fname']);
// console.log(obj['lname']);
// console.log(obj['age']);


// through variable

// let f = 'fname';
// let l = 'lname';
// let a = 'age';
// const obj = {
//     fname : 'pujan',
//     lname : 'jani',
//     age : 18
// }
// console.log(obj);
// console.log(obj[f]);
// console.log(obj[l]);
// console.log(obj[a]);


// through array

// let arr = ['fname','lname', 'age'];
// const obj = {
//     fname : 'pujan',
//     lname : 'jani',
//     age : 18
// }
// console.log(obj);
// console.log(obj[arr[0]]);
// console.log(obj[arr[1]]);
// console.log(obj[arr[2]]);

// by destructuring object

// const obj = {
//     fname: 'pujan',
//     lname: 'jani',
//     age: 18
// }
// let {fname, lname, age} = obj;
// console.log(fname);
// console.log(lname);
// console.log(age);

//----------------------------------------------------------------------------------------------------------

// nested objects

// const obj = {
//     fullName: {
//           fname: 'pujan',
//           lname: 'jani',
//     },
//     age: 18
// }

// console.log(obj.fullName.fname);
// console.log(obj.fullName.lname);
// console.log(obj.age);

//----------------------------------------------------------------------------------------------------------

// destructuring object

// const obj = {
//     fname: 'pujan',
//     lname: 'jani',
//     age: 18
// }
// let {fname, lname, age} = obj;
// console.log(fname);
// console.log(lname);
// console.log(age);

//-----------------------------------------------------------------------------------------------------------

// methods

// Object.assign - 

// const obj1 = { fname : 'pujan'};
// const obj2 = { lname : 'jani'};

// const obj3 = Object.assign(obj1,obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// const obj1 = { fname : 'pujan'};
// const obj2 = { lname : 'jani'};

// const obj3 = Object.assign(JSON.parse(JSON.stringify(obj1)),obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// Object.is - comapre two value, if both same return true else false

// console.log(Object.is(33,33)); // true
// console.log(Object.is(33,34));    // false
// console.log(Object.is('p','p'));  // true
// console.log(Object.is('3','3'));  // true
// console.log(Object.is('3',3));   // false
// console.log(Object.is('pujan','Pujan'));  // false
// console.log(Object.is(null,null));  // true
// console.log(Object.is(undefined,undefined));  // true
// console.log(Object.is(NaN,NaN));  // true
// console.log(Object.is(true,true));  // true
// console.log(Object.is(false,false)); // true

// const obj1={age:18};
// const obj2 = {age:18};
// const obj3=obj1;
// console.log(Object.is(obj1,obj2)); // false
// console.log(Object.is(obj1,obj1));  // true
// console.log(Object.is(obj2,obj2));   // true
// console.log(Object.is(obj1,obj3));  // true

// console.log(Object.is(0,0));  // true
// console.log(Object.is(0,-0));  // false
// console.log(Object.is(+0,0));  // true
// console.log(Object.is(+0,+0));  // true
// console.log(Object.is(-0,-0));  // true
// console.log(Object.is(+0,-0));   // false

// console.log(Object.is([],[]));  // false
// console.log(Object.is({},{}));  // false


// Object.entries - return array of object key-value pair. key will be string

// const obj = { fname : 'pujan', age: 18};
// console.log(Object.entries(obj));         // [['fname':'pujan'],['age': 18]]

// const obj = { 0: 'a', 1: 'b', 2: 'c'}
// console.log(Object.entries(obj));           // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]

// here when we take numbers as keys, it takes them as a string 

// const obj = {100: 'a', 2: 'b', 6:'c'}
// console.log(Object.entries(obj));         // [ [ '2', 'b' ], [ '6', 'c' ], [ '100', 'a' ] ]
// returns ordered array


// console.log(Object.entries('pujan'));  
// returns array in which every character is value and kesys are ordered number starts from 0 for specific value

// console.log(Object.entries(100));  // []


// Object.values - returns array of only values of object not keys

// const obj = { fname : 'pujan', age: 18};
// console.log(Object.values(obj));                //  ['pujan',18];

// const obj = { 0: 'a', 1: 'b', 2: 'c'}
// console.log(Object.values(obj));           // ['a','b','c']


// const obj = {100: 'a', 2: 'b', 6:'c'}
// console.log(Object.values(obj));         // ['b','c','a']
// returns ordered array of value based on their keys


// console.log(Object.values('pujan'));  
// returns array of charcaters

// console.log(Object.values(100));  // []


// Object.keys - returns array of only keys of object not values

// const obj = { fname : 'pujan', age: 18};
// console.log(Object.keys(obj));                //  ['fname',age];

// const obj = { 0: 'a', 1: 'b', 2: 'c'}
// console.log(Object.keys(obj));           // ['0','1','2']


// const obj = {100: 'a', 2: 'b', 6:'c'}
// console.log(Object.keys(obj));         // ['2','6','100']
// returns ordered array of keys


// console.log(Object.keys('pujan'));   // [ '0', '1', '2', '3', '4' ]  
// returns array of keys starts from 0 for sepcific value

// console.log(Object.keys(100));  // []

// const obj = {100: 'a', 2: 'b', 6:'c'};
// const obj2 = {34: 'd', 6 : 'e'};
// const obj3 = Object.assign(obj,obj2);
// console.log(obj3); 


//-------------------------------------------------------------------------------------------------------

// ERROR: SyntaxError: Identifier 'a' has already been declared
// const obj = {a:10, b:15};
// let a = 15;
// console.log(a);
// let {a,b} = obj;
// console.log(a);

// ERROR: ReferenceError: Cannot access 'a' before initialization
// const obj = {a:10, b:15};
// let c = 15;
// console.log(a);
// let {a,b} = obj;
// console.log(a);

// const obj = {a:10, b:15};
// var a = 15;
// console.log(a);     // 15
// var {a,b} = obj;
// console.log(a);     // 10

// const obj = {a:10, b:15};
// var a = 15;
// console.log(a);     // 15
// var {a:newc,b} = obj;
// console.log(a);     // 15

// const obj = {a:10, b:15};
// var a = 15;
// console.log(a);     // 15
// var {a:hello,b} = obj;
// console.log(a);     // 15


              