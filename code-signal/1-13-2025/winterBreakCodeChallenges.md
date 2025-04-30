1. CheckStringAltering2:

Given a string of letters inputStr, return -1 if vowels and consonants in this string are forming an alternating pattern (e.g., ["vowel", "consonant", "vowel"]). Otherwise, return the index of the first character that breaks this pattern (assume 0-based indexing).

Note: In this task, vowels are defined as "a", "e", "i", "o", "u", or "y". All other letters are consonants.

Example:

For inputStr = "menu", the output should be solution(inputStr) = -1.
There are no adjacent vowels and consonants, so the answer is -1.

For inputStr = "euler", the output should be solution(inputStr) = 1.
The characters "e" and "u" are both vowels and are in adjacent positions, so "u" is the first character to break the alternating pattern, and the answer is its index of 1.

For inputStr = "pascal", the output should be solution(inputStr) = 3.
The characters s and c are both consonants and are in adjacent positions, so the answer is the index of character "c", which is 3.

2. AlmostSubstring:

You are given a text represented as a string t, and a string s of length 3. Your task is to count the number of indices i, such that titi+2ti+4 = s.

Example

For t = "azcabcab" and s = "acb", the output should be solution(t, s) = 2.

t0t2t4 = "acb" = s;
t1t3t5 = "zac" ≠ s;
t2t4t6 = "cba" ≠ s;
t3t5t7 = "acb" = s.
For t = "" and s = "xyz", the output should be solution(t, s) = 0.
