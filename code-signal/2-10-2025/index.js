const solution1 = (n, k) => {
  const nStr = n.toString();
  const subs = new Set();

  for (let i = 0; i < nStr.length; i += 1) {
    let sub = nStr.substring(i, i + k);
    sub.length === k ? subs.add(+sub) : 0;
  }

  let count = 0;
  for (const num of subs) {
    n % num === 0 ? (count += 1) : 0;
  }

  return count;
};
//carmen solution
const solution2 = (n, k) => {
  const nStr = n.toString();
  const subs = new Set();

  for (let i = 0; i <= nStr.length - k; i += 1) {
    let sub = nStr.substring(i, i + k);

    n % Number(subs) === 0 ? subs.add(+sub) : 0;
  }

  return subs.size;
};
