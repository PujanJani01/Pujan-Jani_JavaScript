
// console.log(5+4*2);

// console.log(10-2/4); 
// precedence of division is greater than subtraction, so division will be first then subtraction

// console.log(3*(2+4));

// console.log(8/(2+2));
// precedence of parenthesis is greater than division, so addition inside parenthesis will be first then division

// console.log(15%4+2);

// console.log(20/4-2);
// precedence of division is greater than subtraction, so division will be first then subtraction

// console.log(2+3*4/2);

// console.log(4/2**2);
// precedence of exponentiations is greater than division, so exponentiations will be first then division

// console.log((10+2)/3);

// console.log(6*2%4);
// precedence of multiplication is greater than remainder, so multiplication will be first then remainder

// console.log(2**3**2);

// console.log((4+2)**3);
// precedence of parenthesis is greater than exponentiations, so addition inside parenthesis will be first then exponentiations

// console.log(2+3*4**2);

// console.log(6*(2+4)/3);
/* precedence of parenthesis is greater, so addition inside parenthesis will be first. 
after that, precendence of multiplication and division is same, so based on associativity operators will be operated left to right */

// console.log((10-2)/4);

// console.log(8/(2*2));
// precedence of parenthesis is greater, so multiplication inside parenthesis will be first then division

// console.log(15%(4+2));

// console.log(20/(4-2));
// precedence of parenthesis is greater, so subtraction inside parenthesis will be first then remainder

// console.log(2+(3*4)/2);

// console.log(4/(2**2));
// precedence of parenthesis is greater, so exponentiations inside parenthesis will be first then division

// console.log((10+2)/3);

// console.log(6*(2%4));
// (4 + 2) ** 3

// console.log(2 ** (3 ** 2));

// console.log((4 + 2) ** 3);
// precedence of parenthesis is greater, so addition inside parenthesis will be first then exponentiations

// console.log( 2 + (3 * 4 ** 2));

// console.log(6 * (2 + 4) % 3);
/* precedence of parenthesis is greater, so addition inside parenthesis will be first. 
after that, precendence of multiplication and remainder is same, so based on associativity operators will be operated left to right */

// console.log((10 - 2) / 4);  

// console.log(8/(2+2));
// precedence of parenthesis is greater than division, so addition inside parenthesis will be first then division

// console.log(15 % (4 - 2));

// console.log(20 / 4 - 2);
// precedence of division is greater than subtraction, so division will be first then subtraction

// console.log(2 + 3 * (4 / 2));

// console.log(4 / (2 ** 2));
// precedence of parenthesis is greater than division, so exponentiations inside parenthesis will be first then division

// console.log((10 + 2) / 3);

// console.log(6 * (2 % 4) - 3);
/* precedence of parenthesis is greater, so remainder inside parenthesis will be first then precedence of multiplication is 
   greater than subtraction, so multiplication will be first */

// console.log(2 ** (3 ** 2));

// console.log((4 + 2) ** 3 - 1);
/* precedence of parenthesis is greater, so addition inside parenthesis will be first then precedence of  exponentiations is 
   greater than subtraction, so exponentiations will be first */

// console.log(2 + (3 * 4 ** 2) / 2);

// console.log( 6 * (2 + 4) % 3 + 1);
/* precedence of parenthesis is greater, so addition inside parenthesis will be first then precedence of multiplication is 
   greater, so multiplication will be first then  precedence of remainder is  greater, so remainder will be first */

// console.log((10 - 2) / 4 + 2);

// console.log(8 / (2 * 2) + 3);
/* precedence of parenthesis is greater, so multiplication inside parenthesis will be first then precedence of division is 
   greater than addition, so division will be first */

// console.log(15 % (4 + 2) - 1);

// console.log(20 / (4 - 2) + 1);
/* precedence of parenthesis is greater, so subtraction inside parenthesis will be first then precedence of division is 
   greater than addition, so division will be first */

// console.log(2 + (3 * 4) / 2 - 1);

// console.log(4 / (2 ** 2) + 3);
/* precedence of parenthesis is greater, so exponentiations inside parenthesis will be first then precedence of division is 
   greater than addition, so division will be first */

// console.log((10 + 2) / 3 - 1);

// console.log(6 * (2 % 4) / 3 + 2);
/* precedence of parenthesis is greater, so remainder inside parenthesis will be first then precedence of multiplication and 
   division is same, so so based on associativity operators will be operated left to right and then addition */

