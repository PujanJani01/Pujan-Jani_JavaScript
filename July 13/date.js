// function strToDate(datestr){
//     let dt = new Date(datestr)
//     return dt.toString();
//  }
//  console.log(strToDate("2005/1/30"));      // valid
//  console.log(strToDate("2005/30/1"));      // invalid
//  console.log(strToDate("30/1/2005"));      // invalid
//  console.log(strToDate("1/30/2005"));      // valid

//  console.log(strToDate("2005-1-30"));      // valid
//  console.log(strToDate("2005-30-1"));      // invalid
//  console.log(strToDate("30-1-2005"));      // invalid
//  console.log(strToDate("1-30-2005"));      // valid

//  console.log(strToDate("30 Jan 2005"));    // valid
//  console.log(strToDate("Jan 30 2005"));    // valid
//  console.log(strToDate("2005 30 Jan"));    // valid
//  console.log(strToDate("2005 Jan 30"));    // valid

//-----------------------------------------------------------------------------------------------------------------------------------

// let dt = new Date("2005/30/1");
// // console.log(dt.toJSON());                 // null
// // console.log(dt.toISOString());            // RangeError: Invalid time value
// // console.log(dt.toUTCString());            // Invalid Date
// // console.log(dt.toString());               // Invalid Date
// // console.log(dt.toLocaleString());         // Invalid Date
// // console.log(dt.toLocaleDateString());     // Invalid Date
// // console.log(dt.toLocaleTimeString());     // Invalid Date

//-----------------------------------------------------------------------------------------------------------------------------------

// function transform(format){
//     let now = new Date();
//     const formates = {
//         YYYY : now.getFullYear(),
//         MM : now.getMonth(),
//         DD : now.getDate()
//     }
//     let a = format.replace('YYYY',formates['YYYY']);
//     let b = a.replace('MM',formates['MM']);
//     let c = b.replace('DD',formates['DD']);
//     return c;
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

// function transform(format){
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth();
//     let date = now.getDate();
//     let a = format.toUpperCase().replace('YYYY',year);
//     let b = a.replace('MM',month);
//     let c = b.replace('DD',date);
//     return c;
// }
// console.log(transform("YYYY-MM-DD"));
// console.log(transform("YYYY-DD-MM"));
// console.log(transform("DD-MM-YYYY"));
// console.log(transform("MM-DD-YYYY"));
// console.log(transform("YYYY/MM/DD"));
// console.log(transform("YYYY/DD/MM"));
// console.log(transform("DD/MM/YYYY"));
// console.log(transform("MM/DD/YYYY"));
// console.log(transform("mm/dd/yyyy"));
// console.log(transform("MM/DD/YY"));