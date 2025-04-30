/*
## PEDAC
**Problem**
input: integer between 1 - 2500, array of integers 
output: string corisponding to the final integer
What is the task? How would you rephrase the problem in your own words? 
- add all the values in an array to the starting integer, whatever the output integer, corrispond it to a given string

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: example of an input
output: what would the output be for this input?

**Data Structure/Data Type**
What data structures will we use to solve this problem?
Are there any data types you will use? Any data type conversion? 
 
**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 
- create final value equal to the initial
- loop through the changes array, adding the values to the initial, keeping the number between 1 and 2500
- if statement evaluates what string corrisponds to the final

*/

/* first attempt
const solution = (initial, changes) => {
    let final = initial;
    
    for (let i = 0; i < changes.length; i += 1) {
        final += changes[i]
    }
    
    if (final < 1000) {
        return 'beginner';
    } else if (final < 1500) {
        return 'intermediate';
    } else if (final < 2000) {
        return 'advanced';
    } else {
        return 'pro'
    }
}
*/

const solution = (initial, changes) => {
  const final = changes.reduce((total, current) => total + current, initial);

  if (final < 1000) {
    return "beginner";
  } else if (final < 1500) {
    return "intermediate";
  } else if (final < 2000) {
    return "advanced";
  } else {
    return "pro";
  }
};
