/* let arr = [1,3,6,8,2];
const arr2 = [
    {id:1, fname:'Anil'},
    {id:3, fname:'Ramesh'},
    {id:5, fname:'Sujal'},
    {id:8, fname:'Kunal'},
]

function notContainsId(arr1,arr2){
    return arr2.filter(el => !arr1.includes(el.id));
}
console.log(notContainsId(arr,arr2)); */

//--------------------------------------------------------------------------------------------

/* let arr = [1,3,6,8,2];
const arr2 = [
    {id:1, fname:'Anil'},
    {id:3, fname:'Ramesh'},
    {id:5, fname:'Sujal'},
    {id:8, fname:'Kunal'},
]

function notContainsId(arr1,arr2){
    return arr2.filter(el => arr1.includes(el.id));
}
console.log(notContainsId(arr,arr2)); */

//--------------------------------------------------------------------------------------------

/* var x=1;
function fun(){
    var x =10;
    console.log(x);   // 10
    function fun1(){
        console.log(x);  // 10
    }
    fun1()
}
fun();
function fun2(){
    console.log(x);  // 1
}
fun2(); */

//--------------------------------------------------------------------------------------------

/* function sum(a,b,...rest){
    let sum=0;
    for(let i=0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
}
console.log(sum(10,20,30,40,50)); */


/* function sum(a,b,...rest){
    let sum=0;
    let arr = [a,b,...rest]
    for(let i=0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
}
console.log(sum(10,20,30,40,50)); */

//--------------------------------------------------------------------------------------------


/* function a() {
    var x = "ascdd"
    function b() {
        console.log(x); // "ascdd"
        function c() {
            console.log(x);   // "ascdd"
            var y = "odjgif"; 
        }
        console.log(y); // ReferenceError: y is not defined
        c();
    }
    b();
}
a(); */

//--------------------------------------------------------------------------------------------

