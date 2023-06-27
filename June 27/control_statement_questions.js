// let time = new Date();
// if(time.getHours() >= 6 && time.getHours() < 12){
//    console.log('Good Morning');
// } 
// else if(time.getHours() >=12 && time.getHours() <16){
//     console.log('Good Afternoon');
// }
// else if(time.getHours() >=16 && time.getHours() <20){
//     console.log('Good Evening');
// }
// else if(time.getHours() >=20){
//     console.log('Good Night');
// }

//----------------------------------------------------------------------------------------------------------

// let day = 3;
// switch(day){
//     case 1:
//          console.log('Monday'); break;
//     case 2:
//          console.log('Tuesday'); break;
//     case 3:
//         console.log('Wednesday'); break; 
//     case 4:
//         console.log('Thursday'); break; 
//     case 4:
//         console.log('Friday'); break; 
//     case 6:
//         console.log('Saturday'); break; 
//     case 7:
//         console.log('Sunday'); break; 
//     default: 
//         console.log('Invaild input');
// }

//----------------------------------------------------------------------------------------------------------

// let string = '';
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string);

//----------------------------------------------------------------------------------------------------------

// let string = '';
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string);

//----------------------------------------------------------------------------------------------------------

// let string = '';
// for(i=5;i>=1;i--){
//     for(j=i;j>=1;j--){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string);

//----------------------------------------------------------------------------------------------------------

// function getNumberOfDays(month){
//     switch(month){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//              console.log(31); break;
//         case 2:
//              console.log(28); break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log(30); break;
//         default:
//             console.log('Invaid input');
//     }
// }
// getNumberOfDays(5);


// function getNumberOfDays(month){
//     if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//         console.log(31);
//     }
//     else if(month==2){
//         console.log(28);
//     }
//     else if(month==4 || month==6 || month==9 || month==11){
//         console.log(30);
//     }

// }
// getNumberOfDays(6);

//----------------------------------------------------------------------------------------------------------

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//----------------------------------------------------------------------------------------------------------


// function printOddNumber(first,last){
//     let print = '';
//     for(i=first;i<=last;i++){
//         if(i%2!=0){
//            print +=i + ',';
//         }
//     }
//     console.log(print.slice(0,-1));
// }
// printOddNumber(1,10);

//----------------------------------------------------------------------------------------------------------

// function printOddNumber(first,last){
//     let print = '';
//     for(i=first;i<=last;i++){
//         if(i%2==0){
//            print +=i + ',';
//         }
//     }
//     console.log(print.slice(0,-1));
// }
// printOddNumber(1,10);

//----------------------------------------------------------------------------------------------------------

// const names  = [
//     {first_name: "Asndnm", last_name: "L demo"},
//     {first_name: "Qpweui", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
//     ];

// for(let i=0; i<names.length; i++){
//     names[i].full_name = names[i].first_name + ' ' + names[i].last_name;
// }
// console.log(names);

// for(i=0; i<names.length; i++){
//    console.log(names[i]);
// }

//----------------------------------------------------------------------------------------------------------

// function calculate(operation,num1,num2){
//     switch(operation){
//         case '+':
//               console.log(num1+num2);  break;
//         case '-':
//               console.log(num1-num2);  break;
//         case '*': 
//               console.log(num1*num2);  break;
//         case '/':
//               console.log(num1/num2);  break;
//         case '%':
//             console.log(num1%num2);  break;
//         default:
//              console.log('Invalid input');
//     }
// }
// calculate('+',5,6);
// calculate('-',10,6);
// calculate('*',3,9);
// calculate('/',6,8);
// calculate('%',7,3);
// calculate();

//----------------------------------------------------------------------------------------------------------

// function grade(marks){
//     if(marks <= 30){
//         console.log('Fail');
//     }
//     else if(marks > 30 && marks < 50){
//         console.log('C Grade');
//     }
//     else if(marks >=50 && marks < 70){
//         console.log('B Grade');
//     }
//     else if(marks >= 70 && marks < 90){
//         console.log('A Grade');
//     }
//     else if(marks >=90 && marks <=100){
//         console.log('O grade');
//     }
//     else console.log('Invaild Input');
// }
// grade(86);
// grade(95);
// grade(-12);
// grade(null);
// grade(undefined);

//----------------------------------------------------------------------------------------------------------

// function reverse(str){
//     console.log(str.split('').reverse().join(''));
// }
// reverse('pujan jani');
// reverse('inaj najup');
// reverse();            // ERROR

//----------------------------------------------------------------------------------------------------------

// function printProps(obj){
//     for(let keys in obj){
//          console.log(keys ,obj[keys]);
//     }
// }
// const obj1 = {a:1, b:2, c:3};
// printProps(obj1);
// printProps();

//----------------------------------------------------------------------------------------------------------

// function isStringContainsNum(str) {
//     const regex = /\d/;
//     console.log(regex.test(str)); 
//   }
// isStringContainsNum('assad');
// isStringContainsNum('agfh1'); 
// isStringContainsNum('ag1sdf'); 
// isStringContainsNum('111'); 

//----------------------------------------------------------------------------------------------------------

// function isDigitMessege(str) {
//     if (/^\d+$/.test(str)) {
//       console.log("String is a number");
//     } else if (/\d/.test(str)) {
//       console.log("String contains a number");
//     } else {
//       console.log("String does not contain a number");
//     }
//   }
//   isDigitMessege("1212");     // String is number
//   isDigitMessege("sadfsd");   // String deos not contain a number
//   isDigitMessege("sad2q");    // String contains number

//----------------------------------------------------------------------------------------------------------

// function digitIndex(str){
//     for(i=0;i<str.length;i++){
//         if(!isNaN(str[i]))
//         {
//             let index = console.log(i);
//             return index;
//         }
            
//     }
// }
// digitIndex('puj4n');
// digitIndex('123');
// digitIndex('dsefsdf23');
// digitIndex('');

//----------------------------------------------------------------------------------------------------------

// function firstCapital(str) {
//     for (i=0; i<str.length;i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             console.log(i);
//             break;
//         }
//     }
// }
// firstCapital("puJaLn");

//----------------------------------------------------------------------------------------------------------

// function printOdd(start, end){
// 	for(let i = start; i< end; i++){
//         if(i%2!=0)
// 	       console.log(i);
//    }
// }
// printOdd(1,10);

//----------------------------------------------------------------------------------------------------------

// function printOdd(start, end){
//    let count = 0;
//    for(i=start;i<=end;i++){
//     if(i%2!=0){
//         console.log(i);
//         count ++ ;
//        if(count == 10){
//            break;
//        }
//     }
//    }
// }
// printOdd(1,30);