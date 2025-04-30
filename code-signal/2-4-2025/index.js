const solution = (numbers) => {
  const arr = [];
  let i = 0;

  while (arr.length < numbers.length) {
    arr.push(numbers[i]);
    arr.push(numbers[numbers.length - 1 - i]);

    i += 1;
  }

  if (numbers.length % 2 !== 0) {
    arr.pop();
  }
  return arr;
};
