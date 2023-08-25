function creatBase(num){
    return function func(num2){
        return num + num2;
    }
}
var addSix = creatBase(6);
console.log(addSix(10));
console.log(addSix(21));