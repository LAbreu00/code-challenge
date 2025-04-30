const solution = (arr1, arr2) => {
  const sumArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < arr1.length; j += 1) {
      sum += Math.abs(arr1[j] - arr2[j]);
    }
    sumArr.push(sum);

    arr1.push(arr1.shift());
  }
  return Math.min(...sumArr);
};
