const solution = (digits) => {
  let i = digits.length - 1;

  while (digits[i] === 9) {
    digits[i] = 0;
    i -= 1;
  }

  i < 0 && digits[i + 1] === 0 ? digits.unshift(1) : (digits[i] += 1);
  return digits;
};
