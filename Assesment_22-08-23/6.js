function isAnagrams(str1,str2){
   let strArr1 = str1.split('');
   return strArr1.every(el => str2.includes(el));
}

console.log(isAnagrams('mary','army'));