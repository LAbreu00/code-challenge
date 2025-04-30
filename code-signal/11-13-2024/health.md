Imagine you are developing a video game in which the player navigates through several levels of obstacles. In this game, the player is initially given a health value of initialHP, and their health value changes as they go through the levels. Specifically, the ith level changes the player's current health value curHP by deltas[i], making it equal to curHP + deltas[i]. However, note that the health value cannot be less than 0 or greater than 100. Whenever the current health value becomes less than zero, it immediately gets bumped to 0. Similarly, whenever the current health value becomes greater than 100, it immediately gets bumped to 100.

Your task is to return the player's final health value after they finish the game by going through all given levels.

EXAMPLE

For initialHP = 12 and deltas = [-4, -12, 6, 2], the output should be solution(initialHP, deltas) = 8.

Let's consider each level:

At the beginning, the current health is curHP = initialHP = 12.
After completing the 0th level, the current health value becomes curHP + deltas[0] = 12 + -4 = 8.
After completing the 1st level, the current health value becomes curHP + deltas[1] = 8 + -12 = -4, but since the health value cannot be less than 0, it gets bumped to 0.
After completing the 2nd level, the current health value becomes curHP + deltas[2] = 0 + 6 = 6.
After completing the 3rd level, the current health value becomes curHP + deltas[2] = 6 + 2 = 8, which is the final answer.
