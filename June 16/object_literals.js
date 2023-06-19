// let fname = 'pujan';

// var obj = {
//     // fname : fname
//     fname    // Shortcut - after ES6
// }
// console.log(obj.fname);
// // console.log(obj[fname]);


// let n = 'name';
// var obj = {
//     [n] : 'pujan jani',
//     age : 18
// }
// console.log(obj);
// console.log(obj.name);


// let n = 'name';
// var obj = {
//     ['full' + n] : 'pujan jani',
//     age : 18
// }
// console.log(obj);
// console.log(obj.fullname);

// function returns value as a object
// var fname = 'pujan';
// var lname = 'jani';
// function fullname(fname, lname){
//     return {fname, lname};
// }
// console.log(fullname(fname,lname));

// var fname = 'pujan';
// var lname = 'jani';
// var age = 18;
// function fullname(fname, lname ,age){
//     let fullname = fname + ' ' + lname;
//     return {fullname};
// }
// // console.log(fullname(fname, lname));

// let f = fullname(fname, lname, age);
// console.log(f.fullname);
// console.log(f.fname);  // can't be accessed
// console.log(f.age);