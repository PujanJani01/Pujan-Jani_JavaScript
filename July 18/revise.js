/* var a = 10;
function abc(){
    a = 20;
}
console.log(abc(a));   // undefined
console.log(a);        // 20 */


/* var a = 10;
function abc(b){
    b = 20;
    return b;
}
console.log(abc(a));   // 20
console.log(a);        // 10
console.log(b);        // ReferenceError: b is not defined */


/* function abc(){
   var a = 20;
   return a;
}
console.log(abc());    // 20
console.log(a);        // ReferenceError: a is not defined */


/* function abc(){
    return a;
}
const a = 10;
console.log(abc(a));  // 10 */

/* function abc(){
    return a;
}
console.log(abc(a));   // ReferenceError: Cannot access 'a' before initialization
const a = 10; */

// var let = 5;
// console.log(let);



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

// console.log("5" + "3"); // "53"

// console.log("7" - "2"); // 5

// console.log("10" * "2");  // 20

// console.log( "15" / "5");  // 3

// console.log( "10" % "3");  // 1

// console.log(Number("2.5") + 1.8);  // 4.3

// console.log(4 - Number("2.5"));  // 1.5

// console.log(1.5 * Number("3.2"));  // 4.800000000000001

// console.log(9.8 / Number("2") );  // 4.9

// console.log("7" + String(2.5));  // "72.5"

// console.log(10 - Number("2.5"));  // 7.5

// console.log(3.5 * Number("2"));  // 7

// console.log(8 / Number("2.5"));  // 3.2

// console.log(String(1.2) + "0.5");  // "1.20.5"

// console.log(6 - Number("1.2"));  // 4.8

// console.log(10 * 2 / 5 + Math.pow(2, 3) - 4 % 3);  // 11

// console.log("hello" && 0);  // 0

// console.log("" || "world");  // "world"

// console.log(null && true);  // null

// console.log(NaN || "value");  // "value"

// console.log(undefined && null);  // undefined

// console.log(10 && "number");  // "number"

// console.log("" || 0);  // 0

// console.log(NaN && "value");  // NaN

// console.log(null || undefined);  // undefined

// console.log(false && "false");  // false

// console.log("hello" || 0);  // "hello"

// console.log(0 && true);  // 0

// console.log(NaN || null);  // null

// console.log(undefined && "undefined");  // undfined

// console.log(10 || "number");  // 10

// console.log("" && 0);  // ""

// console.log(NaN || "");  // ""

// console.log(null && undefined);  // null

// console.log(false || "false");  // "false"

// console.log("hello" && 10);  // 10

// console.log(true ? "Yes" : "No");  // "Yes"

// console.log(false ? 10 : 5);  // 5

// console.log(3 > 5 ? "Greater" : "Less");  // "Less"

// console.log(10 === 10 ? "Equal" : "Not equal");  // "Equal"

// console.log(false ? "Hello" : "World");  // "world"

// console.log(null ? "NotNull" : "Null");  // "Null"

// console.log(undefined ? "Defined" : "Undefined");  // "Undefined"

// console.log('a' !== 'b' ? "Different" : "Same");  // "Different"

// console.log(1 < 0 ? "True" : "False");  // "False"

// console.log(0 ? "Truthy" : "Falsy");  // "Falsy"

// console.log("" ? "Truthy" : "Falsy");  // "Falsy"

// console.log(NaN ? "Valid" : "Invalid");  // "Invalid"

// console.log([] ? "NotEmpty" : "Empty");  // "NotEmpty"

// console.log([1, 2] ? "Exists" : "Not exists");  // "Exists"

// console.log({} ? "Object" : "Not object");  // "Object"

// console.log(0.5 ? "True" : "False");  // "True"

// console.log(undefined === null ? "Equal" : "Not equal");  // "Not equal"

// console.log(10 > 5 ? "Greater" : "Less");  // "Greater"

// console.log(null !== undefined ? "Different" : "Same");  // "Different"

// console.log(true ? 1 : 0);  // 1

/* let a = 32;
let b = 13;
let c = 8;
console.log(a>b? a>c? a:c : b>c? b:c);  // 1 */

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

/* const text = "Hello, World!";
console.log(text.search("W"));  // 7 */

