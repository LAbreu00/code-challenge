Debugging code is a well-known feature of IDEs. When debugging, it is possible to set breakpoints at specific lines of code to let the debugger intercept code execution when it reaches this line.

You are given length, which represents the last line number of some code snippet that you are debugging, and a list of unique integers breakpoints representing the line numbers that are set as breakpoints for the debugger. It is guaranteed that all breakpoints are on unique lines and 1 ≤ breakpoints[i] ≤ length.

You are also given a list of actions that the user made. Your task is to determine which line the debugger will end on after processing all of the user's actions. Initially, the debugger starts on line 1.

The list of possible user actions:

"next" - jump to the next line
"continue" - jump forward to the first breakpoint after the current line, or jump to the last line of the code if there are no more breakpoints.
Example

For length = 55, breakpoints = [2, 5, 21, 44], and actions = ["next", "next", "continue", "next", "next"], the output should be solution(length, breakpoints, actions) = 7.

The first two "next" actions will move the debugger to line 3.
The "continue" action moves the debugger to the next breakpoint, which is located on line 5.
The final two "next" actions move the debugger to line 7 which is the answer.
For length = 10, breakpoints = [4, 10], and actions = ["continue", "continue", "next", "next", "next"], the output should be solution(length, breakpoints, actions) = 10.

The first "continue" action moves the debugger to the breakpoint on line 4.
Then, the second "continue" action moves the debugger to the next breakpoint on line 10.
The last three "next" actions do not move the debugger, because it is already on the last line of the code. Thus, the final output is 10.
For length = 10, breakpoints = [4, 8], and actions = ["next", "next", "next", "continue", "continue", "continue"], the output should be solution(length, breakpoints, actions) = 10.

The first three "next" actions move the debugger to line 4.
Then, the first "continue" action moves the debugger to the next breakpoint on line 8.
Then, the second "continue" action moves the debugger to the last line 10, as there are no more breakpoints after line 8.
Finally, the last "continue" action does not affect the debugger position as it's already on the final line, so the final answer is 10.
