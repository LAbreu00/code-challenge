Imagine that you are monitoring changes to user ratings for an online platform. Each user on this platform has an overall rating (an integer between 1 and 2500) and a corresponding level. Rating levels are based the following rules:

rating < 1000 = "beginner";
1000 ≤ rating < 1500 = "intermediate";
1500 ≤ rating < 2000 = "advanced";
2000 ≤ rating = "pro".

You are given an initial rating value and an array of integers changes representing changes to the rating. Your task is to calculate the final rating and return the level corresponding to that rating.

It is guaranteed that changes to the rating value will never result in it becoming less than 1 or greater than 2500.
