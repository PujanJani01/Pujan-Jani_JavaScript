// let arr = [1,2,3,4,5];
// let newArr = arr.filter((value) => value < 4);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5];
// let newArr = arr.filter((value) => value = 5);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,8,2,5,7,3,5];
// let newArr = arr.filter((value) => value == 5);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,8];
// let newArr = arr.filter((value) => true);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,8];
// let newArr = arr.filter((value) => false);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,8];
// let newArr = arr.filter((value) => []);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,8];
// let newArr = arr.filter((value) =>{ return {} });  // [1,2,3,4,5,8]
// // let newArr = arr.filter((value) => {} );       // []
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,8];
// let newArr = arr.filter((value) => value%2 == 0 );
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,1,8,10,3];
// let newArr = arr.filter((value,index) => value < index);
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [{a:1, b: 'p'}, {a:'j', b: 'p'}, {a:3, b: 'a'}, {b: 'p'}];
// let newArr = arr.filter((item) => typeof item.a == 'number');
// console.log(arr);
// console.log(newArr);

//------------------------------------------------------------------------------------------------------

// let arr = [1, {a:'j', b: 'p'}, 'a', [{b: 'p'}] ];
// let newArr = arr.filter((item) => typeof item == 'object');
// console.log(arr);
// console.log(newArr);
//------------------------------------------------------------------------------------------------------

// let detail = [
//     { fname: 'vijay', lname: 'bhatt', age: 25, city: 'rajkot'},
//     { fname: 'rakesh', lname: 'joshi', age: 20, city: 'ahmedabad'},
//     { fname: 'rahul', lname: 'jaikar', age: 30, city: 'baroda'},
//     { fname: 'shankar', lname: 'bhatt', age: 25, city: 'mumbai'},
//     { fname: 'vijay', lname: 'rajput', age: 25, city: 'rajkot'}
// ]
// let similar = detail.filter((person) => person.city == 'rajkot');
// console.log(detail);
// console.log(similar);

//------------------------------------------------------------------------------------------------------

// let detail = [
//     { fname: 'vijay', lname: 'bhatt', age: 25, city: 'rajkot'},
//     { fname: 'rakesh', lname: 'joshi', age: 20, city: 'ahmedabad'},
//     { fname: 'rahul', lname: 'jaikar', age: 30, city: 'baroda'},
//     { fname: 'shankar', lname: 'bhatt', age: 25, city: 'mumbai'},
//     { fname: 'vijay', lname: 'rajput', age: 25, city: 'rajkot'}
// ]
// let similar = detail.filter((person) => person.age == 25 && person.city == 'rajkot');
// console.log(detail);
// console.log(similar);

//------------------------------------------------------------------------------------------------------

// let arr = ['apple','orange','mango','gauva','banana'];
// let arr2 = arr.filter((value) => value.length > 5);
// console.log(arr);
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

// const persons = [
//     { name: 'devang', age: 16 },
//     { name: 'raj', age: 22 },
//     { name: 'Sameer', age: 14 },
//     { name: 'Shanket', age: 19 },
//   ];
//   const mature = persons.filter((person) => person.age >= 18);
//   console.log(mature); 

//------------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 1];
// const uniqueNumbers = numbers.filter((value, index, array) => array.indexOf(value) === index);
// console.log(uniqueNumbers);

//------------------------------------------------------------------------------------------------------

// const words = ['apple', 'banana', 'orange', 'cherry'];
// const arr = words.filter(word => word.includes('a'));
// console.log(arr); 

//------------------------------------------------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = arr.filter((value, index) => index % 2 == 0);
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

// const books = [
//     { title: 'Book 1', authors: ['Author 1', 'Author 2'] },
//     { title: 'Book 2', authors: ['Author 2', 'Author 3', 'Author 4'] },
//     { title: 'Book 3', authors: ['Author 1'] },
//   ];
//   const arr = books.filter(book => book.authors.length > 2);
//   console.log(arr); 
  
//------------------------------------------------------------------------------------------------------

// const arr = ['hello', '   ', 'world', '  ', ''];
// const arr2 = strings.filter(word => word.trim() !== '');
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

// let arr = [
//     {a:10, b:20, c:[{a:11, b:21, c:31}]},
//     {a:12, b:18, c:[{a:8, b:25, c:26}]},
//     {a:16, b:29, c:[{a:5, b:10, c:0}]},
//     {a:15, b:20, c:[{a:11, b:21, c:5}]}
// ]
// let arr2 = arr.filter((value) => value.c.filter((c)=> c.c < 20).length);
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

//  let arr = [1,2,'3','5',6,'7'];
//  let arr2 = arr.filter((value) => typeof value === 'number');
//  console.log(arr2);

//------------------------------------------------------------------------------------------------------

// let arr = [
//     {a:10, b:20, c:[{a:11, b:21, c:31}]},
//     {a:12, b:18, c:[{a:8, b:25},{a:8, b:25}]},
//     {a:16, b:29, c:[{a:5, b:10, c:0}]},
//     {a:15, b:20, c:[{a:11, b:21, c:5},{a:11},{b:2}]}
// ]
// let arr2 = arr.filter((value) => value.c.length > 2);
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

// function isArrayContainNumber(input){
//     let arr = input.filter((value) => typeof value === "number" && !isNaN(value))
//     return arr;
// }
  
//   console.log(isArrayContainNumber([1, 2, 3]));             
//   console.log(isArrayContainNumber(["1", "a", "h"]));       
//   console.log(isArrayContainNumber(["a", 3, "gh"]));        
//   console.log(isArrayContainNumber(["a", '3df', "gh"])); 

//------------------------------------------------------------------------------------------------------

// let arr = [
//     {a:10, b:20, c:[{a:11, b:21, d:['p','q']}]},
//     {a:12, b:18, c:[{a:8, b:25, d:[1,2,'p']}]},
//     {a:16, b:29, c:[{a:5, b:10, d:['q','r','s']}]},
//     {a:15, b:20, c:[{a:11, b:21, d:[5,'p']}]}
// ]
// let arr2 = arr.filter((value) => value.c.filter((c)=> c.d.filter((char) => char == 'p').length).length);
// console.log(arr2);

//------------------------------------------------------------------------------------------------------

