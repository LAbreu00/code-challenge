Given a string message, your task is to shift each vowel to the position of the next vowel in the string. The last vowel should be shifted to the position of the first vowel of the string. See the examples for a detailed explanation.

Note: The list of vowels is: "a", "e", "i", "o", "u".

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(message.length2) will fit within the execution time limit.

Example

For message = "codesignal", the output should be solution(message) = "cadosegnil".

Explanation:

The given string "codesignal" contains the following vowels: message[1] = "o", message[3] = "e", message[5] = "i", message[8] = "a".
message[1] = "o" is moved to the position of the next vowel - message[3].
message[3] = "e" is moved to the position of the next vowel - message[5];
message[5] = "i" is moved to the position of the next vowel - message[8];
message[8] = "a" is the last vowel, so it is moved to the position of the first vowel in the string - message[1];
Finally, the resulting string becomes "cadosegnil".
For message = "plain text", the output should be solution(message) = "plean tixt".

For message = "some message with punctuation marks, e.g. commas, dots, etc.", the output should be solution(message) = "semo messega weth pinctuutain morks, a.g. cemmos, dats, otc.".
