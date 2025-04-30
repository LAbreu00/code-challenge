/*
PEDAC
P:
input = string of lowercase letters
output = first none repeating letter/ '_' if there arent any
E:
input = "abcdabcdabcd"
output = "_"
D:
string to array to single character
A:
- turn string to array
- use method to find unique element
- return element or _ if it doesnt exsist

-read string from left to right
-keep the characters that apeared more then once
*/
//C:
const solution = (s) => {
  // let obj = {}
  // const sArray = s.split("")

  // sArray.forEach((char) => {
  //     if (obj[char]) {
  //         obj[char] += 1
  //     } else {
  //         obj[char] = 1
  //     }
  // })

  // for (let i = 0; i < sArray.length; i += 1) {
  //     if (obj[sArray[i]] === 1) {
  //         return char
  //     } else {
  //         return '_'
  //     }
  // }

  let freq = {};

  for (const char of s) {
    freq[char] ? (freq[char] += 1) : (freq[char] = 1);
  }

  for (const char of s) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return "_";
};
