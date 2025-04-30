/*
PEDAC
P:
input: array of integers
output: sting
*/
const solution = (numbers) => {
  const sumEven = numbers
    .filter((num, index) => index % 2 === 0)
    .reduce((first, num) => first + num, 0);

  const sumOdd = numbers
    .filter((num, index) => index % 2 !== 0)
    .reduce((first, num) => first + num, 0);

  // let evenSum = 0
  // let oddSum = 0

  // for (let i = 0; i < numbers.length; i += 1) {
  //     if(i % 2 === 0) {
  //         evenSum += numbers[i]
  //     } else {
  //         oddSum += numbers[i]
  //     }
  // }

  // numbers.forEach((num, i) => {
  //     if(i % 2 === 0) {
  //         evenSum += numbers[i]
  //     } else {
  //         oddSum += numbers[i]
  //     }
  // })

  if (sumEven === sumOdd) {
    return "equal";
  } else if (sumEven > sumOdd) {
    return "even";
  } else {
    return "odd";
  }
};
