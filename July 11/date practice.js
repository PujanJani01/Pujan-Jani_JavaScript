// let current = new Date();
// console.log(current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate());
// console.log(current.getFullYear() + '/' + current.getMonth() + '/' + current.getDate());
// console.log(current.getDate() + '/' + current.getMonth() + '/' + current.getFullYear());
// console.log(current.getMonth() + '/' + current.getDate() + '/' + current.getFullYear());

//-----------------------------------------------------------------------------------------------------

// function is_date(input){
//     return Object.prototype.toString.call(input) === '[object Date]';
// };
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));

//-----------------------------------------------------------------------------------------------------

// function curday(separator){
//     let current = new Date();
//     return current.getMonth() + separator + current.getDate() + separator + current.getFullYear();
// }
// console.log(curday('/'));
// console.log(curday('-'));

//-----------------------------------------------------------------------------------------------------

// function getDaysInMonth(month,year){
//     let dt = new Date(year,month,0)
//     return dt.getDate();
// }   
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));

//-----------------------------------------------------------------------------------------------------

// function month_name(date){
//    const months = ['January','February','March','April','May','June','July','Augest',
//                         'September','October','November','December'];
//     return months[date.getMonth()];
// };
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));

// // function month_name(dt){
// //     var moment = require('moment');
// //     return moment(dt).format('MMMM');
// //  };
// //  console.log(month_name(new Date("10/11/2009")));
// //  console.log(month_name(new Date("11/13/2014")));

// //-----------------------------------------------------------------------------------------------------

// // function compare_dates(date1,date2){
// //     if(date1 > date2){
// //         return "Date1 > Date2";
// //      } 
// //      else if(date1 < date2){
// //         return "Date1 < Date2";
// //      }
// //      return 'Date1 = Date2';
// // };
// // console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// // console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// // console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

// //-----------------------------------------------------------------------------------------------------

// function addSubtractDate(count=0,type='date',operation='+'){
//     let now = new Date();
//     switch(operation){
//         case '+':
//             switch(type){
//                 case 'date':
//                     now.setDate(now.getDate() + count); break;
//                 case 'week':
//                     now.setDate(now.getDate() + count*7); break;
//                 case 'month':
//                     now.setMonth(now.getMonth() + count); break;
//                 case 'year':
//                     now.setFullYear(now.getFullYear() + count); break;
//             }
//             break;
//         case '-':
//             switch(type){
//                 case 'date':
//                     now.setDate(now.getDate() - count); break;
//                 case 'week':
//                     now.setDate(now.getDate() - count*7); break;
//                 case 'month':
//                     now.setMonth(now.getMonth() - count); break;
//                 case 'year':
//                     now.setFullYear(now.getFullYear() - count); break;
//             }
//             break;
//     }     
    
//     return now.toString();
// }
// console.log(addSubtractDate(25,'date','+'));
// console.log(addSubtractDate(5,'week','-'));
// console.log(addSubtractDate(5,'month'));
// console.log(addSubtractDate(5,'year','+'));
// console.log(addSubtractDate());
// console.log(addSubtractDate(5));

//-----------------------------------------------------------------------------------------------------

// function subtractDate(num=0){
//     let now = new Date();
//     now.setDate(now.getDate() - num);
//     return now.toString();
// }
// console.log(subtractDate());

//-----------------------------------------------------------------------------------------------------

// function fromNow(date){
//    let now = new Date();
//    let then = new Date(date)
//    if(now.getFullYear() > then.getFullYear()){
//     let diff = now.getFullYear() - then.getFullYear();
//     return diff + ' years ago'
//    }
//    else if(now.getFullYear() < then.getFullYear()){
//     let diff = then.getFullYear() - now.getFullYear();
//     return  'In ' + diff + ' years'
//    }
    
    
// }
// console.log(fromNow('30 January 1935'));
// console.log(fromNow('30 January 2055'));

//-----------------------------------------------------------------------------------------------------

// function add_minutes(date,min){
//     date.setMinutes(min);
//     return date.toString();
// }
// console.log(add_minutes(new Date(2014,10,2), 30));

//-----------------------------------------------------------------------------------------------------

// function date_diff_indays(date1,date2){
//     let dt1 = new Date(date1);
//     let dt2 = new Date(date2);
//      let diff = Math.floor((dt2.getTime() - dt1.getTime()) / (1000*3600*24));
//      return diff;
// }
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));

//-----------------------------------------------------------------------------------------------------

// function yesterday(date){
//     let dt = new Date(date);
//     dt.setDate(dt.getDate() - 1);
//     return dt.toString();
// }
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));

//-----------------------------------------------------------------------------------------------------

// function is_weekend(date){
//     let dt = new Date(date);
//     if(dt.getDay() == 0 || dt.getDay() == 6){
//         return 'Weekend';
//     }
// }
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));

//-----------------------------------------------------------------------------------------------------

// function days_of_year(year){
//    if(year%4 == 0){
//       return 366;
//    }
//     return 365;
// }
// console.log(days_of_year(2015));

//-----------------------------------------------------------------------------------------------------

// function days_passed(date){
//   let dt = new Date(date);
//   let start = new Date(dt.getFullYear(), 0 ,1);
//   return (dt.getTime() - start.getTime())/(1000*3600*24) + 1;
// }
//  console.log(days_passed(new Date(2015, 0, 15)));
//  console.log(days_passed(new Date(2015, 11, 14)));

//-----------------------------------------------------------------------------------------------------

// function calculate_age(date){
//     let birthday = new Date(date);
//     let now = new Date();
//     return now.getFullYear() - birthday.getFullYear();
// }
// console.log(calculate_age(new Date(1982, 11, 4)));
// console.log(calculate_age(new Date(1962, 1, 1)));

//-----------------------------------------------------------------------------------------------------

