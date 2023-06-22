// function avg(a,b,c,d,e){
//    result = sum(a,b,c,d,e)/arguments.length;
//    return result;
// }
// function sum(a,b,c,d,e){
//     ans = a+b+c+d+e;
//     return ans;
// }
// console.log(avg(1,2,3,4,5));


function avg(){
   result = sum()/arguments.length;
   return result;
}
function sum(a,b,c,d,e){
    ans = a+b+c+d+e;
    return ans;
}
console.log(avg(sum(1,2,3,4,5)));

