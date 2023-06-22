// ways of declaring string in js

// let fname = 'pujan';        // in single quotes
// let fname = "pujan";        // in double quotes
// let fname = `pujan`;        // in backticks
// let fname = ""pujan"";      // can't use double quotes in double quotes
// let fname = "'puajn'";      // can use single quotes in double qutoes
// let fname = '"puajn"';      // can use double quotes in single qutoes
// let fname = `"pujan"`;   
// let fname = `'pujan'`;      
// let fname = `""pujan""`;       // can use double quotes in double quotes in backticks
// let fname = String("pujan");

// console.log(fname);

//--------------------------------------------------------------------------------------------------------

// how to get length of string

// let greet = "Good Morning";
// x = greet.length;
// console.log(x);

//--------------------------------------------------------------------------------------------------------

// how to access character of string

// let company = 'saeculum';
// console.log(company[0]);  // s

// let company = 'saeculum';
// console.log(company.at(4));  // s

// let greet = "Good Morning";
// x = greet.charAt(3);               // d
// x = greet.charAt(4);               // whitespace
// console.log(x);

//--------------------------------------------------------------------------------------------------------

// concatenating strings

// console.log("Java" + "Script");  // JavaScript

// let x = "java";
// let y = "script";
// console.log(x+y);                // javascript

// console.log("pujan" + " " + "jani");     //  pujan jani

// let x = 'java', y = 'script';
// console.log(x.concat(y));    // javascript
// console.log(x.concat(x,y));  // javajavascript
// console.log(x.concat(y,x));  // javascriptjava
// console.log(y.concat('tag'));  // scripttag

//--------------------------------------------------------------------------------------------------------

// converting values to string

// x = String(8);
// x = String('8');
// x = String(true);
// x= String(null);
// x = String(undefined);

// x = string({fname:'pujan'});   // ERROR
// const obj ={age:18};
// x = String(obj); 

// x = String([1,2,3]);

// function print(){
//     return 'hello';
// }
// x = print();

// console.log(typeof x);   // string

//--------------------------------------------------------------------------------------------------------

// comapring strings

// console.log('p'=='p');  // true
// console.log('p'=='q');  // false
// console.log('7'=='7');   // true
// console.log('7'=='9');   // false

//--------------------------------------------------------------------------------------------------------

// string methods

// at -  give index number of character
// let a ='here I am';
// let x = a.at(2);       // r
// // let x = a.at(-2);   // a
// console.log(x);

// charAt - give index number of character
// let a = "here I am";   
// console.log(a.charAt(8));  // m

/* at() vs charAt() -  we can use negative value with at() but it is not allowed in charAt() and at() can also
                       use with array */


// charCodeAt - give unicode value of character for given index
// let a = "here I am";   
// console.log(a.charCodeAt(5));  // 73


// concat - used join two strings
// let x = 'java', y = 'script';
// console.log(x.concat(y));    // javascript
// console.log(x.concat(x,y));  // javajavascript
// console.log(x.concat(y,x));  // javascriptjava
// console.log(y.concat('tag'));  // scripttag


// stratsWith - if string is starting with specified string in method, it will return true else false.
// endsWith - if string is ending with specified string in method, it will return true else false.

// let hello = 'hi I\'m pujan';

// console.log(hello.startsWith('hi'));  // true
// console.log(hello.startsWith('h'));   // true
// console.log(hello.startsWith('i'));   // false
// console.log(hello.startsWith('hi I'));   // true

// console.log(hello.endsWith('pujan'));  // true
// console.log(hello.endsWith('puja'));  // false
// console.log(hello.endsWith('n'));   // true
// console.log(hello.endsWith('a'));   // false
// console.log(hello.endsWith('m pujan'));   // true
// console.log(hello.endsWith('I\'m pujan'));   // true


// includes - if sting has specified string in method, it will give true else false. it is case-sensitive

// let hello = 'hi I\'m pujan';

