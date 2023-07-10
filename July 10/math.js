// console.log(Math.floor(5.6));   // 5
// console.log(Math.floor(-5.6));  // -6
// console.log(Math.floor(0));  // 0
// console.log(Math.floor(-0));  // -0
// console.log(Math.floor(+0));  // 0
// console.log(Math.floor(null));  // 0
// console.log(Math.floor(undefined));  // NaN
// console.log(Math.floor('5.6'));  // 5
// console.log(Math.floor('-5.6'));  // -6
// console.log(Math.floor(true));  // 1
// console.log(Math.floor(false));  // 0
// console.log(Math.floor());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.ceil(5.6));   // 6
// console.log(Math.ceil(-5.6));  // -5
// console.log(Math.ceil(0));  // 0
// console.log(Math.ceil(-0));  // -0
// console.log(Math.ceil(+0));  // 0
// console.log(Math.ceil(null));  // 0
// console.log(Math.ceil(undefined));  // NaN
// console.log(Math.ceil('5.6'));  // 6
// console.log(Math.ceil('-5.6'));  // -5
// console.log(Math.ceil(true));  // 1
// console.log(Math.ceil(false));  // 0
// console.log(Math.ceil());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.round(5.6));   // 6
// console.log(Math.round(5.2));   // 5
// console.log(Math.round(-5.6));  // -6
// console.log(Math.round(-5.4));  // -5
// console.log(Math.round(0));  // 0
// console.log(Math.round(-0));  // -0
// console.log(Math.round(+0));  // 0
// console.log(Math.round(null));  // 0
// console.log(Math.round(undefined));  // NaN
// console.log(Math.round('5.6'));  // 6
// console.log(Math.round('-5.6'));  // -6
// console.log(Math.round(true));  // 1
// console.log(Math.round(false));  // 0
// console.log(Math.round());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.trunc(5.6));   // 5
// console.log(Math.trunc(5.3));   // 5
// console.log(Math.trunc(-5.6));  // -5
// console.log(Math.trunc(-5.4));  // -5
// console.log(Math.trunc(0));  // 0
// console.log(Math.trunc(-0));  // -0
// console.log(Math.trunc(+0));  // 0
// console.log(Math.trunc(null));  // 0
// console.log(Math.trunc(undefined));  // NaN
// console.log(Math.trunc('5.6'));  // 5
// console.log(Math.trunc('-5.6'));  // -5
// console.log(Math.trunc(true));  // 1
// console.log(Math.trunc(false));  // 0
// console.log(Math.trunc());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.sqrt(25));  // 5
// console.log(Math.sqrt(24));  // 4.898979485566356
// console.log(Math.sqrt(0));  // 0
// console.log(Math.sqrt(-0));  // -0
// console.log(Math.sqrt(+0));  // 0
// console.log(Math.sqrt(-25));  // NaN
// console.log(Math.sqrt(null));  // 0
// console.log(Math.sqrt(undefined));  // NaN
// console.log(Math.sqrt('25'));  // 5
// console.log(Math.sqrt(36.8));  // 6.06630035524124
// console.log(Math.sqrt(true));  // 1
// console.log(Math.sqrt(false));  // 0
// console.log(Math.sqrt());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.cbrt(125));  // 5
// console.log(Math.cbrt(24));  // 2.8844991406148166
// console.log(Math.cbrt(0));  // 0
// console.log(Math.cbrt(-0));  // -0
// console.log(Math.cbrt(+0));  // 0
// console.log(Math.cbrt(-25));  // -2.924017738212866
// console.log(Math.cbrt(null));  // 0
// console.log(Math.cbrt(undefined));  // NaN
// console.log(Math.cbrt('125'));  // 5
// console.log(Math.cbrt(36.8));  // 3.3262069976815316
// console.log(Math.cbrt(true));  // 1
// console.log(Math.cbrt(false));  // 0
// console.log(Math.cbrt());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.max(2,7,1,0));  // 7
// console.log(Math.max(-4,-100,-1));  // -1
// console.log(Math.max('45','0','-23','35'));  // 45
// console.log(Math.max('45','0','-23',35));  // 45
// console.log(Math.max(true,false,1,0));  // 1
// console.log(Math.max(undefined,null));  // NaN
// console.log(Math.max(0,-0,+0));  // 0
// console.log(Math.max(-1,-5,-0));  // -0

