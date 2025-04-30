You are given two arrays arr1 and arr2 of the same length n. Let's consider all cyclic shifts of arr1 below:

[arr1[0], arr1[1], arr1[2], ..., arr1[n - 1]]
[arr1[1], arr1[2], arr1[3], ..., arr1[n - 1], arr1[0]]
[arr1[2], arr1[3], arr1[4], ..., arr1[n - 1], arr1[0], arr1[1]]
...
[arr1[n - 1], arr1[0], arr1[1], ..., arr1[n - 2]]

Your task is the following: for each cyclic shift of arr1, calculate the sum of absolute differences with arr2. If the cyclic shift of arr1 is a new array arrShifted, the sum equals to

|arrShifted[0] - arr2[0]| + |arrShifted[1] - arr2[1]| + ... + |arrShifted[n - 1] - arr2[n - 1]|
Among all sums, return the lowest one as the result.

Example

For arr1 = [1, 4, 2, 11] and arr2 = [10, 1, 8, 4], the output should be solution(arr1, arr2) = 7.

Explanation:
Let's consider all possible cyclic shifts of arr1:

The first shift is [1, 4, 2, 11], and the sum of absolute differences with arr2 = [10, 1, 8, 4] equals to |1 - 10| + |4 - 1| + |2 - 8| + |11 - 4| = 9 + 3 + 6 + 7 = 25.
The second shift is [4, 2, 11, 1], and the sum of absolute differences with arr2 = [10, 1, 8, 4] equals to |4 - 10| + |2 - 1| + |11 - 8| + |1 - 4| = 6 + 1 + 3 + 3 = 13.
The third shift is [2, 11, 1, 4], and the sum of absolute differences with arr2 = [10, 1, 8, 4] equals to |2 - 10| + |11 - 1| + |1 - 8| + |4 - 4| = 8 + 10 + 7 + 0 = 25.
The fourth shift is [11, 1, 4, 2], and the sum of absolute differences with arr2 = [10, 1, 8, 4] equals to |11 - 10| + |1 - 1| + |4 - 8| + |2 - 4| = 1 + 0 + 4 + 2 = 7.
The lowest sum among all of the above is 7, which is the answer.
