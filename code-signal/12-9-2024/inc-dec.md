Given an array of non-negative integers numbers, your task is to check whether the elements on even positions are monotonic (either in a strictly increasing or strictly decreasing order). Return "increasing" if the numbers are increasing, "decreasing" if the numbers are decreasing, or "none" if the numbers are not monotonic.

Example

For numbers = [12, 65, 15, 72, 19, 72], the output should be solution(numbers) = "increasing".

Explanation:
Elements on even positions are numbers[0], numbers[2], and numbers[4], i.e., 12, 15, and 19. Since 12 < 15 < 19, the answer is "increasing".

For numbers = [12, 1, 54, 5, 19, 14], the output should be solution(numbers) = "none".

Explanation:
Elements on even positions are numbers[0], numbers[2] and numbers[4], i.e., 12, 54, and 19. Since the numbers are not monotonic, the answer is "none".

For numbers = [666, 17, 66, 5, 6, 23], the output should be solution(numbers) = "decreasing".