//-------------------------------------------------------------------------------------------------

// console.log(Math.min(2,7,1,0));  // 0
// console.log(Math.min(-4,-100,-1));  // -100
// console.log(Math.min('45','0','-23','35'));  // -23
// console.log(Math.min('45','0','-23',35));  // -23
// console.log(Math.min(true,false,1,0));  // 0
// console.log(Math.min(undefined,null));  // NaN
// console.log(Math.min(0,-0,+0));  // -0
// console.log(Math.min(-1,-5,-0));  // -5

//-------------------------------------------------------------------------------------------------

// console.log(Math.random());  // random number between 0 to 1
// console.log(1 + (Math.random() * 10));  // random number between 1 to 10
// console.log(Math.round(1 + (Math.random() * 100)));   // random number between 1 to 100

//-------------------------------------------------------------------------------------------------

// console.log(Math.abs(6.78));  // 6.78
// console.log(Math.abs(-6.78));  // 6.78
// console.log(Math.abs(0));  // 0
// console.log(Math.abs(-0));  // 0
// console.log(Math.abs('7.55'));  // 7.55
// console.log(Math.abs(null));  // 0
// console.log(Math.abs(undefined));  // NaN
// console.log(Math.abs(3,5));  // 3
// console.log(Math.abs(5,3));  // 5

//-------------------------------------------------------------------------------------------------

// console.log(Math.hypot(4,5));  // 6.4031242374328485
// console.log(Math.hypot(4,0));  // 4
// console.log(Math.hypot(0,0));  // 0
// console.log(Math.hypot(0,-0));  // 0

//-------------------------------------------------------------------------------------------------

// console.log(Math.pow(4,3));  // 64
// console.log(Math.pow(4,-3)); // 0.015625
// console.log(Math.pow(-2,-3)); // -0.0125
// console.log(Math.pow(null,undefined)); // NaN

//-------------------------------------------------------------------------------------------------

// console.log(Math.sign(-10));  // -1
// console.log(Math.sign(5));  // 1
// console.log(Math.sign(0));  // 0
// console.log(Math.sign(-0));  // -0
// console.log(Math.sign(+0));  // 0
// console.log(Math.sign(null));  // 0
// console.log(Math.sign(undefined));  // NaN
// console.log(Math.sign('-56'));  // -1
// console.log(Math.sign());  // NaN

//-------------------------------------------------------------------------------------------------

// console.log(parseInt('10234'));
// console.log(parseFloat('10.234'));

//-------------------------------------------------------------------------------------------------

// let a = 12.5464545;

// console.log(a.toFixed(2));  // 12.55
// console.log(a.toFixed(3));  // 12.546
// console.log(a.toFixed(1));  // 12.5
// console.log(a.toFixed(20));  // 12.54645449999999939905
// console.log(a.toFixed(0));  // 13
// console.log(a.toFixed());  // 13

// console.log(a.toPrecision(2)); // 13
// console.log(a.toPrecision(3)); // 12.5
// console.log(a.toPrecision(20)); // 12.546454499999999399
// console.log(0.56.toPrecision(4)); // 0.5600

//-------------------------------------------------------------------------------------------------

// function pythagorean_theorem(num1,num2){
//     return Math.sqrt( num1**2 + num2**2);
// }
// console.log(pythagorean_theorem(2,4));
// console.log(pythagorean_theorem(3,4));

//-------------------------------------------------------------------------------------------------

// let arr = [13,70,34,67,89,45];
// console.log(Math.max(arr));  // NaN
// console.log(Math.max(...arr));  // 89
// console.log(Math.min(...arr));  // 13

//-------------------------------------------------------------------------------------------------