/* const sentence = "JavaScript is dynamic!";
console.log(sentence.slice(-7));  // ynamic! */

/* const str = "Hello, World!";
console.log(str.concat(" Goodbye!"));  // "Hello, World! Goodbye!" */

/* const sentence = "JavaScript is flexible!";
console.log(sentence.charAt(sentence.length - 1));  // ! */

/* const sentence = "JavaScript is interesting!";
console.log(sentence.substring(10));  // " is interesting!" */

/* const str = "Hello, World!";
console.log(str.search("World"));  // 7 */

/* const sentence = "JavaScript is versatile!";
console.log(sentence.split(" ").reverse().join(" "));  // "versatile! is JavaScript" */

/* const sentence = "JavaScript is powerful!";
console.log(sentence.substring(4, 10));  // "Script" */

/* const str = "Hello, World!";
console.log(str.charCodeAt(0)); // 72 */

/* const sentence = "JavaScript is amazing!";
console.log(sentence.slice(4, 10)); // "Script" */

/* const text = "Hello, World!";
console.log(text.indexOf("o", 5)); // 8 */

/* const sentence = "JavaScript is fun!";
console.log(sentence.startsWith("Java"));  // true */

/* const str = "Hello, World!";
console.log(str.endsWith("!"));  // true */

/* const sentence = "JavaScript is amazing!";
console.log(sentence.lastIndexOf("a", 12));  // 3 */

/* const text = "Hello, World!";
console.log(text.substring(7, 2));  // "llo, " */

/* const sentence = "JavaScript is cool!";
console.log(sentence.concat(" I love it!"));  // "JavaScript is cool! I love it!" */

/* const str = "Hello, World!";
console.log(str.toUpperCase().charAt(7)); // "W" */

/* const sentence = "JavaScript is amazing!";
console.log(sentence.replace("amazing", "awesome").toUpperCase());  // "JAVASCRIPT IS AWESOME!" */

/* function is_string(input){
  return (typeof input === "string");
}
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false */

/* function is_Blank(input){
  return input.trim() == "";
}
console.log(is_Blank('')); // true
console.log(is_Blank(' ')); // true
console.log(is_Blank('abc')); // false
 */

/* function string_to_array(input){
   return input.split(" ");
}
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"] */

/* function truncate_string(str,num){
    return str.slice(0,num);
}
console.log(truncate_string("Robin Singh",4)); // "Robi" */

/* function protect_email(email){
   return email.slice(0,5) + "..." + email.slice(email.indexOf('@'));
}
console.log(protect_email("robin_singh@example.com"));  // "robin...@example.com" */

/* function string_parameterize(str){
    return str.toLowerCase().replaceAll(" ","-").slice(0,-1);
}
console.log(string_parameterize("Robin Singh from USA."));  // robin-singh-from-usa */

/* function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises')); */

/* function capitalize_Words(str){
    let strArr = str.split(" ");
    return strArr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
}
console.log(capitalize_Words('js string exercises')); */

/* function insert(str,addStr='', position=0){
  return str.slice(0,position) + addStr + str.slice(position);
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18)); */

// let text = "Apple, Banana, Kiwi";
// text.slice(-12, -6);
// console.log(text);  // "Apple, Banana, Kiwi"

//-------------------------------------------------------------------------------------------------

// Function Questions

/* function sayHello(){
    console.log("Hello!");
}
sayHello();  // 25 */


/* function calculateSum(num1,num2){
    return num1 + num2;
}
console.log(calculateSum(10,15)); */

/* function calculateSum(num1,num2){
    console.log(num1 + num2);
}
calculateSum(10,15);  // 25 */

/* function calculateSum(){
    let num1 = 10;
    let num2 = 15;
    return num1 + num2;
}
console.log(calculateSum());  // 25 */

/* function calculateSum(){
    let num1 = 10;
    let num2 = 15;
    console.log(num1+num2);
}
calculateSum();  // 25 */


/* function printArray(arr){
    return arr;
}
let arr = [1,2,3,4,5]
console.log(printArray(arr)); */


/* const multiply = function(a,b){
   return a*b;
}
console.log(multiply(8,3));  // 24 */


/* function myFunction(){
   console.log("It'a myFunction");
}
myFunction(); */


/* const squareNumber = (num) => num**2;
console.log(squareNumber(16));  // 256 */


