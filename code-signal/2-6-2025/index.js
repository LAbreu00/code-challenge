const solution = (numbers, nRange) => {
  const newArr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > nRange[0] && numbers[i] < nRange[1]) {
      newArr.push(numbers[i]);
    }
  }

  return newArr.length === 0 ? 0 : Math.min(...newArr);
};
