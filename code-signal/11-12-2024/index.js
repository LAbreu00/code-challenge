/*
## PEDAC
**Problem**
input: string (lowercase letters)
output: an integer (sum of all converted string values)
What is the task? How would you rephrase the problem in your own words? 
-find the sum of the string when all the vowels equal 1 and all other letters equal 2

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: "abcde"
output: 8

input: ""
output: 0

**Data Structure/Data Type**
What data structures will we use to solve this problem?
Are there any data types you will use? Any data type conversion? 
 
**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 
*/

const solution = (s) => {
  if (s === "") {
    return 0;
  }
  let arr = [];
  for (let i = 0; i < s.length; i += 1) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      arr.push(1);
    } else {
      arr.push(2);
    }
  }
  return arr.reduce((total, current) => total + current, 0);
};

/* Alternative solutions:
simple solution:
const altSolution = (s) => {
  sum = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      sum += 1;
    } else {
      sum += 2;
    }
  }
  return sum;
};

Ana solution:
const altSolution = (s) => {
  let sum = 0;
  const vowels = "aeiou"

  for (let char of s) {
    if(vowels.includes(char)) {
      sum += 1;
    } else {
      sum += 2;
    }
  }
  return sum;
};
*/
