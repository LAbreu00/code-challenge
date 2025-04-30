Given an array of integers numbers, construct a new array in the following manner:

The first element of the new array is the first element of numbers;
The second element of the new array is the last element of numbers;
The third element of the new array is the second element of numbers;
The fourth element of the new array is the second-to-last element of numbers;
... and so on, until the new array contains all elements of numbers.
Example

For numbers = [0, 4, 3, 2, 1], the output should be solution(numbers) = [0, 1, 4, 2, 3].
Explanation:
Following the rules above, we get the following sequence numbers[0], numbers[4], numbers[1], numbers[3], numbers[2], which results in [0, 1, 4, 2, 3].

For numbers = [-5, 4, 0, 3, 2, 2], the output should be solution(numbers) = [-5, 2, 4, 2, 0, 3].
Explanation:
Following the rules above, we get the following sequence numbers[0], numbers[5], numbers[1], numbers[4], numbers[2], numbers[3], which results in [-5, 2, 4, 2, 0, 3].
