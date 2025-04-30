const solution1 = (n) => {
  const nStr = n.toString();
  let sum = +nStr[0];

  for (let i = 1; i < nStr.length; i += 1) {
    i % 2 === 0 ? (sum += +nStr[i]) : (sum -= +nStr[i]);
  }
  return sum;
};

const solution2 = (a) => {
  output = [];

  for (let i = 0; i < a.length; i += 1) {
    if (i !== a.length - 1) {
      output.push(a[i][0] + a[i + 1][a[i + 1].length - 1]);
    } else {
      output.push(a[i][0] + a[0][a[0].length - 1]);
    }
  }
  return output;
};
