You are given an array of numbers, with each being a 0 or 1. All 1s are arranged at the beginning of the array and 0s stand at the end.

A process is executed on this array until it halts. You are given a variable zerosToOne, which represents the number of 0s that can be deleted and exchanged for one 1.

Each second, one of the three events happen:

Option 1: If there are at least zerosToOne zeros, then the last zerosToOne zeros are removed and one 1 is added at the beginning of the array;
Option 2: If there is at least one 1, the last 1 changes to 0;
Option 3: If neither Option 1 nor Option 2 can be completed, then the process halts.
Follow the process and compute how many seconds will pass until the process halts. Refer to the examples below for better understanding.

Example

Example 1:

For numbers = [1, 1, 1, 0, 0, 0] and zerosToOne = 2, the output should be solution(numbers, zerosToOne) = 13.

Explanation

At the beginning, numbers = [1, 1, 1, 0, 0, 0].
After the 1st second, numbers = [1, 1, 1, 1, 0].
After the 2nd second, numbers = [1, 1, 1, 0, 0].
After the 3rd second, numbers = [1, 1, 1, 1].
After the 4th second, numbers = [1, 1, 1, 0].
After the 5th second, numbers = [1, 1, 0, 0].
After the 6th second, numbers = [1, 1, 1].
After the 7th second, numbers = [1, 1, 0].
After the 8th second, numbers = [1, 0, 0].
After the 9th second, numbers = [1, 1].
After the 10th second, numbers = [1, 0].
After the 11th second, numbers = [0, 0].
After the 12th second, numbers = [1].
After the 13th second, numbers = [0].
After 13 seconds, the process halts, hence the answer is 13.
Example 2:

For numbers = [1, 1] and zerosToOne = 2, the output should be solution(numbers, zerosToOne) = 4.

Explanation

At the beginning, numbers = [1, 1].
After the 1st second, numbers = [1, 0].
After the 2nd second, numbers = [0, 0].
After the 3rd second, numbers = [1].
After the 4th second, numbers = [0].
After 4 seconds, the process halts, hence the answer is 4.
Example 3:

For numbers = [0, 0, 0] and zerosToOne = 3, the output should be solution(numbers, zerosToOne) = 2.

Explanation

At the beginning, numbers = [0, 0, 0].
After the 1st second, numbers = [1].
After the 2nd second, numbers = [0].
After 2 seconds, the process halts, hence the answer is 2.
