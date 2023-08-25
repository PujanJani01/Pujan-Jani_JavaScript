function isPalindrome(str){
  let strReverse = str.split('').reverse().join('');
  return str == strReverse;
}

console.log(isPalindrome('level'));