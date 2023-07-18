// var a = 10;
// function abc(){
//     a = 20;
// }
// console.log(abc(a));   // undefined
// console.log(a);        // 20


// var a = 10;
// function abc(b){
//     b = 20;
//     return b;
// }
// console.log(abc(a));   // 20
// console.log(a);        // 10
// console.log(b);        // ReferenceError: b is not defined


// function abc(){
//    var a = 20;
//    return a;
// }
// console.log(abc());    // 20
// console.log(a);        // ReferenceError: a is not defined


// function abc(){
//     return a;
// }
// const a = 10;
// console.log(abc(a));  // 10

// function abc(){
//     return a;
// }
// console.log(abc(a));   // ReferenceError: Cannot access 'a' before initialization
// const a = 10;


//-------------------------------------------------------------------------------------------------

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(34,23));  // 57

// function sum(a=34,b=23){
//     return a+b;
// }
// console.log(sum());  // 57

// let a = 10;
// let b = 32;
// console.log(multiply(a,b));     // ReferenceError: Cannot access 'multiply' before initialization
// const multiply = (a,b) => a*b;

// let a = 10;
// let b = 32;
// console.log(multiply(a,b));     // 320
// function multiply(a,b){ return a*b; };

//-------------------------------------------------------------------------------------------------

// Operators Questions

// console.log(5+4*2);  // 13

// console.log(10-2/4);  // 9.4

// console.log(3*(2+4));  // 18

// console.log(8 / (2 + 2));  // 2

// console.log(15 % 4 + 2);  // 5

// console.log(20 / 4 - 2);  // 3

// console.log(2 + 3 * 4 / 2);  // 8

// console.log(4 / 2 ** 2);  // 1

// console.log((10 + 2) / 3);  // 4

// console.log(6 * 2 % 4);  // 0

// console.log(2 ** 3 ** 2);  // 512

// console.log((4 + 2) ** 3);  // 216

// console.log( 2 + 3 * 4 ** 2);  // 50

// console.log(6 * (2 + 4) / 3);  // 12

// console.log((10 - 2) / 4);  // 2

// console.log(8 / (2 * 2));  // 2

// console.log(15 % (4 + 2));  // 3

// console.log(20 / (4 - 2));  // 10

// console.log(2 + (3 * 4) / 2);  // 8

// console.log(4 / (2 ** 2));  // 1

// console.log((10 + 2) / 3);  // 4

// console.log(6 * (2 % 4));  // 12

// console.log(2 ** (3 ** 2));  // 512

// console.log((4 + 2) ** 3);  // 216

// console.log(2 + (3 * 4 ** 2));  // 50

// console.log(6 * (2 + 4) % 3);  // 0

// console.log((10 - 2) / 4);  // 2

// console.log(8 / (2 + 2));  // 2

// console.log(15 % (4 - 2));  // 1

// console.log(20 / 4 - 2);  // 3

// console.log(2 + 3 * (4 / 2));  // 8

// console.log( 4 / (2 ** 2));  // 1

// console.log((10 + 2) / 3);  // 4

// console.log(6 * (2 % 4) - 3);  // 9

// console.log(2 ** (3 ** 2));  // 512

// console.log( (4 + 2) ** 3 - 1);  // 215

// console.log(2 + (3 * 4 ** 2) / 2);  // 26

// console.log(6 * (2 + 4) % 3 + 1);  // 1

// console.log((10 - 2) / 4 + 2);  // 4

// console.log(8 / (2 * 2) + 3);  // 5

// console.log(15 % (4 + 2) - 1);  // 2

// console.log(20 / (4 - 2) + 1);  // 11

// console.log(2 + (3 * 4) / 2 - 1);  // 7

// console.log(4 / (2 ** 2) + 3);  // 4

// console.log((10 + 2) / 3 - 1);  // 3

// console.log(6 * (2 % 4) / 3 + 2);  // 6

// console.log(2 ** (3 ** 2) - 1);  // 511

// console.log((4 + 2) ** 3 + 1);  // 217

// console.log(2 + (3 * 4 ** 2) / 2 - 3);  // 23

// console.log( 6 * (2 + 4) % 3 + 1 - 2);  // -1


//-------------------------------------------------------------------------------------------------

/* const message = "Hello, World!";
console.log(message.length);  // 13 */

/* const str = "HelloWorld";
console.log(str.toLowerCase());   // "helloworld" */

/* const sentence = "I love JavaScript!";
console.log(sentence.indexOf("JavaScript"));  // 7 */

/* const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);  // "Hello, John!" */

/* const text = "Hello, World!";
console.log(text.substring(7));  // "World!" */

/* const message = "Hello, World!";
console.log(message.replace("World", "Universe"));  // "Hello, Universe!" */

/* const words = "apple, banana, orange";
const fruits = words.split(", ");
console.log(fruits);  // ["apple", "banana", "orange"] */

/* const text = "   Hello, World!   ";
console.log(text.trim());   // "Hello, World!" */

/* const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("dog"));  // true */

/* const str = "Hello, World!";
console.log(str.endsWith("!"));   // true */

/* const sentence = "JavaScript is fun!";
console.log(sentence.charAt(4));  // "S" */

/* const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2));  // "Hello, World" */

/* const sentence = "JavaScript is awesome!";
console.log(sentence.slice(0, 10));   // "JavaScript" */

/* const text = "Hello, World!";
console.log(text.repeat(3));    // "Hello, World!Hello, World!Hello, World!" */

/* const sentence = "The quick brown fox";
console.log(sentence.split(" "));   // ["The","quick","brown","fox"] */

/* const str = "Hello, World!";
console.log(str.indexOf("o"));  // 4 */

/* const sentence = "JavaScript is fun!";
console.log(sentence.substring(4, 10));   // "Script" */

/* const text = "Hello, World!";
console.log(text.charAt(7));   // "W" */

/* const sentence = "I love JavaScript!";
console.log(sentence.split("o"));   // ["I l","ve JavaScript!"] */

/* const str = "Hello, World!";
console.log(str.includes("World"));  // true */

/* const sentence = "JavaScript is cool!";
console.log(sentence.lastIndexOf("o"));  // 16 */

/* const text = "Hello, World!";
console.log(text.startsWith("Hello"));  // true */

/* const str = "Hello, World!";
console.log(str.toUpperCase());  // "HELLO, WORLD!" */

/* const sentence = "JavaScript is awesome!";
console.log(sentence.toLowerCase());  // "javascript is awesome!" */

/* const str = "Hello, World!";
console.log(str.charAt(13));  // "" */

/* const sentence = "JavaScript is fun!";
console.log(sentence.substring(4, 10));  // "Script" */

/* const text = "Hello, World!";
console.log(text.includes("WORLD"));  // false */

/* const sentence = "JavaScript is amazing!";
console.log(sentence.replace("amazing", "awesome"));  // "JavaScript is awesome!" */

/* const str = "Hello, World!";
console.log(str.charCodeAt(4));  // 111 */

/* const sentence = "JavaScript is powerful!";
console.log(sentence.split(" ").length); // 3 */