// console.log(2 ** (3 ** 2) - 1);

// console.log((4 + 2) ** 3 + 1);
/* precedence of parenthesis is greater, so addition inside parenthesis will be first then precedence of exponentiations is 
   greater than addition, so exponentiations will be first */

// console.log(2 + (3 * 4 ** 2) / 2 - 3);

// console.log(6 * (2 + 4) % 3 + 1 - 2);
/* precedence of parenthesis is greater, so addtion inside parenthesis will be first then precedence of multiplication and 
   remainder is same, so so based on associativity operators will be operated left to right and then addition and subtraction because of 
   associativity */

// console.log( "5" + "3");

// console.log("7" - "2");

// console.log("10" * "2");
// here both numbers are string though there will be multiplication between operands. 

// console.log( "15" / "5");

// console.log("10" % "3");
// here both numbers are string though it will give remainder after dividing 10 by 3.

// console.log(("2.5") + 1.8);

// console.log(4 - Number("2.5"));
// here we specified the datatype, so it will take it as a number

// console.log(1.5 * Number("3.2"));

// console.log(9.8 / Number("2"));
// here we specified the datatype, so it will take it as a number

// console.log("7" + String(2.5));

// console.log(10 - Number("2.5"));
// here we specified the datatype, so it will take it as a number

// console.log(3.5 * Number("2"));

// console.log(8 / Number("2.5"));
// here we specified the datatype, so it will take it as a number

// console.log(String(1.2) + "0.5");

// console.log(6 - Number("1.2"));
// here we specified the datatype, so it will take it as a number

// const result = 10 * 2 / 5 + Math.pow(2, 3) - 4 % 3;
// console.log(result);

// console.log("hello" && 0);

// console.log("" || "world");

// console.log(null && true);
// Logical AND tries to covert first operand into false, here it can so return first operand

// console.log(NaN || "value");

// console.log(undefined && null);
// Logical AND tries to covert first operand into false, here it can so return first operand

// console.log(10 && "number");

// console.log("" || 0);
// Logical OR tries to covert first operand into true, here it can't so return second operand

// console.log(NaN && "value");

// console.log(null || undefined);
// Logical OR tries to covert first operand into true, here it can't so return second operand

// console.log(false && "false");

// console.log("hello" || 0);

// console.log(0 && true);
// Logical AND tries to covert first operand into false, here it can so return first operand

// console.log(NaN || null);

// console.log(undefined && "undefined");
// Logical AND tries to covert first operand into false, here it can so return first operand

// console.log(10 || "number");

// console.log( "" && 0);
// Logical AND tries to covert first operand into false, here it can so return first operand

// console.log(NaN || "");

// console.log(null && undefined);

// console.log(false || "false");
// Logical OR tries to covert first operand into true, here it can't so return second operand

// console.log("hello" && 10);

// console.log(true ? "Yes" : "No");

// console.log(false ? 10 : 5);

// console.log(3 > 5 ? "Greater" : "Less");
// 3 is not greater 5 so it will return second value

// console.log(10 === 10 ? "Equal" : "Not equal");

// console.log(false ? "Hello" : "World");
// condition is false so it will return second value

// console.log(null ? "NotNull" : "Null");

// console.log(undefined ? "Defined" : "Undefined");
// undefined is false so it will return second value

// console.log('a' !== 'b' ? "Different" : "Same");

// console.log(1 < 0 ? "True" : "False");
// 1 is not less than 0 so it will return second value

// console.log(0 ? "Truthy" : "Falsy");

// console.log("" ? "Truthy" : "Falsy");

// console.log(NaN ? "Valid" : "Invalid");
// NaN is false so it will return second value

// console.log([] ? "NotEmpty" : "Empty");

// console.log([1, 2] ? "Exists" : "Not exists");
// comma operator take value after it so here 2 is true so it will return first value

// console.log({} ? "Object" : "Not object");

// console.log(0.5 ? "True" : "False");
// 0.5 is true so it will return first value

// console.log(undefined === null ? "Equal" : "Not equal");

// console.log(10 > 5 ? "Greater" : "Less");

// console.log(null !== undefined ? "Different" : "Same");
// null and undefined both are different in datatype and value so it will return first value

// console.log(true ? 1 : 0);

// let a = 3;
// let b = 6;
// let c = 1;
// console.log(a>b?(a>c?a:c):(b>c)?b:c);
