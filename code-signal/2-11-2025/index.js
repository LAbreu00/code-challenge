const solution = (numbers, pattern) => {
  let output = 0;

  for (let i = 1; i <= numbers.length - pattern.length; i += 1) {
    let check = 0;
    for (let j = 0; j < pattern.length; j += 1) {
      if (pattern[j] === 1) {
        numbers[i + j] > numbers[i + j - 1] ? check++ : 0;
      } else if (pattern[j] === 0) {
        numbers[i + j] === numbers[i + j - 1] ? check++ : 0;
      } else if (pattern[j] === -1) {
        numbers[i + j] < numbers[i + j - 1] ? check++ : 0;
      }

      check === pattern.length ? output++ : 0;
    }
  }

  return output;
};
