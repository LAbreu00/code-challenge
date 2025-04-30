You are given two integers, n and k. Consider the string representation of n, and find the number of distinct substrings of length k, such that n is divisible by the number formed by that substring. In other words, how many different numbers formed by k consecutive digits of n are factors of n?

Note: The k-digit substrings may have leading zeros.

Example

For n = 120 and k = 2, the output should be solution(n, k) = 2.

The divisor substrings are 12 and 20 (120 is divisible by both of these).

For n = 555 and k = 1, the output should be solution(n, k) = 1.

All the substrings of length 1 are equal to 5 which is a divisor of 555. The answer is not 3 since we're only counting distinct numbers.

For n = 5341 and k = 2, the output should be solution(n, k) = 0.

5341 is not divisible by 53, 34 nor 41, so the answer is 0.
