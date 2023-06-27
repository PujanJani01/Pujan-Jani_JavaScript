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

// let string = ''
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string);

//----------------------------------------------------------------------------------------------------------

// let string = ''
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string);

//----------------------------------------------------------------------------------------------------------

// let string = ''
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

