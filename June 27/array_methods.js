// let arr= [1,2,3,4,5];
// console.log(arr.at(2));      // 3

// let arr= [1,2,3,4,5];
// console.log(arr.at(-2));     // 4

// let arr= [1,2,3,4,5];
// console.log(arr.at('2'));    // 3

// let arr= [1,2,3,4,5];
// console.log(arr.at(true));   // 2

// let arr= [1,2,3,4,5];
// console.log(arr.at('true'));  // 1

// let arr= [1,2,3,4,5];
// console.log(arr.at(null));   // 1

// let arr= [1,2,3,4,5];
// console.log(arr.at(undefined));   // 1

// let arr= [1,2,3,4,5];
// console.log(arr.at());   // 1

// let arr= [1,2,3,4,5];
// console.log(arr.at(7));   // undefined

//-------------------------------------------------------------------------------------------------------------

// let arr1 = [1,3,5,7,9];
// let arr2 = [2,4,6,8,10];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let arr1 = [1,3,5,7,9];
// let arr2 = [2,4,6,8,10];
// let arr3 = arr1.concat(arr2,arr1);
// console.log(arr3);

// let arr1 = [1,3,5,7,9];
// let arr2 = [2,4,6,8,10];
// let arr3 = arr1.concat();
// console.log(arr3);            // [1,3,5,7,9]


// let arr1 = [1,3,5,7,9];
// let arr2 = [];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);             // [1,3,5,7,9]

// let arr1 = [1,3,5,7,9];
// let arr2 = [];
// let arr3 = arr2.concat(arr1);
// console.log(arr3);             // [1,3,5,7,9]

// let arr1 = [1,3,5,7,9];
// let arr2 = [,,];
// let arr3 = arr2.concat(arr1);
// console.log(arr3);             // [ <2 empty items>, 1, 3, 5, 7, 9 ]

// let arr1 = [1,3,5,7,9];
// let arr2 = null;
// let arr3 = arr1.concat(arr2);
// console.log(arr3);             // [ 1, 3, 5, 7, 9, null ]

// let arr1 = [1,3,5,7,9];
// let arr2 = null;
// let arr3 = arr2.concat(arr1);
// console.log(arr3);             // TypeError: Cannot read properties of null (reading 'concat')

// let arr1 = [1,3,5,7,9];
// let arr2 = 'happy';
// let arr3 = arr2.concat(arr1);
// console.log(arr3);               // happy1,3,5,7,9

// let arr1 = [1,3,5,7,9];
// let arr2 = 'happy';
// let arr3 = arr1.concat(arr2);
// console.log(arr3);               // [ 1, 3, 5, 7, 9, 'happy' ]

// let arr1 = [1,3,5,7,9];
// let arr2 = 1221;
// let arr3 = arr1.concat(arr2);
// console.log(arr3);               // [ 1, 3, 5, 7, 9, 1221 ]

// let arr1 = [1,3,5,7,9];
// let arr2 = 1221;
// let arr3 = arr2.concat(arr1);
// console.log(arr3);               // TypeError: arr2.concat is not a function

// let arr1 = [1,3,[11,12],7,9];
// let arr2 = [2,4,[6,5],8,10];
// let arr3 = arr2.concat(arr1);
// console.log(arr3);

// let arr1 = [1,2,3];
// let arr2 = arr1.concat(4,5,6);
// console.log(arr2);

// let arr1 = [1,2,3];
// let arr2 = arr1.concat(4,5,[6,9]);
// console.log(arr2);                 // [ 1, 2, 3, 4, 5, 6, 9 ]


// let arr = [1,2,3].concat([4, ,6]);
// console.log(arr);         // [ 1, 2, 3, 4, <1 empty item>, 6 ]


// let arr1 = [1,2,{a:{c:4}}];
// let arr2  = [5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);               // [ 1, 2, { a: { c: 4 } }, 5, 6 ]


// let arr1 = [1,2,{a:{b:{c:4}}}];
// let arr2  = [5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);              // [ 1, 2, { a: { b: [Object] } }, 5, 6 ]

