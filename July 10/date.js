// console.log(new Date());
// console.log(new Date);
// console.log(Date());

//---------------------------------------------------------------------------------------------------

// let birthday = new  Date('January 30, 2005 11:05:00');
// console.log(birthday);
// console.log(birthday.getTime());  // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
// console.log(birthday.getHours());
// console.log(birthday.getMinutes());
// console.log(birthday.getMilliseconds());
// console.log(birthday.getDate());
// console.log(birthday.getFullYear());
// console.log(birthday.getDay());     // 0 for sunday
// console.log(birthday.getMonth());   // 0 for january


// let birthday2 = new  Date('apr 30, 05 11:05:00');
// console.log(birthday2.getFullYear());
// console.log(birthday2.getMonth());

//-------------------------------------------------------------------------------------------------

// console.log(Date.now());   // milliseconds till now

// let birthday = new  Date('January 30, 2005 11:05:00');
// console.log(birthday.toDateString());
// console.log(birthday.toISOString());

//-------------------------------------------------------------------------------------------------

// let birthday = new  Date('January 30, 2005 11:05:00');

// birthday.setDate(31);
// console.log(birthday.getDate()); // 31

// birthday.setDate(32);
// console.log(birthday.getDate());  // 1

// birthday.setDay(2); // setDay() is not a function
// console.log(birthday.getDay());  

// birthday.setFullYear(2000); 
// console.log(birthday.getFullYear());   // 2000

// birthday.setMonth(2); 
// console.log(birthday.getMonth());  // 2

// birthday.setMonth(11); 
// console.log(birthday.getMonth());  // 11

// birthday.setMonth(12); 
// console.log(birthday.getMonth());  // 0

// birthday.setHours(20); 
// console.log(birthday.getHours());   // 20

// birthday.setHours(200); 
// console.log(birthday.getHours()); // 8

// birthday.setHours(200000); 
// console.log(birthday.getHours()); // 8

// birthday.setHours(24); 
// console.log(birthday.getHours());  // 0

//-------------------------------------------------------------------------------------------

// var moment = require('moment'); // require

// console.log(moment().format('d'));    // 1
// console.log(moment().format('dd'));   // M
// console.log(moment().format('ddd'));  // Mon
// console.log(moment().format('dddd')); // Monday

// console.log(moment().format('MMMM Do YYYY'));   // July 10th 2023
// console.log(moment().format('MMMM Do YYYY h:mm:ss a'));   // July 10th 2023

// console.log(moment().format('h'));   // current hour
// console.log(moment().format('hh'));   // current hour
// console.log(moment().format('m'));   // current minute
// console.log(moment().format('mm'));   // current minute
// console.log(moment().format('s'));   // current second
// console.log(moment().format('ss'));   // current second
// console.log(moment().format('a'));   // pm or am according to current time

// console.log(moment().format('M'));      // 7
// console.log(moment().format('MM'));     // 07
// console.log(moment().format('MMM'));    // Jul
// console.log(moment().format('MMMm'));   // July

// console.log(moment().format('Do'));  // 10th
// console.log(moment().format('D'));   // 10

// console.log(moment().format('Y'));  // 2023
// console.log(moment().format('YY'));  // 23
// console.log(moment().format('YYY'));  // 232023
// console.log(moment().format('YYYY')); // 2023

// console.log(moment().format());  // 2023-07-10T11:44:25+05:30

// console.log(moment().format('YYYY [escaped] YYYY'));  // 2023 escaped 2023

// console.log(moment('2005', 'YYYY').fromNow());  // 19 years ago
// console.log(moment(2005, 'YYYY').fromNow());  // 19 years ago
// console.log(moment('30012005', 'DMMYYYY').fromNow());  // 18 years ago
// console.log(moment(30012005, 'DMMYYYY').fromNow());  // 18 years ago
// console.log(moment('30', 'D').fromNow());  // in 20 days
// console.log(moment('30', 'MM').fromNow());  // Invalid date

// console.log(moment().startOf('day').fromNow());  // 12 hours ago
// console.log(moment().startOf('days').fromNow());  //  12 hours ago
// console.log(moment().startOf('D').fromNow());  // 12 hours ago
// console.log(moment().startOf('Y').fromNow());  // 6 months ago
// console.log(moment().startOf('M').fromNow());  // 9 days ago
// console.log(moment().startOf('Q').fromNow());  // 9 days ago
// console.log(moment().startOf('W').fromNow());  // 12 hours ago
// console.log(moment().startOf('date').fromNow());  // 12 hours ago
// console.log(moment().startOf('hour').fromNow());  // an hour ago

