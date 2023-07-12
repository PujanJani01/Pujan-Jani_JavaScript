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

// pending and doubt
function  english_ordinal_suffix(date){
    const months = ['January','February','March','April','May','June','July','Augest',
                            'September','October','November','December'];
    // date.setMonth(date.getMonth()-1);
   if(date.getDate() == 1 || date.getDate() == 21 || date.getDate() == 31 ){
       return date.getDate() +'st ' + months[date.getMonth()-1] + " " + date.getFullYear();
   }
   else if(date.getDate() == 2 || date.getDate() == 22){
       return date.getDate() +'nd ' + months[date.getMonth()-1] + " " + date.getFullYear();
   }  
   return date.getDate() +'th ' + months[date.getMonth()-1] + " " + date.getFullYear();


}
console.log(english_ordinal_suffix(new Date(2015,10,1)));
console.log(english_ordinal_suffix(new Date(2005,1,30)));