//-------------------------------------------------------------------------------------------------------

// function isGreater(values){
//      return values > 5;
// }
// let nums = [2,5,7,1,25];
// console.log(nums.every(isGreater));   // false


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25];
// console.log(nums.every(isGreater));  // true


// function isGreater(values){
//     return values > 5;
// }
// let nums = [];
// console.log(nums.every(isGreater));  // true


// function isGreater(values){
//     return values > 5;
// }
// let nums = [,,,,];
// console.log(nums.every(isGreater));  // true


// function isGreater(values){
//     return values > 5;
// }
// let nums = [1,,3];
// console.log(nums.every(isGreater));  // false


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25];
// console.log(nums.every(isGreater));


// function isSubset(arr1,arr2){
//    arr2.every(isInclude);
//    function isInclude(element){
//     arr1.includes(element);
//    }
// }
// console.log(isSubset([1,2,3,4,5],[2,3,5]));  // undefined


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25,[12,43]];
// console.log(nums.every(isGreater));   // false


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25,[12,43]];
// console.log(nums[5].every(isGreater)); // true

//----------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4];
// console.log(arr.fill(0));    // [ 0, 0, 0, 0 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,2));    // [ 1, 2, 0, 0 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,1,2));    // [ 1, 0, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,7));    // [ 1, 2, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0 ,-1));    // [ 1, 2, 3, 0 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0 ,-2,-1));    // [ 1, 2, 0, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0 ,-1,-2));    // [ 1, 2, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,1,1));    // [ 1, 2, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(true,false,true));    // [ true, 2, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,NaN));    // [ 0, 0, 0, 0 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,NaN,NaN));    // [ 1, 2, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,undefined,undefined));    // [ 0, 0, 0, 0 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,undefined,null));    // [ 1, 2, 3, 4 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(0,null,undefined));    // [ 0, 0, 0, 0 ]

// let arr = [1,2,3,4];
// console.log(arr.fill(undefined));    // [ undefined, undefined, undefined, undefined ]

// let arr = [1,2,3,4];
// console.log(arr.fill(null));   // [ null, null, null, null ]

// let arr = [1,2,3,4];
// console.log(arr.fill(undefined,null));   // [ undefined, undefined, undefined, undefined ]

// let arr = [1,2,3,4];
// console.log(arr.fill(null,undefined));    // [ null, null, null, null ]

// let arr = [1,2,3,4];
// console.log(arr.fill());         // [ undefined, undefined, undefined, undefined ]

// let arr = [];
// console.log(arr.fill(' '));      // []

// let arr = [,,,];
// console.log(arr.fill(' '));    // [ ' ', ' ', ' ' ]

// const tempGirls = Array(5).fill("girl", 0);
// console.log(tempGirls);               // [ 'girl', 'girl', 'girl', 'girl', 'girl' ]

//----------------------------------------------------------------------------------------------------------

// let names = ['pujan', 'vansh', 'sachin', 'bhaumik'];
// function length(words){
//      return words.length > 5;
// }
// console.log(names.filter(length));      // [ 'sachin', 'bhaumik' ]


// let names = ['pujan', 'vansh', 'sachin', 'bhaumik', ['jani', 'panchal']];
// function length(words){
//      return words.length < 3;
// }
// console.log(names.filter(length));    // [ [ 'jani', 'panchal' ] ]


// let names = ['pujan', 'vansh', 'sachin', 'bhaumik', ['jani', 'panchal']];
// function length(words){
//      return words.length > 1;
// }
// console.log(names.filter(length));  // ['pujan', 'vansh', 'sachin', 'bhaumik', ['jani', 'panchal']]


// let names = ['pujan', 'vansh', 'sachin', 'bhaumik', ['jani', 'panchal',['a','b','c']]];
// function length(words){
//      return words.length < 4;
// }
// console.log(names.filter(length));  // [[ [ 'jani', 'panchal', [ 'a', 'b', 'c' ] ] ]


