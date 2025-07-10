Imagine that you are standing at the starting point of a straight street and are trying to reach the end of the street. This street is represented by a number line starting at 0 and ending at finish (finish > 0). There are electric scooters scattered along the street to help you get to the end. Specifically, the scooters are represented by an array scooters, with scooters[i] representing the location of the ith scooter. Each scooter can travel up to 10 points along the number line before its battery is fully discharged and it cannot go further. For example, if a scooter is located at point 5, it can travel to points 5, 6, 7, ..., up to point 15 (inclusive), but it cannot get to point 16 or further.

To get to the end point of the street, you must use the following algorithm:

From the current position, travel to the nearest scooter to the right on foot. If there are no more scooters available, travel to the end point on foot.
Get on this scooter and use all of its battery/resources to travel as far as you can toward the end point.
If you still haven't reached the end point, repeat this process from step 1.
Given that you must use the algorithm described above to travel from starting point of the street 0 to the end point of the street finish, your task is to return the total distance that you will travel on scooters.

Example

For finish = 23 and scooters = [7, 4, 14], the output should be solution(finish, scooters) = 19.
Starting at 0, you find the nearest scooter at point scooters[1] = 4, and use all of its resources to get to point 14;
There is another scooter at 14 (scooters[2] = 14), which you use to get to the end point finish = 23.
Therefore, you traveled 10 points on scooter 1 and 9 points on scooter 2, which sums to 10 + 9 = 19 points in total.
For finish = 27 and scooters = [15, 7, 3, 10], the output should be solution(finish, scooters) = 20.
Starting at point 0, you find the nearest scooter at point scooters[2] = 3, and use all of its resources to get to point 13;
From point 13, the nearest scooter to the right is at point scooters[0] = 15, which you use to get to point 25.
There are no more scooters available to the right, so you travel to the end point on foot.
Therefore, you traveled 10 points on both scooters 1 and 2, which sums to 10 + 10 = 20 points in total.
For finish = 10 and scooters = [], the output should be solution(finish, scooters) = 0.
There are no scooters available along this street, so you must travel the whole route on foot.