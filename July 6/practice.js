// let greet = 'hello world';
// let reversed = greet.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// console.log(reversed);

// let greet = 'hello world';
// let reversed = greet.split(' ');
// console.log(reversed);

// let arr = ["JS","CSS","HTML"];
// let str = arr.reduce((a,c) => a.concat('","'+c));
// console.log('"'+str+'"');

// let arr = ["JS","CSS","HTML"];
// let str = arr.join('","');
// console.log('"'+str+'"');

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.find(e => e.id === "JS").label
// }
// console.log(d);  // ERROR for .label

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.findIndex(e => e.id === "JS").label
// }
// console.log(d);   // {name: "JS", label: undefined}

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.map(e => e.id === "JS").label
// }
// console.log(d);   // {name: "JS", label: undefined}

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.filter(e => e.id === "JS").label
// }
// console.log(d);   // {name: "JS", label: undefined}

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.forEach(e => e.id === "JS").label
// }
// console.log(d);   // ERROR for .label

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.every(e => e.id === "JS").label
// }
// console.log(d);   // {name: "JS", label: undefined}

// let arr = ["JS","CSS","HTML"];
// const d ={
//      name: 'JS',
//      label: arr.some(e => e.id === "JS").label
// }
// console.log(d); // {name: "JS", label: undefined}


// function factorial(num){
//     let a = [];
//     for(let i=1;i<=num;i++){
//          a.push(i);
//     }
//     let b = a.reduce((a,c) => a*c);
//     return b;
// }
// console.log(factorial(5));


// function abc(arr,sum){
   
// }
// console.log(abc([1,2,3,4,5],7));


// let arr = [1,2,3,4,5];
// let arr2 = arr.every(value =>{ console.log(value); return value = 2;});
// console.log(arr2);
// let arr3 = arr.every(value =>{ console.log(value); return value < 4;});
// console.log(arr3);

// let arr = [1,2,3,4,5];
// let arr2 = arr.some(value =>{ console.log(value); return value = 2;});
// console.log(arr2);
// let arr3 = arr.some(value =>{ console.log(value); return value > 3;});
// console.log(arr3);


// console.log("pujan".at(10)); // undefined
// console.log("pujan".at());   // p
 
// console.log("pujan".charAt());  // p
// console.log("pujan".charAt(10));  // empty string
// console.log("pujan".charAt(undefined));  // p


// console.log(''.concat({}));  // [object Object]
// console.log('hello'.concat({}));  // hello[object Object]
// console.log('hello'.concat({a:10}));  // hello[object Object]


// let str = 'hello world';
// console.log(str.match(/[a-l]/g));

// let str = 'hello world';
// console.log(...str.matchAll(/[a-l]/g));

// let str = "pujan jani";
// console.log(str.slice(0,-2));
// console.log(str.slice(-1));
// console.log(str.slice(-1, -2));
// console.log(str.slice(-4, -2));

// let str = "pujan jani";
// console.log(str.substring(0,-2));
// console.log(str.substring(-1))
// console.log(str.substring(-1, -2));
// console.log(str.substring(-4, -2));


// console.log('hello'.concat(' world'));
// console.log('hello'.concat());
// console.log('hello'.concat(undefined));


// let obj = () => {a:8};
// console.log(obj());  // undefined

// let obj = () =>{return {a:8}};
// console.log(obj());   // {a:8}


// console.log('hello'.padEnd(10,'.'));
// console.log('hello'.padEnd(10));
// console.log('hello'.padEnd(10, ''));
// console.log('hello'.padEnd());


// console.log('mine'.repeat());  
// console.log('mine'.repeat(4));


// let str = "javascript is amazing script";
// console.log(str.replace()); 
// console.log(str.replace('script'));          // javaundefined
// console.log(str.replace('script', 'language'));   // javalanguage


// let str = "javascript is amazing script";
// console.log(str.replaceAll()); 
// console.log(str.replaceAll('script')); 
// console.log(str.replaceAll('script', 'language'));   


// console.log(['sdf'].h);
// console.log([].hello);
// let a;
// console.log(a);

// let arr = [1,2,3].map(value => value.id).label;
// console.log(arr);