// let names = ['pujan', , 'sachin', 'bhaumik'];
// function length(words){
//      return words == undefined;
// }
// console.log(names.filter(length));       // []

// let names = ['pujan', undefined, 'sachin', 'bhaumik'];
// function length(words){
//      return words == undefined;
// }
// console.log(names.filter(length));       // [ undefined ]


// let names = ['pujan', null, 'sachin', 'bhaumik'];
// function length(words){
//      return words == undefined;
// }
// console.log(names.filter(length));   // [ null ]


// let names = ['pujan', undefined, 'sachin', 'bhaumik'];
// function length(words){
//      return words == null;
// }
// console.log(names.filter(length));   // [ undefined ]


// let names = ['pujan', true, 'sachin', 'bhaumik'];
// function length(words){
//      return words == 1;
// }
// console.log(names.filter(length));   // [ true ]


// let names = [,[,,]];
// function length(words){
//      return words.length > 1;
// }
// console.log(names.filter(length));   // [ [ <2 empty items> ] ]


// const names = [
//     {fname: 'pujan', lname: 'jani'},
//     {fname: 'pratham', lname: 'pandya'},
//     {fname: 'vidhan', lname: 'pansara'},
//     {fname: 'devang', lname: 'bhatt'}
// ];
// function isPujan(input){
//     return input.fname == 'pujan';
// }
// console.log(names.filter(isPujan));     // [ { fname: 'pujan', lname: 'jani' } ]


// const names = [
//     {fname: 'pujan', lname: 'jani'},
//     {fname: 'pratham', lname: 'pandya'},
//     {fname: 'vidhan', lname: 'pansara'},
//     {fname: 'devang', lname: 'bhatt'}
// ];
// function isPujan(input){
//     return input.fname == 'pujan' || input.lname == 'pandya';
// }
// console.log(names.filter(isPujan));    // [
                                       //  { fname: 'pujan', lname: 'jani' },
                                       //  { fname: 'pratham', lname: 'pandya' }
                                       // ]   

//----------------------------------------------------------------------------------------------------------

// function isGreater(values){
//      return values > 5;
// }
// let nums = [2,53,7,1,25];
// console.log(nums.find(isGreater));   // 53


// function isGreater(values){
//     return values == undefined;
// }
// let nums = [null, 1, undefined];
// console.log(nums.find(isGreater));   // null


// const names = [
//     {fname: 'pujan', lname: 'jani'},
//     {fname: 'pratham', lname: 'pandya'},
//     {fname: 'vidhan', lname: 'pansara'},
//     {fname: 'devang', lname: 'bhatt'}
// ];
// function isPujan(input){
//     return input.fname == 'pujan';
// }
// console.log(names.find(isPujan));     // { fname: 'pujan', lname: 'jani' }


// const names = [
//     {fname: 'pujan', lname: 'jani'},
//     {fname: 'pratham', lname: 'pandya'},
//     {fname: 'vidhan', lname: 'pansara'},
//     {fname: 'devang', lname: 'bhatt'}
// ];
// function isPujan(input){
//     return input.fname == 'pujan' || input.lname == 'pandya';
// }
// console.log(names.find(isPujan));    // { fname: 'pujan', lname: 'jani'}  


// function isGreater(values){
//     return values == undefined;
// }
// let nums = [];
// console.log(nums.find(isGreater));   // undefined


// function isGreater(values){
//     return values > 5 ;
// }
// let nums = [1, 2, [12,4], 13]; 
// console.log(nums.find(isGreater));  // 13


// function isGreater(values){
//     return values > 5 ;
// }
// let nums = [1, 2, [12,4], [13]]; 
// console.log(nums.find(isGreater));   // [ 13 ]


// let names = [{ f_name: "Bhaumik" }, { f_name: "Vansh" }, { f_name: "Raj" }];
// let a = names.find((fi_name) => {
//     return fi_name.f_name === "Raj";
// });
// console.log(a);
// console.log(names);

//----------------------------------------------------------------------------------------------------------

