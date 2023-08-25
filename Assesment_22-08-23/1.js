function maxNum(arr,n){
    let res = arr.sort((a,b) => a-b);
    return res.at(-n);
}
console.log(maxNum([2,85,21,20,5],2));
