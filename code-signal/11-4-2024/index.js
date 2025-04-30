/*
PEDAC
P:
input = number
output = number (diffrence between individual odd and even numbers) 
E:
n = 425
output = (4 + 2) - 5 = 1
D:
integer to string to array to integer
A:
-sum up all even numbers
-sum up all odd numbers
-return even - odd
*/
//C:
const solution = (n) => {
  const numArr = Array.from(String(n), Number);
  //Ex: 4567 => [4, 5, 6, 7]

  const sumEven = numArr
    .filter((num) => num % 2 === 0)
    .reduce((first, num) => first + num, 0);
  //Ex: [4, 5, 6, 7] => [4, 6] => 10

  const sumOdd = numArr
    .filter((num) => num % 2 !== 0)
    .reduce((first, num) => first + num, 0);
  //Ex: [4, 5, 6, 7] => [5, 7] => 12

  return sumEven - sumOdd;
  //Ex: 10 - 12 => -2
};