// function isGreater(values){
//      return values > 5;
// }
// let nums = [2,53,7,1,25];
// console.log(nums.findIndex(isGreater));   // 1


// function isGreater(values){
//     return values == undefined;
// }
// let nums = [null, 1, undefined];
// console.log(nums.findIndex(isGreater));   // 0


// const names = [
//     {fname: 'pujan', lname: 'jani'},
//     {fname: 'pratham', lname: 'pandya'},
//     {fname: 'vidhan', lname: 'pansara'},
//     {fname: 'devang', lname: 'bhatt'}
// ];
// function isVidhan(input){
//     return input.fname == 'vidhan';
// }
// console.log(names.findIndex(isVidhan));     //   2


// function isGreater(values){
//     return values == undefined;
// }
// let nums = [];
// console.log(nums.findIndex(isGreater));   // -1


// function isGreater(values){
//     return values > 5 ;
// }
// let nums = [1, 2, [12,4], 13]; 
// console.log(nums.findIndex(isGreater));  // 3


// function isGreater(values){
//     return values > 5 ;
// }
// let nums = [1, 2, [12,4], [13]]; 
// console.log(nums.findIndex(isGreater));   // 3


// function isTwo(values){
//     return values == 2 ;
// }
// let nums = [1, 5, [12,4,2], [13] ,2]; 
// console.log(nums.findIndex(isTwo));  // 4


// let nums = [1, 5, [12,4,2], [13] ,2]; 
// console.log(nums.findIndex((value) => {return value == 2})); // 4

//---------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,[5]];
// console.log(arr.flat());         // [ 1, 2, 3, 4, 5 ]

// let arr = [1,2,3,4,[5,[3]]];
// console.log(arr.flat());        // [ 1, 2, 3, 4, 5, [ 3 ] ]

// let arr = [1,2,3,4,[5,[3]]];
// console.log(arr.flat(2));            // [ 1, 2, 3, 4, 5, 3 ]

// let arr = [1,2,3,4,[[5,[[[3],9]]]]];
// console.log(arr.flat(Infinity));     // [ 1, 2, 3, 4, 5, 3, 9 ]

//---------------------------------------------------------------------------------------------------------

// let arr = [12, 23, 34, 45, 56];
// function double(value){
//     console.log(value*2)
// }
// arr.forEach(double);

// let arr = [12, 23, 34, 45, 56];
// arr.forEach((value) => {console.log(value*2)});

// let str = 'pujan jani';
// let a = str.split(' ');
// function capatilize_first_letter(input){
//      console.log(input.charAt(0).toUpperCase());
// }
// a.forEach(capatilize_first_letter);

//---------------------------------------------------------------------------------------------------------

// let arr = [ 'a','b','c','d'];
// console.log(arr.includes('c'));  // true

// let arr = [1,2,3,4,3,4];
// console.log(arr.includes(4));  // true

// let arr = [1,2,3,4,3,4];
// console.log(arr.includes('4'));   // false

// let arr = ['1','2','3','4','3','4'];
// console.log(arr.includes(4));             // false

// let arr = [1,2,3,4,3,4];
// console.log(arr.includes(true));   // false

// let arr = [0,1,2,3,4,3,4];
// console.log(arr.includes(false));   // false

// let arr = [];
// console.log(arr.includes());   // false

// let arr = [,,,];
// console.log(arr.includes());   // true

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.includes(4,3));   // true

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.includes(4, 5));   // false

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.includes(4, -4));   // false\

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.includes(4, -400));   // true

// let arr = [1,,4,5];
// console.log(arr.includes(undefined));  // true

// let arr = [1,,4,5];
// console.log(arr.includes(null));   // false

// let arr = [1,NaN,4,5];
// console.log(arr.includes(NaN));   // true

//---------------------------------------------------------------------------------------------------------

// console.log(Array.isArray([1,2,3]));   // true

// console.log(Array.isArray([1,2,[3]]));   // true

// console.log(Array.isArray(1,2,[3,5]));    // false