/* function getFullName(firstName, lastName){
   return firstName + " " + lastName;
}
console.log(getFullName("Pujan","Jani"));  // "Pujan Jani" */


/* function calculateArea(length, width){
    return length*width;
}
console.log(calculateArea(12,34));   // 408 */


/* function isEven(num){
    return num%2 == 0 ? true :  false;
}
console.log(isEven(48));  // true
console.log(isEven(55));  // true */


/* function maxNum(a,b,c){
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maxNum(4,1,8)); */

/* function maxNum(a,b,c){
    console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));
}
maxNum(4,1,8); */

/* function maxNum(){
     let a = 4;
     let b = 1;
     let c = 8;
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maxNum()); */

// function maxNum(){
//     let a = 4;
//     let b = 1;
//     let c = 8;
//     console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));
// }
// maxNum();

/* function maxNum(a,b,c){
    if(a>b){
        if(a>c)
           return a;
        else
           return c;
    }
    else{
        if(b>c)
           return b;
        else
           return c;
    }
}
console.log(maxNum(4,1,8)); */

/* function maxNum(a,b,c){
    if(a>b){
        if(a>c)
           console.log(a);
        else
           console.log(c);
    }
    else{
        if(b>c)
           console.log(b);
        else
           console.log(c);
    }
}
maxNum(4,1,8); */

/* function maxNum(){
    let a = 4;
    let b = 1;
    let c = 8;
    if(a>b){
        if(a>c)
           return a;
        else
           return c;
    }
    else{
        if(b>c)
           return b;
        else
           return c;
    }
}
console.log(maxNum()); */

/* function maxNum(){
    let a = 4;
    let b = 1;
    let c = 8;
    if(a>b){
        if(a>c)
           console.log(a);
        else
           console.log(c);
    }
    else{
        if(b>c)
           console.log(b);
        else
           console.log(c);
    }
}
maxNum(); */


/* function calculatePrice(price,discount = 10){
   return price - price * (discount/100);
}
console.log(calculatePrice(5000));
console.log(calculatePrice(5000,23)); */

/* const calculatePrice = (price,discount = 10) => {
    return price - price * (discount/100);
 }
 console.log(calculatePrice(5000));
 console.log(calculatePrice(5000,23)); */


/* function calculateMultiply(num1=1,num2=1){
    return num1*num2;
}
console.log(calculateMultiply(6,8));  // 48
console.log(calculateMultiply());     // 1 */

/* function calculateMultiply(num1=1,num2=1){
    console.log(num1*num2);
}
calculateMultiply(6,8);  // 48
calculateMultiply();     // 1 */

/* function calculateMultiply(){
    let num1 = 6;
    let num2 = 8;
    if(Number(num1) && Number(num2)){
        return num1*num2;
    }
    return 1;
}
console.log(calculateMultiply());     // 48 */

/* function calculateMultiply(){
    let num1 = 6;
    let num2 = 8;
    if(Number(num1) && Number(num2)){
        console.log(num1*num2);
    }
    else{
        console.log(1);
    }
}
calculateMultiply();     // 48 */

/* const calculateMultiply = (num1=1,num2=1) => {
    return num1*num2;
}
console.log(calculateMultiply(6,8));  // 48
console.log(calculateMultiply());     // 1 */


/* const calculateMultiply = (num1=1,num2=1) => {
    console.log(num1*num2);
}
calculateMultiply(6,8);  // 48
calculateMultiply();     // 1  */

/* const calculateMultiply = () => {
    let num1 = 6;
    let num2 = 8;
    if(Number(num1) && Number(num2)){
        return num1*num2;
    }
    return 1;
}
console.log(calculateMultiply());     // 48 */

/* const calculateMultiply = () => {
    let num1 = 6;
    let num2 = 8;
    if(Number(num1) && Number(num2)){
        console.log(num1*num2);
    }
    else{
        console.log(1);
    }
}
calculateMultiply();     // 48 */


/* function greet(str="Anonymous"){
       console.log(str);
}
greet('hello');
greet(); */


/* function exponent(num,power=2){
    return num**power;
}
console.log(exponent(6,3));  // 216
console.log(exponent(6));  // 216 */

//-------------------------------------------------------------------------------------------------

