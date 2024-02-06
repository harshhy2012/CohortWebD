/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();
  if(newStr1.length != newStr2.length)
    return false;

  var counter = {}
  for(let i=0;i<newStr1.length;i++)
    mapIt[newStr1[i]] = (counter[newStr1[i]] || 0) + 1;
  
  for(let i=0;i<newStr2.length;i++)
   if(!mapIt[newStr2[i]])
    return false;
}

module.exports = isAnagram;
