// Arithmetic Operators

// var a=3, b=10;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(b/a);

// console.log(a%b);
// console.log(b%a);

// console.log(a**b);
// console.log(b**a);

// console.log(a++);
// console.log(a--);
// console.log(++a);
// console.log(--a);

//--------------------------------------------------------------------------------------------------------------

// Comparison Operators

// var a = 12, b = 23;

// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a>=b);
 
//--------------------------------------------------------------------------------------------------------------

// Logical Operators

// var a=10, b=34, c=10;

// console.log(a==b && a==c);
// console.log(a==b || a==c);

// console.log(a==c);
// console.log(!(a==c));

// console.log(!'hello'); //false
// console.log(!'');  //true

//--------------------------------------------------------------------------------------------------------------

// Bitwise Operators

// var a = 10 , b = 8 , c = 10;

// console.log(a==b & a==c);
// console.log(a==b | a==c);
// console.log(a==b ^ a==c);
// console.log(~a);
// console.log(~b);
// console.log(a<<b);
// console.log(a>>b);
// console.log(10>>>2);

//--------------------------------------------------------------------------------------------------------------

// Assignment Operators

// var a = 12, b = 5 , c=10;

// var c = a+b;
// console.log(c);

// c += a;
// c -= a;  
// c *= a;
// c /= a;    
// c %= a;  
// console.log(c);

//--------------------------------------------------------------------------------------------------------------

// var X ;

// X = 5 + 5 * 10;
// X = (5 + 5) * 10;
// X = 5 + 4 / 3;
// X = 5 * 4 / 2;
// X = 3 + 7 - 2 * 6 + 8 / 2;
// X = 3 + ((7 - 2) * 6) + 8 / 2;

// console.log(X);

//--------------------------------------------------------------------------------------------------------------

// console.log('a'>'A');   // true - compares ASCII value
// console.log('a'<'A');   // false

// var x = "A";
// console.log(x.charCodeAt(0));
// var y = "a";
// console.log(y.charCodeAt(0));

//--------------------------------------------------------------------------------------------------------------

// var a,b;
// // [a,b]=[10,20];
// // console.log(a);

// [a,b,c,d,...rest] = [10,20,30,40,50,60,70,80,90,100];
// // [...rest] = [10,20,30,40,50,60,70,80,90,100];
// console.log(rest);

//--------------------------------------------------------------------------------------------------------------

// let num = [1,2,3,4];
// function sum(a,b,c,d){
//    return a+b+c+d;
// }
// // console.log(sum(num)); // 1,2,3,4undefinedundefinedundefined
// console.log(sum(...num)); // 10

//--------------------------------------------------------------------------------------------------------------

// console.log("10"*2);
// console.log("10"+10);
// console.log(+"10" + 10);
// console.log(+"10");

// console.log(10 + 10 + '10'); // 2010
// console.log('10' + 10 + 10);    // 101010

// const a = 0 || 1;
// console.log(a);