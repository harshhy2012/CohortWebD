// function isAnagram(str1, str2) {
//   if (str1.length != str2.length)
//   return false;
// let count = new Array(256).fill(0);
// // console.log(count);
// for (i = 0; i < str1.length; i++) {
//   count[str1[i].charCodeAt(0)]++;
//   count[str2[i].charCodeAt(0)]--;
// }
// console.log(count);
// for (let num of count) {
//   if (num !== 0) {
//     return false;
//   }
// }
// return true;
//   }

// if(isAnagram('hello', 'world')){
//     console.log('ANAGRAM');
// } else{
//     console.log('NOT ANAGRAM')
// }

function isPalindrome(str) {
  if(str.length === 0) return true;
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  str = str.toLowerCase();
  let n = str.length;
  for(let i =0;i<n/2;i++){
    if(str[i]!==str[n-i-1]){
      return false;
    }
  }
  return true;
}

'Eva, can I see bees in a cave?'
if(isPalindrome('Able, was I ere I saw Elba!')){
  console.log('PALINDROME')
} else{
  console.log('NOT PALINDROME');
}