// console.log(Array.isArray([]));    // true

// console.log(Array.isArray([,,,]));   // true

// console.log(Array.isArray({}));   // false

// console.log(Array.isArray(new Array()));   // true

// console.log(Array.isArray(new Array(1,2,3,4)));   // true

// console.log(Array.isArray('[2,3,4]'));   // false

//---------------------------------------------------------------------------------------------------------

// let arr = ['html','css','js'];

// console.log(arr.join());                 // html,css,js
// console.log(arr.join(''));              // htmlcssjs       
// console.log(arr.join(' '));               // html css js
// console.log(arr.join('-'));               // html-css-js
// console.log(arr.join(null));             // htmlnullcssnulljs
// console.log(arr.join(undefined));       // html,css,js
// console.log(arr.join(NaN));                // htmlNaNcssNaNjs

//---------------------------------------------------------------------------------------------------------

// let arr = [12, 23, 34, 45, 56]; 
// console.log(arr.map((value) => value*2));    // return array
// console.log(arr);

// let arr = [12, 23, 34, 45, 56];
// arr.map((value) => console.log(value*2));   
                                                   /* 24
                                                      46
                                                      68
                                                      90
                                                      112 */


// let arr = [12, 23, 34, 45, 56];
// console.log(arr.forEach((value) => value*2));  // return undefined
// console.log(arr);     //  [ 12, 23, 34, 45, 56 ]


// let arr = [12, 23, 34, 45, 56];
// arr.forEach((value) => console.log(value*2));
                                                   /* 24
                                                      46
                                                      68
                                                      90
                                                      112 */

// console.log(["1", "2", "3"].map(parseInt));   // [ 1, NaN, NaN ]

//---------------------------------------------------------------------------------------------------------

// let furniture = ['table', 'chair', 'couch', 'mirror', 'bed'];

// console.log(furniture.pop());    // bed

// furniture.pop();
// console.log(furniture);             // [ 'table', 'chair', 'couch', 'mirror' ]
// console.log(furniture.length);      // 4


// let furniture = ['table', 'chair', 'couch', 'mirror', ];
// console.log(furniture.pop());   // mirror

// let furniture = ['table', 'chair', 'couch', 'mirror', , ];
// console.log(furniture.pop());   // undefined
// console.log(furniture);

// let furniture = [['table', 'chair', 'couch', 'mirror'] ];
// console.log(furniture.pop());   // [ 'table', 'chair', 'couch', 'mirror' ]
// console.log(furniture);         // []

// let a =[];
// console.log(a.pop());   // undefined

//---------------------------------------------------------------------------------------------------------

// let furniture = ['table', 'chair', 'couch', 'mirror'];

// console.log(furniture.push('bed'));    // 5

// console.log(furniture.push('bed'));  // 5
// console.log(furniture);             // [ 'table', 'chair', 'couch', 'mirror', 'bed ]


// let furniture = ['table', 'chair', 'couch', 'mirror', , ];
// console.log(furniture.push('bed'));   // 6
// console.log(furniture);      // [ 'table', 'chair', 'couch', 'mirror', <1 empty item>, 'bed' ]

// let furniture = [['table', 'chair', 'couch', 'mirror'] ];
// console.log(furniture.push('bed'));   // 2
// console.log(furniture);         // [ [ 'table', 'chair', 'couch', 'mirror' ], 'bed' ]

// let a =[];
// console.log(a.push());   // 0

// let a = [1,2,3];
// let b = [4,5,6];
// a.push(b);
// console.log(a);    // [ 1, 2, 3, [ 4, 5, 6 ] ]

// let a = [1,2,3];
// let b = [4,5,6];
// a.push(...b);
// console.log(a);   // [ 1, 2, 3, 4, 5, 6 ]

//---------------------------------------------------------------------------------------------------------

// let a = [1,2,3,4,5];
// let b = a.reverse();
// console.log(a);
// b[1] = 6;
// console.log(a);

