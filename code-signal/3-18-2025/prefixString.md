70:54:54
For a given string src and an array of strings strings, the string src is said to be a prefix-string of strings if it is a concatenation of several consecutive elements from the beginning of the strings array. More formally, src is a prefix-string of strings if there exists some index i ≥ 0, such that src = strings[0] + strings[1] + ... + strings[i].

For example, consider an array strings = ["one", "two", "three"].

src = "one" is a prefix-string of the strings array, as strings[0] = src = "one",
src = "onetwo" is a prefix-string of the strings array, as strings[0] + strings[1] = src = "onetwo",
src = "onetw" is not a prefix-string of the strings array,
src = "onethree" is not a prefix-string of the strings array.
Task: Given two arrays of strings strings and sources, for each element in sources, find out whether it is a prefix-string of strings. As a result, return an array of length sources.length, where the ith element is true if sources[i] is a prefix-string of strings, and false otherwise.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(strings.length2 × sources.length) will fit within the execution time limit.

Example

For strings = ["one", "two", "three"] and sources = ["onetwo", "random", "one", "twoone", "twothree"], the output should be
solution(strings, sources) = [true, false, true, false, false].

sources[0] = "onetwo" is a prefix-string, as strings[0] + strings[1] = sources[0] = "onetwo", so true is appended to the result.
sources[1] = "random" is not a prefix-string, so false is appended to the result.
sources[2] = "one" is a prefix-string, as strings[0] = sources[2] = "one", so true is appended to the result.
sources[3] = "twoone" is not a prefix-string. It may be obtained by evaluating strings[1] + strings[0], but it is not a consecutive concatenation. Sofalse is appended to the result.
sources[4] = "twothree" is not a prefix-string. It may be obtained by evaluating strings[1] + strings[2], but it is not a concatenation of the first elements of the strings array, as it doesn't start with strings[0]. Sofalse is appended to the result.
Thus, the resulting array is [true, false, true, false, false].
