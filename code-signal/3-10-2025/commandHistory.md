In Unix, there are two common ways to execute a command:

Entering its name, e.g. "cp" or "ls";
Entering "!<index>". This notation is used to repeat the indexth (1-based) command since the start of the session. For example, suppose that the user has entered the following commands:
ls
cp
mv
mv
mv
!1
!3
!6
"!1" would trigger the execution of "ls", "!3" would repeat "mv", and "!6" would execute "!1" which in turn would trigger the execution of "ls".

You are given a sequence of commands commands that the user has entered in the terminal since the start of the session. Each command can be one of the following: "cp", "ls", "mv" or "!<index>". Calculate the number of times each of "cp", "ls" and "mv" commands was executed and return an array of three integers in the following form: [# of times for "cp", # of times for "ls", # of times for "mv"].

Example

For commands = ["ls", "cp", "mv", "mv", "mv", "!1", "!3", "!6"], the output should be solution(commands) = [1, 3, 4].

First, "ls" was executed once;
Then "cp" was executed once;
After that, "mv" was executed three times;
Then "!1" was executed, triggering the execution of commands[0] = "ls";
Then "!3" was executed, triggering commands[2] = "mv";
Finally, "!6" was executed, triggering commands[5] = "!1", which in turn triggered commands[0] = "ls".
In total, "cp" was executed once, "ls" was executed three times, and "mv" was executed four times, so the final answer is [1, 3, 4].

For commands = ["ls", "cp", "mv", "!3", "mv", "!1", "!6"] the output should be solution(commands) = [1, 3, 3].

First, each one of the three commands was executed once;
Then "!3" was executed, triggering commands[2] = "mv";
After that, "mv" was executed one more time;
Then "!1" was executed, triggering commands[0] = "ls";
Finally "!6" was executed, triggering commands[5] = "!1", which in turn triggered commands[0] = "ls".
In total, "cp" was executed once, "ls" was executed three times, and "mv" was executed three times, so the final answer is [1, 3, 3].
