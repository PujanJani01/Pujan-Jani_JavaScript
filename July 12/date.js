// function transform(format){
//     let now = new Date();
//     const formats = {
//         "YYYY-MM-DD" : now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
//         "YYYY-DD-MM" : now.getFullYear() + '-' + now.getDate() + '-' + now.getMonth(),
//         "DD-MM-YYYY" : now.getDate() + '-' + now.getMonth() + '-' + now.getFullYear(),
//         "MM-DD-YYYY" : now.getMonth() + '-' + now.getDate() + '-' + now.getFullYear(),
//         "YYYY/MM/DD" : now.getFullYear() + '/' + now.getMonth() + '/' + now.getDate(),
//         "YYYY/DD/MM" : now.getFullYear() + '/' + now.getDate() + '/' + now.getMonth(),
//         "DD/MM/YYYY" : now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear(),
//         "MM/DD/YYYY" : now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear(),
//     }
//     return formats[format];
// }
// console.log(transform("YYYY-MM-DD"));
// console.log(transform("YYYY-DD-MM"));
// console.log(transform("DD-MM-YYYY"));
// console.log(transform("MM-DD-YYYY"));
// console.log(transform("YYYY/MM/DD"));
// console.log(transform("YYYY/DD/MM"));
// console.log(transform("DD/MM/YYYY"));
// console.log(transform("MM/DD/YYYY"));

//-----------------------------------------------------------------------------------------------------------------------------------

// pending 
// function  english_ordinal_suffix(date){
//     const months = ['January','February','March','April','May','June','July','Augest',
//                             'September','October','November','December'];
//    if(date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31 ){
//        return date.getDate() +'st ' + months[date.getMonth()] + " " + date.getFullYear();
//    }
//    else if(date.getDate() == 2 || date.getDate() == 22){
//        return date.getDate() +'nd ' + months[date.getMonth()] + " " + date.getFullYear();
//    }  
//    return date.getDate() +'th ' + months[date.getMonth()] + " " + date.getFullYear();


// }
// console.log(english_ordinal_suffix(new Date(2015,10,1)));
// console.log(english_ordinal_suffix(new Date(2005,0,30)));

//-----------------------------------------------------------------------------------------------------------------------------------

// function full_month(date){
//     const months = ['January','February','March','April','May','June','July','Augest',
//                             'September','October','November','December'];
//     return months[date.getMonth()-1];
// }
// console.log(full_month(new Date(2015, 10, 1)));

//-----------------------------------------------------------------------------------------------------------------------------------

// function sort_year(date){
//   return date.getFullYear().toString().slice(2);
// }
// console.log(sort_year(new Date(1989,10,1)));

//-----------------------------------------------------------------------------------------------------------------------------------

// function hours_with_zeroes(date){
//     return ((date.getHours()%12 || 12) <10 ? '0' : '') + (date.getHours()%12 || 12);
// }   
// console.log(hours_with_zeroes(new Date(1989,10,1)));
// console.log(hours_with_zeroes(new Date(1989,10,1,16)));

//-----------------------------------------------------------------------------------------------------------------------------------

// function hours_with_zeroes(date){
//     return date.toLocaleTimeString('en-US', {hour:'2-digit' });  
// }   
// console.log(hours_with_zeroes(new Date(1989,10,1)));
// console.log(hours_with_zeroes(new Date(1989,10,1,16)));

//-----------------------------------------------------------------------------------------------------------------------------------

// let now = new Date();

// // in 12 hour format
// console.log(now.toLocaleTimeString('en-US'));   
// // UTC in 12 hour format
// console.log(now.toLocaleTimeString('en-US',{timeZone: 'UTC'}));    
// // IST in 12 hour format
// console.log(now.toLocaleTimeString('en-US',{timeZone: 'IST'}));    
// // only hour with leading zero in 12 hour format
// console.log(now.toLocaleTimeString('en-US',{hour:'2-digit'}));    
// // only minute without leading zero
// console.log(now.toLocaleTimeString('en-US',{minute:'2-digit'}));    
// // only seconds without leading zero
// console.log(now.toLocaleTimeString('en-US',{second:'2-digit'}));    
// // hour and minute with leading zero
// console.log(now.toLocaleTimeString('en-US',{hour:'2-digit', minute:'2-digit'}));    
// // hour, minute and second with leading zero
// console.log(now.toLocaleTimeString('en-US',{hour:'2-digit', minute:'2-digit', second:'2-digit'}));    
// // minute and second with leading zero
// console.log(now.toLocaleTimeString('en-US',{minute:'2-digit', second:'2-digit'}));    
// // hour with leading zero and second in bracket without leading zero
// console.log(now.toLocaleTimeString('en-US',{hour:'2-digit', second:'2-digit'})); 
// // time in 12 hour fromat   
// console.log(now.toLocaleTimeString('en-US',{hour12:'true'}));  

//-----------------------------------------------------------------------------------------------------------------------------------

// let now = new Date().toString();                     // current date and time
// let now = new Date(2005,0,30,11,5).toString();       // Sun Jan 30 2005 11:05:00 GMT+0530 (India Standard Time)
// let now = new Date("30 January 2005").toString();    // Sun Jan 30 2005 00:00:00 GMT+0530 (India Standard Time)
// let now = new Date("30 Jan 2005").toString();        // Sun Jan 30 2005 00:00:00 GMT+0530 (India Standard Time)
// let now = new Date(1517356800000).toString();        // Wed Jan 31 2018 05:30:00 GMT+0530 (India Standard Time)
// console.log(now);   

//-----------------------------------------------------------------------------------------------------------------------------------

// let now = new Date(); 

// // Wed Jul 12 2023 15:59:39 GMT+0530 (India Standard Time)
// console.log(now.toString());                   
// // 12/7/2023, 3:59:39 pm
// console.log(now.toLocaleString());
// // Wed Jul 12 2023
// console.log(now.toDateString());                
// // 16:00:17 GMT+0530 (India Standard Time)
// console.log(now.toTimeString());                
// // Wed, 12 Jul 2023 10:30:41 GMT
// console.log(now.toUTCString());                 
// // 2023-07-12T10:30:58.114Z
// console.log(now.toISOString());                 
// // 12/7/2023
// console.log(now.toLocaleDateString());          
// // 3:59:39 pm
// console.log(now.toLocaleTimeString());          
// // 2023-07-12T10:30:58.114Z
// console.log(now.toJSON());                      
// // milliseconds for this date since midnight at the beginning of January 1, 1970, UTC
// console.log(now.valueOf());                     

//-----------------------------------------------------------------------------------------------------------------------------------

// function ageCalculator(date){
//    let now = new Date();
//    let dob = new Date(date);
//    let age = Math.floor((now.getTime() - dob.getTime())/31556952000);

//    return 'You are ' + age + ' years old.'
// }
// console.log(ageCalculator('30 Jan 2005'));
// console.log(ageCalculator('25 Oct 2005'));

//-----------------------------------------------------------------------------------------------------------------------------------

