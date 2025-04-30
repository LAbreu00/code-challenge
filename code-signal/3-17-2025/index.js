const solution = (numbers, zerosToOne) => {
  let count = 0;
  let zeros = numbers.filter((num) => num === 0).length;
  let ones = numbers.filter((num) => num === 1).length;

  while (zeros >= zerosToOne || ones) {
    if (zeros >= zerosToOne) {
      zeros -= zerosToOne;
      ones += 1;
    } else if (ones) {
      ones -= 1;
      zeros += 1;
    }
    count++;
  }

  return count;
};
