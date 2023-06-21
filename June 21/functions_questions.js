// function sayHello(){};
// sayHello();

//-----------------------------------------------------------------------------------------------------

// with arguments and return

// function calculateSum(num1,num2){
//      return num1 + num2;
// }
// console.log(calculateSum(8,3));


// with arguments and without return

// function calculateSum(num1,num2){
//      console.log(num1 + num2);
// }
// calculateSum(8,3);


// without arguments and with return

// let num1 = 8;
// let num2 = 3;
// function calculateSum(){
//      return num1 + num2;
// }
// console.log(calculateSum());


// without arguments and without return

// let num1 = 8;
// let num2 = 3;
// function calculateSum(){
//      console.log( num1 + num2);
// }
// calculateSum();

//-----------------------------------------------------------------------------------------------------

// function printArray(arr){
//     console.log(arr);
// }
// let arr = [1,3,5,7,9];
// printArray(arr);

//-----------------------------------------------------------------------------------------------------

// const multiply = function(a,b){
//        return a*b;
// }
// console.log(multiply(6,12));

//-----------------------------------------------------------------------------------------------------

// function myFunction(){}
// myFunction();

//-----------------------------------------------------------------------------------------------------

// const squareNumber = (num)  => num*num;
// console.log(squareNumber(8));

//-----------------------------------------------------------------------------------------------------

// function getFullName(firstName, lastName){
//     return firstName + ' ' + lastName;
// }
// console.log(getFullName('pujan','jani'));

//-----------------------------------------------------------------------------------------------------

// function calculateArea(length,width){
//     return length*width;
// }
// console.log(calculateArea(12,18));

//-----------------------------------------------------------------------------------------------------

// function isEven(num){
//     if(num%2 ==0){
//           return true;
//     }
//     else return false;
// }
// console.log(isEven(5));

//-----------------------------------------------------------------------------------------------------

// Using ternary operator
  
// with arguments and return
// function maxNum(a,b,c){
//     max = ((a>b)?((a>c)?a:c):((b>c)?b:c));
//     return max;
// }
// console.log(maxNum(2,13,6));

// with arguments and without return
// function maxNum(a,b,c){
//     max = ((a>b)?((a>c)?a:c):((b>c)?b:c));
//     console.log(max);
// }
// maxNum(2,13,6);

// without arguments and with return
// let a = 2;
// let b = 6;
// let c = 13;
// function maxNum(){
//     max = ((a>b)?((a>c)?a:c):((b>c)?b:c));
//     return max;
// }
// console.log(maxNum());
 
// without arguments and return
// let a = 13;
// let b = 2;
// let c = 6;
// function maxNum(){
//     max = ((a>b)?((a>c)?a:c):((b>c)?b:c));
//     console.log(max);
// }
// maxNum();


// Using if...else

// with arguments and return
// function maxNum(a,b,c){
//     if(a>b){
//         if(a>c){
//             return a;
//         }
//         else return c;
//     }
//     else if(b>c){
//         return b;
//     }
//     else return c;   
//  }
//  console.log(maxNum(20,13,6));

// with arguments and without return
// function maxNum(a,b,c){
//     if(a>b){
//         if(a>c){
//              console.log(a);
//         }
//         else console.log(c);
//      }
//      else if(b>c){
//         console.log(b);
//      }
//      else console.log(c);
// }
// maxNum(4,23,17);


// without arguments and with return
// let a = 23;
// let b = 17;
// let c = 5;
// function maxNum(){
//        if(a>b){
//            if(a>c){
//                 return a;
//            }
//            else return c;
//         }
//         else if(b>c){
//            return b;
//         }
//         else return c;
//  }
//  console.log(maxNum());

// without arguments and return
// let a = 5;
// let b = 21;
// let c = 3;
// function maxNum(){
//         if(a>b){
//             if(a>c){
//                  console.log(a);
//             }
//             else console.log(c);
//          }
//          else if(b>c){
//             console.log(b);
//          }
//          else console.log(c);
//  }
//  maxNum();

//-----------------------------------------------------------------------------------------------------

// a 
// const calculatePrice = (price,discount=10) =>{
//     discountedPrice = price - (price*discount/100);
//      return discountedPrice;
// }
// console.log(calculatePrice(1320));

//b
// function calculatePrice(price,discount=10){
//     discountedPrice = price - (price*discount/100);
//      return discountedPrice;
// }
// console.log(calculatePrice(1320));

//-----------------------------------------------------------------------------------------------------

// const  isEven = (num) => {
//     if(num%2 ==0){
//           return true;
//     }
//     else return false;
//  }
//  console.log(isEven(5));

//-----------------------------------------------------------------------------------------------------

//a

// with argument and return
// function calculateMultiply(num1,num2){
//     if(num1==undefined && num2==undefined){
//           return 1;
//     }
//     else if(isNaN(num1,num2)){
//         return;
//     }
//     else return num1*num2;
    
// }
// console.log(calculateMultiply(8,7));

 // with argument and without return
//  function calculateMultiply(num1,num2){
//     if(num1==undefined && num2==undefined){
//                 console.log(1);
//     }
//     else if (isNaN(num1,num2)){
//             console.log();
//     }
//     else console.log(num1*num2);
// }
// calculateMultiply(8,7);

// without argument and with return
// let num1=8;
// let num2=7;
// function calculateMultiply(){
//      if(num1==undefined && num2==undefined){
//                  return 1;
//      }
//      else if (isNaN(num1,num2)){
//              return;
//      }
//      else return num1*num2;
// }
// console.log(calculateMultiply());

// without argument and return
// let num1=8;
// let num2=7;
// function calculateMultiply(){
//      if(num1==undefined && num2==undefined){
//            console.log(1);
//      }
//      else if (isNaN(num1,num2)){
//              console.log();
//      }
//      else return console.log(num1*num2);
// }
// calculateMultiply();


//b

// with argument and return
// const calculateMultiply = (num1,num2) => {
//     if(num1==undefined && num2==undefined){
//         return 1;
//     }
//     else if (isNaN(num1,num2)){
//         return;
//     }
//     else return num1*num2;
// }
// console.log(calculateMultiply(8,7));

// with argument and without return
// const calculateMultiply = (num1,num2) => {
//     if(num1==undefined && num2==undefined){
//         console.log(1);
//     }
//     else if (isNaN(num1,num2)){
//         console.log();
//     }
//     else console.log(num1*num2);
// }
// calculateMultiply(8,7);

// without argument and with return
// let num1=8;
// let num2=7;
// const calculateMultiply = () => {
//     if(num1==undefined && num2==undefined){
//         return 1;
//     }
//     else if (isNaN(num1,num2)){
//         return;
//     }
//     else return num1*num2;
// }
// console.log(calculateMultiply());

// without argument and return
// let num1=8;
// let num2=7;
// const calculateMultiply = () => {
//     if(num1==undefined && num2==undefined){
//         console.log(1); 
//     }
//     else if (isNaN(num1,num2)){
//         console.log();
//     }
//     else console.log(num1*num2);
// }
// calculateMultiply();

//-----------------------------------------------------------------------------------------------------

// function greet(params){
//     if(params==undefined){
//         console.log('Anonymous');
//     }
//     else console.log(params);
// }
// greet('good morning');

//-----------------------------------------------------------------------------------------------------

// function exponent(num,power){
//     if(num==undefined && power==undefined){
//           return 0;
//     }
//     else if(power==undefined){
//              return num**2;
//     }
//     else return num**power;
// }
// console.log(exponent());
// console.log(exponent(5,3));
// console.log(exponent(5));

//-----------------------------------------------------------------------------------------------------

