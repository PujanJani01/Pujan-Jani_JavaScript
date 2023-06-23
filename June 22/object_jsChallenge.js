// function myFunction(obj) {
//     return obj.country
//   }

//   console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
//   console.log(myFunction({ country: 'Sweden', continent: 'Europe' }));

//---------------------------------------------------------------------------------------------------------

// function myFunction(obj){
//      return obj['prop-2'];
// }
// console.log(myFunction({  one: 1,  'prop-2': 2}));
// console.log(myFunction({  'prop-2': 'two',  prop: 'test'}));

//---------------------------------------------------------------------------------------------------------

// function myFunction(obj, key){
//     return  obj[key];
// }

// console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));
// console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
// );

//---------------------------------------------------------------------------------------------------------

// function
// myFunction
// (
// a, b
// )
// {

// return b in a;
// }

// console.log(myFunction({a:1,b:2,c:3},'b'));
// console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
// console.log(myFunction({x:'a',y:'b',z:undefined},'z'));

//---------------------------------------------------------------------------------------------------------

// Doubt
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

// function
// myFunction
// (
// a, b
// )
// {

// return 
// }

// console.log(myFunction({a:1,b:2,c:3},'b'));

// console.log(myFunction({x:'a',y:null,z:'c'},'y'));

// myFunction({x:'a',b:'b',z:undefined},'z')

//---------------------------------------------------------------------------------------------------------

// function myFunction(a){
//   return {'key':a};
// }

// myFunction('a');

//---------------------------------------------------------------------------------------------------------

// function myFunction(a, b){
//     return { [a] : b};
// }
// myFunction('a','b')

//---------------------------------------------------------------------------------------------------------

// Doubt
// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

// function
// myFunction
// (
// a, b
// )
// {

// return a[b];
// }

// myFunction(['a','b','c'],[1,2,3]);
// myFunction(['w','x','y','z'],[10,9,5,2])
// myFunction([1,'b'],['a',2])


//---------------------------------------------------------------------------------------------------------


// function
// myFunction
// (
// a
// )
// {

// return Object.keys(a);
// }

// myFunction({a:1,b:2,c:3})
// myFunction({j:9,i:2,x:3,z:4})
// myFunction({w:15,x:22,y:13})

//---------------------------------------------------------------------------------------------------------

// Doubt
// Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

// function
// myFunction
// (
// obj
// )
// {

// return obj[b];
// }

// myFunction({a:1})
// myFunction({a:{b:{c:3}}})
// myFunction({b:{a:1}})
// myFunction({a:{b:2}})

//---------------------------------------------------------------------------------------------------------

// doubt 
// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

// function
// myFunction
// (
// obj
// )
// {
// const {b, ...rest} =obj;
// return rest;
// }

// myFunction({ a: 1, b: 7, c: 3 })
// myFunction({ b: 0, a: 7, d: 8 })
// myFunction({ e: 6, f: 4, b: 5, a: 3 })

//---------------------------------------------------------------------------------------------------------

// Doubt
// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

// function
// myFunction
// (
// x, y
// )
// {

// return Object.assign(x,y);
// }

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })

//---------------------------------------------------------------------------------------------------------

// function
// myFunction
// (
// a, b
// )
// {

// return b*Object.values(a);
// }

// myFunction({a:1,b:2,c:3},3)
// myFunction({j:9,i:2,x:3,z:4},10)
// myFunction({w:15,x:22,y:13},6)