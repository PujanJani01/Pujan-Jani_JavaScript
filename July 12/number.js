
// console.log(Number.isFinite(0));            // true
// console.log(Number.isFinite(1/0));          // false
// console.log(Number.isFinite(''));           // false
// console.log(Number.isFinite('a'));                 // false
// console.log(Number.isFinite('3a'));                // false
// console.log(Number.isFinite(null));         // false
// console.log(Number.isFinite(undefined));    // false
// console.log(Number.isFinite());             // false


// console.log(isFinite(0));                   // true
// console.log(isFinite(1/0));                 // false
// console.log(isFinite(''));                  // true
// console.log(isFinite('a'));                 // false
// console.log(isFinite('3a'));                // false
// console.log(isFinite(null));                // true
// console.log(isFinite(undefined));           // false
// console.log(isFinite());                    // false

//-----------------------------------------------------------------------------------------------

// console.log(Number.isInteger(0));            // true
// console.log(Number.isInteger(15.5677));      // false
// console.log(Number.isInteger(15.000));       // true
// console.log(Number.isInteger(-15));          // true
// console.log(Number.isInteger(15.00000000000001));          // false
// console.log(Number.isInteger(15.0000000000000001));          // true
// console.log(Number.isInteger(0.015));        // false
// console.log(Number.isInteger(1/0));          // false
// console.log(Number.isInteger(''));           // false
// console.log(Number.isInteger('a'));          // false
// console.log(Number.isInteger('3a'));         // false
// console.log(Number.isInteger(null));         // false
// console.log(Number.isInteger(undefined));    // false
// console.log(Number.isInteger());             // false


// console.log(isInteger(0));  // ReferenceError: isInteger is not defined

//-----------------------------------------------------------------------------------------------

// console.log((165).toFixed(3));    // 165.000
// console.log((165).toFixed(0));    // 165
// console.log((165).toFixed());    // 165
// console.log(typeof (165).toFixed(3));    // string


// console.log((165.356).toPrecision(4));    // 165.4
// console.log((165).toPrecision());    // 165
// console.log((165).toPrecision(4));    // 165.0
// console.log((0.16).toPrecision(4));    // 0.1600
// console.log(typeof (165).toPrecision(3));    // string

//-----------------------------------------------------------------------------------------------

// console.log(isNaN(15));           // false
// console.log(isNaN('15'));         // false
// console.log(isNaN(15.211));       // false
// console.log(isNaN(0.454));        // false
// console.log(isNaN(null));         // false
// console.log(isNaN(undefined));    // true
// console.log(isNaN(''));           // false
// console.log(isNaN());             // true
// console.log(isNaN('abc'));        // true
// console.log(isNaN('34abc'));      // true
// console.log(isNaN('abc56'));      // true
// console.log(isNaN(true));         // false
// console.log(isNaN(false));        // false


// console.log(Number.isNaN(15));           // false
// console.log(Number.isNaN('15'));         // false
// console.log(Number.isNaN(15.211));       // false
// console.log(Number.isNaN(0.454));        // false
// console.log(Number.isNaN(null));         // false
// console.log(Number.isNaN(undefined));    // false
// console.log(Number.isNaN(''));           // false
// console.log(Number.isNaN());             // false
// console.log(Number.isNaN('abc'));        // false
// console.log(Number.isNaN('34abc'));      // false
// console.log(Number.isNaN('abc56'));      // false
// console.log(Number.isNaN(true));         // false
// console.log(Number.isNaN(false));        // false


//-----------------------------------------------------------------------------------------------

// Number vs parseInt vs parseFloat

// let a = '5.8 feet'

// console.log(Number(a));     // NaN
// console.log(parseInt(a));   // 5  
// console.log(parseFloat(a));   // 5.8


// let a = 'html5'

// console.log(Number(a));     // NaN
// console.log(parseInt(a));   // NaN  
// console.log(parseFloat(a));   // NaN


// console.log(typeof Number(5.8));     // number
// console.log(typeof parseInt(5.8));   // number 
// console.log(typeof parseInt('5.8'));   // number 
// console.log(typeof parseFloat(5.8));   // number
// console.log(typeof parseFloat('5.8'));   // number

//---------------------------------------------------------------------------------------------

// console.log(parseInt(101,2));    // convert binary number to decimal - 5
// console.log(parseInt(1019,2));    // 5
// console.log(parseInt(4101,2));    // NaN

//-----------------------------------------------------------------------------------------------

// let arr = [1,2,3,4];

// console.log(Number(arr));      // NaN
// console.log(Number(...arr));   // 1
// console.log(Number(arr[3]));   // 4

// console.log(parseInt(arr));      // 1
// console.log(parseInt(...arr));   // 1
// console.log(parseInt(arr[3]));   // 4

// console.log(parseFloat(arr));      // 1
// console.log(parseFloat(...arr));   // 1
// console.log(parseFloat(arr[3]));   // 4


// let obj = {a:10,b:30,c:56};

// console.log(Number(obj));      // NaN
// console.log(Number(...obj));   // TypeError: Found non-callable @@iterator
// console.log(Number(obj.b));    // 30

// console.log(parseInt(obj));      // NaN
// console.log(parseInt(obj.b));    // 30

// console.log(parseFloat(obj));      // NaN
// console.log(parseFloat(obj.b));    // 30

//-----------------------------------------------------------------------------------------------

// console.log(Number(30,10,45));      // 30
// console.log(parseInt(30,10,45));    // 30
// console.log(parseFloat(30,10,45));  // 30

// console.log(Number(3+'5'));         // 35
// console.log(parseInt(3+'5'));       // 35
// console.log(parseFloat(3 +'5'));    // 35

// console.log(Number(3+'a'));         // NaN
// console.log(parseInt(3+'a'));       // 3
// console.log(parseFloat(3 +'a'));    // 3

// console.log(Number(3+'3a'));         // NaN
// console.log(parseInt(3+'3a'));       // 33
// console.log(parseFloat(3 +'3a'));    // 33

