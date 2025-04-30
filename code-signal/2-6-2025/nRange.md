You are given an array of positive integers numbers. You're also given an array nRange containing exactly two integers and representing a range, where nRange[0] <= nRange[1].

Your task is to find the lowest number in numbers that lies within the given nRange, exclusive of the endpoints. In other words, number x lies in range (l, r) if and only if l < x < r. If numbers doesn't contain any number that lies within nRange, return 0.

Example

For numbers = [11, 4, 23, 9, 10] and nRange = [5, 12], the output should be solution(numbers, nRange) = 9.

Explanation:
numbers[3] = 9 and numbers[4] = 10 are the only two numbers in the range of (5, 12). Since 9 < 10, the answer is 9.

For numbers = [1, 3, 2] and nRange = [1, 1], the output should be solution(numbers, nRange) = 0.

Explanation:
There are no numbers within the (exclusive) range of (1, 1), so the answer is 0.

For numbers = [7, 23, 3, 1, 3, 5, 2] and nRange = [2, 7], the output should be solution(numbers, nRange) = 3.

Explanation:
numbers[2] = 3, numbers[4] = 3, and numbers[5] = 5 are the only numbers within the range of (2, 7). The lowest of these numbers is 3, which is the answer.
