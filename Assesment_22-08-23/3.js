function mul(a){
  return function mul(b){
     return function mul(c){
        return a*b*c;
     }
  }
}
console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));