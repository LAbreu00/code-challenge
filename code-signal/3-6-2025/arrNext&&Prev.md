Q1

Given an array of integers numbers, your task is to change every element numbers[i] to the lowest value among numbers[i] and its next two neighboring elements numbers[i + 1] and numbers[i + 2]. Ignore neighbors that don't exist.

Return an array of the same length, where the ith element is the result of the operation described above.

Example

For numbers = [0, 4, 3, 1, 2], the output should be solution(numbers) = [0, 1, 1, 1, 2].

Let's go through all the elements in this array:

The answer for the 0th element is min(numbers[0], numbers[1], number[2]) = min(0, 4, 3) = 0.
The answer for the 1st element is min(numbers[1], numbers[2], numbers[3]) = min(4, 3, 1) = 1.
The answer for the 2nd element is min(numbers[2], numbers[3], numbers[4]) = min(3, 1, 2) = 1.
The answer for the 3rd element is min(numbers[3], numbers[4]) = min(1, 2) = 1, as 5th element doesn't exist.
The answer for the 4th element is min(numbers[4]) = min(2) = 2, as 5th and 6th elements don't exist.
So the final answer is [0, 1, 1, 1, 2].

For numbers = [2], the output should be solution(numbers) = [2].

Both neighbors don't exist for the 0th element, so the only minimal value is min(numbers[0]) = 2.

Q2

Given an array of integers numbers, your task is to build a new array using the following algorithm: include numbers[i] in the new array if it is greater than both of its nearest left neighbors - i.e., numbers[i - 2] and numbers[i - 1] (if some of these neighbors don't exist, they are not taken into account for the comparison).

Example

For numbers = [2, 1, 3, 3], the output should be solution(numbers) = [2, 3].

Explanation:

numbers[0] = 2 doesn't have any left neighbors, so 2 is included in the resulting array;
numbers[1] = 1 is less than its only left neighbor numbers[0] = 2, so 1 is not included in the resulting array;
numbers[2] = 3 is greater than both of its nearest left neighbors numbers[0] = 2 and numbers[1] = 1, so 3 is included in the resulting array;
numbers[3] = 3 is equal to its nearest left neighbor numbers[2], so it is not added to the resulting array.
So the resulting array is [2, 3].

For numbers = [1, 2, 4], the output should be solution(numbers) = [1, 2, 4].

Explanation:
All elements satisfy the condition, so they are all included in the new array.
