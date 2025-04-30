const solution1 = (numbers) => {
  let output = [];

  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i];
    let next = numbers[i + 1] !== undefined ? numbers[i + 1] : Infinity;
    let nextNext = numbers[i + 2] !== undefined ? numbers[i + 2] : Infinity;

    output.push(Math.min(curr, next, nextNext));
  }

  return output;
};

const solution2 = (numbers) => {
  let output = [numbers[0]];

  if (numbers.length >= 1) {
    if (numbers[1] > numbers[0]) output.push(numbers[1]);
  }

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 2] && numbers[i] > numbers[i - 1])
      output.push(numbers[i]);
  }

  return output;
};
