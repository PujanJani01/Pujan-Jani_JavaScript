
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