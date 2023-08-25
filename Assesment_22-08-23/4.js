function filterDuplicateNum(arr){
  let res = arr.filter((value,i,arr) => arr.indexOf(value) != i)
  return res.filter((value,i,arr) => arr.indexOf(value) == i);
}
console.log(filterDuplicateNum([1,1,2,3,4,2,5,6,7,4]));