// console.log(moment().endOf('day').fromNow());  //  in 12 hours
// console.log(moment().endOf('days').fromNow());  //  in 12 hours
// console.log(moment().endOf('D').fromNow());  // in 12 hours
// console.log(moment().endOf('Y').fromNow());  // on 6 months
// console.log(moment().endOf('M').fromNow());  // in 22 days
// console.log(moment().endOf('Q').fromNow());  // in 3 months
// console.log(moment().endOf('W').fromNow());  // in 7 days
// console.log(moment().endOf('date').fromNow());  // in 12 hours
// console.log(moment().endOf('hour').fromNow());  // in 9 minutes

// console.log(moment().calendar());  // Today at 11:58 AM

// console.log(moment().add(1,'days').calendar());  // Tomorrow at 11:52 AM
// console.log(moment().add(2,'days').calendar());  // Wednesday at 11:52 AM
// console.log(moment().add(6,'days').calendar());  // Sunday at 11:53 AM
// console.log(moment().add(7,'days').calendar());  // 7/17/2023
// console.log(moment().add(1,'months').calendar());  // 8/10/2023
// console.log(moment().add(12,'months').calendar());  // 7/10/2024
// console.log(moment().add(1,'years').calendar());  // 7/10/2024
// console.log(moment().add(10,'years').calendar());  // 7/10/2033
// console.log(moment().add(1,'hours').calendar());  
// console.log(moment().add(1,'minutes').calendar());
// console.log(moment().add(1).calendar());  // current
// console.log(moment().add().calendar());   // current

// console.log(moment().subtract(1,'days').calendar());  // Yesterday at 12:00 PM
// console.log(moment().subtract(2,'days').calendar());  // Last Saturday at 12:00 PM
// console.log(moment().subtract(6,'days').calendar());  // Last Tuesday at 12:00 PM
// console.log(moment().subtract(7,'days').calendar());  // 07/03/2023
// console.log(moment().subtract(1,'months').calendar());  // 06/10/2023
// console.log(moment().subtract(12,'months').calendar());  // 07/10/2022
// console.log(moment().subtract(1,'years').calendar());  // 07/10/2022
// console.log(moment().subtract(10,'years').calendar());  // 07/10/2013
// console.log(moment().subtract(1,'hours').calendar());  
// console.log(moment().subtract(1,'minutes').calendar());
// console.log(moment().subtract(1).calendar());    // current
// console.log(moment().subtract().calendar());      // current

// console.log(moment().locale());  // en
// console.log(moment().format('L'));  // 07/10/2023
// console.log(moment().format('LT'));  // current - 12:04 PM
// console.log(moment().format('LTS'));  // current - 12:05:24 PM
// console.log(moment().format('LL'));  // July 10, 2023
// console.log(moment().format('LLL'));  // July 10, 2023 12:06 PM
// console.log(moment().format('LLLL'));  // Monday, July 10, 2023 12:06 PM
// console.log(moment().format('l'));  // 7/10/2023
// console.log(moment().format('ll'));  // Jul 10, 2023
// console.log(moment().format('lll'));  // Jul 10, 2023 12:08 PM
// console.log(moment().format('llll'));  // Mon, Jul 10, 2023 12:08 PM


// console.log(moment().toString());  // Mon Jul 10 2023 12:28:17 GMT+0530
// console.log(moment().toDate());  // 2023-07-10T06:58:37.516Z

// let a = moment().date();
// console.log(a.toString());  // 10

// let a = moment().date(30);
// console.log(a.toString());  // Sun Jul 30 2023 12:30:53 GMT+0530

// let a = moment().day();
// console.log(a.toString());  // 1

// let a = moment().day(5);
// console.log(a.toString()); // Fri Jul 14 2023 12:32:17 GMT+0530


// let a = moment().day(10);
// console.log(a.toString()); // Wed Jul 19 2023 12:32:46 GMT+0530

// console.log(moment().dayOfYear().toString()); // 191
// console.log(moment().dayOfYear(1).toString()); // Sun Jan 01 2023 12:40:33 GMT+0530
// console.log(moment().dayOfYear(90).toString()); // Fri Mar 31 2023 12:41:09 GMT+0530
// console.log(moment().dayOfYear(365).toString()); // Sun Dec 31 2023 12:41:26 GMT+0530
// console.log(moment().dayOfYear(366).toString()); // Mon Jan 01 2024 12:41:40 GMT+0530

// setTimeout(() =>{
//     console.log(Date());
// },'1000');


// console.log(Date().length);

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

// function month_name(dt){
//     var moment = require('moment');
//     return moment(dt).format('MMMM');
//  };
//  console.log(month_name(new Date("10/11/2009")));
//  console.log(month_name(new Date("11/13/2014")));

//-----------------------------------------------------------------------------------------------------

// function compare_dates(date1,date2){
//     if(date1 > date2){
//         return "Date1 > Date2";
//      } 
//      else if(date1 < date2){
//         return "Date1 < Date2";
//      }
//      return 'Date1 = Date2';
// };
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

//-----------------------------------------------------------------------------------------------------

