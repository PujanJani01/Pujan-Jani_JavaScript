// console.log(Number(10));         // 10
// console.log(Number('10'));       // 10
// console.log(Number(5.674));      // 5.674
// console.log(Number('5.674'));    // 5.674
// console.log(Number(null));       // 0
// console.log(Number(undefined));  // NaN
// console.log(Number(''));         // 0
// console.log(Number(true));       // 1
// console.log(Number(false));      // 0
// console.log(Number());           // 0
// console.log(Number('5a'));           // 0

//-----------------------------------------------------------------------------------------------

// console.log(parseInt(10));         // 10
// console.log(parseInt('10'));       // 10
// console.log(parseInt(5.674));      // 5
// console.log(parseInt('5.674'));    // 5
// console.log(parseInt('0.674'));    // 0
// console.log(parseInt('0074'));    // 74
// console.log(parseInt(null));       // NaN
// console.log(parseInt(undefined));  // NaN
// console.log(parseInt(''));         // NaN
// console.log(parseInt(true));       // NaN
// console.log(parseInt(false));      // NaN
// console.log(parseInt());           // NaN
// console.log(parseInt('3a'));           // 3
// console.log(parseInt('a3'));           // NaN

//-----------------------------------------------------------------------------------------------

// console.log(parseFloat(10));         // 10
// console.log(parseFloat('10'));       // 10
// console.log(parseFloat(5.674));      // 5.674
// console.log(parseFloat('5.674'));    // 5.674
// console.log(parseFloat('0.674'));    // 0.674
// console.log(parseFloat(null));       // NaN
// console.log(parseFloat(undefined));  // NaN
// console.log(parseFloat(''));         // NaN
// console.log(parseFloat(true));       // NaN
// console.log(parseFloat(false));      // NaN
// console.log(parseFloat());           // NaN
// console.log(parseFloat('3a'));           // 3
// console.log(parseFloat('a3'));           // NaN

//-----------------------------------------------------------------------------------------------

// console.log(parseFloat('3.453565').toFixed(2));    // 3.45
// console.log(parseFloat('3.453565').toFixed(0));    // 3
// console.log(parseFloat('3.453565').toFixed());     // 3
// console.log(parseFloat('085').toFixed(2));     // 85.00

// console.log(parseInt('3.453565').toFixed(2));    // 3.00
// console.log(parseInt('3').toFixed(2));           // 3.00
// console.log(parseInt('3.453565').toFixed(0));    // 3
// console.log(parseInt('3.453565').toFixed());     // 3
// console.log(parseInt('085').toFixed(2));     // 85.00

// console.log(Number('3.453565').toFixed(2));   // 3.45
// console.log(Number(0).toFixed(2));   // 0.00

//-----------------------------------------------------------------------------------------------

// console.log(parseFloat('3.453565').toPrecision(2));    // 3.4
// console.log(parseFloat('3.45').toPrecision(4));        //  3.450   
// console.log(parseFloat('0.45').toPrecision(4));        //  0.4500
// console.log(parseFloat('085').toPrecision(3));     // 85.0

// console.log(parseInt('3.453565').toPrecision(2));    // 3.00
// console.log(parseInt('3').toPrecision(2));           // 3.00
// console.log(parseInt('0.45').toPrecision(3));           // 0.00
// console.log(parseInt('085').toPrecision(3));     // 85.0


// console.log(Number('3.453565').toPrecision(2));   // 3.5
// console.log(Number('3.453565').toPrecision(3));   // 3.45
// console.log(Number(0).toPrecision(2));   // 0.0
// console.log(Number('085').toPrecision(3));     // 85.0

//-----------------------------------------------------------------------------------------------

// console.log(Number.isFinite(0/0));          // false
// console.log(Number.isFinite(1/0));          // false
// console.log(Number.isFinite(0/1));          // true
// console.log(Number.isFinite(0));            // true
// console.log(Number.isFinite(10));           // true
// console.log(Number.isFinite('10'));         // false
// console.log(Number.isFinite('p'));          // false
// console.log(Number.isFinite(''));           // false
// console.log(Number.isFinite(null));         // false
// console.log(Number.isFinite(undefined));    // false
// console.log(Number.isFinite());             // false
// console.log(Number.isFinite(true));         // false
// console.log(Number.isFinite(false));        // false

//-----------------------------------------------------------------------------------------------

// console.log(Number.isInteger(0/0));          // false
// console.log(Number.isInteger(1/0));          // false
// console.log(Number.isInteger(0/1));          // true
// console.log(Number.isInteger(0));            // true
// console.log(Number.isInteger(10));           // true
// console.log(Number.isInteger(10));           // true
// console.log(Number.isInteger('10'));         // false
// console.log(Number.isInteger('p'));          // false
// console.log(Number.isInteger(''));           // false
// console.log(Number.isInteger(null));         // false
// console.log(Number.isInteger(undefined));    // false
// console.log(Number.isInteger());             // false
// console.log(Number.isInteger(true));         // false
// console.log(Number.isInteger(false));        // false