// console.log(hello.includes("pujan"));  // true
// console.log(hello.includes("\'"));  // true
// console.log(hello.includes("Pujan"));  // false
// console.log(hello.includes("sujan"));  // false
// console.log(hello.includes(" "));      // true


// indexOf 

// let hello = 'hi I\'m pujan I am coder';

// console.log(hello.indexOf('I'));  // 3


// lastIndexOf 

// let hello = 'hi I\'m pujan I am coder';

// console.log(hello.lastIndexOf('I'));  // 13
 

// match - return array of given word or character if it is there in string.
          

// let hello = 'hi I\'m pujan I am coder i';
// console.log(hello.match(/pujan/g));   // ['pujan']
// console.log(hello.match(/I/g));       // ['I','I']
// console.log(hello.match(/I/gi));       // [ 'i', 'I', 'I', 'i' ] 
// console.log(hello.match(/x/));     // null

// console.log(hello.match(/I/));
// console.log(hello.match('pujan'));  
// console.log(hello.match('I');
// in array there is given word or string, index, input and groups 

// match all - return array of given string, index, input and groups

// let hello = 'hi I\'m pujan I am coder i';
// console.log(...hello.matchAll(/I/g));         // only result with I
// console.log(...hello.matchAll(/I/gi));       // all result with I and i means not case sensitive
// console.log(...hello.matchAll(/I/));   // ERROR: String.prototype.matchAll called with a non-global RegExp argument
// console.log(...hello.matchAll(/x/g));   

// padEnd - pads string with the specified string

// let a = "hi";
// b = a.padEnd(10,'i');   // total will be 10 and pads only 8 dots
// console.log(b);           // hi..........
// console.log(b.length);  // 10
// console.log(a.padEnd(10));      // 'hi        '   (ignore quotes, it's only for understanding)


// padEnd

// let a = "hi";
// b = a.padStart(10,'.');   
// console.log(b);         // ........hi
// console.log(b.length);  // 10
// console.log(a.padStart(10));      // '        hi'   (ignore quotes, it's only for understanding)

// replace - replace only first occurrence with specified stirng

// let a = 'my name is khan name';
// console.log(a);
// console.log(a.replace('name', 'surname'));


// replaceAll - replace all occurrence with specified stirng

// let a = 'my name is khan name';
// console.log(a);
// console.log(a.replaceAll('name', 'surname'));


/* search -  if it find same string as given, it will return its starting index 
and if given string is not their it will return -1 */

// let a = 'my name is khan name';
// console.log(a.search('name'));  // 3
// console.log(a.search('kh'));  // 11
// console.log(a.search('pujan')); // -1


/* slice - extract string based on specified index, first value is starting index and second is ending index.
           it does not include ending index */

// let a = 'my name is khan'
// console.log(a.slice(4,9));   // ame i
// console.log(a.slice(4));       // ame is khan


// split - 



// subString - same as slice

// let a = 'my name is khan';
// console.log(a.substring(4,9));   // ame i
// console.log(a.slice(4));       // ame is khan


// toLowerCase - convert string to lower case

// let a = 'My name is KHAN';
// console.log(a.toLowerCase());  // my name is khan


// toLowerCase - convert string to upper case

// let a = 'my name is khan';
// console.log(a.toUpperCase());  // MY NAME IS KHAN


// trim - remove whitespace from start and end in string

// let a = '   my name is khan    ';
// console.log(a);
// console.log(a.trim());


// trimStart - remove whitespace from only start in string

// let a = '   my name is khan    ';
// console.log(a);
// console.log(a.trimStart());


// trimEnd - remove whitespace from only end in string

// let a = '   my name is khan    ';
// console.log(a);
// console.log(a.trimEnd());


// difference between slice and subString

/* in sunString(), if index start is gretaer then index end, arguments will be swaped which is
  not true for slice() */

// const text = "Pujan";
// console.log(text.substring(3, 2));    // j
// console.log(text.slice(3, 2));    // whitespace
