/* let arr = [{a:10},{b:20},{c:30}];
arr = arr.map(value => {return {value} });
console.log(arr);
 */

//--------------------------------------------------------------------------------------------------

/* function squareOfEvenNumbers(array) {
    return array.filter(num => num % 2 == 0).map(el => el * el);
}

console.log(squareOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); */

//--------------------------------------------------------------------------------------------------

/* function dupicateElements(array) {
    return array.filter((el, index) => array.indexOf(el) !== index);
}   

console.log(dupicateElements([1, 2, 1, 4, 5, 2, 7, 9, 4]));
 */

//--------------------------------------------------------------------------------------------------

/* function isSubset(arr1,arr2){
   arr2.every(isInclude);
   function isInclude(element){
    arr1.includes(element);
   }
}
console.log(isSubset([1,2,3,4,5],[2,3,5])); */ 

//--------------------------------------------------------------------------------------------------

/* const array = [{},{},{},{}];
const array2 = array.map((value) => {value.fname = 'pujan'; return value;});
// const array2 = array.map((value) => value.fname = 'pujan');
console.log(array);
console.log(array2); */

//--------------------------------------------------------------------------------------------------

/* function isArrayContainNumber(input){
    let arr = input.map((value) => {
        if(typeof value === "number" && !isNaN(value)){
            return true;
          }
        // return false;
    })
    return arr.includes(true);
}
  
  console.log(isArrayContainNumber([1, 2, 3]));             
  console.log(isArrayContainNumber(["1", "a", "h"]));       
  console.log(isArrayContainNumber(["a", 3, "gh"]));        
  console.log(isArrayContainNumber(["a", '3df', "gh"])); */

//--------------------------------------------------------------------------------------------------

/* function isArrayContainNumber(input){
    let arr = input.map((value) =>typeof value === "number" && !isNaN(value))
    return arr.includes(true);
}
  
  console.log(isArrayContainNumber([1, 2, 3]));             
  console.log(isArrayContainNumber(["1", "a", "h"]));       
  console.log(isArrayContainNumber(["a", 3, "gh"]));        
  console.log(isArrayContainNumber(["a", '3df', "gh"]));    */

//--------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err)); */

//--------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/todos' , {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        "Content-type": "application/json"
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err)); */

//--------------------------------------------------------------------------------------------------

/* const arr = [1,2,3,4,5];
const arr2 = [...arr,6,7,8,9];
console.log(arr2); */

//--------------------------------------------------------------------------------------------------

/* const arr = [1,2,3,4,5];
const arr2 = [6,7,8,9];
const arr3 = [...arr,...arr2];
console.log(arr3); */

//--------------------------------------------------------------------------------------------------

/* const arr = [1,2,3,4,5];
const arr2 = [...arr];
console.log(arr2); */