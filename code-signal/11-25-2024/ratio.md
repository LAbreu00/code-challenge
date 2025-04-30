You are given two arrays of positive integers containing information about some items on the market - one with their prices, and the second with their ratings (from 1 to 5), where prices[i] corresponds to the price of the ith item, and ratings[i] corresponds to the rating of the ith item.

Find the item with the highest ratio of rating / price and return its index. If this ratio is equal across multiple items, return the item with the lowest index.

examples:
For prices = [7, 5, 2, 11] and ratings = [3, 4, 1, 3], the output should be solution(prices, ratings) = 1.

Explanation:
3 / 7 is approximately 0.43
4 / 5 is approximately 0.80
1 / 2 is approximately 0.50
3 / 11 is approximately 0.27

The highest ratio is 4 / 5 for the item at index 1. So the answer is 1.

For prices = [6, 5, 4, 3] and ratings = [4, 3, 1, 2], the output should be solution(prices, ratings) = 0.

Explanation:
4 / 6 is approximately 0.66
3 / 5 is approximately 0.60
1 / 4 is approximately 0.25
2 / 3 is approximately 0.66

There are two items with the highest ratio: 4 / 6 (at index 0), and 2 / 3 (at index 3). Since 0 < 3, the answer is 0.