// let a = [1,2,3,4,[5,6]];
// a[1] = 6;
// let b = a.reverse();
// console.log(a);
// console.log(b);

// let a = [];
// let b = a.reverse();
// console.log(a);  // []
// console.log(b);  // []

//---------------------------------------------------------------------------------------------------------

// let a = [1,2,3];
// let b = a.shift();
// console.log(a);    // [ 2,3 ]
// console.log(b);   // 1


// let a = [];
// let b = a.shift();
// console.log(a);   // []
// console.log(b);   //  undefined

// let a = [,,,,,];
// let b = a.shift();
// console.log(a);   // [ <4 empty items> ]
// console.log(b);   //  undefined

//---------------------------------------------------------------------------------------------------------

// let a = [1,2,3];
// let b = a.unshift(-1,0);
// console.log(a);    // [-1,0,1,2,3]
// console.log(b);    // 5

// let a = [];
// let b = a.unshift(1,2,3);
// console.log(a);   // [1, 2, 3 ]
// console.log(b);   //  3

// let a = [,,,,,];
// let b = a.unshift('+','-');
// console.log(a);   // [ '+', '-', <5 empty items> ]
// console.log(b);   //  7

//---------------------------------------------------------------------------------------------------------

// let a = [1,2,3,4,5];
// console.log(a.slice());   // [1,2,3,4,5]
// console.log(a.slice(-1));   // [5]
// console.log(a.slice(-1,-2));   // []
// console.log(a.slice(-1,2));   // []
// console.log(a.slice(1,-1));   // [2, 3, 4]
// console.log(a.slice(0,0));   // []
// console.log(a.slice(true));   // [2, 3, 4, 5]
// console.log(a.slice(true,false));   // []
// console.log(a.slice(undefined));   // [1,2,3,4,5]
// console.log(a.slice(null));   // [1,2,3,4,5]

//---------------------------------------------------------------------------------------------------------

// function isGreater(values){
//      return values > 5;
// }
// let nums = [2,5,7,1,25];
// console.log(nums.some(isGreater));   // true


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25];
// console.log(nums.some(isGreater));  // true


// function isGreater(values){
//     return values > 5;
// }
// let nums = [];
// console.log(nums.some(isGreater));  // false


// function isGreater(values){
//     return values > 5;
// }
// let nums = [,,,,];
// console.log(nums.some(isGreater));  // false


// function isGreater(values){
//     return values > 5;
// }
// let nums = [1,,3];
// console.log(nums.some(isGreater));  // false


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25];
// console.log(nums.some(isGreater));  // true


// function isSubset(arr1,arr2){
//    arr2.some(isInclude);
//    function isInclude(element){
//     arr1.includes(element);
//    }
// }
// console.log(isSubset([1,2,3,4,5],[2,3,5]));  // undefined


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25,[12,43]];
// console.log(nums.some(isGreater));   // true


// function isGreater(values){
//     return values > 5;
// }
// let nums = [22,51,73,11,25,[12,43]];
// console.log(nums[5].some(isGreater)); // true

//---------------------------------------------------------------------------------------------------------

// let a = [1,2,34,5,6,676,767,56,35435];
// console.log(a.sort());   // [1,2,34,35435,5,56,6,676,767]

// let a = ['a', 'b', 'A', 'E', 'f','Z', 'e'];
// console.log(a.sort());       // ['A', 'E', 'Z','a', 'b', 'e','f']

//---------------------------------------------------------------------------------------------------------

   // let arr = ['abc', 'bcd', 'cde'];
   // arr.splice('def');
   // console.log(arr);  // []

   // arr.splice(1,0,'def');
   // console.log(arr);    // [ 'abc', 'def', 'bcd', 'cde' ]

   
   // arr.splice(1,1,'def');
   // console.log(arr);   // [ 'abc', 'def', 'cde' ]

   //   arr.splice(1,2,'def');
   // console.log(arr);   // [ 'abc', 'def']

   //   arr.splice(1,3,'def');
   // console.log(arr);   // [ 'abc', 'def']